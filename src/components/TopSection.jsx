import React from "react";
import Vector1 from "../assets/vector1.png";
import Vector2 from "../assets/vector2.png";

const TopSection = ({ count, resolved }) => {
  // console.log(resolved.length)
  return (
    <div className="flex max-md:flex-col justify-between gap-8 px-8">
      <div className="flex flex-col justify-center items-center p-12  text-white flex-[1] rounded-lg gap-4 bg-linear-to-r from-[#632ee3] to-[#9f62f2] relative overflow-hidden">
        <img
          src={Vector1}
          alt=""
          className="object-cover left-0 absolute h-full"
        />
        <img
          src={Vector1}
          alt=""
          className="object-cover right-0 absolute h-full scale-x-[-1]"
        />
        <img
          src={Vector2}
          alt=""
          className="object-cover absolute inset-0 h-full w-full opacity-50"
        />

        <h3 className="text-xl font-medium">In Progress</h3>
        <p className="text-4xl font-bold">{count.length}</p>
      </div>
      <div className="flex flex-col justify-center items-center p-12 bg-linear-to-r from-[#54cf68] to-[#00827a] text-white flex-[1] rounded-lg gap-4 relative overflow-hidden">
        <img
          src={Vector1}
          alt=""
          className="object-cover left-0 absolute h-full"
        />
        <img
          src={Vector1}
          alt=""
          className="object-cover right-0 absolute h-full scale-x-[-1]"
        />
        <img
          src={Vector2}
          alt=""
          className="object-cover absolute inset-0 h-full w-full opacity-50"
        />
        <h3 className="text-xl font-medium">Resolved</h3>
        <p className="text-4xl font-bold">{resolved.length}</p>
      </div>
    </div>
  );
};

export default TopSection;
