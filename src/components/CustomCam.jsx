import { useEffect } from 'react';
import { useThree } from '@react-three/fiber';

const CustomCam = ({ position = [0, 0, 10], fov = 60 }) => {
  const { camera } = useThree();

  useEffect(() => {
    camera.position.set(...position);
    camera.fov = fov;
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  }, [camera, position, fov]);

  return null; // This component doesn't render anything itself
};

export default CustomCam;
