import { useState } from "react";
import "./Style.css";
const Show = () => {
  const initialState = ["football", "Cricket", "Tennis"].map((game) => ({
    name: game,
    checked: false
  }));

  const [games, setGames] = useState(initialState);

  const handleDelete = (index) => {
    console.log(index);
    const updatedList = games.filter((_, i) => i !== index);
    setGames(updatedList);
  };

  const handleChange = (index) => {
    const updatedItems = games.map((game, i) =>
      i === index ? { ...game, checked: !game.checked } : game
    );
    setGames(updatedItems);
  };

  console.log(games)

  return (
    <>
      {games.map((game, index) => (
        <div className="inside" key={index}>
          <li> {game.name} </li>
          <input type="checkbox" onChange={() => handleChange(index)} />
          {game.checked && (
            <button onClick={() => handleDelete(index)}>Delete</button>
          )}
        </div>
      ))}
    </>
  );
};

export default Show;
