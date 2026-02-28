import React, { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Pen } from "../Components/Penmodel";
import Nav from "../Components/Nav";
import { Hero } from "../Components/Hero";
import Desgin from "../Components/Desgins/Desgin";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "../Components/Footer";

const App = () => {
  useEffect(() => {
    // Initialize Lenis for Smooth Scrolling
    const lenis = new Lenis({
      duration: 1.2, // How long the "smooth" effect lasts
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Apple-style easing
      smoothWheel: true,
      wheelMultiplier: 1,
      orientation: 'vertical',
      gestureOrientation: 'vertical',
    });

    // Synchronize Lenis with GSAP ScrollTrigger
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  return (
    <div className="w-full bg-[#0b0b0d] text-[#f5f5f7] relative selection:bg-white selection:text-black">
      
      {/* 3D Background Layer - Fixed behind everything */}
      <div className="fixed inset-0 w-full h-screen z-0 pointer-events-none">
        <Canvas camera={{ fov: 35, position: [0, 0, 10] }}>
          <ambientLight intensity={1} />
          <directionalLight position={[5, 10, 5]} intensity={2.5} />
          <spotLight position={[0, 2, 10]} angle={0.3} penumbra={1} intensity={1} />
          
          {/* Your Pen component now handles its own GSAP animations */}
          <Pen position={[-0.3, -0.8, 3]} />
        </Canvas>
      </div>

      {/* HTML Scrollable Content Layer */}
      <div className="relative z-10 w-full">
        <Nav />

        <Hero />
        
        
        <Desgin />
        
        <Footer />
      
      </div>
    </div>
  );
};

export default App;