import { useContext } from "react";
import { PaintContext } from "../contexts/PaintContext.jsx";

const ResetButton = () => {
  const { canva } = useContext(PaintContext);

  return (
    <button
      className="reset-btn"
      onClick={() => (canva.current.innerHTML = "")}
    >
      Reset
    </button>
  );
};

export default ResetButton;
