import { useContext } from "react";
import classes from "./Repeat.module.css";
import { HangmanContext } from "../contexts/HangmanContext.jsx";

const Repeat = () => {
  const { word, correctLetters, chancesLeft, handleRepeatClick } =
    useContext(HangmanContext);
  if (word.length === correctLetters.length || chancesLeft === 0) {
    return (
      <div className={classes["repeat-container"]}>
        <button onClick={handleRepeatClick}>Repeat The Game</button>
      </div>
    );
  }
};

export default Repeat;
