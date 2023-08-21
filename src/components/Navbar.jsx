import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 text-black`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <div className="h-8 w-8 rounded-full bg-black flex justify-center items-center">
            <span className="text-white font-bold bg-black">J</span>
          </div>
          <p className={`text-black text-[18px] font-bold cursor-pointer flex`}>
            Jcarz
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title
                  ? "text-white bg-black py-2 px-3"
                  : "text-gray-600 p-2"
              } text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a
                href={`#${nav.id}`}
                className={
                  active === nav.title
                    ? " bg-black py-2 px-3"
                    : "text-gray-600 p-2 hover:text-[#13561e]"
                }
              >
                {nav.title}
              </a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <div className="bg-black p-1 px-[6px]">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[21px] h-[21px] object-contain bg-black"
              onClick={() => setToggle(!toggle)}
            />
          </div>

          {/* <div onClick={() => setToggle(!toggle)} className="block md:hidden">
            {toggle ? <p>x</p> : <p>m</p>}
          </div> */}

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-black absolute top-20 right-0 mx-4 my-2 min-w-[180px] z-10 rounded-2`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4 bg-transparent">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] decoraton-none ${
                    active === nav.title ? "text-white" : "text-gray-400"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`} className="bg-black from-inherit">
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
