import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/Products/Navbar";
import ProductList from "./Components/Products/ProductList";
const App = () => {
  const [products, setProducts] = useState({
    list: [
      { title: "Book 1", price: "230$", id: "100", quantity: 1 },
      { title: "Book 2", price: "301$", id: "101", quantity: 1 },
      { title: "Book 3", price: "364$", id: "102", quantity: 1 },
      { title: "Book 4", price: "452$", id: "103", quantity: 1 },
    ],
  });

  const inputHandler = (e, id) => {
    console.log(e.target.value + id);
    const findTitle = products.list.find((item) => {
      return item.id === id;
    });
    findTitle.title = e.target.value;
    console.log(findTitle);

    setProducts({ ...products, findTitle });
  };
  const addProductHandler = (id) => {
    const findQuantity = products.list.find((item) => {
      return item.id === id;
    });
    findQuantity.quantity++;
    setProducts({ ...products, findQuantity });
  };
  const minusProductHandler = (id) => {
    const findQuantity = products.list.find((item) => {
      return item.id === id;
    });

    if (findQuantity.quantity > 1) {
      findQuantity.quantity--;
      setProducts({ ...products, findQuantity });
    } else {
      const filterProducts = products.list.filter((item) => {
        return item.id !== id;
      });
      console.log(filterProducts);
      setProducts({ list: filterProducts });
    }
  };

  const productsDeleteHandler = (id) => {
    const filterProducts = products.list.filter((item) => {
      return item.id !== id;
    });
    console.log(filterProducts);
    setProducts({ list: filterProducts });
  };

  return (
    <div className="container">
      <Navbar count={products.list.length} />
      <ProductList
        FinalProducts={products.list}
        key={products.list.id}
        title={products.list.title}
        price={products.list.price}
        quantity={products.list.quantity}
        inputHandler={inputHandler}
        addProductHandler={addProductHandler}
        minusProductHandler={minusProductHandler}
        productsDeleteHandler={productsDeleteHandler}
      />
    </div>
  );
};

export default App;

// // ******** Counters - ShowName and .... *********
// import React, { Component } from "react";
// import "./App.css";
// import ProductList from "./Components/Products/ProductList";

// import Counters from "./Components/Counters";
// import FindBtn from "./Components/FindBtn";
// import RandomCount from "./Components/RandomCount";
// import ShowEmail from "./Components/ShowEmail";
// import ShowUsers from "./Components/ShowUsers";

// const App = () => {
//   const phoneNumber = () => {
//     console.log("09358550075");
//   };

//   return (
//     <div className="container">
//       <h1>Hello React!</h1>
//       <ShowEmail
//         Email="milad.rastgoou@gmail.com"
//         ShowPhoneNumber={phoneNumber}
//       />
//       <Counters />
//       <ShowUsers />
//       <RandomCount />
//       <hr />
//       <FindBtn />
//     </div>
//   );
// };
// export default App;
