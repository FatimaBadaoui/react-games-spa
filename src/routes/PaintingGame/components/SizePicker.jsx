import { useContext } from "react";
import { PaintContext } from "../contexts/PaintContext.jsx";

const SizePicker = () => {
  const { size, setSize } = useContext(PaintContext);

  return (
    <div className="size-selector">
      <label htmlFor="range">Choose brush size:</label>
      <input
        type="range"
        name="range"
        id="range"
        min="10"
        max="50"
        step="10"
        list="values"
        value={size}
        onChange={(e) => setSize(e.target.value)}
      />
      <datalist id="values">
        <option value="10" label="10"></option>
        <option value="20" label="20"></option>
        <option value="30" label="30"></option>
        <option value="40" label="40"></option>
        <option value="50" label="50"></option>
      </datalist>
    </div>
  );
};

export default SizePicker;
