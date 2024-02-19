import GameCard from "../../components/GameCard.jsx";
import Hero from "../../components/Hero.jsx"
import "./style.css";

const GameList = () => {
  return (
    <div>
      <Hero title="Games List" imageUrl="https://images.unsplash.com/photo-1633218388467-539651dcf81f?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
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
        <GameCard
          to="/games/painting"
          image="https://cdn.pixabay.com/photo/2018/06/10/22/48/chess-3467512_1280.jpg"
          name="Painting Game"
        />
      </div>
    </div>
  );
};

export default GameList;
