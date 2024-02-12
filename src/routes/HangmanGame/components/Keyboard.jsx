import { useContext } from "react";
import classes from "./Keyboard.module.css";
import KeyboardLetter from "./KeyboardLetter.jsx";
import { HangmanContext } from "../contexts/HangmanContext.jsx";

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const Keyboard = () => {
  const { clickedLetters } = useContext(HangmanContext);

  return (
    <div className={classes.keyboard}>
      {alphabet.split("").map((letter, index) => {
        const isClicked = clickedLetters.includes(letter)
        return <KeyboardLetter key={index} isClicked={isClicked} >{letter}</KeyboardLetter>;
      })}
    </div>
  );
};

export default Keyboard;
