import { Bars3CenterLeftIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import DarkModeToggle from "./DarkMode";

interface Props {
  open: () => void;
}

const Nav = ({ open }: Props) => {
  const [navSticky, setNavSticky] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

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
  }, []);
  const stickyStyle = navSticky
    ? "backdrop-blur-sm dark:bg-dark bg-white/70 shadow-black/20 shadow-sm"
    : "";
  return (
    <div
      className={`fixed w-[100%]  ${stickyStyle} transition-all duration-300 z-[1000] ${
        darkMode && "dark"
      } `}
    >
      <div className="flex items-center h-[8vh] justify-between mx-auto w-[80%] ">
        <div className="font-logo text-black dark:text-white text-[24px]">
          <span className="text-[30px]  md:text-[40px] text-primary">P</span>
          ortofolio
        </div>
        <ul className="md:flex hidden items-center  space-x-10">
          <Link href="/#" passHref>
            <p className="nav__link">Beranda</p>
          </Link>

          <Link href="/#tentang" passHref>
            <p className="nav__link">Tentang</p>
          </Link>

          {/* <Link href="/#service" passHref>
            <p className="nav__link">Service</p>
          </Link> */}

          {/* <Link href="/#blog" passHref>
            <p className="nav__link">Blog</p>
          </Link> */}

          <Link href="/#proyek" passHref>
            <p className="nav__link">Proyek</p>
          </Link>

        <DarkModeToggle />
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
          className="w-[2.3rem] md:hidden h-[2.3rem] text-black dark:text-white rotate-180"
        ></Bars3CenterLeftIcon>
      </div>
    </div>
  );
};

export default Nav;
