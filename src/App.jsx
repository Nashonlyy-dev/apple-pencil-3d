import React, { useLayoutEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Pen } from "../Components/Penmodel";
import Nav from "../Components/Nav";
import { Hero } from "../Components/Hero";
import Desgin from "../Components/Desgins/Desgin";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const penRef = useRef(null);
  const mainContainerRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // SECTION 1 ANIMATION
      const tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: "#section1",
          start: "top bottom",
          end: "top top",
          scrub: 1,
        },
      });

      if (penRef.current) {
        tl1
          .to(penRef.current.position, { x: 4, y: 0, z: 0, duration: 2 })
          .to(
            penRef.current.rotation,
            { x: 0, y: Math.PI / 2, z: -0.5, duration: 2 },
            "<"
          );
      }

      // SECTION 2 ANIMATION
      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: "#section2",
          start: "top bottom",
          end: "top top",
          scrub: 1,
        },
      });

      if (penRef.current) {
        tl2
          .to(penRef.current.position, { x: -4, y: 1, z: 5, duration: 2 })
          .to(
            penRef.current.rotation,
            { x: Math.PI * 2, y: 0, z: 0, duration: 2 },
            "<"
          );
      }
    }, mainContainerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={mainContainerRef}
      className="w-full bg-[#0b0b0d] text-[#f5f5f7] relative"
    >
      <div className="fixed inset-0 w-full h-screen z-0 pointer-events-none">
        <Canvas camera={{ fov: 35, position: [0, 0, 10] }}>
          <ambientLight intensity={1} />
          <directionalLight position={[5, 10, 5]} intensity={2.5} />
          <spotLight
            position={[0, 2, 10]}
            angle={0.3}
            penumbra={1}
            intensity={1}
          />

          <Pen ref={penRef} position={[-0.3, -0.8, 3]} />
        </Canvas>
      </div>

      <div className="relative z-10 w-full">
        <Nav />
        <Hero penRef={penRef} /> <Desgin />
        <div className="h-screen w-full bg-transparent"></div>
      </div>
    </div>
  );
};

export default App;
