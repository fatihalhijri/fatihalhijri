import React from "react";
import ServiceCard from "./Helper/ServiceCard";

const Service = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-white ">
      <div className="text-center text-white">
        <p className="heading__mini" id="service">Popular Service</p>
        <h1 className="heading__primary">
          My Social <span className="text-primary">Service</span> For You
        </h1>
      </div>
      <div className="pt-[5rem] w-[80%]  mx-auto grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-[3rem] items-center ">
        <div>
            <ServiceCard title="React Website" num="01" />
        </div>
        <div>
            <ServiceCard title="Next Website" num="02" />
        </div>
        <div>
            <ServiceCard title="FullStack Website" num="03" />
        </div>
        <div>
            <ServiceCard title="Node JS Apis" num="04" />
        </div>
        <div>
            <ServiceCard title="Simantic UI Website" num="05" />
        </div>
        <div>
            <ServiceCard title="Bug Fixing Website" num="06" />
        </div>
      </div>
    </div>
  );
};

export default Service;
