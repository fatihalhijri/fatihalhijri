import { CheckIcon } from "@heroicons/react/16/solid";
import React from "react";

const About = () => {
  
  return (
    <div className="mt-[-3.5rem] bg-black pb-[3rem] ">
      <div className="w-[80%] pt-[5rem] sm:pt-[7rem] md:pt-[10rem] mx-auto items-center grid grid-cols-1 lg:grid-cols-2 gap-[2rem] ">
        <div className="">
          <p className="heading__mini" id="about">About Me</p>
          <h1 className="heading__primary">
            Inteermediate <span className="text-primary">Website</span> for
            your bussiness{" "}
          </h1>
          <p className="text-[15px] mt-[1.5rem] text-white opacity-75">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla
            laboriosam commodi id iusto optio quas eos ipsam quisquam corporis
            velit soluta ullam provident, assumenda, praesentium similique
            facilis cumque suscipit sint!
          </p>
          <div className="mt-[2rem] space-y-3 ">
            <div className="flex items-end space-x-4 ">
              <CheckIcon className="w-[2rem] h-[2rem] text-primary "></CheckIcon>
              <p className="text-[18px] text-white">FrontEnd Developer</p>
            </div>
            <div className="flex items-end space-x-4 ">
              <CheckIcon className="w-[2rem] h-[2rem] text-primary "></CheckIcon>
              <p className="text-[18px] text-white">Backend Developer</p>
            </div>
            <div className="flex items-end space-x-4 ">
              <CheckIcon className="w-[2rem] h-[2rem] text-primary "></CheckIcon>
              <p className="text-[18px] text-white">Web Developer</p>
            </div>
            <div className="flex items-end space-x-4 ">
              <CheckIcon className="w-[2rem] h-[2rem] text-primary "></CheckIcon>
              <p className="text-[18px] text-white">FullStack Developer</p>
            </div>
          </div>
        </div>
        <div className="lg:ml-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-[2rem] ">
            <div data-aos="zoom-in" data-aos-anchor-placement="top-center"  className="p-6 text-center bg-yellow-500">
              <p className="text-[50px] text-black font-bold ">2</p>
              <p className="text-[20px] text-black font-bold ">
                Years experience
              </p>
            </div>
            <div data-aos="zoom-in" data-aos-anchor-placement="top-center" data-aos-delay="200" className="p-6 text-center bg-yellow-500">
              <p className="text-[50px] text-black font-bold ">200 +</p>
              <p className="text-[20px] text-black font-bold ">
                Happy Client
              </p>
            </div>
            <div data-aos="zoom-in" data-aos-anchor-placement="top-center" data-aos-delay="400" className="p-6 text-center bg-yellow-500">
              <p className="text-[50px] text-black font-bold ">1M +</p>
              <p className="text-[20px] text-black font-bold ">
                Project Done
              </p>
            </div>
            <div data-aos="zoom-in" data-aos-anchor-placement="top-center" data-aos-delay="600" className="p-6 text-center bg-yellow-500">
              <p className="text-[50px] text-black font-bold ">2 +</p>
              <p className="text-[20px] text-black font-bold ">
                Award Wins
              </p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default About;
