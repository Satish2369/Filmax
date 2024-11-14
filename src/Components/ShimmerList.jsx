import React from 'react';

const ShimmerList = () => {
  return (
    <div className='shimmer wrapper flex gap-7 bg-transparent bg-opacity-70 h-fit rounded-md  pl-[3vw] py-[3vw] font-["Neue_Montreal"] overflow-x-auto whitespace-nowrap scrollbar-hide w-screen'>
      {Array.from({ length: 20 }).map((_, index) => (
        <div key={index} className="w-[10vw] h-[53vw] md:w-[18vw] md:h-[22vw] overflow-hidden rounded-md flex-shrink-0 bg-white">
          <img
            src="https://cdn11.bigcommerce.com/s-y76tsfzldy/images/stencil/500x659/products/8943/20343/360_F_400243185_BOxON3h9avMUX10RsDkt3pJ8iQx72kS3__11604.1644964932.jpg?c=1"
            alt="Placeholder"
            className="w-full h-full object-cover"  // Adjust object-fit here if needed
          />
        </div>
      ))}
    </div>
  );
};

export default ShimmerList;
