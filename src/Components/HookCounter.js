import React from "react";

class HookCounter extends React.Component {
  state = { number: 0 };

  addCount = () => {
    this.setState((item) => {
      return {
        number: this.state.number + 1,
      };
    });
  };

  minesCount = () => {
    this.setState((item) => {
      return {
        number: this.state.number - 1,
      };
    });
  };

  render() {
    return (
      <div>
        <hr />
        <h3>COUNTER</h3>
        <h2>Number: {this.state.number}</h2>
        <button onClick={this.addCount}> + </button>
        <button onClick={this.minesCount}> - </button>
      </div>
    );
  }
}

export default HookCounter;

// import React, { Component } from "react";

// class HookCounter extends Component {
//   state = { count: 0 };

//   addCount = () => {
//     this.setState((item) => {
//       return {
//         count: item.count + 1,
//       };
//     });
//   };

//   render() {
//     return (
//       <div>
//         <h3>COUNTER</h3>
//         <h4>Number = {this.state.count}</h4>
//         <button onClick={this.addCount}>+</button>
//         {/* <button onClick={minusCount}>-</button> */}
//       </div>
//     );
//   }
// }

// export default HookCounter;
