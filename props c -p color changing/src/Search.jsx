import { useState } from "react";

const Search = ({ getColor }) => {
  const [value, setColorValue] = useState("");

  const colorSet = (e) => {
    setColorValue(e.target.value);
    getColor(e.target.value);
  };

  return (
    <div>
      <input type="text" onChange={colorSet} />
    </div>
  );
};

export default Search;
