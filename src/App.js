import React from "react";
import Hello from "./components/Hello";
import Wrapper from "./components/Wrapper";

function App() {
  const name = "SH";
  const color = "skyblue";
  return (
    <Wrapper>
      <Hello name={name} color={color} isStar />
      <Hello color={color} />
    </Wrapper>
  );
}

export default App;
