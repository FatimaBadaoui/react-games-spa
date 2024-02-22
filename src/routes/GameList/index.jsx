import GameCard from "../../components/GameCard.jsx";
import Hero from "../../components/Hero.jsx";

import "./style.css";
import perfectFour from "../../utilities/images/perfectFour.png";

const GameList = () => {
  return (
    <div className="games-list">
      <Hero
        title="Games List"
        imageUrl="https://images.unsplash.com/photo-1633218388467-539651dcf81f?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <div className="games-container">
        <GameCard
          to="/games/memory"
          image="https://games.washingtonpost.com/arenaxstorage-blob/arenax-games/memoryGame/0.22/build/resources/assets/thumbs/thumb2x.jpg"
          // name="Memory"
        />
        <GameCard
          to="/games/hangman"
          image="https://play-lh.googleusercontent.com/I3KTJn3UlrD5vVh9BXlBB6kn5jM9s1JvdK5Iea9UJDtN90BcToA7RJ1UtvdFIB3w050X=w240-h480-rw"
          // name="Hangman"
        />
        <GameCard
          to="/games/painting"
          image="https://img.freepik.com/premium-vector/paint_52422-11.jpg"
          // name="Painting Game"
        />
        <GameCard
          to="/games/swordsandmagic"
          image="https://hb.imgix.net/b2cea080588eb6098e4615c08037de506b3430b6.jpg?auto=compress,format&fit=crop&h=353&w=616&s=01a7188a9e2065f0beff6f8de8825f47"
          // name="Swords and Magic"
        />
        <GameCard
          to="/games/perfectfour"
          image={perfectFour}
          // name="Swords and Magic"
        />
      </div>
    </div>
  );
};

export default GameList;
