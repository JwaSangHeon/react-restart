import React, { useState, useRef } from "react";

const InputSample = () => {
  const [user, setUser] = useState({
    username: "",
    nickname: "",
  });

  const nameInput = useRef();

  const { username, nickname } = user;

  const onChangeInput = (e) => {
    const { name, value } = e.target;

    setUser({ ...user, [name]: value });
  };

  const onClear = () => {
    setUser({
      username: "",
      nickname: "",
    });
    nameInput.current.focus();
  };

  return (
    <div>
      <input
        name="username"
        placeholder="이름"
        onChange={onChangeInput}
        value={username}
        ref={nameInput}
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
