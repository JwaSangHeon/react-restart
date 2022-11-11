import React from "react";
import User from "./User";

const UserList = ({ users, onRemove, onLive }) => {
  return (
    <>
      <User users={users} onRemove={onRemove} onLive={onLive} />
    </>
  );
};

export default UserList;
