import {
  CalendarIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/16/solid";
import Image from "next/image";
import React from "react";

interface Props {
  title: string;
  comment: string;
  image: string;
  date: string;
}

const BlogCard = ({ title, comment, image, date }: Props) => {
  return (
    <div className="bg-black/10">
      <Image
        src={image}
        alt="blog"
        width={300}
        height={300}
        className="object-cover w-[100%] h-[100%]"
      />
      <div className="p-4">
        <div className="mt-[1rem] mb-[1rem] px-3 bg-white w-fit flex items-center space-x-2 rounded-lg">
          <CalendarIcon className="w-[1rem] h-[1rem] text-primary " />
          <p className="text-black/70 text-[14px] opacity-85 ">{date}</p>
        </div>
        <h1 className="text-[20px] opacity-85 hover:text-primary transition-all duration-200 cursor-pointer text-black/70 font-semibold underline  ">
          {title}
        </h1>
        <div className="flex items-center mt-[2rem] justify-between">
          <div className="flex items-center space-x-3  ">
            <ChatBubbleLeftRightIcon className="w-[1.4rem] text-primary" />
            <p className="text-[15px] text-black/70 opacity-85">{comment} Comment</p>
          </div>
          <button className="text-[15px] hover:text-primary transition-all duration-150  text-black/70 font-semibold underline "> Read More</button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
