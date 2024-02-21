import classes from "../styles/Header.module.css";

import { useContext } from "react";
import { PlayerContext } from "../contexts/PlayerContext.jsx";

const Header = () => {
  const { player, expPoints, setExpPoints } = useContext(PlayerContext);
  return (
    <header className={classes["player-bar"]}>
      <div className={classes["user-avatar"]}>
        <img src={player.avatar} alt={player.name} />
      </div>
      <div className={classes["status-bar"]}>
        <h3>
          {player.name} ({player.job})
        </h3>
        <p>
          <strong>HP: </strong>
          {player.hp} pt
        </p>
        <p>
          <strong>XP: </strong>
          {expPoints} pt
          {/* {player.xp} pt */}
        </p>
      </div>
      <div className={classes["skills"]}>
        {player.skills.map((skill, index) => (
          <div className={classes["skill"]} key={index}>
            <p>
              <strong>{skill.skillName}: </strong>
              {skill.damage ? skill.damage : skill.recover} pt
            </p>
            {expPoints > 0 && (
              <button
                onClick={() => {
                  skill.damage ? skill.damage++ : skill.recover++;
                  setExpPoints((prevExpPoints) => prevExpPoints - 1);
                }}
              >
                +
              </button>
            )}
          </div>
        ))}
      </div>
    </header>
  );
};

export default Header;
