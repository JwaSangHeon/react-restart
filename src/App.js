import React from "react";
import Hello from "./components/Hello";
import Wrapper from "./components/Wrapper";
import Counter from "./components/Counter";
import InputSample from "./components/InputSample";
import UserList from "./components/UserList";

function App() {
  const name = "SH";
  const color = "skyblue";
  return (
    <Wrapper>
      {/* <Hello name={name} color={color} isStar />
      <Counter />
      <InputSample /> */}
      <UserList />
    </Wrapper>
  );
}

export default App;
