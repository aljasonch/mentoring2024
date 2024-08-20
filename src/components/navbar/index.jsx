import React, { useState } from "react";
import "./style.css";
import Pistol from "../../assets/9.webp";
import Logo from "../../assets/Logo.webp";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <div className="fixed z-30 w-full sm:h-32  xss:h-[4.4rem] xs:h-20 heightMiniSmartphone heightSmartphone backdrop-blur xl:h-24 md:h-36 lg:h-16 background-navbar"></div>
      <div className="w-full mx-auto flex items-center justify-between fixed z-40">
        <div className="relative">
          <img
            src={Logo}
            className="w-12 sm:w-20 sm:m-8 mx-6 mt-6 md:w-28 mb-8 xl:w-20 absolute z-10 xl:m-6 md:ml-8 xl:ml-16 shadow-object md:m-10 lg:w-12 lg:ml-12 lg:m-5"
            alt="Logo"
          />
          <img
            src={Pistol}
            className="xl:w-[28rem] lg:w-80 shadow-object md:w-[650px]"
            alt="Pistol"
          />
        </div>
        <div className="hidden lg:flex mx-auto">
          <ul className="flex xl:pb-12 mx-auto md:pb-6 lg:pb-10 z-0  xl:gap-x-12 md:gap-x-8 lg:gap-x-8">
            <Link to="/">
              <div className="xl:w-36 xl:h-12 md:w-24 md:h-10">
                <li className="text-[#2B2476] bg-white xl:w-28 xl:h-8 md:w-20 md:h-6 -skew-x-[40deg] shadow-nav rounded-tr-2xl rounded-bl-2xl rounded-tl rounded-br transform hover:scale-110 transition-transform duration-500">
                  <h1 className=" lg:text-[10px] xl:text-sm  2xl:pr-2 2xl:top-[-6px] xl:pr-2 md:pr-0.5 2xl:py-3 xl:py-2 md:relative md:top-[-2.5px] font-semibold skew-x-[40deg] inline-block">
                    HOME
                  </h1>
                </li>
              </div>
            </Link>
            <Link to="/faq">
              <div className="xl:w-36 xl:h-12 md:w-24 md:h-10">
                <li className="text-[#2B2476] bg-white xl:w-28 xl:h-8 md:w-20 md:h-6 -skew-x-[40deg] shadow-nav rounded-tr-2xl rounded-bl-2xl rounded-tl rounded-br transform hover:scale-110 transition-transform duration-500">
                  <h1 className=" lg:text-[10px] xl:text-sm  2xl:pr-2 2xl:top-[-6px] xl:pr-2 md:pr-1 2xl:py-3 xl:py-2 md:relative md:top-[-2.5px] font-semibold skew-x-[40deg] inline-block">
                    FAQ
                  </h1>
                </li>
              </div>
            </Link>
            <Link to="/about">
              <div className="xl:w-36 xl:h-12 md:w-24 md:h-10">
                <li className="text-[#2B2476] bg-white xl:w-28 xl:h-8 md:w-20 md:h-6 -skew-x-[40deg] shadow-nav rounded-tr-2xl rounded-bl-2xl rounded-tl rounded-br transform hover:scale-110 transition-transform duration-500">
                  <h1 className=" lg:text-[10px] xl:text-sm  2xl:pr-2 2xl:top-[-6px] xl:pr-1 2xl:py-3 xl:py-2 md:relative md:top-[-2.5px] font-semibold skew-x-[40deg] inline-block">
                    ABOUT US
                  </h1>
                </li>
              </div>
            </Link>
            <Link to="/division">
              <div className="xl:w-36 xl:h-12 md:w-24 md:h-10">
                <li className="text-[#2B2476] bg-white xl:w-28 xl:h-8 md:w-20 md:h-6 -skew-x-[40deg] shadow-nav rounded-tr-2xl rounded-bl-2xl rounded-tl rounded-br transform hover:scale-110 transition-transform duration-500">
                  <h1 className=" lg:text-[10px] xl:text-sm  2xl:pr-2 2xl:top-[-6px] xl:pr-2 md:pr-0.5 2xl:py-3 xl:py-2 md:relative md:top-[-2.5px] font-semibold skew-x-[40deg] inline-block">
                    DIVISION
                  </h1>
                </li>
              </div>
            </Link>
            <Link to="/gallery">
              <div className="xl:w-36 xl:h-12 md:w-24 md:h-10">
                <li className="text-[#2B2476] bg-white xl:w-28 xl:h-8 md:w-20 md:h-6 -skew-x-[40deg] shadow-nav rounded-tr-2xl rounded-bl-2xl rounded-tl rounded-br transform hover:scale-110 transition-transform duration-500">
                  <h1 className=" lg:text-[10px] xl:text-sm  2xl:pr-2 2xl:top-[-6px] xl:pr-1 2xl:py-3 xl:py-2 md:relative md:top-[-2.5px] font-semibold skew-x-[40deg] inline-block">
                    GALLERY
                  </h1>
                </li>
              </div>
            </Link>
          </ul>
        </div>
        <div className="lg:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none z-50 relative"
          >
            <FontAwesomeIcon
              className="miniSmartphone smartphone sm:text-3xl sm:mr-12 sm:mb-12 md:mb-16 md:mr-16"
              icon={faBars}
            />
          </button>
        </div>
      </div>
      <div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
        <button
          onClick={toggleMobileMenu}
          className="absolute top-5 right-5 text-white focus:outline-none"
        >
          <FontAwesomeIcon
            icon={faTimes}
            className="m-2 text-lg lg:text-[10px]"
          />
        </button>
        <Link
          to="/"
          onClick={toggleMobileMenu}
          className="mb-4 text-lg lg:text-[10px] font-semibold text-white"
        >
          HOME
        </Link>
        <Link
          to="/faq"
          onClick={toggleMobileMenu}
          className="mb-4 text-lg lg:text-[10px]  font-semibold text-white"
        >
          FAQ
        </Link>
        <Link
          to="/about"
          onClick={toggleMobileMenu}
          className="mb-4 text-lg lg:text-[10px] font-semibold text-white"
        >
          ABOUT US
        </Link>
        <Link
          to="/division"
          onClick={toggleMobileMenu}
          className="mb-4 text-lg lg:text-[10px] font-semibold text-white"
        >
          DIVISION
        </Link>
        <Link
          to="/gallery"
          onClick={toggleMobileMenu}
          className="mb-4 text-lg lg:text-[10px] font-semibold text-white"
        >
          GALLERY
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
