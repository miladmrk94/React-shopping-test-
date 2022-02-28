import React from "react";
import Styles from "./Counters.module.css";

class Counters extends React.Component {
  state = { count: 0 };

  plusCountHandler = () => {
    this.setState((item) => {
      console.log(item);
      return { count: item.count + 1 };
    });
  };

  restCountHandler = () => {
    this.setState((item) => {
      return { count: 0 };
    });
  };
  render() {
    return (
      <div className={Styles.container}>
        <h2>Counters</h2>
        <button
          className={Styles.container__btn}
          onClick={this.plusCountHandler}
        >
          Count:{this.state.count}
        </button>
        <button
          className={Styles.container__btn}
          onClick={this.restCountHandler}
        >
          RESET
        </button>
      </div>
    );
  }
}

export default Counters;
