import React from "react";
import User from "./User";

const UserList = () => {
  const users = [
    { id: 1, username: "SH", email: "SH@example.com" },
    { id: 2, username: "JH", email: "HH@example.com" },
    { id: 3, username: "SY", email: "SY@example.com" },
  ];

  return (
    <>
      <User users={users} />
    </>
  );
};

export default UserList;
