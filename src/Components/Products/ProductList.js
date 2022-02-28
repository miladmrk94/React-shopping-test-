import React, { useState } from "react";
import Products from "./Products";
const ProductList = ({
  FinalProducts,
  quantity,
  inputHandler,
  addProductHandler,
  minusProductHandler,
  productsDeleteHandler,
}) => {
  if (FinalProducts.length === 0) {
    return <h3>Card Empty</h3>;
  } else {
    return (
      <section>
        {FinalProducts.map((item) => {
          return (
            <Products
              key={item.id}
              title={item.title}
              price={item.price}
              quantity={item.quantity}
              textInput={(e) => inputHandler(e, item.id)}
              onClickPlus={() => addProductHandler(item.id)}
              onClickMinus={() => minusProductHandler(item.id)}
              onClickDelete={() => productsDeleteHandler(item.id)}
            />
          );
        })}
      </section>
    );
  }
};

export default ProductList;
