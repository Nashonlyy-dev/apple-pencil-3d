import React from 'react';

const Section6 = () => {
  return (
    <div id="section6" className="w-full h-screen flex flex-col items-center justify-center z-10 relative bg-transparent">
        <div className="text-center">
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-8">
                Pencil Pro.
            </h1>
            <p className="text-xl text-gray-400 mb-10">Dream it. Sketch it. Jot it down.</p>
            
            <button className="px-10 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform duration-300">
                Buy Now
            </button>
            
            <p className="mt-6 text-sm text-gray-500">From $129 or $10.75/mo. for 12 mo.*</p>
        </div>
    </div>
  )
}

export default Section6;