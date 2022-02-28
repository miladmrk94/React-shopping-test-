import React from "react";
import styles from "./Products.module.css";
import { BiPlus, BiMinus, BiTrash } from "react-icons/bi";
const Products = ({
  title,
  price,
  textInput,
  onClickPlus,
  onClickMinus,
  onClickDelete,
  quantity,
}) => {
  return (
    <section className={styles.container}>
      <p>{title}</p>
      <p>{price}</p>
      <input placeholder="change Name" onChange={textInput} />
      <div className={styles.box}>
        <button
          onClick={onClickPlus}
          className={`${styles.btn} ${styles.btnPuls}`}
        >
          <BiPlus />
        </button>
        <p>{quantity}</p>
        <button
          onClick={onClickMinus}
          className={`${styles.btn} ${styles.btnMinus}`}
        >
          {quantity <= 1 ? <BiTrash /> : <BiMinus />}
        </button>
      </div>
      <button onClick={onClickDelete}>Delete</button>
    </section>
  );
};

export default Products;
