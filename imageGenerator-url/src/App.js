import "./styles.css";
import { useState } from "react";

export default function App() {
  const [value, setValue] = useState("");
  const [imageUrls, setImageUrls] = useState([]);
  const url = "https://robohash.org/";

  const handleValueChange = (e) => {
    setValue(e.target.value);
  };

  console.log(imageUrls);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setImageUrls((prevImageUrls) => [...prevImageUrls, `${url}${value}`]);
    setValue("");
  };

  return (
    <div className="App">
      <form onSubmit={handleFormSubmit}>
        <input type="text" value={value} onChange={handleValueChange} />
        <button type="submit">Submit</button>
      </form>

      <div className="main-container">
        {imageUrls.map((imageUrl, index) => (
          <img key={index} src={imageUrl} alt={`Generated ${index}`} />
        ))}
      </div>
    </div>
  );
}
