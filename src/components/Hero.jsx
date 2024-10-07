// import React from 'react';

// const Hero = () => {
//   return (
//     <div className='flex flex-col sm:flex-row border border-gray-400'>
//       {/* For the left side of hero */}
//       <div className='flex flex-col sm:w-1/2 items-center justify-center py-10 sm:py-0 w-full'>
//         <div className='flex items-center gap-2'>
//           <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
//           <p className='font-medium text-sm md:text-base'>The Best Sellers</p>
//         </div>
//         <h1 className='text-3xl sm:py-3 lg:text-5xl leading-relaxed text-center'>Latest Arrivals</h1>
//         <div className='flex items-center gap-2'>
//           <p className='font-semibold text-sm md:text-base'>Shop NNN</p>
//           <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
//         </div>
//       </div>

//       {/* Placeholder for right side (optional) */}
//       <div className='hidden sm:flex sm:w-1/2 items-center justify-center'>
//         {/* Add content for the right side if needed */}
//       </div>
//     </div>
//   );
// }

// export default Hero;

import React from 'react';
import { assets } from '../assets/assets';
const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-400 w-full '>
      {/* For the left side of hero */}
      <div className='flex flex-col sm:w-1/2 items-center justify-center py-10 sm:py-0 w-full'>
        <div className='flex items-center gap-2'>
          <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
          <p className='font-medium text-sm md:text-base'>The Best Sellers</p>
        </div>
        <h1 className='text-3xl sm:py-3 lg:text-5xl leading-relaxed text-center'>Latest Arrivals</h1>
        <div className='flex items-center gap-2'>
          <p className='font-semibold text-sm md:text-base'>Shop NNN</p>
          <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
        </div>
      </div>

      {/* Placeholder for right side (optional) */}
      <div className='hidden sm:flex sm:w-1/2 items-center justify-center'>
        {/* Add content for the right side if needed */}
      </div>
      <img className='w-full sm:w-1/2' src={assets.hero_img} alt="hero" />
    </div>
  );
}

export default Hero;
