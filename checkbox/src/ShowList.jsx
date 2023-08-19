import { useState } from "react";
import "./Style.css";

const ShowList = () => {
  const initalState = ["football", "Cricket", "Tennis"].map((game) => ({
    name: game,
    checked: true
  }));
  const [games, setGames] = useState(initalState);

  const handleDelete = (getgame) => {
    const updatedGame = games.filter((game) => game.name !== getgame);
    setGames(updatedGame);
  };

  const handleCheck = (getgame) => {
    const updatedGames = games.map((game) =>
      game.name === getgame ? { ...game, checked: !game.checked } : game
    );
    setGames(updatedGames);
  };
  return (
    <div className="container">
      <div className="main">
        {games.map((game) => (
          <div className="inside" key={game.name}>
            <li>{game.name}</li>
            {/* we have to always use a fucntion bcs if we call it normally then this function get in
            immediately when the component renders and the screen will be shown empty */}
            <input
              type="checkbox"
              checked={game.checked}
              onChange={() => handleCheck(game.name)}
            />
            {game.checked && (
              <button onClick={() => handleDelete(game.name)}>Delete </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowList;
