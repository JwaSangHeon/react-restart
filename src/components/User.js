import React from "react";

const User = ({ users }) => {
  return (
    <div>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <b>{user.username}</b>
            <span> ({user.email})</span>
          </div>
        );
      })}
    </div>
  );
};

export default User;
