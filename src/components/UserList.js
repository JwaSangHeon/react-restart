import React from "react";
import User from "./User";

const UserList = ({ users }) => {
  return (
    <>
      <User users={users} />
    </>
  );
};

export default UserList;
