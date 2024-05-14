import React from "react";
import "./style.css";
import Pistol from "../../assets/Asset_14.webp";
import Logo from "../../assets/Logo.webp";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="fixed z-30 w-[100%] h-[16%] background-navbar"></div>
      <div className="pr-24 container-2xl flex items-center m-auto fixed z-40">
        <div className="relative">
          <img
            src={Logo}
            className="w-[6rem] absolute z-10 m-8 ml-[4rem] shadow-object"
            alt="Logo"
          />
          <img
            src={Pistol}
            className="w-[38.5rem] shadow-object lg:w-[30rem] xl:w-[38.5rem]"
            alt="Pistol"
          />
        </div>
        <ul className="flex space-x-[6rem] ml-8 pl-4 pb-16 z-0 lg:space-x-[5rem]">
          <Link to="/">
            <div className="w-[9rem] h-[3rem]">
              <li className="text-[#2B2476] bg-white w-[7rem]  h-[2rem] skew-x-[-40deg] shadow-nav rounded-tr-2xl rounded-bl-2xl rounded-tl rounded-br transform hover:scale-[1.2] transition-transform duration-500">
                <h1 className="text-[0.875rem] pr-1 py-[0.3rem] font-semibold skew-x-[40deg] inline-block">
                  HOME
                </h1>
              </li>
            </div>
          </Link>
          <Link to="/faq">
            <div className="w-[9rem] h-[3rem]">
              <li className="text-[#2B2476] bg-white w-[7rem]  h-[2rem] skew-x-[-40deg] shadow-nav rounded-tr-2xl rounded-bl-2xl rounded-tl rounded-br transform hover:scale-[1.2] transition-transform duration-500">
                <h1 className="text-[0.875rem] pr-1 py-[0.3rem] font-semibold skew-x-[40deg] inline-block">
                  FAQ
                </h1>
              </li>
            </div>
          </Link>
          <Link to="/about">
            <div className="w-[9rem] h-[3rem]">
              <li className="text-[#2B2476] bg-white w-[7rem]  h-[2rem] skew-x-[-40deg] shadow-nav rounded-tr-2xl rounded-bl-2xl rounded-tl rounded-br transform hover:scale-[1.2] transition-transform duration-500">
                <h1 className="text-[0.875rem] pr-1 py-[0.3rem] font-semibold skew-x-[40deg] inline-block">
                  ABOUT US
                </h1>
              </li>
            </div>
          </Link>
          <Link to="/gallery">
            <div className="w-[9rem] h-[3rem]">
              <li className="text-[#2B2476] bg-white w-[7rem]  h-[2rem] skew-x-[-40deg] shadow-nav rounded-tr-2xl rounded-bl-2xl rounded-tl rounded-br transform hover:scale-[1.2] transition-transform duration-500">
                <h1 className="text-[0.875rem]  pr-1 py-[0.3rem] font-semibold skew-x-[40deg] inline-block">
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
