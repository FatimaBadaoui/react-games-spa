import classes from "../styles/PlayerVsDungeon.module.css";

import { dungeon1 } from "../utilities/variables.js";

import { useContext, useState } from "react";
import { PlayerContext } from "../contexts/PlayerContext.jsx";
import Player from "../components/Player.jsx";
import { useNavigate } from "react-router-dom";
import { DungeonContext } from "../contexts/DungeonContext.jsx";

const monster1HP = dungeon1.monsters[0].hp;
const monster2HP = dungeon1.monsters[1].hp;
const monster3HP = dungeon1.monsters[2].hp;
const monster4HP = dungeon1.monsters[3].hp;

const PlayerVsDungeon = () => {
  const { player, setExpPoints } = useContext(PlayerContext);
  const {
    dungeon,
    floor,
    setFloor,
    target,
    setTarget,
    monsterNumber,
    setMonsterNumber,
  } = useContext(DungeonContext);
  setTarget(dungeon.monsters[floor]);
  const [attacker, setAttacker] = useState(null);
  const navigate = useNavigate();

  const fighting = () => {
    if (player.hp > 0 && target.hp > 0) {
      return (
        <>
          <p>{player.action(target, attacker.indexSkill, 100)}</p>
          <p>
            {target.action(
              player,
              Math.floor(Math.random() * target.skills.length),
              100
            )}
          </p>
        </>
      );
    } else {
      setMonsterNumber((prevMonsterNumber) => prevMonsterNumber - 1);
      target.hp =
        floor === 0
          ? monster1HP
          : floor === 1
          ? monster2HP
          : floor === 2
          ? monster3HP
          : monster4HP;
    }
  };

  return (
    <div className={classes["playerVsDungeon"]}>
      <Player char={player} setAttacker={setAttacker} />
      <div className={classes["attacks"]}>
        <h2>
          {player.name} Vs. {target.name} {monsterNumber}
        </h2>
        {attacker && monsterNumber > 0 && <div>{fighting()}</div>}
        {player.hp < 1 || monsterNumber < 1 ? (
          <button
            className={classes["back-btn"]}
            onClick={() => {
              player.hp = 100;
              console.log(floor);
              if (floor === 4) setFloor(-1);
              setExpPoints((prevExpPoints) => prevExpPoints + 5 * (floor + 1));
              navigate("/games/swordsandmagic/homepage");
            }}
          >
            Go Back
          </button>
        ) : null}
        {player.hp > 0 && monsterNumber < 1 && floor < 4 && (
          <>
            <button
              className={classes["continue-btn"]}
              onClick={() => {
                // reset
                player.hp = 100;
                setFloor((prevFloor) => prevFloor + 1);
                // console.log(floor);
                floor < 3
                  ? setTarget(dungeon1.monsters[floor + 1])
                  : setTarget(dungeon1.boss);

                floor < 3 ? setMonsterNumber(5) : setMonsterNumber(1);
              }}
            >
              Continue
            </button>
          </>
        )}
      </div>
      <Player char={target} setAttacker={setAttacker} />
    </div>
  );
};

export default PlayerVsDungeon;
