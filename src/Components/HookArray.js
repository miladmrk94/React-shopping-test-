import React from "react";

class HookArray extends React.Component {
  state = {};

  numberHander = () => {
    this.setState({ ...this.state, num: Math.floor(Math.random() * 10) });
  };
  render() {
    return (
      <div>
        <h3>RANDOM NUMBERS</h3>
        <button onClick={this.numberHander}>Enter</button>
        <h3>{this.state.num}</h3>
      </div>
    );
  }
}

export default HookArray;
