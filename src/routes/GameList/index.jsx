import GameCard from "../../components/GameCard.jsx";
import Hero from "../../components/Hero.jsx";
import "./style.css";

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
          image="https://play-lh.googleusercontent.com/3vU01hZIomX95xALi7bH1l2OEHFLZYvYsEx0OIjUS1FIPNrIua56phuSd8Fy4Yg9mMM"
          // name="Hangman"
        />
        <GameCard
          to="/games/painting"
          image="https://yt3.googleusercontent.com/9_rMEndNL3hEETML2x4x7BLyL3-jnxmg2w1YO4g12S_LfTBA7PR_UF4CQWr5twWag3yK2IP_nQ=s900-c-k-c0x00ffffff-no-rj"
          // name="Painting Game"
        />
        <GameCard
          to="/games/swordsandmagic"
          image="https://hb.imgix.net/b2cea080588eb6098e4615c08037de506b3430b6.jpg?auto=compress,format&fit=crop&h=353&w=616&s=01a7188a9e2065f0beff6f8de8825f47"
          // name="Swords and Magic"
        />
      </div>
    </div>
  );
};

export default GameList;
