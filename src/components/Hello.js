import React from "react";

const Hello = ({ name, color }) => {
  return <div style={{ color, fontSize: 24 }}>안녕하세요, {name}</div>;
};

Hello.defaultProps = {
  name: "이름없음",
};

export default Hello;
