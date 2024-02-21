import { createContext, useState } from "react";
import { dungeon1 } from "../utilities/variables.js";

export const DungeonContext = createContext(null);

const DungeonContextProvider = ({ children }) => {
  const [dungeon, setDungeon] = useState(null);
  const [floor, setFloor] = useState(0);
  const [target, setTarget] = useState(null);
  const [monsterNumber, setMonsterNumber] = useState(5);

  return (
    <DungeonContext.Provider
      value={{
        dungeon,
        setDungeon,
        floor,
        setFloor,
        target,
        setTarget,
        monsterNumber,
        setMonsterNumber,
      }}
    >
      {children}
    </DungeonContext.Provider>
  );
};

export default DungeonContextProvider;
