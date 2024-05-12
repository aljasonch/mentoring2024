import React from "react";
import "./style.css";
import Pistol from "../../assets/Asset_14.png";
import Logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (

  <div className="fixed z-30 w-[100%] h-[16%] background-navbar"></div>
      <div className="pr-24 container-2xl flex items-center m-auto fixed z-40 ">
        <div className="relative">
          <img
            src={Logo}
            className="w-[6rem] absolute z-10 m-8 ml-[4rem] shadow-object"
          ></img>
          <img
            src={Pistol}
            className="w-[38.5rem] shadow-object lg:w-[30rem] xl:w-[38.5rem]"
          ></img>
        </div>
        <ul className="flex space-x-[6rem] ml-8 pl-4 pb-16 z-0 lg:space-x-[5rem] 2xl:space-x-[10rem]">
          <Link to="/">
            <div className="w-[9rem] h-[3rem] ">
              <li className="text-[#2B2476] bg-white w-[7rem] 2xl:w-[9rem] 2xl:h-[3rem] h-[2rem] skew-x-[-40deg] shadow-nav rounded-tr-2xl rounded-bl-2xl rounded-tl rounded-br transform hover:scale-[1.2] transition-transform duration-500 ">
                <h1 className="text-[0.875rem] 2xl:text-[1.15rem] 2xl:pr-[0.5rem] 2xl:py-[0.6rem] pr-1 py-1 font-medium skew-x-[40deg] inline-block">
                  HOME
                </h1>
              </li>
            </div>
          </Link>
          <Link to="/faq">
            <div className="w-[9rem] h-[3rem]">
              <li className="text-[#2B2476] bg-white w-[7rem] 2xl:w-[9rem] 2xl:h-[3rem] h-[2rem] skew-x-[-40deg] shadow-nav rounded-tr-2xl rounded-bl-2xl rounded-tl rounded-br transform hover:scale-[1.2] transition-transform duration-500">
                <h1 className="text-[0.875rem] 2xl:text-[1.15rem] 2xl:pr-[0.5rem] 2xl:py-[0.6rem] pr-1 py-1 font-medium skew-x-[40deg] inline-block">
                  FAQ
                </h1>
              </li>
            </div>
          </Link>
          <Link to="about">
            <div className="w-[9rem] h-[3rem]">
              <li className="text-[#2B2476] bg-white w-[7rem] 2xl:w-[9rem] 2xl:h-[3rem] h-[2rem] skew-x-[-40deg] shadow-nav rounded-tr-2xl rounded-bl-2xl rounded-tl rounded-br transform hover:scale-[1.2] transition-transform duration-500">
                <h1
                  className="text-[0.875rem] 2xl:text-[1.15rem] 2xl:pr-[0.5rem] 2xl:py-[0.6rem] pr-1 py-1 font-medium skew-x-[40deg] inline-block"
                >
                  ABOUT US
                </h1>
              </li>
            </div>
          </Link>
          <Link to="/gallery">
            <div className="w-[9rem] h-[3rem]">
              <li className="text-[#2B2476] bg-white w-[7rem] 2xl:w-[9rem] 2xl:h-[3rem] h-[2rem] skew-x-[-40deg] shadow-nav rounded-tr-2xl rounded-bl-2xl rounded-tl rounded-br transform hover:scale-[1.2] transition-transform duration-500">
                <h1
                  className="text-[0.875rem] 2xl:text-[1.15rem] 2xl:pr-[0.5rem] 2xl:py-[0.6rem] pr-1 py-1 font-medium skew-x-[40deg] inline-block"
                >
                  GALLERY
                </h1>
              </li>
            </div>
          </Link>
        </ul>
      </div>
    </nav>

  );
}

export default Navbar;