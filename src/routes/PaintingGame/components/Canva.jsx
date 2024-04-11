import classes from "../style.module.css";

import { useContext } from "react";
import { PaintContext } from "../contexts/PaintContext.jsx";

const Canva = () => {
  const { canva, color, size } = useContext(PaintContext);

  // while the mouse is pressed and moving inside the canva it will add divs to the canva itself
  // the divs will be round and colored with the selected color and have the size of the selected size
  // they will be placed depending on the location of the mouse
  const handleMove = (event) => {
    const { clientX, clientY } = event;
    const div = document.createElement("div");
    div.style.width = size + "px";
    div.style.height = size + "px";
    div.style.borderRadius = "50%";
    div.style.backgroundColor = color;
    div.style.position = "absolute";

    // Calculate the position relative to the parent element
    const parentRect = canva.current.getBoundingClientRect();
    const offsetX = clientX - parentRect.left;
    const offsetY = clientY - parentRect.top;

    div.style.top = offsetY + "px";
    div.style.left = offsetX + "px";
    canva.current.appendChild(div);
  };

  const handleMouseDown = (handleMove) => {
    canva.current.addEventListener("mousemove", handleMove);
  };

  // the moment the mouse is up remove the event of mouse down
  const handleMouseUp = (handleMove) => {
    canva.current.removeEventListener("mousemove", handleMove);
  };

  return (
    <div
      className={classes.canva}
      ref={canva}
      onMouseDown={() => handleMouseDown(handleMove)}
      onMouseUp={() => handleMouseUp(handleMove)}
    ></div>
  );
};

export default Canva;
