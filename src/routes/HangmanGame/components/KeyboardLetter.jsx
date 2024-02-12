import { useContext } from "react";
import classes from "./KeyboardLetter.module.css";
import { HangmanContext } from "../contexts/HangmanContext.jsx";

const KeyboardLetter = ({ children, isClicked }) => {
  const { handleKeyboardClick } = useContext(HangmanContext);

  const styleClicked = isClicked
    ? { backgroundColor: "#ffca8d", fontSize: "0px" }
    : {};

  return (
    <button
      className={`${classes["letter-button"]}`}
      onClick={handleKeyboardClick}
      style={styleClicked}
    >
      {children}
    </button>
  );
};

export default KeyboardLetter;
