import React from 'react';
import TicketCart from './TicketCart';
import { use } from 'react';
import Aside from './Aside';

const BottomSection = ({showTickets, countProgress}) => {
  const ticketsInfo = use(showTickets)
  // console.log(ticketsInfo)
  return (
    <div className='mt-12 mb-4'>
      <h3 className='text-2xl font-bold'>Customer Tickets</h3>
      <div className='flex gap-4'>
      <div className='grid grid-cols-2 gap-4 mt-4'>
        {
          ticketsInfo.map(ticket=><TicketCart key={ticket.id} ticket={ticket} countProgress={countProgress}></TicketCart>)
        }
      
        
      </div>

      <Aside></Aside>
      </div>
    </div>
  );
};

export default BottomSection;