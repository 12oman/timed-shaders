import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const ShaderComponent = ({ color, size, rotationSpeed }) => {
  const meshRef = useRef();

  // Fragment shader code
  const fragmentShader = `
    uniform vec3 color;
    void main() {
      gl_FragColor = vec4(color, 1.0);
    }
  `;

  // Vertex shader code
  const vertexShader = `
    varying vec3 vUv;
    void main() {
      vUv = position;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;

  // Update the mesh on every frame
  useFrame((state) => {
    meshRef.current.rotation.x += rotationSpeed;
    meshRef.current.rotation.y += rotationSpeed;
    meshRef.current.material.uniforms.color.value = new THREE.Color(color);
  });

  return (
    <mesh ref={meshRef} scale={size}>
      <boxGeometry args={[1, 1, 1]} /> {/* Updated line */}
      <shaderMaterial
        attach="material"
        args={[{
          uniforms: { color: { value: new THREE.Color(color) } },
          vertexShader,
          fragmentShader,
        }]}
      />
    </mesh>
  );
};

export default ShaderComponent;
