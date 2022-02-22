import React, { useState, Component } from "react";

class HookObject extends Component {
  state = { name: "", lastName: "", age: "" };

  nameHandler = (e) => {
    this.setState({ ...this.state, name: e.target.value });
  };

  lastNameHandler = (e) => {
    this.setState({ ...this.state, lastName: e.target.value });
  };
  ageHandler = (e) => {
    this.setState({ ...this.state, age: e.target.value });
  };
  render() {
    return (
      <div>
        <h5>print name & last name</h5>
        <form>
          <label>name:</label>
          <input type="text" onChange={this.nameHandler} />
          <br />
          <label>lastName:</label>
          <input type="text" onChange={this.lastNameHandler} />
          <br />

          <label>age:</label>
          <input type="number" onChange={this.ageHandler} />
        </form>
        <br />

        <p>
          Name:{this.state.name} --- LastName:{this.state.lastName} --- Age:
          {this.state.age}
        </p>
      </div>
    );
  }
}

export default HookObject;

// const HookObject = () => {
//   const [username, setUsername] = useState({ name: "", lastName: "" });

//   const nameHandler = (e) => {
//     console.log(e.target.value);
//     setUsername({ ...username, name: e.target.value });
//   };
//   const lastNameHandler = (e) => {
//     setUsername({ ...username, lastName: e.target.value });
//   };
//   return (
//     <div>
//       <form>
//         <label>name:</label>
//         <input type="text" onChange={nameHandler} />
//         <br />
//         <label>last name:</label>
//         <input type="text" onChange={lastNameHandler} />
//       </form>
//       <h3>{username.name}</h3>
//       <h3>{username.lastName}</h3>
//       <hr />
//       <div>{JSON.stringify(username)}</div>
//     </div>
//   );
// };

// export default HookObject;
