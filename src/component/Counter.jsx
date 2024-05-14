import React, { useState } from "react";
import "../css/Counter.css";
const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleDecrement = () => {
    setCounter(counter - 1);
  };

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="counter">
      <h2>Counter {counter}</h2>
      <div className="buttons-container">
        <button className="btn-style" onClick={handleIncrement}>
          Increment
        </button>
        <button className="btn-style" onClick={handleDecrement}>
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
