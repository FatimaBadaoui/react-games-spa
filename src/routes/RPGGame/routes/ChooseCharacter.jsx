import classes from "../styles/ChooseCharacter.module.css";

import PlayerCard from "../components/PlayerCard.jsx";
import { rPGGame } from "../utilities/variables.js";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { PlayerContext } from "../contexts/PlayerContext.jsx";

const ChooseCharacter = () => {
  const { player } = useContext(PlayerContext);

  return (
    <div className={classes["login-body"]}>
      <div className={classes["login-container"]}>
        <h1>Welcome to Swords and Magic</h1>
        <p>Choose a Character to play with</p>
        <div className={classes["players-container"]}>
          {rPGGame.characters.map((char, index) => (
            <PlayerCard key={index} character={char} />
          ))}
        </div>
        {player && (
          <button>
            <Link to="/games/swordsandmagic/homepage">Let&apos;s Play</Link>
          </button>
        )}
      </div>
    </div>
  );
};

export default ChooseCharacter;
