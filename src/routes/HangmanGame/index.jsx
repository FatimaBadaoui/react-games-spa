import classes from "./style.module.css";
import Hangman from "./components/Hangman.jsx";
import Keyboard from "./components/Keyboard.jsx";
import Word from "./components/Word.jsx";
import HangmanProvider from "./contexts/HangmanContext.jsx";
import Repeat from "./components/Repeat.jsx";

function HangmanGame() {
  return (
    <>
      <HangmanProvider>
        <h1 className={classes["hangman-title"]}>Hangman Game</h1>
        <div className={classes["hangman-main-container"]}>
          <Hangman />
          <Word />
          <Keyboard />
          <Repeat />
        </div>
      </HangmanProvider>
    </>
  );
}

export default HangmanGame;
