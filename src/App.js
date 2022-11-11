import React, { useRef, useState } from "react";
import Wrapper from "./components/Wrapper";
import UserList from "./components/UserList";
import CreateUser from "./components/CreateUser";

function App() {
  const [users, setUsers] = useState([
    { id: 1, username: "SH", email: "SH@example.com", active: true },
    { id: 2, username: "JH", email: "HH@example.com", active: false },
    { id: 3, username: "SY", email: "SY@example.com", active: false },
  ]);

  const nextId = useRef(4);

  const [user, setUser] = useState({
    username: "",
    email: "",
  });
  const { username, email } = user;

  const onChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email,
    };
    setUsers([...users, user]);
    setUser({
      username: "",
      email: "",
    });
    nextId.current += 1;
  };

  const onRemove = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const onLive = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  };
  return (
    <Wrapper>
      <CreateUser
        onChange={onChange}
        username={username}
        email={email}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onLive={onLive} />
    </Wrapper>
  );
}

export default App;
