// Initialize Firebase
var firebaseConfig = {
    apiKey: "your_api_key",
    authDomain: "your_auth_domain",
    databaseURL: "your_database_url",
    projectId: "your_project_id",
    storageBucket: "your_storage_bucket",
    messagingSenderId: "your_messaging_sender_id",
    appId: "your_app_id"
};
firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
var database = firebase.database();

// Get the message input element
var messageInput = document.getElementById("message-input");

// Get the send button
var sendButton = document.getElementById("send-button");

// Add a click event listener to the send button
sendButton.addEventListener("click", function () {
    // Get the message text
    var messageText = messageInput.value;

    // Clear the message input
    messageInput.value = "";

    // Push the message to the database
    database.ref("messages").push({
        message: messageText,
        timestamp: firebase.database.ServerValue.TIMESTAMP
    });
});

// Listen for new messages
database.ref("messages").on("child_added", function (snapshot) {
    // Get the message data
    var messageData = snapshot.val();

    // Create a new list item for the message
    var messageItem = document.createElement("li");

    // Set the message text
    messageItem.innerText = messageData.message;

    // Add the message to the message list
    document.getElementById("message-list").appendChild(messageItem);
});
