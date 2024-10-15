import { EnvelopeIcon, MapIcon, PhoneIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-black ">
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem] border-b-[1.4px] pb-5 border-gray-600 border-opacity-40 ">
        <div>
          <div className="font-logo text-white text-[18px]">
            <span className="text-[30px] md:text-[40px] text-primary ">
              F
            </span>
            Atihpowwer
          </div>
          <h1 className="text-[14px] mt-[0.5rem] text-white opacity-70  ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            possimus commodi consequuntur! Ullam recusandae neque voluptatem
            consectetur ad, tempore iusto, eaque totam maiores odit deserunt
            excepturi. In veritatis non nesciunt!
          </h1>
          <p className="mt-[1.3rem] text-primary underline font-semibold ">
            example@gmail.com
          </p>
        </div>
        <div className="md:mx-auto">
          <h1 className="text-white font-semibold mb-[1.4rem] text-[17px] ">
            Quick Link
          </h1>
          <Link href="/#" passHref>
            <p className="text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer hover:text-primary ">
              Home
            </p>
          </Link>
          <Link href="/#about" passHref>
            <p className="text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer hover:text-primary ">
              About
            </p>
          </Link>
          <Link href="/#service" passHref>
          <p className="text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer hover:text-primary ">
            Service
          </p>
          </Link>
          <Link href="/#project" passHref>
          <p className="text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer hover:text-primary ">
            Project
          </p>
          </Link>
          <Link href="/#contact" passHref>
          <p className="text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer hover:text-primary ">
            Contact
          </p>
          </Link>
          
        </div>
        <div className="lg:mx-auto">
          <h1 className="text-white font-semibold mb-[1.4rem] text-[17px]">
            Address
          </h1>
          <div className="flex items-center mt-[1rem]  space-x-2  ">
            <MapIcon className="w-[1rem] h-[1rem] text-primary " />
            <p className="text-[17px] font-normal text-white opacity-75  ">
              Bekasi, Jawa Barat
            </p>
          </div>
          <div className="flex items-center mt-[1rem]  space-x-2  ">
            <EnvelopeIcon className="w-[1rem] h-[1rem] text-primary " />
            <p className="text-[17px] font-normal text-white opacity-75  ">
              fatihalhijri02@gmail.com
            </p>
          </div>
          <div className="flex items-center mt-[1rem]  space-x-2  ">
            <PhoneIcon className="w-[1rem] h-[1rem] text-primary " />
            <p className="text-[17px] font-normal text-white opacity-75  ">
              +62 851-7962-0695
            </p>
          </div>
        </div>
      </div>
      <div className="mt-[1.4rem] w-[80%] mx-auto text-white opacity-70 ">
        &#169; Copyright fatihalhijri02@gmail.com
      </div>
    </div>
  );
};

export default Footer;
