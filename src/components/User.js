import React from "react";
import { useRecoilState } from "recoil";
import { usersAtom } from "./atom";

const User = ({ onRemove, onLive }) => {
  const [users] = useRecoilState(usersAtom);
  return (
    <>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <b
              style={{
                cursor: "pointer",
                color: user.active ? "green" : "black",
              }}
              onClick={() => {
                onLive(user.id);
              }}
            >
              {user.username}
            </b>
            <span> ({user.email})</span>
            <button
              onClick={() => {
                onRemove(user.id);
              }}
            >
              삭제
            </button>
          </div>
        );
      })}
    </>
  );
};

export default React.memo(User);
