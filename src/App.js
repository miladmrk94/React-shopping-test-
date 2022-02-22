import Product from "./Components/Products/Products";
import React, { useState } from "react";
import HookCounter from "./Components/HookCounter";
import HookObject from "./Components/HookObject";
import HookArray from "./Components/HookArray";

// class App extends React.Component {
//   state = {
//     product: [
//       { title: "book 1", price: "200$" },
//       { title: "book 2", price: "400$" },
//       { title: "book 3", price: "125$" },
//     ],
//   };

//   clickHandler = () => {
//     console.log("click shood");
//     this.setState({
//       product: [
//         { title: "book 1", price: "555$" },
//         { title: "book 2", price: "555$" },
//         { title: "book 3", price: "555$" },
//       ],
//     });
//   };
//   render() {
//     return (
//       <div>
//         <h3> MILADY </h3>

//         {this.state.product.map((item) => {
//           return <Product name={item.title} price={item.price} />;
//         })}
//         <p>code 0001</p>
//         <button onClick={this.clickHandler}>Change Price</button>
//       </div>
//     );
//   }
// }

const App = () => {
  // const [products, setProducts] = useState([
  //   { title: "book 1", price: "200$" },
  //   { title: "book 2", price: "400$" },
  //   { title: "book 3", price: "125$" },
  // ]);

  // const clickHandler = () => {
  //   setProducts([
  //     { title: "book 5", price: "260$" },
  //     { title: "book 6", price: "460$" },
  //     { title: "book 7", price: "165$" },
  //   ]);
  // };
  return (
    <div>
      <h3> MILADY </h3>
      <HookCounter />
      <br />
      <hr />
      <HookObject />
      <hr />
      <Product Email="Milad.rastgoou@gmail.com" />
      <HookArray />
      {/* 
      {products.map((item) => {
        return <Product name={item.title} price={item.price} />;
      })}
      <p>code 0001</p>
      <button onClick={clickHandler}>Change Price</button> */}
    </div>
  );
};

export default App;
