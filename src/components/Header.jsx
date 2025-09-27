import React from "react";

const Header = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm max-md:flex-col justify-between max-w-[1920px] mx-auto px-16">
      <div>
        <a className="text-2xl font-bold" href="#">CS- Ticket System</a>
      </div>
      <div>
        <ul className="flex max-md:flex-wrap items-center max-md:justify-center gap-4 text-black font-medium">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
          <li>
            <a href="#">Changelog</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Download</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        <button className="btn btn-primary border-none bg-linear-to-r from-[#632ee3] to-[#9f62f2] text-white">{<i className="fa-solid fa-plus"></i>} New Ticket</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
