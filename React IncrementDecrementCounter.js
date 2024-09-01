import React, { useState } from "react";

function Test() {
  const [counter, setCounter] = useState(0);

  const handleDecrement = () => {
    setCounter((prevCounter) => prevCounter - 1);
  };
  const handleIncrement = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };
  return (
    <>
      <span onClick={handleDecrement}> - </span>
      <span> {counter} </span>
      <span onClick={handleIncrement}> + </span>
    </>
  );
}
export default Test;
