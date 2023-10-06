import { useState } from "react";
import Child from "./Child";
import "./styles.css";

export default function App() {
  const [color, setColor] = useState("");
  console.log(color);
  const changeColor = (value) => {
    setColor(value);
  };

  return (
    <div className="App">
      <div className="container" style={{ background: color }}></div>
      <Child changeColor={changeColor} />
    </div>
  );
}
