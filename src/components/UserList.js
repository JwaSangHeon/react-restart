import React from "react";
import User from "./User";

const UserList = ({ onRemove, onLive }) => {
  return (
    <>
      <User onRemove={onRemove} onLive={onLive} />
    </>
  );
};

export default React.memo(UserList);
