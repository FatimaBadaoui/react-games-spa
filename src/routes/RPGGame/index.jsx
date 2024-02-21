import { Routes, Route } from "react-router-dom";

import ChooseCharacter from "./routes/ChooseCharacter.jsx";
import Homepage from "./routes/Homepage.jsx";
import PlayerVsPlayer from "./routes/PlayerVsPlayer.jsx";
import PlayerVsDungeon from "./routes/PlayerVsDungeon.jsx";
import PlayerContextProvider from "./contexts/PlayerContext.jsx";
import PageLayout from "./components/PageLayout.jsx";
import DungeonContextProvider from "./contexts/DungeonContext.jsx";
import DungeonsList from "./routes/DungeonsList.jsx";

function RPGGame() {
  return (
    <>
      <PlayerContextProvider>
        <DungeonContextProvider>
          <Routes>
            <Route index element={<ChooseCharacter />} />
            <Route path="homepage" element={<PageLayout />}>
              <Route index element={<Homepage />} />
              <Route path="playervsplayer" element={<PlayerVsPlayer />} />
              <Route path="dungeonslist" element={<DungeonsList />} />
              <Route path="playervsdungeon" element={<PlayerVsDungeon />} />
            </Route>
          </Routes>
        </DungeonContextProvider>
      </PlayerContextProvider>
    </>
  );
}

export default RPGGame;
