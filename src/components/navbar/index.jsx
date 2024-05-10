import React from 'react';
import './style.css'
import Pistol from '../../assets/Asset_14.png'
import Logo from '../../assets/Logo.png'

function Navbar() {
  return (
    <nav className="pr-24 container-2xl flex items-center m-auto fixed">
        <div className='relative'>
          <img src={Logo} className='w-[6rem] absolute z-10 m-8 ml-[4rem] shadow-object'></img>  
          <img src={Pistol} className='w-[38.5rem] shadow-object lg:w-[30rem] xl:w-[38.5rem]'></img>
        </div>
        <ul className="flex space-x-[6rem] ml-8 pl-4 pb-16 z-0 lg:space-x-[5rem]">
          <div className='w-[9rem] h-[3rem]'>
            <li className="text-[#2B2476] bg-white w-[7rem] h-[2rem] skew-x-[-40deg] shadow-nav rounded-tr-2xl rounded-bl-2xl rounded-tl rounded-br transform hover:scale-[1.2] transition-transform duration-500 ">
              <a href="#" className='text-[0.875rem] pr-1 py-1 font-medium skew-x-[40deg] inline-block'>HOME</a>
            </li>
          </div>
          <div className="w-[9rem] h-[3rem]">
            <li className="text-[#2B2476] bg-white w-[7rem] h-[2rem] skew-x-[-40deg] shadow-nav rounded-tr-2xl rounded-bl-2xl rounded-tl rounded-br transform hover:scale-[1.2] transition-transform duration-500">
              <a href="#" className='text-[0.875rem] pr-1 py-1 font-medium skew-x-[40deg] inline-block'>FAQ</a>
            </li>
          </div>
          <div className="w-[9rem] h-[3rem]">
            <li className="text-[#2B2476] bg-white w-[7rem] h-[2rem] skew-x-[-40deg] shadow-nav rounded-tr-2xl rounded-bl-2xl rounded-tl rounded-br transform hover:scale-[1.2] transition-transform duration-500">
              <a href="#" className='text-[0.875rem] pr-1 py-1 font-medium skew-x-[40deg] inline-block'>ABOUT US</a>
            </li>
          </div>
          <div className="w-[9rem] h-[3rem]">
            <li className="text-[#2B2476] bg-white w-[7rem] h-[2rem] skew-x-[-40deg] shadow-nav rounded-tr-2xl rounded-bl-2xl rounded-tl rounded-br transform hover:scale-[1.2] transition-transform duration-500">
              <a href="#" className='text-[0.875rem] pr-1 py-1 font-medium skew-x-[40deg] inline-block'>GALLERY</a>
            </li>
          </div>
        </ul>
    </nav>
  )
}

export default Navbar;
