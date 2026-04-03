import React, { useContext } from 'react';
import { ColorContext } from './Disco';

const ChildDisco = () => {
  const color = useContext(ColorContext);

  return (
    <h1 style={{ color: "white" }}>
      Current Color: {color}
    </h1>
  );
};

export default ChildDisco;