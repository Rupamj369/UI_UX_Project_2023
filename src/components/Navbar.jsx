import React, { useState } from "react";
import { navLinks } from "../constants";
import { logo, close, menu } from "../assets";
const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [tooggle, setTooggle] = useState(false);
  return (
    <nav className="flex justify-between items-center w-full ">
      <img src={logo} alt="logo" className="w-[90px] h-[90px] object-contain" />
      <ul className="list-none  items-center  gap-5 sm:flex hidden ">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-medium text-white cursor-pointer ${
              active === nav.title ? "text-white" : "text-dimWhite"
            } `}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={tooggle ? close : menu}
          alt="menu"
          className="w-[30px] h-[30px] object-contain"
          onClick={() => setTooggle((prev) => !prev)}
        />
        <div
          className={`${
            tooggle ? "flex" : "hidden"
          }  absolute top-20 right-0  p-6  bg-black-gradient mx-2 my-4 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col  items-center  gap-5  ">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-medium text-white cursor-pointer ${
                  active === nav.title ? "text-dimWhite" : "text-dimWhite"
                }`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
