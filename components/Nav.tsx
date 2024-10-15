import { Bars3CenterLeftIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface Props {
  open: () => void;
}



const Nav = ({ open }: Props) => {
  const [navSticky, setNavSticky] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) {
        setNavSticky(true);
      }
      if (window.scrollY <= 90) {
        setNavSticky(false);
      }
    };
    window.addEventListener("scroll", handler);
  },[]);
  const stickyStyle = navSticky?'bg-[#212428] shadow-gray-900 shadow-sm':''
  return (
    <div className={`fixed w-[100%] ${stickyStyle} transition-all duration-300 z-[1000] `}>
      <div className="flex items-center h-[12vh] justify-between mx-auto w-[80%] ">
        <div className="font-logo text-white text-[24px]">
          <span className="text-[30px] md:text-[40px] text-primary">P</span>
          ortofolio
        </div>
        <ul className="md:flex hidden items-center space-x-10">
          
          <Link href="/#" passHref>
            <p className="nav__link">Home</p>
          </Link>
          
          <Link href="/#about" passHref>
            <p className="nav__link">About</p>
          </Link>
         
          <Link href="/#service" passHref>
            <p className="nav__link">Service</p>
          </Link>
          
          <Link href="/#blog" passHref>
            <p className="nav__link">Blog</p>
          </Link>
          
          <Link href="/#contact" passHref>
            <p className="nav__link">Contact</p>
          </Link>
        </ul>
        <Bars3CenterLeftIcon
          onClick={open}
          className="w-[2.3rem] md:hidden h-[2.3rem] text-white rotate-180"
        ></Bars3CenterLeftIcon>
      </div>
    </div>
  );
};

export default Nav;
