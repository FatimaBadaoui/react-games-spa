import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";

import Home from "./routes/Home/index.jsx";
import Login from "./routes/Login/index.jsx";
import Contact from "./routes/Contact/index.jsx";
import About from "./routes/About/index.jsx";
import NavBar from "./components/NavBar.jsx";
import GameList from "./routes/GameList/index.jsx";
import PageNotFound from "./routes/PageNotFound/index.jsx";
import Games from "./routes/Games/index.jsx";
import MemoryGame from "./routes/MemoryGame/index.jsx";
import { useEffect, useState } from "react";

function App() {
  const [isLogged, setIsLogged] = useState(false);

  // const navigate = useNavigate();

  // when loading the page turn back to the home page
  // useEffect(() => {
  //   navigate("/");
  // }, []);

  return (
    <>
      <NavBar isLogged={isLogged} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />}>
          <Route index element={<GameList />} />
          <Route path="memory-game" element={<MemoryGame />} />
        </Route>
        <Route
          path="/login"
          element={<Login isLogged={isLogged} setIsLogged={setIsLogged} />}
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
