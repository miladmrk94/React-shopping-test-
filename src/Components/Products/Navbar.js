import React from "react";
import styles from "./Navbar.module.css";
const Navbar = (props) => {
  return (
    <header className={styles.navbar}>
      <h4>MRK SHOPPING</h4>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li className={styles.card}>Card:{props.count}</li>
      </ul>
    </header>
  );
};

export default Navbar;
