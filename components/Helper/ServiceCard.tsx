import {
  BugAntIcon,
  CodeBracketIcon,
  CommandLineIcon,
  CursorArrowRaysIcon,
  RocketLaunchIcon,
  ServerIcon,
} from "@heroicons/react/16/solid";
import React, { ElementType } from "react";

interface Props {
  title: string;
  num: string;
}

const iconMapping = {
  "01": CommandLineIcon,
  "02": ServerIcon,
  "03": CodeBracketIcon,
  "04": CursorArrowRaysIcon,
  "05": RocketLaunchIcon,
  "06": BugAntIcon,
};

const ServiceCard = ({ num, title }: Props) => {
  const IconComponent =
    (iconMapping as Record<string, React.ElementType>)[num] || CommandLineIcon;
  return (
    <div className="bg-black/10 custom__service z-[100]  transform rounded-2xl text-center p-6 shadow-md ">
      <IconComponent
        className={"w-[5rem] relative z-[1] mx-auto h-[5rem] text-primary  "}
      />
      <h1 className="text-[25px] md:font-bold font-semibold relative z-[1] text-black/70 mt-[1rem] ">
        {title}
      </h1>
      <p className="text-black/70 font-semibold  text-[15px] opacity-60 mt-[0.8rem] ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non nemo animi pariatur temporibus eligendi voluptatum nobis perspiciatis minima omnis.</p>
      <p className="text-black/70  text-[1.8rem] font-bold top-2 right-4 absolute">{num}</p>
    </div>
  );
};

export default ServiceCard;
