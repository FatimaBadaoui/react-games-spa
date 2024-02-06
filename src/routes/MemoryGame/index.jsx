import "./style.css";
import Cards from "./components/Cards.jsx";
import data from "./utilities/data.js";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faRotateRight } from "@fortawesome/free-solid-svg-icons";
// import { useState } from "react";

function MemoryGame() {
  // const [reload, setReload] = useState(false);

  // const clickHandler = () => {
  //   setReload(true);
  // };

  return (
    <>
      <h1 className="memory-title">Memory Game</h1>
      <Cards data={data} />
      {/* <button className="reload-btn" onClick={clickHandler}>
        <FontAwesomeIcon icon={faRotateRight} />
      </button> */}
    </>
  );
}

export default MemoryGame;
