import React from "react";

const User = ({ users, onRemove, onLive }) => {
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
