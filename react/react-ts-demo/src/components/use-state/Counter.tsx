import "./Counter.css";
import { useState } from "react";

const Counter = () => {
  //array destructuring
  const [count, setCount] = useState<number>(0);
  //it reuturns an array with variable and a method or function to set the variable and it takes a initial value
  const handleIncrement = () => {
    // setCount(count  + 1);
    setCount((prev) => prev + 1);
  };

  // const handleDecrement=()=>{

  // }

  return (
    <div>
      <h2 className="red-text">Count : {count}</h2>
      <button className="btn" onClick={handleIncrement}>
        Increment
      </button>
    </div>
  );
};

export default Counter;
