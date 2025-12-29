import React from 'react';

const Section1 = () => {
  return (
    
    <div id="section1" className='w-full h-screen flex items-center justify-between p-10 relative overflow-hidden'>

       
        <div className='left w-1/2 absolute left-10 md:left-40 z-10'>
             <h3 className='text-xl md:text-2xl font-bold font-[studio-faxien] tracking-tighter text-gray-300 mb-3'>
                Designed for the hand and the mind
            </h3>

            <p className='text-xs md:text-sm ml-5 leading-4 font-medium text-gray-600'>
                Every curve is intentional. <br />
                Every surface refined. <br />
                Nothing extra. Nothing missing.
            </p>
        </div>

        
        <div className="right absolute right-10 bottom-20">
          <h5 className='text-xl md:text-2xl font-bold font-[studio-faxien] tracking-tighter text-gray-300 mb-3'>
                Designed for the hand and the mind
            </h5>
        </div>

    </div>
  )
}

export default Section1