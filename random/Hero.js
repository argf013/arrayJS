import React, { Component } from 'react';

class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heroName: props.name,
      heroPower: props.power,
      showPower: false
    };
  }

  togglePower = () => {
    this.setState({ showPower: !this.state.showPower });
  };

  render() {
    return (
      <div className="hero">
        <h1>I am {this.state.heroName}</h1>
        <button onClick={this.togglePower}>
          {this.state.showPower ? 'Hide' : 'Show'} Power
        </button>
        {this.state.showPower && (
          <p>My power is {this.state.heroPower}</p>
        )}
      </div>
    );
  }
}

export default Hero;
