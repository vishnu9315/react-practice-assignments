import { useEffect, useState } from "react";
import "./styles.css";
import { useText } from "./context";

export default function App() {
  const { text, toggleText } = useText();

  return (
    <div className="App">
      <h1>{text}</h1>
      <button onClick={() => toggleText("Hello world")}>set text</button>
    </div>
  );
}
