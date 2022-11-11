import React from "react";
import User from "./User";

const UserList = ({ users, onRemove }) => {
  return (
    <>
      <User users={users} onRemove={onRemove} />
    </>
  );
};

export default UserList;
