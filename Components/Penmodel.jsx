import React, { useRef, useLayoutEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from "three";

gsap.registerPlugin(ScrollTrigger);

export const Pen = (props) => {
  const { scene } = useGLTF("/models/peeen.glb");
  const penRef = useRef();

  // 1. IDLE ANIMATION: Makes the pen feel "alive" even when not scrolling
  useFrame((state) => {
    if (penRef.current) {
      const t = state.clock.getElapsedTime();
      // Gentle floating movement
      penRef.current.position.y += Math.sin(t * 0.5) * 0.002;
      // Very slight breathing rotation
      penRef.current.rotation.z += Math.cos(t * 0.5) * 0.001;
    }
  });

  useLayoutEffect(() => {
    if (!penRef.current) return;


    const ctx = gsap.context(() => {
    
      const scrollConfig = {
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
      };

      // --- SECTION 1: Slide Right ---
      const tl1 = gsap.timeline({
        scrollTrigger: {
          ...scrollConfig,
          trigger: "#section1",
        },
      });

      tl1
        .to(penRef.current.position, {
          x: 3.5,
          y: 0,
          z: 0,
          ease: "power2.inOut",
        })
        .to(
          penRef.current.rotation,
          { x: 0, y: Math.PI / 2, z: -0.5, ease: "power2.inOut" },
          "<"
        );

      // --- SECTION 2: Slide Left & Rotate ---
      const tl2 = gsap.timeline({
        scrollTrigger: {
          ...scrollConfig,
          trigger: "#section2",
        },
      });

      tl2
        .to(penRef.current.position, {
          x: -3.5,
          y: 0.5,
          z: 2,
          ease: "power2.inOut",
        })
        .to(
          penRef.current.rotation,
          { x: Math.PI * 2, y: 0, z: 0.5, ease: "power2.inOut" },
          "<"
        );

      // --- SECTION 3: The Macro Zoom (New Idea) ---
      const tl3 = gsap.timeline({
        scrollTrigger: {
          ...scrollConfig,
          trigger: "#section3",
        },
      });
      // --- SECTION 4: Magnetic Charging (Horizontal Zoom) ---
      const tl4 = gsap.timeline({
        scrollTrigger: {
          trigger: "#section4",
          start: "top bottom",
          end: "top top",
          scrub: true,
        },
      });

      tl4
        .to(penRef.current.position, {
          x: 0,
          y: 0,
          z: 8, 
          ease: "power2.inOut",
        })
        .to(
          penRef.current.rotation,
          {
            x: Math.PI / 2,
            y: 0,
            z: Math.PI / 2, 
            ease: "power2.inOut",
          },
          "<"
        );

      // --- SECTION 5: Lighting Transition ---
      const tl5 = gsap.timeline({
        scrollTrigger: {
          trigger: "#section5",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // --- SECTION 6: The Grand Finale ---


     
      tl5
        .to(penRef.current.rotation, { y: Math.PI * 4, ease: "none" })
        
        .to("body", { backgroundColor: "#1a130f", duration: 1 }, 0) 
        .to("body", { backgroundColor: "#0b0b0d", duration: 1 }); 

      
      tl3
        .to(penRef.current.position, { x: 0, y: 0, z: 7, ease: "expo.out" })
        .to(
          penRef.current.rotation,
          { x: Math.PI / 2, y: Math.PI, z: 0, ease: "expo.out" },
          "<"
        );

        const tl6 = gsap.timeline({
  scrollTrigger: {
    trigger: "#section6",
    start: "top bottom",
    end: "top center",
    scrub: true,
  },
});

tl6.to(penRef.current.position, { 
    x: 0, 
    y: -1, // Lowered slightly to make room for the big text
    z: 4, 
    ease: "power2.out" 
})
.to(penRef.current.rotation, { 
    x: 0, 
    y: Math.PI * 6, // Spins 3 times during the scroll
    z: 0, 
    ease: "power2.out" 
}, "<");
    });

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
