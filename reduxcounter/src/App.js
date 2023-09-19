import { decrement, increment } from "./counterSlice";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
export default function App() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>{count} </h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}
