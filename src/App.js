// import the css file
import "./App.css";
import React, { useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import ShaderArray from './components/ShaderArray';
import CustomCam from './components/CustomCam';

const App = () => {
  const canvasRef = useRef();
  const ref = useRef();
  const amount = 10;
  const horizontalSpacing = (window.innerWidth / amount) - 10; // +1 to add some padding
  const verticalSpacing = (window.innerHeight / amount) - 10; // Adjust as needed
  const [randomKey, setRandomKey] = React.useState(Math.random().toString());
  const beat = [800, 400, 400, 200, 800, 400, 400, 400];

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

  useEffect(() => {
    const interval = setInterval(() => {
      // Update the random key at each beat interval
      setRandomKey(Math.random().toString());
    }, beat[Math.floor(Math.random() * beat.length)] * 5);

    return () => clearInterval(interval); // Clean up the interval
  }, []);

  

  return (
    <div className="App">
      <div ref={ref} className="container">
        <Canvas ref={canvasRef}  > 

        <CustomCam position={[2, 3, 50]} fov={75} />
        

          <ShaderArray
            key={randomKey} 
            colors={['#ffffff', '#000000']} 
            amount={amount} 
            rows={amount} 
            horizontalSpacing={horizontalSpacing}
            verticalSpacing={verticalSpacing}
          />
        </Canvas>
        <div className="text-container">
          <div className="text">
            <span>
            "But afterwards there occurred violent earthquakes and floods; and in a single day and night of rain all your warlike men in a body sank into the earth,
            and the island of Atlantis in like manner disappeared, and was sunk beneath the sea."
            </span>
            <span>
            "But afterwards there occurred violent earthquakes and floods; and in a single day and night of rain all your warlike men in a body sank into the earth,
            and the island of Atlantis in like manner disappeared, and was sunk beneath the sea."
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;


