import React from 'react';

const Section4 = () => {
  return (
    <div id="section4" className="w-full h-screen flex flex-col items-center justify-center z-10 relative">
        <div className="flex flex-col items-center gap-64"> {/* Gap created for the Pen to sit in between */}
            <div className="text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tighter">
                    Wireless Magic.
                </h2>
            </div>
            
            <div className="text-center">
                <p className="text-gray-400 max-w-sm">
                    Attaches magnetically. Pairs and charges automatically. 
                    Always ready when inspiration strikes.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Section4;