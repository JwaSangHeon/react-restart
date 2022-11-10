import React from "react";
import Hello from "./components/Hello";
import Wrapper from "./components/Wrapper";
import Counter from "./components/Counter";

function App() {
  const name = "SH";
  const color = "skyblue";
  return (
    <Wrapper>
      <Hello name={name} color={color} isStar />
      <Counter />
    </Wrapper>
  );
}

export default App;
