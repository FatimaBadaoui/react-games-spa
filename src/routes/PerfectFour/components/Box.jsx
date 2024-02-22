import classes from "./Box.module.css";

const Box = ({ num, numToGuessSplit, numToGuess }) => {
  const addClass =
    num === numToGuessSplit
      ? "correct"
      : numToGuess.includes(num)
      ? "misplaced"
      : "";
  return <div className={classes.box + " " + classes[addClass]}>{num}</div>;
};

export default Box;
