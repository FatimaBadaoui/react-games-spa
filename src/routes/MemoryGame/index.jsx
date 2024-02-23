import "./style.css";
import Cards from "./components/Cards.jsx";

function MemoryGame() {
  return (
    <>
      <h1 className="memory-title">Memory Game</h1>
      <div className="main-container">
        <Cards />
      </div>
    </>
  );
}

export default MemoryGame;
