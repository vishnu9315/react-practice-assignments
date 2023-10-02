import { useEffect } from "react";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const [data, setData] = useState([]);
  const apiUrl = "https://jsonplaceholder.typicode.com/photos?_limit=10";

  const fetchImages = async () => {
    const response = await fetch(apiUrl);
    const data = await response.json();
    setData(data);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div className="App">
      {data.map((item) => (
        <img src={item.thumbnailUrl} alt="Image" />
      ))}
    </div>
  );
}
