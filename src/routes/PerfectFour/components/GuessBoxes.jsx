import classes from "./GuessBoxes.module.css"
import Box from "./Box.jsx";

const GuessBoxes = ({ number, numToGuess }) => {
  return (
    <div className={classes["guess-boxes"]}>
      <Box num={number[0]} numToGuessSplit={numToGuess[0]} numToGuess={numToGuess} />
      <Box num={number[1]} numToGuessSplit={numToGuess[1]} numToGuess={numToGuess} />
      <Box num={number[2]} numToGuessSplit={numToGuess[2]} numToGuess={numToGuess} />
      <Box num={number[3]} numToGuessSplit={numToGuess[3]} numToGuess={numToGuess} />
    </div>
  );
};
 
export default GuessBoxes;
