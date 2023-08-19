import "./styles.css";
import { useState } from "react";
export default function App() {
  const initialState = {
    userName: "",
    FullName: "",
    Age: ""
  };
  const [values, setValues] = useState(initialState);
  const [isTrue, setTrue] = useState(false);

  console.log(values);
  console.log(isTrue);

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTrue(true);
  };

  return (
    <div className="App">
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="v">userName</label>
        <input
          type="text"
          name="userName"
          value={values.userName}
          onChange={handleChange}
        />
        <label htmlFor="v">FullName</label>
        <input
          type="text"
          name="FullName"
          value={values.FullName}
          onChange={handleChange}
        />
        <label htmlFor="v">Age</label>
        <input
          type="text"
          name="Age"
          value={values.Age}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>

      {isTrue && (
        <>
          <h1>Your submitted values </h1>
          <ul>
            <li>{values.userName}</li>
            <li>{values.FullName}</li>
            <li>{values.Age}</li>
          </ul>
        </>
      )}
    </div>
  );
}
