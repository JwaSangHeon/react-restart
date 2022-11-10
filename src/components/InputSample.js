import React, { useState } from "react";

const InputSample = () => {
  const [user, setUser] = useState({
    username: "",
    nickname: "",
  });
  const { username, nickname } = user;

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setUser({ ...user, [name]: value });
  };

  const onClear = () => {
    setUser({
      username: "",
      nickname: "",
    });
  };

  return (
    <div>
      <input
        name="username"
        placeholder="이름"
        onChange={onChangeInput}
        value={username}
      />
      <input
        name="nickname"
        placeholder="닉네임"
        onChange={onChangeInput}
        value={nickname}
      />
      <button onClick={onClear}>초기화</button>
      <div>
        <b>값: </b>
        {username} ({nickname})
      </div>
    </div>
  );
};

export default InputSample;
