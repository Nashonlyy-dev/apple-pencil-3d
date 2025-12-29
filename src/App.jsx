import React from "react";
import { Canvas } from "@react-three/fiber";
import { Pen } from "../Components/Penmodel";
import Nav from "../Components/Nav";
import { Hero } from "../Components/Hero";
import Desgin from "../Components/Desgins/Desgin";

const App = () => {
  return (
    <div className="w-full bg-[#0b0b0d] text-[#f5f5f7] relative overflow-x-hidden">
      
      {/* 3D Background */}
      <div className="fixed inset-0 w-full h-screen z-0 pointer-events-none">
        <Canvas camera={{ fov: 35, position: [0, 0, 10] }}>
          <ambientLight intensity={1} />
          <directionalLight position={[5, 10, 5]} intensity={2.5} />
          <spotLight position={[0, 2, 10]} angle={0.3} penumbra={1} intensity={1} />
          
          <Pen position={[-0.3, -0.8, 3]} />
        </Canvas>
      </div>

      {/* HTML Content */}
      <div className="relative z-10 w-full">
        <Nav />
        <Hero />
        <Desgin />
        <div className="h-screen w-full"></div>
      </div>
    </div>
  );
};

export default App;