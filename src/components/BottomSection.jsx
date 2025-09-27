import React from "react";
import TicketCart from "./TicketCart";
import Aside from "./Aside";

const BottomSection = ({ticketsInfo,countProgress}) => {
  return (
    <div className="mt-12 mb-4 px-4 lg:w-3/4">
      <h3 className="text-2xl font-bold">Customer Tickets</h3>
      <div className="grid md:grid-cols-2 gap-4 mt-4">
        {ticketsInfo.map((ticket) => (
          <TicketCart
            key={ticket.id}
            ticket={ticket}
            countProgress={countProgress}
          ></TicketCart>
        ))}
      </div>
    </div>
  );
};

export default BottomSection;
