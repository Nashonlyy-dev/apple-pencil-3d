import React, { forwardRef } from "react";
import { useGLTF, Float } from "@react-three/drei";

export const Pen = forwardRef((props, ref) => {
  const { scene } = useGLTF("/models/peeen.glb");

  return (
    <group ref={ref} {...props}>
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
        <primitive
          object={scene}
          scale={10}
          rotation={[15, Math.PI * 0.1, 2]}
        />
      </Float>
    </group>
  );
});

export default Pen;
