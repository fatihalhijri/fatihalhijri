import { CheckIcon } from "@heroicons/react/16/solid";
import React from "react";

interface Props {
  plane: string;
  save: string;
  price: string;
  bg: string;
}

const PriceCard = ({ bg, price, save, plane }: Props) => {
  return (
    <div className="text-center rounded-lg bg-gray-900">
      <div className={`p-6 rounded-lg rounded-b-none ${bg}`}>
        <h1 className="text-white text-[30px]  ">{plane} </h1>
        <p className="text-[16px] text-[#d7d7d7]">
          Try out {plane} Plane Save{" "}
          <span className="text-primary">{save}</span>
        </p>
        <div className="flex justify-center items-center mt-[1rem] space-x-1 ">
          <h1 className="text-[40px] font-bold -500 ">{price}</h1>
          <p className="text-white">/Hour</p>
        </div>
      </div>
      <div className="p-6">
        <div  className="flex items-center space-x-3">
          <CheckIcon  className="w-[1.4rem] h-[1.4rem] text-primary "/>
          <p className="text-[17px] text-white opacity-80 ">Next Js Website</p>
        </div>
        <div  className="flex items-center mt-[1rem] space-x-3">
          <CheckIcon  className="w-[1.4rem] h-[1.4rem] text-primary "/>
          <p className="text-[17px] text-white opacity-80 ">React Js Website</p>
        </div>
        <div  className="flex items-center space-x-3 mt-[1rem]">
          <CheckIcon  className="w-[1.4rem] h-[1.4rem] text-primary "/>
          <p className="text-[17px] text-white opacity-80 ">FullStack Js Website</p>
        </div>
        <div  className="flex items-center space-x-3 mt-[1rem] mb-[1rem]">
          <CheckIcon  className="w-[1.4rem] h-[1.4rem] text-primary "/>
          <p className="text-[17px] text-white opacity-80 ">Authentication</p>
        </div>
        <div  className="flex items-center space-x-3">
          <CheckIcon  className="w-[1.4rem] h-[1.4rem] text-primary "/>
          <p className="text-[17px] text-white opacity-80 ">Node Js</p>
        </div>
      </div>
      <button className="mt-[1.5rem] px-8 py-4 bg-blue-600 text-white block w-[100%] hover:bg-blue-300 transition-all duration-300 ">Get Started</button>
    </div>
  );
};

export default PriceCard;
