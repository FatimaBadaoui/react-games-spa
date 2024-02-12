import { useContext } from "react";
import classes from "./Hangman.module.css";
import { HangmanContext } from "../contexts/HangmanContext.jsx";

const Hangman = () => {
  const { chancesLeft } = useContext(HangmanContext);
  return (
    <div className={classes["hangman-drawing"]}>
      <div className={classes["line-1"]}></div>
      <div className={classes["line-2"]}></div>
      <div className={classes["line-3"]}></div>
      <div className={classes["line-4"]}></div>
      {chancesLeft < 6 && <div className={`${classes["body-part"]} ${classes["head"]}`}></div>}
      {chancesLeft < 5 && <div className={`${classes["body-part"]} ${classes["body"]}`}></div>}
      {chancesLeft < 4 && <div className={`${classes["body-part"]} ${classes["right-arm"]}`}></div>}
      {chancesLeft < 3 && <div className={`${classes["body-part"]} ${classes["left-arm"]}`}></div>}
      {chancesLeft < 2 && <div className={`${classes["body-part"]} ${classes["right-leg"]}`}></div>}
      {chancesLeft < 1 && <div className={`${classes["body-part"]} ${classes["left-leg"]}`}></div>}
    </div>
  );
};

export default Hangman;
