import { useContext } from "react";
import classes from "./Word.module.css";
import { HangmanContext } from "../contexts/HangmanContext.jsx";

const Word = () => {
  const { word, correctLetters } = useContext(HangmanContext);
  return (
    <div className={classes["word-container"]}>
      {word.split("").map((letter, index) => {
        const isCorrect = correctLetters.includes(letter);
        const correctStyle = isCorrect ? { opacity: "1" } : { opacity: "0" };
        return (
          <div className={classes["letter-container"]} key={index}>
            <span className={classes.letter} style={correctStyle} >{letter}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Word;
