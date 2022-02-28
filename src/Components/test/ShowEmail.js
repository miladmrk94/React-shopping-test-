import React from "react";
import styles from "./ShowEmail.module.css";
const ShowEmail = (props) => {
  return (
    <div className={styles.container}>
      <h4 onClick={props.ShowPhoneNumber}>{props.Email}</h4>
    </div>
  );
};

export default ShowEmail;
