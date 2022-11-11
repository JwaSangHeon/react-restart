import React from "react";

const User = ({ users, onRemove }) => {
  return (
    <div>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <b>{user.username}</b>
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
