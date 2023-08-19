import { useState } from "react";

const Input = () => {
  const [input, setInput] = useState(0);
  const [input1, setInput1] = useState(0);
  const [operation, setOperation] = useState("+");
  const [result, setResult] = useState(0);

  const handleOperation = () => {
    switch (operation) {
      case "+":
        setResult(input + input1);
        break;
      case "-":
        setResult(input - input1);
        break;
      case "*":
        setResult(input * input1);
        break;
      case "/":
        setResult(input / input1);
        break;
      default:
        setResult(0);
        break;
    }
  };

  return (
    <>
      <div className="inputs">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(Number(e.target.value))}
        />
        <button onClick={handleOperation}>{operation}</button>
        <input
          type="text"
          value={input1}
          onChange={(e) => setInput1(Number(e.target.value))}
        />
        <div className="operations">
          <button onClick={() => setOperation("-")}>-</button>
          <button onClick={() => setOperation("*")}>*</button>
          <button onClick={() => setOperation("/")}>/</button>
          <button onClick={() => setOperation("+")}>+</button>
        </div>
        <div className="result">
          <h1>Result: {result} </h1>
        </div>
      </div>
    </>
  );
};

export default Input;
