import GameCard from "../../components/GameCard.jsx";
import "./style.css";

const GameList = () => {
  return (
    <div>
      <h1>Games List</h1>
      <div className="games-container">
        <GameCard
          to="/games/memory"
          image="https://cdn.pixabay.com/photo/2018/06/10/22/48/chess-3467512_1280.jpg"
          name="Memory"
        />
        <GameCard
          to="/games/hangman"
          image="https://cdn.pixabay.com/photo/2018/06/10/22/48/chess-3467512_1280.jpg"
          name="Hangman"
        />
      </div>
    </div>
  );
};

export default GameList;
