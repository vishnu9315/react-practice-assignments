import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [input, setInput] = useState("");
  const [countries, setCountries] = useState([]);
  const baseApi = "https://restcountries.com/v3.1";

  useEffect(() => {
    const debouncing = setTimeout(async () => {
      const countries = await fetch(`${baseApi}/name/${input}`);
      const data = await countries.json();
      setCountries(data);
    }, 5000);

    return () => {
      clearTimeout(debouncing)
    }

  }, [input]);

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search countries"
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
}
