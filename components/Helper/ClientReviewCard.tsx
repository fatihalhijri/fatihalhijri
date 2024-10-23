import { SparklesIcon, StarIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import React from "react";

interface Props {
  img: string;
  user: string;
  role: string;
}

const ClientReviewCard = ({ img, user, role }: Props) => {
  return (
    <div className="m-2   bg-gray-300 dark:bg-dark transition-all duration-300 rounded-lg">
      <div className="p-4  rounded-xl">
        <Image
          alt={user}
          src={img}
          width={70}
          height={70}
          className="rounded-full mx-auto mt-[2rem]"
        />
        <div className="">
          <SparklesIcon className="w-[6rem] h-[6rem] text-black/70 opacity-15 fixed " />
        </div>
        <p className="text-[15px] text-black/70 dark:text-white opacity-65 mt-[3rem] text-center ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis dicta
          esse hic doloribus fugit consequuntur alias rem distinctio nihil nam!
          A placeat rem facere id minima est ducimus? Maxime, voluptatem.
        </p>
        <div className="flex items-center space-x-1 justify-center mt-[0.4rem]  ">
          <StarIcon className="w-[1.4rem] h-[1.4rem] text-primary " />
          <StarIcon className="w-[1.4rem] h-[1.4rem] text-primary " />
          <StarIcon className="w-[1.4rem] h-[1.4rem] text-primary " />
          <StarIcon className="w-[1.4rem] h-[1.4rem] text-primary " />
          <StarIcon className="w-[1.4rem] h-[1.4rem] text-primary " />
        </div>
        <div className="">
          <SparklesIcon className="w-[6rem] h-[6rem] right-0 text-black/70 opacity-15 fixed " />
        </div>
        <h1 className="text-[20px] text-center text-black/70 dark:text-white opacity-white  mt-[2rem] font-medium ">
          {user}
        </h1>
        <p className="text-primary text-[18px] text-center mb-[3rem]">
          {role}
        </p>
      </div>
    </div>
  );
};

export default ClientReviewCard;
