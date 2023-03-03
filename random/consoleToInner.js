class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  componentDidMount() {
    this.setState({ value: "Hello World!" });
    console.log(this.state.value);
  }

  render() {
    return (
      <div>
        <div id="output" dangerouslySetInnerHTML={{ __html: this.state.value }} />
      </div>
    );
  }
}
