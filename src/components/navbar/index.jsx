import React, { useState } from "react";
import "./style.css";
import Pistol from "../../assets/Asset_14.webp";
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
      <div className="fixed z-30 w-full sm:h-32  heightMiniSmartphone heightSmartphone 2xl:h-32 xl:h-28 md:h-[60px] lg:h-20 background-navbar"></div>
      <div className="w-full mx-auto flex items-center justify-between fixed z-40">
        <div className="relative">
          <img
            src={Logo}
            className="w-12 mx-6 mt-6 mb-8 2xl:w-24 xl:w-24 absolute z-10 2xl:m-10 xl:m-8 md:m-5 md:ml-8 2xl:ml-20 xl:ml-16 shadow-object md:w-12 lg:w-16 lg:ml-12 lg:m-6"
            alt="Logo"
          />
          <img
            src={Pistol}
            className="2xl:w-[36rem] xl:w-[34rem] md:w-72 lg:w-96 shadow-object"
            alt="Pistol"
          />
        </div>
        <div className="hidden md:flex mx-auto">
          <ul className="flex 2xl:pb-16 xl:pb-16 mx-auto md:pb-6 lg:pb-10 z-0 2xl:gap-x-24 xl:gap-x-20 md:gap-x-8 lg:gap-x-12">
            <Link to="/">
              <div className="2xl:w-44 2xl:h-16 xl:w-36 xl:h-12 md:w-24 md:h-10">
                <li className="text-[#2B2476] bg-white 2xl:w-36 2xl:h-12 xl:w-28 xl:h-8 md:w-20 md:h-6 -skew-x-[40deg] shadow-nav rounded-tr-2xl rounded-bl-2xl rounded-tl rounded-br transform hover:scale-110 transition-transform duration-500">
                  <h1 className="2xl:text-lg xl:text-sm md:text-[10px] 2xl:pr-2 xl:pr-2 md:pr-0.5 2xl:py-3 xl:py-2 md:relative md:top-[-2.5px] font-semibold skew-x-[40deg] inline-block">
                    HOME
                  </h1>
                </li>
              </div>
            </Link>
            <Link to="/faq">
              <div className="2xl:w-44 2xl:h-16 xl:w-36 xl:h-12 md:w-24 md:h-10">
                <li className="text-[#2B2476] bg-white 2xl:w-36 2xl:h-12 xl:w-28 xl:h-8 md:w-20 md:h-6 -skew-x-[40deg] shadow-nav rounded-tr-2xl rounded-bl-2xl rounded-tl rounded-br transform hover:scale-110 transition-transform duration-500">
                  <h1 className="2xl:text-lg xl:text-sm md:text-[10px] 2xl:pr-2 xl:pr-2 md:pr-1 2xl:py-3 xl:py-2 md:relative md:top-[-2.5px] font-semibold skew-x-[40deg] inline-block">
                    FAQ
                  </h1>
                </li>
              </div>
            </Link>
            <Link to="/about">
              <div className="2xl:w-44 2xl:h-16 xl:w-36 xl:h-12 md:w-24 md:h-10">
                <li className="text-[#2B2476] bg-white 2xl:w-36 2xl:h-12 xl:w-28 xl:h-8 md:w-20 md:h-6 -skew-x-[40deg] shadow-nav rounded-tr-2xl rounded-bl-2xl rounded-tl rounded-br transform hover:scale-110 transition-transform duration-500">
                  <h1 className="2xl:text-lg xl:text-sm md:text-[10px] 2xl:pr-2 xl:pr-1 2xl:py-3 xl:py-2 md:relative md:top-[-2.5px] font-semibold skew-x-[40deg] inline-block">
                    ABOUT US
                  </h1>
                </li>
              </div>
            </Link>
            <Link to="/gallery">
              <div className="2xl:w-44 2xl:h-16 xl:w-36 xl:h-12 md:w-24 md:h-10">
                <li className="text-[#2B2476] bg-white 2xl:w-36 2xl:h-12 xl:w-28 xl:h-8 md:w-20 md:h-6 -skew-x-[40deg] shadow-nav rounded-tr-2xl rounded-bl-2xl rounded-tl rounded-br transform hover:scale-110 transition-transform duration-500">
                  <h1 className="2xl:text-lg xl:text-sm md:text-[10px] 2xl:pr-2 xl:pr-1 2xl:py-3 xl:py-2 md:relative md:top-[-2.5px] font-semibold skew-x-[40deg] inline-block">
                    GALLERY
                  </h1>
                </li>
              </div>
            </Link>
          </ul>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none z-50 relative"
          >
            <FontAwesomeIcon className="miniSmartphone smartphone sm:text-3xl sm:mr-12 sm:mb-12"  icon={faBars}  />
          </button>
        </div>
      </div>
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <button
          onClick={toggleMobileMenu}
          className="absolute top-5 right-5 text-white focus:outline-none"
        >
          <FontAwesomeIcon icon={faTimes} className="m-2 text-lg" />
        </button>
        <Link to="/" onClick={toggleMobileMenu} className="mb-4 text-lg font-semibold text-white">
          HOME
        </Link>
        <Link to="/faq" onClick={toggleMobileMenu} className="mb-4 text-lg font-semibold text-white">
          FAQ
        </Link>
        <Link to="/about" onClick={toggleMobileMenu} className="mb-4 text-lg font-semibold text-white">
          ABOUT US
        </Link>
        <Link to="/gallery" onClick={toggleMobileMenu} className="mb-4 text-lg font-semibold text-white">
          GALLERY
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
