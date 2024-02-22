import { useEffect, useRef, useState } from "react";
import classes from "./style.module.css";

import { generateRandomNumber } from "./utilities/play.js";
import GuessBoxes from "./components/GuessBoxes.jsx";

function App() {
  const randomNumber = generateRandomNumber();
  const [randomNum, setRandomNum] = useState(randomNumber);

  const [number, setNumber] = useState("");
  const [numbers, setNumbers] = useState([]);
  const [guessesLeft, setGuessesLeft] = useState(8);
  const [correct, setCorrect] = useState(false);

  const refInput = useRef();

  useEffect(() => {
    refInput.current.focus();
  }, []);

  console.log(randomNum);

  const tryAgainHandler = () => {
    setRandomNum(generateRandomNumber());
    setNumber("");
    setNumbers([]);
    setGuessesLeft(8);
    setCorrect(false);
  };

  return (
    <div className={classes["perfect-four-container"]}>
      <div className={classes["perfect-four"]}>
        <h1>
          Perfect Four <span>By Pila</span>
        </h1>
        <p>Guess the Number of 4 digits</p>
        <div className={classes["input"]}>
          <input
            type="text"
            placeholder="write the number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            ref={refInput}
          />
          <button
            onClick={() => {
              setGuessesLeft((prevGuessesLeft) => prevGuessesLeft - 1);
              setNumbers((prevNumbers) => [...prevNumbers, number]);
              setNumber("");
              randomNum.toString() === number ? setCorrect(true) : null;
              refInput.current.focus();
            }}
          >
            Guess
          </button>
        </div>
        <div className={classes["guesses"]}>
          {numbers.map((number, index) => (
            <GuessBoxes
              key={index}
              number={number}
              numToGuess={randomNum.toString()}
            />
          ))}
        </div>
        {correct && (
          <div className={classes.win}>
            <p>YOU WIN!</p> <button onClick={tryAgainHandler}>Try Again</button>
          </div>
        )}
        {guessesLeft === 0 && (
          <div className={classes.lose}>
            <p>YOU LOSE!</p>{" "}
            <button onClick={tryAgainHandler}>Try Again</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
