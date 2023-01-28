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
// React

class Lyrics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lyrics: ""
    };
  }

  componentDidMount() {
    getLyrics(options).then((lyrics) => {
      this.setState({ lyrics });
    });
  }

  render() {
    return (
      <div>
        <div id="lyrics" dangerouslySetInnerHTML={{ __html: this.state.lyrics }} />
      </div>
    );
  }
}
