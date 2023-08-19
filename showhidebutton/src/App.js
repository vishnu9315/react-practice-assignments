import "./styles.css";
import { useState } from "react";

export default function App() {
  const [show, setShow] = useState(true);
  return (
    <div className="App">
      <button onClick={() => setShow(!show)}>Show/Hide button </button>
      {show ? <h1>Hello CodeSandbox</h1> : ""}
    </div>
  );
}
