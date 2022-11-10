import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const onClickPlus = () => {
    setCount((prev) => prev + 1);
  };
  const onClickMinus = () => {
    setCount((prev) => prev - 1);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onClickMinus}>-1</button>
      <button onClick={onClickPlus}>+1</button>
    </div>
  );
};

export default Counter;
