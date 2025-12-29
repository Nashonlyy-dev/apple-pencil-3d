import React from "react";

export const Hero = () => {
  return (
    <div className="w-full h-screen relative flex flex-col items-center justify-between py-20 overflow-hidden">
      <div className="z-10 text-center">
        <h3 className="text-xl md:text-2xl uppercase font-medium tracking-[0.2em] text-gray-400">
          Introducing
        </h3>
      </div>

      <div className="z-10 text-center">
        <h1 className="text-6xl md:text-8xl uppercase font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">
          Apple Pencil
        </h1>
        <h3 className="text-md md:text-xl uppercase font-medium tracking-[0.2em] text-gray-400">
          Precision, Perfected
        </h3>
        <h6 className="text-[8px] uppercase font-xs tracking-[0.2em] text-gray-400">
          Designed to disappear. Built to create.
        </h6>
      </div>
    </div>
  );
};
