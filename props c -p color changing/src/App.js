import Search from "./Search";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const [colorValue, setColorValue] = useState("black");
  const getColor = (color) => {
    setColorValue(color);
  };

  return (
    <div className="App">
      <h1 style={{ color: colorValue }}>Hello CodeSandbox</h1>
      <Search getColor={getColor} />
    </div>
  );
}
