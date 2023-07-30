import React, { useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import ShaderArray from './components/ShaderArray';

const App = () => {
  const canvasRef = useRef();

  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        const canvas = canvasRef.current;
        canvas.style.width = window.innerWidth + 'px';
        canvas.style.height = window.innerHeight + 'px';
      }
    };

    handleResize(); // Initial call to set size
    window.addEventListener('resize', handleResize); // Handle window resizing

    // Cleanup function to remove event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="App">
      <Canvas ref={canvasRef}>
        <ShaderArray colors={['#ff0000', '#00ff00']} amount={5} rows={3} />
        {/* Add more components or arrays as needed */}
      </Canvas>
    </div>
  );
};

export default App;
