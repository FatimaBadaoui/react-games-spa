import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DungeonContext } from "../contexts/DungeonContext.jsx";
import { dungeon1, dungeon2, dungeon3 } from "../utilities/variables.js";
import classes from "../styles/DungeonList.module.css";

const DungeonsList = () => {
  const { dungeon, setDungeon } = useContext(DungeonContext);
  const navigate = useNavigate();
  return (
    <div className={classes["dungeons-list"]}>
      <h1>Choose the Dungeon to explore</h1>
      <div className={classes["dungeons"]}>
        <button
          onClick={() => {
            setDungeon(dungeon1);
          }}
        >
          Dragon&apos;s Lair
        </button>
        <button
          onClick={() => {
            setDungeon(dungeon2);
          }}
        >
          Mystic Labyrinth
        </button>
        <button
          onClick={() => {
            setDungeon(dungeon3);
          }}
        >
          Cavern of Despair
        </button>
      </div>
      <button
        onClick={() => {
          console.log(dungeon);
          navigate("/games/swordsandmagic/homepage/playervsdungeon");
        }}
      >
        Explore Dungeon
      </button>
    </div>
  );
};

export default DungeonsList;
