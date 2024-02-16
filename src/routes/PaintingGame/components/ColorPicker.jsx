import { useContext } from "react";
import { PaintContext } from "../contexts/PaintContext.jsx";

const ColorPicker = () => {
  const { color, setColor } = useContext(PaintContext);

  return (
    <div className="color-selector">
      <label htmlFor="color">Choose the color:</label>
      <input
        type="color"
        name="color"
        id="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
    </div>
  );
};

export default ColorPicker;
