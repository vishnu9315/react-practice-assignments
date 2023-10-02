import { useEffect } from "react";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const apiUrl = "https://jsonplaceholder.typicode.com/users";

  const fetchUsers = async () => {
    const response = await fetch(apiUrl);
    const data = await response.json();
    setData(data);
  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    if (searchTerm === "") {
      fetchUsers();
    } else {
      let updatedUsers = data.filter((user) => {
        return user.name.toLowerCase().indexOf(searchTerm) !== -1;
      });
      setData(updatedUsers);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="App">
      <input type="text" placeholder="search user.." onChange={handleSearch} />
      {data.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}
