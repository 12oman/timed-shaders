import React, { useRef, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import ConsoleLog from './ConsoleLog';

const ShaderComponent = ({ color, initialSize, rotationSpeed, position }) => {
  const meshRef = useRef();
  const [size, setSize] = useState(initialSize + Math.random() * 0.5);
  const colorOffsetRef = useRef(Math.random() * 10);
  const [spin, setSpin] = useState( rotationSpeed * (Math.random() * 0.02));
  const sizeChangeAmount = 0.5;
  const {scene} = useThree();

  // setup an array of random geometries using a declarative approach
  const geometries = [
    // <octahedronGeometry args={[size / 2]} />,
    // <circleGeometry args={[size / 2, 100]} />,
    // <ringGeometry args={[size / 3.141, size / 1.618, 90]} />,
    // nice HDD sized geometry
    <ringGeometry key='ring' args={[1, 4.45, 32]} />

  ];
    
// this line determines whether the geometry is rendered or not
  const geo = useState(Math.random() > 0.93 ? geometries[Math.floor(Math.random() * geometries.length)] : null
  );


  // Function to increase the size
  const increaseSize = () => {
  setSize(size + sizeChangeAmount);
  };

  const increaseSpin = () => {
    setSpin(spin + 0.01);
  };

  // Function to decrease the size
  const decreaseSize = () => {
  setSize(size - sizeChangeAmount);
  };
  
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
    meshRef.current.rotation.x += spin;
    meshRef.current.rotation.y += spin;
    colorOffsetRef.current = (colorOffsetRef.current + 0.01) % 1;
    const newColor = new THREE.Color(`hsl(${80 * colorOffsetRef.current}, ${30 * colorOffsetRef.current}%, ${60 * colorOffsetRef.current}%)`);
    meshRef.current.material.uniforms.color.value = newColor;
  });

  // try an environment map
  // const envMap = new THREE.CubeTextureLoader().load([
  //   '/virtual/39-_DSF0640web-1440x1080.jpg',
  //   '/virtual/63-_DSF0697web-1440x1080.jpg',
  //   '/virtual/65-_DSF0700web-1440x1080.jpg',
  //   '/virtual/67-_DSF0713web-1440x1080.jpg',
  //   '/virtual/52-_DSF0681web-1440x1080.jpg',
  //   '/virtual/37-_DSF0637web-1440x1080.jpg',
  // ]);

  // test the paths to the images
  const testimage = new THREE.TextureLoader().load('/virtual/39-_DSF0640web-1440x1080.jpg');
  <ConsoleLog props={testimage} />

  // set the material
  // const material = new THREE.MeshStandardMaterial({
  //   color: new THREE.Color(color),
  //   envMap: envMap,
  //   roughness: 0.1, 
  //   metalness: 1.0, 
  // });

  // <ConsoleLog props={material} />




  return (
    <mesh ref={meshRef} scale={size} position={position} onPointerOver={increaseSpin} onPointerOut={increaseSpin} onClick={increaseSpin} onContextMenu={decreaseSize}>
      {geo}

      <shaderMaterial
          attach='material'
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
