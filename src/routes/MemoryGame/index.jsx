import "./style.css";
import Cards from "./components/Cards.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function MemoryGame() {

  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("/games");
  };

  return (
    <>
      <h1 className="memory-title">Memory Game</h1>
      <div className="main-container">
        <button className="reload-btn" onClick={clickHandler}>
        <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <Cards />
      </div>
    </>
  );
}

export default MemoryGame;
