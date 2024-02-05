import "./style.css";
import Cards from "./components/Cards.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function MemoryGame() {
  const navigate = useNavigate();
  return (
    <>
      <h1 className="memory-title">Memory Game</h1>
      <Cards />
      <button className="reload-btn" onClick={() => navigate("/games/memory-game")}>
        <FontAwesomeIcon icon={faRotateRight} />
      </button>
    </>
  );
}

export default MemoryGame;
