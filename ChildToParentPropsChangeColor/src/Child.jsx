import { useState } from "react";
import "./styles.css";

export default function Child({ changeColor }) {
  // const [color, setColor] = useState("");

  // const handleColor = (e) => {

  //   changeColor(e.target.value);
  // };

  return (
    <div className="child">
      <input type="text" onChange={(e) => changeColor(e.target.value)} />
    </div>
  );
}
