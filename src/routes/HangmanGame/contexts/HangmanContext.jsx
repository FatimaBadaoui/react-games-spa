import { createContext, useState } from "react";
import words from "../utilities/words.js";

export const HangmanContext = createContext();

const HangmanProvider = ({ children }) => {

  const randomWord = words[Math.floor(Math.random() * words.length)];
  // after getting a random word from the array, pass it the initial value for the word state
  const [word, setWord] = useState(randomWord.toUpperCase());
  const [chancesLeft, setChancesLeft] = useState(6);
  const [correctLetters, setCorrectLetters] = useState("");
  const [clickedLetters, setClickedLetters] = useState("");

  const handleKeyboardClick = (e) => {
    const letter = e.target.textContent;
    console.log(letter);
    if (word.includes(letter)) {
      setCorrectLetters((prevCorrectLetters) => prevCorrectLetters + letter);
    } else {
      setChancesLeft((prevChancesLeft) => prevChancesLeft - 1);
    }
    setClickedLetters((prevCorrectLetters) => prevCorrectLetters + letter);
  };

  const handleRepeatClick = () => {
    // reset everything
    setWord(words[Math.floor(Math.random() * words.length)]);
    setChancesLeft(6);
    setCorrectLetters("");
    setClickedLetters("");
  };

  return (
    <HangmanContext.Provider
      value={{
        word,
        chancesLeft,
        correctLetters,
        clickedLetters,
        handleKeyboardClick,
        handleRepeatClick,
      }}
    >
      {children}
    </HangmanContext.Provider>
  );
};

export default HangmanProvider;
