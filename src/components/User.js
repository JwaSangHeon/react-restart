import React, { useEffect } from "react";

const User = ({ users, onRemove, onLive }) => {
  useEffect(() => {
    console.log("등장");
    console.log(users);
    return () => {
      console.log("users 가 바뀌기전 ....");
      console.log(users);
    };
  }, [users]);
  return (
    <div>
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
    </div>
  );
};

export default User;
