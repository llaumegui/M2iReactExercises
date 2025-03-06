import { useState } from "react";

const FizzBuzz = () => {
  const maxValue = 20;
  const [count, setCount] = useState(0);

  const renderText = () => {
    let text = "‎";
    if (count == 0) return text;

    if (count % 3 == 0) text += "Fizz";
    if (count % 5 == 0) text += "Buzz";

    return text;
  };

  function changeValue(add) {
    setCount(count + add);
  }

  return (
    <>
      <div>
        <p>{count}</p>
      </div>
      <button onClick={()=>changeValue(1)} disabled={count===maxValue}>add</button>
      <button onClick={()=>changeValue(-1)} disabled={count===0}>remove</button>
        <p>{renderText()}</p>
    </>
  );
};
export default FizzBuzz;
