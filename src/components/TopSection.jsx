import React from 'react';

const TopSection = ({count, resolved}) => {
  // console.log(resolved.length)
  return (
    <div className='flex max-md:flex-col justify-between gap-8 px-8'>
      <div className="flex flex-col justify-center items-center p-12  text-white flex-[1] rounded-lg gap-4 bg-linear-to-r from-[#632ee3] to-[#9f62f2]">
        <img src="../assets/vector1.png" alt="" />
        <h3 className='text-xl font-medium'>In Progress</h3>
        <p className='text-4xl font-bold'>{count.length}</p>
      </div>
      <div className='flex flex-col justify-center items-center p-12 bg-linear-to-r from-[#54cf68] to-[#00827a] text-white flex-[1] rounded-lg gap-4 ]'>
         <img src="../assets/vector1.png" alt="" />
        <h3 className='text-xl font-medium'>Resolved</h3>
        <p className='text-4xl font-bold'>{resolved.length}</p>
      </div>
    </div>
  );
};

export default TopSection;