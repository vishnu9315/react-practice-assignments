import "./styles.css";
import { useEffect, useState } from "react";
const countries = [
  { name: "India", value: "IN", cities: ["Delhi", "Mumbai"] },
  { name: "Pak", value: "PK", cities: ["Lahore", "Karachi"] },
  { name: "Bangladesh", value: "BG", cities: ["Dhaka", "Chittagong"] }
];

//find method returns the value of first array element [1,2,3]
//if its satifies the condition

export default function App() {
  const [selectedCountry, setSelectedCountry] = useState("");

  const handleChange = (event) => {
    console.log(event.target.value);
    setSelectedCountry(event.target.value);
  };

  const countrySelectedObj = countries.find(
    (country) => country.value === selectedCountry
  );

  return (
    <div>
      <h1>select country </h1>
      <select value={selectedCountry} onChange={handleChange}>
        <option value="">Select</option>
        {countries.map((country, index) => (
          <option key={index} value={country.value}>
            {country.name}
          </option>
        ))}
      </select>
      {countrySelectedObj && (
        <select>
          {countrySelectedObj.cities.map((city, index) => (
            <option key={index}>{city}</option>
          ))}
        </select>
      )}
    </div>
  );
}
