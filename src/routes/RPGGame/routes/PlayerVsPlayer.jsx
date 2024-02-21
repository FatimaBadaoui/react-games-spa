import classes from  "../styles/PlayerVsPlayer.module.css";

import { rPGGame } from "../utilities/variables.js";

import { useContext, useState } from "react";
import { PlayerContext } from "../contexts/PlayerContext.jsx";
import Player from "../components/Player.jsx";
import { useNavigate } from "react-router-dom";

const PlayerVsPlayer = () => {
  const { player, setExpPoints } = useContext(PlayerContext);
  const possibleTargets = rPGGame.characters.filter(
    (char) => char.name !== player.name
  );
  const [target, setTarget] = useState(
    possibleTargets[Math.floor(Math.random() * possibleTargets.length)]
  );
  const [attacker, setAttacker] = useState(null);
  const navigate = useNavigate();

  const fighting = () => {
    if (player.hp > 0 && target.hp > 0) {
      if (attacker.name === player.name) {
        return player.action(target, attacker.indexSkill, 100);
      } else {
        return target.action(player, attacker.indexSkill, 100);
      }
    } else {
      return rPGGame.playerVsPlayer(player, target);
    }
  };

  const handleClick = () => {
    if (player.hp > 0) {
      // player.xp += 5;
      // setPlayer(player);
      // setPlayer({...player, xp: player.xp + 5});
      //reset
      player.hp = 100;
      target.hp = 100;
      // player.xp = 5;
      setExpPoints((prevExpPoints) => prevExpPoints + 5);
    }
    navigate("/games/swordsandmagic/homepage");
  };

  return (
    <div className={classes["PlayerVsPlayer"]}>
      <Player char={player} setAttacker={setAttacker} />
      <div className={classes["attacks"]}>
        <h2>
          {player.name} Vs. {target.name}
        </h2>
        {attacker && <p>{fighting()}</p>}
        {player.hp <= 0 || target.hp <= 0 ? (
          <button className={classes["back-btn"]} onClick={handleClick}>
            Go Back
          </button>
        ) : null}
      </div>
      <Player char={target} setAttacker={setAttacker} />
    </div>
  );
};

export default PlayerVsPlayer;
