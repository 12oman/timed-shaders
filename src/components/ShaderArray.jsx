import React from 'react';
import { useThree } from '@react-three/fiber';
import ShaderComponent from './ShaderComponent';

const ShaderArray = ({ colors, amount, rows}) => {
  const { camera } = useThree();

  // fine-tune horizontal and vertical multis
  const horizontalMultiplier = 0.2
  const verticalMultiplier = 0.7

  // Calculate horizontal and vertical spacing based on the camera's properties
  const horizontalSpacing = camera.aspect * camera.position.z * Math.tan((camera.fov * Math.PI) / 360) * horizontalMultiplier;
  const verticalSpacing = horizontalSpacing / camera.aspect * verticalMultiplier;

  return (
    <>
      {Array(rows * amount).fill().map((_, index) => {
        const i = index % amount;
        const row = Math.floor(index / amount);
        return (
          <ShaderComponent
            key={index}
            color={colors[index % colors.length]}
            initialSize={1}
            rotationSpeed={2}
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
