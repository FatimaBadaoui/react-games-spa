// css
import "./style.css";
// contexts
import PaintContextProvider from "./contexts/PaintContext.jsx";
// components
import Canva from "./components/Canva.jsx";
import ColorPicker from "./components/ColorPicker.jsx";
import SizePicker from "./components/SizePicker.jsx";
import ResetButton from "./components/ResetButton.jsx";

function PaintingGame() {
  return (
    <>
      <PaintContextProvider>
        <div className="paint-game">
          <h2 className="paint-title1">Painting Game</h2>
          <div className="drawing-container">
            <Canva />
            <div className="inputs">
              <ColorPicker />
              <SizePicker />
              <ResetButton />
            </div>
          </div>
          <h2 className="paint-title2">Painting Game</h2>
        </div>
      </PaintContextProvider>
    </>
  );
}

export default PaintingGame;
