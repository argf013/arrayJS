const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const { exec } = require('child_process');

const app = express();
const PORT = process.env.PORT || 3000;
const DISCORD_WEBHOOK_URL = '';

// Middleware untuk mengparse payload JSON
app.use(bodyParser.json());

app.get('/hello', (req, res) => {
    res.send('Hello, world!');
});

// Fungsi untuk mengirim log ke Discord
const sendLogToDiscord = async (message) => {
    try {
        const response = await axios.post(DISCORD_WEBHOOK_URL, {
            content: message,
        }, {
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.status !== 204) {
            console.error('Failed to send log to Discord:', response.statusText);
        }
    } catch (error) {
        console.error('Error sending log to Discord:', error);
    }
};

// Endpoint untuk menerima webhook dari GitHub
app.post('/github-webhook', async (req, res) => {
    const payload = req.body;

    if (payload && payload.ref && payload.commits) {
        console.log('Received a push event on ref:', payload.ref);
        console.log('Commits:');
        let message = `Received a push event on ref: ${payload.ref}\nCommits:`;
        payload.commits.forEach(commit => {
            const commitMessage = `- ${commit.message} by ${commit.author.name}`;
            console.log(commitMessage);
            message += `\n${commitMessage}`;
        });

        await sendLogToDiscord(message);
      
        exec('bash ./deploy.sh', (error, stdout, stderr) => {
            if (error) {
                console.error('Error executing deploy.sh:', error);
                sendLogToDiscord(`Error executing deploy.sh: ${error}`);
                return;
            }
            console.log('Deploy.sh executed successfully');
            sendLogToDiscord('Deploy.sh executed successfully');
        });
    } else {
        console.log('Received an unknown event');
        await sendLogToDiscord('Received an unknown event');
    }

    res.status(200).send('Webhook received successfully');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
