import React, { useState } from "react";

const InputSample = () => {
  const [word, setWord] = useState("");

  const onChangeInput = (e) => {
    setWord(e.target.value);
  };

  const onClear = () => {
    setWord("");
  };

  return (
    <div>
      <input value={word} onChange={onChangeInput} />
      <button onClick={onClear}>초기화</button>
      <div>
        <b>값 : {word}</b>
      </div>
    </div>
  );
};

export default InputSample;
