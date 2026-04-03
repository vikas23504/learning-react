import React, { createContext, useState, useEffect } from 'react';
import ChildDisco from './ChildDisco';

export const ColorContext = createContext();

const Disco = () => {
  const [color, setColor] = useState("white");

  useEffect(() => {
    const colors = ["red", "blue", "green", "yellow", "purple"];

    const interval = setInterval(() => {
      const random = colors[Math.floor(Math.random() * colors.length)];
      setColor(random);
    },1000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <ColorContext.Provider value={color}>
      <div style={{ background: color, height: "100vh" }}>
        <ChildDisco/>
      </div>
    </ColorContext.Provider>
  );
};

export default Disco;