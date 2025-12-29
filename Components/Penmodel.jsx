import React, { useRef, useLayoutEffect } from "react";
import { useGLTF } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Pen = (props) => {
  const { scene } = useGLTF("/models/peeen.glb");
  const penRef = useRef();

  useLayoutEffect(() => {
    if (!penRef.current) return;

    // FIX: Do NOT pass 'penRef' as the second argument to gsap.context here.
    // We want GSAP to look at the global document for the scroll triggers (#section1, etc).
    const ctx = gsap.context(() => {
      
      // --- SECTION 1 ---
      const tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: "#section1",
          start: "top bottom",
          end: "top top",
          scrub: 1,
        },
      });

      tl1.to(penRef.current.position, { x: 4, y: 0, z: 0 })
         .to(penRef.current.rotation, { x: 0, y: Math.PI / 2, z: -0.5 }, "<");

      // --- SECTION 2 ---
      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: "#section2",
          start: "top bottom",
          end: "top top",
          scrub: 1,
        },
      });

      tl2.to(penRef.current.position, { x: -4, y: 1, z: 2 })
         .to(penRef.current.rotation, { x: Math.PI * 2, y: 0, z: 0.5 }, "<");

      // --- SECTION 3 ---
      const tl3 = gsap.timeline({
        scrollTrigger: {
          trigger: "#section3",
          start: "top bottom",
          end: "top top",
          scrub: 1,
        },
      });

      tl3.to(penRef.current.position, { x: 0, y: 0, z: 6 })
         .to(penRef.current.rotation, { x: Math.PI / 4, y: Math.PI, z: 0 }, "<");

    }); // No scope passed here!

    return () => ctx.revert();
  }, []);

  return (
    <group ref={penRef} {...props} dispose={null}>
      <primitive
        object={scene}
        scale={10}
        rotation={[15, Math.PI * 0.1, 2]}
      />
    </group>
  );
};

export default Pen;