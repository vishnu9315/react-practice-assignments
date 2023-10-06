import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [users, setUser] = useState([]);
  const baseUrl = "https://jsonplaceholder.typicode.com/users";

  const fetchUser = () => {
    fetch(baseUrl)
      .then((resp) => {
        resp.json().then((data) => {
          setUser(data);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const deletUser = (id) => {
    const filterUsers = users.filter((user) => {
      return user.id !== id;
    });
    setUser(filterUsers);
  };

  return (
    <div className="App">
      {users.map((user) => (
        <div className="user" key={user.id}>
          <p>{user.name}</p>
          <button onClick={() => deletUser(user.id)} className="btn">
            x
          </button>
        </div>
      ))}
    </div>
  );
}
