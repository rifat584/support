import React from 'react';
import TicketCart from './TicketCart';
import { use , useState} from 'react';
import Aside from './Aside';

const BottomSection = ({showTickets, countProgress, count}) => {
  const ticketsInfo = use(showTickets)

  const [resolved, setResolved]= useState([])
  const showResolved = (issueName)=>{
    const allResolved= [...resolved, issueName];
    setResolved(allResolved)
    console.log(allResolved)
  }

  return (
    <div className='mt-12 mb-4'>
      <h3 className='text-2xl font-bold'>Customer Tickets</h3>
      <div className='flex gap-4'>
      <div className='grid grid-cols-2 gap-4 mt-4'>
        {
          ticketsInfo.map(ticket=><TicketCart key={ticket.id} ticket={ticket} countProgress={countProgress} count={count}></TicketCart>)
        }
      
        
      </div>

      <Aside count={count} showResolved={showResolved} resolved={resolved}></Aside>
      </div>
    </div>
  );
};

export default BottomSection;