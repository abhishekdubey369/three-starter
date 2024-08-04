import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Environment } from "@react-three/drei";

function App() {
  return (
    <Canvas shadows camera={{ position: [3, 3, 3], fov: 30 }}>
      <Experience />
    </Canvas>
  );
}

export default App;
