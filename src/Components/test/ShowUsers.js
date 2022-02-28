import React, { Component } from "react";
import styles from "./ShowUsers.module.css";
class ShowUser extends Component {
  state = { name: "", lastName: "" };

  showName = (e) => {
    this.setState({ ...this.state, name: e.target.value });
  };

  showLastName = (e) => {
    this.setState({ ...this.state, lastName: e.target.value });
  };
  render() {
    return (
      <div className={styles.container}>
        <h3>USERNAME</h3>
        <form>
          <input onChange={this.showName} />
          <input onChange={this.showLastName} />
        </form>
        <h1>
          USER : {this.state.name} {this.state.lastName}
        </h1>
      </div>
    );
  }
}

export default ShowUser;
