import { useEffect } from "react";
import "./styles.css";

export default function App() {
  const Calculator = [
    function add(a, b) {
      return a + b;
    },
    function substract(a, b) {
      return a - b;
    }
  ];

  const Calculator1 = [
    {
      fn: function add(a, b) {
        return a + b;
      }
    },
    {
      fn: function substract(a, b) {
        return a - b;
      }
    }
  ];

  let mainFn = () => {
    const result = Calculator.map((fn) => {
      return fn(2, 3);
    });
    console.log(result);
  };

  const mainFn2 = () => {
    const result = Calculator1.map((fn) => {
      return fn.fn(3, 4);
    });
    console.log(result);
  };

  useEffect(() => {
    mainFn2();
  }, []);
  return <div className="App"></div>;
}
