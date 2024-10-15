import { XMarkIcon } from "@heroicons/react/16/solid";
import React from "react";

interface Props {
  showNav: boolean;
  closeNav: () => void;
}


const NavMobile = ({ closeNav, showNav }: Props) => {
  const navOpenStyle = showNav ? "translate-x-0" : "translate-x-[-100%]";
  return (
    <div className="">
      <div
        className={`fixed ${navOpenStyle} top-0 transform transition-all duration-300 z-[10000] left-0 right-0 bottom-0 bg-black opacity-70 w-[100vw] h-[100vh]`}
      ></div>
      <ul
        className={`text-white ${navOpenStyle} fixed flex items-center justify-center flex-col h-[100%] w-[60%] transform transition-all duration-300 delay-300 bg-red-600 space-y-14  z-[10006] `}
      >
        <li>
          <a href="#" className="nav__link text-[25px] sm:text-[30px]  ">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="nav__link text-[25px] sm:text-[30px]  ">
            About
          </a>
        </li>
        <li>
          <a href="#service" className="nav__link text-[25px] sm:text-[30px]  ">
            Service
          </a>
        </li>
        <li>
          <a href="#blog" className="nav__link text-[25px] sm:text-[30px]  ">
            Blog
          </a>
        </li>
        <li>
          <a href="#contact" className="nav__link text-[25px] sm:text-[30px]  ">
            Contact
          </a>
        </li>
        <XMarkIcon
          onClick={closeNav}
          className="absolute top-[-1.4rem]  right-[1.4rem] h-[2.2rem] text-white "
        ></XMarkIcon>
      </ul>
    </div>
  );
};

export default NavMobile;
