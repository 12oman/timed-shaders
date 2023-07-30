import React from 'react';
import { useThree } from '@react-three/fiber';
import ShaderComponent from './ShaderComponent';

const ShaderArray = ({ colors, amount, rows }) => {
  const { camera } = useThree();

  // Calculate horizontal and vertical spacing based on the camera's properties
  const horizontalSpacing = camera.aspect * camera.position.z * Math.tan((camera.fov * Math.PI) / 360) / 5;
  const verticalSpacing = horizontalSpacing / camera.aspect / 5;

  return (
    <>
      {Array(rows * amount).fill().map((_, index) => {
        const i = index % amount;
        const row = Math.floor(index / amount);
        return (
          <ShaderComponent
            key={index}
            color={colors[index % colors.length]}
            size={1}
            rotationSpeed={0.01}
            position={[
              (i - (amount - 1) / 2) * horizontalSpacing,
              (row - (rows - 1) / 2) * verticalSpacing, // Vertical position calculation
              0
            ]}
          />
        );
      })}
    </>
  );
};

export default ShaderArray;
