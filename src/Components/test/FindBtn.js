import React, { useState } from "react";

const FindBtn = () => {
  const [btn, setBtn] = useState();

  const oneBtnHandler = (btn) => {
    setBtn(btn);
  };
  const twoBtnHandler = (btn) => {
    setBtn(btn);
  };
  const threeBtnHandler = (btn) => {
    setBtn(btn);
  };
  return (
    <div>
      <h5>Which button was clicked?</h5>
      <button onClick={() => oneBtnHandler("1")}>ONE</button>
      <button onClick={() => twoBtnHandler("2")}>TWO</button>
      <button onClick={() => threeBtnHandler("3")}>THREE</button>
      <h1>{btn}</h1>
    </div>
  );
};

export default FindBtn;
