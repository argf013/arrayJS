import { getLyrics } from 'genius-lyrics-api';

const options = {
	apiKey: 'auoKjcJUU6qka7qwnUusPMrtqOD7VeXWblbaFRdeXkmwAIo5acsmT7Yy4tkGA38j',
	title: 'Can I Still Get into the Fluffy Little Space in Your Heart?',
	artist: 'Tigarist',
	optimizeQuery: true
};
getLyrics(options).then((lyrics) => console.log(lyrics));

const options1 = {
	apiKey: 'auoKjcJUU6qka7qwnUusPMrtqOD7VeXWblbaFRdeXkmwAIo5acsmT7Yy4tkGA38j',
	title: 'Honesty & Falsity',
	artist: 'Tigarist',
	optimizeQuery: true
};
getLyrics(options1).then((lyrics) => console.log(lyrics));
