import React, { useState } from 'react';
import TopSection from './TopSection';
import BottomSection from './BottomSection';

import { Suspense } from 'react';


const Main = ({showTickets}) => {
  const [count, setCount]= useState([]);

  const countProgress=(ticket)=>{
    console.log(ticket)
    const newCount = [...count, ticket];
    setCount(newCount);
  }


  return (
    <div className='max-w-[1440px] mx-auto my-12'>
      <TopSection count={count}></TopSection>
      <Suspense fallback={<p>Data is Loading...</p>}>
      <BottomSection showTickets={showTickets} countProgress={countProgress} count={count}></BottomSection>
      </Suspense>
      
    </div>
  );
};

export default Main;