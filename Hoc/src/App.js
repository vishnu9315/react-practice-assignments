import HOC from "./HOC";
import "./styles.css";

const App = ({ value }) => {
  console.log(value);
  return (
    <div className="App">
      <h1>{value.name}</h1>
      <h2>{value.age}</h2>
    </div>
  );
};

export default HOC(App);
