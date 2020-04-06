import React, { useState } from "react";

function ReactStateHookEXP2() {
  const [count, setCount] = useState(0);

  const buttonClickHandler = e => {
    setCount(count + 1);
  };

  return (
    <>
      <div>React State Hook EXP2</div>

      <div>{count}</div>

      <div>
        <button onClick={buttonClickHandler}>Click</button>
      </div>
    </>
  );
}

export default ReactStateHookEXP2;
