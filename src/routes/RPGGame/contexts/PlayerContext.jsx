import { createContext, useState } from "react";

export const PlayerContext = createContext(null);

const PlayerContextProvider = ({ children }) => {
  const [player, setPlayer] = useState(null);
  const [expPoints, setExpPoints] = useState(0);

  return (
    <PlayerContext.Provider
      value={{ player, setPlayer, expPoints, setExpPoints }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;
