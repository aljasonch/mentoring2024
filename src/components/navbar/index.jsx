import React from "react";
import "./style.css";
import Pistol from "../../assets/Asset_14.webp";
import Logo from "../../assets/Logo.webp";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="fixed z-30 w-full xl:h-28 md:h-[60px] lg:h-20 background-navbar"></div>
      <div className="w-full mx-auto flex items-center justify-between fixed z-40">
        <div className="relative">
          <img
            src={Logo}
            className="xl:w-24 absolute z-10 xl:m-8 md:m-5 md:ml-8 xl:ml-16 shadow-object md:w-12 lg:w-16 lg:ml-12 lg:m-6"
            alt="Logo"
          />
          <img
            src={Pistol}
            className="xl:w-[34rem] md:w-72 lg:w-96 shadow-object"
            alt="Pistol"
          />
        </div>
        <ul className="flex xl:pb-16 mx-auto md:pb-6 lg:pb-10 z-0 xl:gap-x-20 md:gap-x-8 lg:gap-x-12">
          <Link to="/">
            <div className="xl:w-36 xl:h-12 md:w-24 md:h-10">
              <li className="text-[#2B2476] bg-white xl:w-28 xl:h-8 md:w-20 md:h-6 -skew-x-[40deg] shadow-nav rounded-tr-2xl rounded-bl-2xl rounded-tl rounded-br transform hover:scale-110 transition-transform duration-500">
                <h1 className="xl:text-sm md:text-[10px] xl:pr-2 md:pr-0.5 xl:py-2 md:relative md:top-[-2.5px] font-semibold skew-x-[40deg] inline-block">
                  HOME
                </h1>
              </li>
            </div>
          </Link>
          <Link to="/faq">
            <div className="xl:w-36 xl:h-12 md:w-24 md:h-10">
              <li className="text-[#2B2476] bg-white xl:w-28 xl:h-8 md:w-20 md:h-6 -skew-x-[40deg] shadow-nav rounded-tr-2xl rounded-bl-2xl rounded-tl rounded-br transform hover:scale-110 transition-transform duration-500">
                <h1 className="xl:text-sm md:text-[10px]  xl:pr-2 md:pr-1 xl:py-2 md:relative md:top-[-2.5px]  font-semibold skew-x-[40deg] inline-block">
                  FAQ
                </h1>
              </li>
            </div>
          </Link>
          <Link to="/about">
            <div className="xl:w-36 xl:h-12 md:w-24 md:h-10">
              <li className="text-[#2B2476] bg-white xl:w-28 xl:h-8 md:w-20 md:h-6 -skew-x-[40deg] shadow-nav rounded-tr-2xl rounded-bl-2xl rounded-tl rounded-br transform hover:scale-110 transition-transform duration-500">
                <h1 className="xl:text-sm md:text-[10px]  xl:pr-1 xl:py-2 md:relative md:top-[-2.5px]  font-semibold skew-x-[40deg] inline-block">
                  ABOUT US
                </h1>
              </li>
            </div>
          </Link>
          <Link to="/gallery">
            <div className="xl:w-36 xl:h-12 md:w-24 md:h-10">
              <li className="text-[#2B2476] bg-white xl:w-28 xl:h-8 md:w-20 md:h-6 -skew-x-[40deg] shadow-nav rounded-tr-2xl rounded-bl-2xl rounded-tl rounded-br transform hover:scale-110 transition-transform duration-500">
                <h1 className="xl:text-sm md:text-[10px]  xl:pr-1 xl:py-2 md:relative md:top-[-2.5px]  font-semibold skew-x-[40deg] inline-block">
                  GALLERY
                </h1>
              </li>
            </div>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
