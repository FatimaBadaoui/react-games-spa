import { Link } from "react-router-dom";

const GameList = () => {
  return (
    <div>
      <h1>Games List</h1>
      <div className="games-container">
        <Link to="/games/memory-game">Memory Game</Link>
      </div>
    </div>
  );
};

export default GameList;
