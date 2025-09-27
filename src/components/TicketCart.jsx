import React from 'react';
import { toast } from "react-toastify";

const TicketCart = ({ticket, countProgress}) => {
  const {id, title, description, customer, priority, status, createdAt}= ticket;
  const handleClick = ()=>{
    countProgress(ticket)
    toast.success("In-Progress!");
  }
  return (
    <div>
      <div  className='cursor-pointer rounded-lg bg-white p-4' onClick={()=>{handleClick()}}>
        <div className='flex justify-between items-center'>
        <h4 className='mb-2 font-medium text-lg'>{title}</h4>
        <p className={`px-2  rounded-full ${status==="Open"?'bg-[#b9f8cf] text-[#0b5e06]':'bg-[#f8f3b9] text-[#9c7700]'}`}> <span className={`${status==="Open"?'text-[#02a53b]':'text-[#febb0c]'}`}>{<i className="fa-solid fa-circle"></i>}</span> {status}</p>
        </div>
        <p className='mb-2'>{description}</p>
        <div className='flex justify-around'>
        <p>#<span>{id}</span></p>
        <p className={`font-medium ${priority==="High"? 'text-red-500':priority==="Medium"?'text-[#febb0c]':'text-green-500'}`}>{priority}</p>
        <p>{customer}</p>
        <p>{<i className="fa-regular fa-calendar"></i>} {createdAt}</p>
        </div>
      </div>
    </div>
  );
};

export default TicketCart;