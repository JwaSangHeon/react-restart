import React, {
  useRef,
  useState,
  useMemo,
  useEffect,
  useCallback,
} from "react";
import UserList from "./components/UserList";
import CreateUser from "./components/CreateUser";
import { usersAtom } from "./components/atom";
import { RecoilRoot, useRecoilState } from "recoil";

const countActiveUsers = (users) => {
  console.log("세는 중...");
  return users.filter((user) => user.active).length;
};

function App() {
  const [users, setUsers] = useRecoilState(usersAtom);

  const nextId = useRef(4);

  const [user, setUser] = useState({
    username: "",
    email: "",
  });
  const { username, email } = user;

  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    setUser((user) => ({ ...user, [name]: value }));
  }, []);

  const onCreate = useCallback(() => {
    const user = {
      id: nextId.current,
      username,
      email,
    };
    setUsers((users) => [...users, user]);
    setUser({
      username: "",
      email: "",
    });
    nextId.current += 1;
  }, [email, username, setUsers]);

  const onRemove = useCallback(
    (id) => {
      setUsers((users) => users.filter((user) => user.id !== id));
    },
    [setUsers]
  );

  const onLive = useCallback(
    (id) => {
      setUsers((users) =>
        users.map((user) =>
          user.id === id ? { ...user, active: !user.active } : user
        )
      );
    },
    [setUsers]
  );

  const count = useMemo(() => countActiveUsers(users), [users]);
  return (
    <>
      <CreateUser
        onChange={onChange}
        username={username}
        email={email}
        onCreate={onCreate}
      />
      <UserList onRemove={onRemove} onLive={onLive} />
      <div>활성사용자 수 : {count}</div>
    </>
  );
}

export default App;
