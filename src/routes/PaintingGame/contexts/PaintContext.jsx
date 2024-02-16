import { createContext, useState, useRef } from "react";

export const PaintContext = createContext(null);

const PaintContextProvider = ({ children }) => {
  const [color, setColor] = useState("#000000");
  const [size, setSize] = useState(10);
  const canva = useRef(null);

  return (
    <PaintContext.Provider
      value={{
        canva,
        color,
        setColor,
        size,
        setSize,
      }}
    >
      {children}
    </PaintContext.Provider>
  );
};

export default PaintContextProvider;
