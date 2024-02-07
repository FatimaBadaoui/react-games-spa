import "./App.css";

import { Route, Routes } from "react-router-dom";

// Routes
import Home from "./routes/Home/index.jsx";
import Login from "./routes/Login/index.jsx";
import Contact from "./routes/Contact/index.jsx";
import About from "./routes/About/index.jsx";
import GameList from "./routes/GameList/index.jsx";
import PageNotFound from "./routes/PageNotFound/index.jsx";
import Games from "./routes/Games/index.jsx";
import MemoryGame from "./routes/MemoryGame/index.jsx";
import PageLayout from "./components/PageLayout.jsx";
// contexts
import UserContextProvider from "./contexts/UserContext.jsx";

function App() {
  return (
    <>
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<PageLayout />}>
            <Route index element={<Home />} />
            <Route path="/games" element={<Games />}>
              <Route index element={<GameList />} />
              <Route path="memory-game" element={<MemoryGame />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </UserContextProvider>
    </>
  );
}

export default App;
