import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "PLUS":
      return state + 1;
    case "MINUS":
      return state - 1;
    default:
      return state;
  }
};

const Counter = () => {
  const [count, dispatch] = useReducer(reducer, 0);
  const onClickPlus = () => {
    dispatch({ type: "PLUS" });
  };
  const onClickMinus = () => {
    dispatch({ type: "MINUS" });
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
