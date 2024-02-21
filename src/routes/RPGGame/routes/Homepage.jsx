import { Link } from "react-router-dom";
import classes from  "../styles/Homepage.module.css";

const Homepage = () => {
  return (
    <div className={classes["homepage-buttons"]}>
      <button>
        <Link to="/games/swordsandmagic/homepage/playervsplayer">Player Vs Player</Link>
      </button>
      <button>
        <Link to="/games/swordsandmagic/homepage/dungeonslist">Player Vs Dungeon</Link>
      </button>
      <button>
        <Link to="/games/swordsandmagic">Change Character</Link>
      </button>
    </div>
  );
};

export default Homepage;
