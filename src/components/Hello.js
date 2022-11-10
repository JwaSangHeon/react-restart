import React from "react";

const Hello = ({ name, color, isStar }) => {
  return (
    <div style={{ color, fontSize: 24 }}>
      {isStar && <b>***</b>}
      안녕하세요, {name}
    </div>
  );
};

Hello.defaultProps = {
  name: "이름없음",
  isStar: false,
};

export default Hello;
