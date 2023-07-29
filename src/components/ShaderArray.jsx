import React from 'react';
import ShaderComponent from './ShaderComponent';

const ShaderArray = ({ colors, amount }) => {
  return (
    <>
      {Array(amount).fill().map((_, i) => (
        <ShaderComponent
          key={i}
          color={colors[i % colors.length]}
          size={1}
          rotationSpeed={0.01}
          position={[i * 2 - (amount - 1), 0, 0]} // Position based on index
        />
      ))}
    </>
  );
};

export default ShaderArray;
