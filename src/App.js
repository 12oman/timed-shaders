import logo from "./logo.svg";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import ShaderArray from "./components/ShaderArray";
// import ShapesArray from "./components/ShapesArray";
import ShaderComponent from "./components/ShaderComponent";

// Usage inside your app
const App = () => {
  return (
    <Canvas> 
      <ShaderArray colors={['#ff0000', '#00ff00']} amount={5} /> 
      <ShaderArray colors={['#ff0000', '#00ff00']} amount={5} /> 
      {/* <ShaderComponent color="#ff0000" size={1} rotationSpeed={0.01} /> */}
    </Canvas>
  );
};

export default App;
