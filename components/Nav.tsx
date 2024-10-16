import { Bars3CenterLeftIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDarkMode } from "./DarkModeContext";
// import { useDarkMode } from "./DarkModeContext";

interface Props {
  open: () => void;
}



const Nav = ({ open }: Props) => {
  const {darkMode,toggleDarkMode} = useDarkMode()
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
    return () => {
      window.removeEventListener("scroll", handler);
    };
  },[]);
  const stickyStyle = navSticky?'backdrop-blur-sm bg-white/70 shadow-black/20 shadow-sm':''
  return (
    <div className={`fixed w-[100%]  ${stickyStyle} transition-all duration-300 z-[1000] `}>
      <div className="flex items-center h-[8vh] justify-between mx-auto w-[80%] ">
        <div className="font-logo text-black text-[24px]">
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
        {/* <div className="flex items-center space-x-5">
          <button
            onClick={toggleDarkMode}
            className={`py-2 px-4 rounded-md ${
              darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
            }`}
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
          <Bars3CenterLeftIcon
            onClick={open}
            className="w-[2.3rem] md:hidden h-[2.3rem] rotate-180"
          />
        </div> */}
        <Bars3CenterLeftIcon
          onClick={open}
          className="w-[2.3rem] md:hidden h-[2.3rem] text-black rotate-180"
        ></Bars3CenterLeftIcon>
      </div>
    </div>
  );
};

export default Nav;
