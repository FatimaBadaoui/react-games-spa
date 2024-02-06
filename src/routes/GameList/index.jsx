import "./style.css";

import { Link } from "react-router-dom";

const GameList = () => {
  return (
    <div>
      <h1>Games List</h1>
      <div className="games-container">
        <Link to="/games/memory-game">
          <div className="game-card">
            <div className="game-image">
              <img
                src="https://cdn.pixabay.com/photo/2018/06/10/22/48/chess-3467512_1280.jpg"
                alt="game image"
              />
            </div>
            <h2 className="game-name">Memory Game</h2>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default GameList;
