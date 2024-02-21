import { useContext } from "react";
import { PlayerContext } from "../contexts/PlayerContext.jsx";

import classes from "../styles/ChooseCharacter.module.css";

const PlayerCard = ({ character }) => {
  const { setPlayer } = useContext(PlayerContext);

  return (
    <div className={classes["player-card"]} onClick={() => setPlayer(character)}>
      <div className={classes["playerImg"]}>
        <img src={character.avatar} alt={character.name} />
      </div>
      <h2>
        {character.name} <span>({character.job})</span>{" "}
      </h2>
    </div>
  );
};

export default PlayerCard;
