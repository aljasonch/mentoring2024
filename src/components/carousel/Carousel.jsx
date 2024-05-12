import React, { useState } from "react";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import "./Carousel.css";
import Bintik_1 from "../../assets/Bintik_1.png";
import Bintik_2 from "../../assets/Bintik_2.png";

export const Carousel = ({ data, logos }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  return (
    <div style={{ boxShadow: "0px 20px 50px 0px #478198 inset, 0px 0px 10px 7px #F5FDFF" }}
      className="mx-auto relative flex justify-center items-center w-48 h-64 lg:w-[794px] lg:h-[421px] rounded-3xl lg:rounded-[57px] bg-gradient-to-b from-teal-600 via-teal-400 to-cyan-400 bg-blend-overlay">
      <img src={Bintik_1} className="top-0 left-0 w-80 h-96 rounded-[57px] opacity-30 absolute" />
      <img src={Bintik_2} className="bottom-0 right-0 w-80 h-96 rounded-[57px] opacity-20 absolute" />
      {logos.map((logo, idx) => (
          <img
          key={idx}
          src={logo}
          alt={`Logo ${idx}`}
          className={slide === idx ? "w-20 h-20 lg:w-48 lg:h-48 bottom-52 lg:bottom-[310px] left-[1/2] translate-x-[-2/4] absolute" : "w-20 h-20 lg:w-48 lg:h-48 bottom-52 lg:bottom-[310px] left-[1/2] translate-x-[-2/4] absolute hidden"}
          />
      ))}
      <MdOutlineKeyboardArrowLeft onClick={prevSlide} className="w-8 h-8 md:w-12 md:h-12 lg:w-20 lg:h-20 left-[-5rem] lg:left-[-10rem] hover:cursor-pointer absolute rounded-full bg-[#18E6B1]" />
      {data.map((item, idx) => {
          return (
          <div key={idx} className={slide === idx ? "w-full h-full pt-40 rounded-3xl lg:rounded-[57px] text-white": "w-full h-full pt-40 rounded-3xl lg:rounded-[57px] text-white slide hidden"} style={{ boxShadow: "0px 0px 7px #666" }}>
              <p className="font-spyagency text-base sm:text-lg md:text-2xl lg:text-3xl mb-8">{item.title}</p>
              <p className="w-40 lg:w-[600px] text-xs sm:text- md:text-xl lg:text-2xl font-semibold mx-auto">{item.content}</p>
          </div>
          );
      })}
      <MdOutlineKeyboardArrowRight onClick={nextSlide} className="w-8 h-8 md:w-12 md:h-12 lg:w-20 lg:h-20 right-[-5rem] lg:left-[-10rem] absolute rounded-full bg-[#18E6B1]" />
      <span className="flex absolute bottom-[-4.5rem] cursor-pointer">
          {data.map((_, idx) => {
          return (
              <button
              key={idx}
              className={slide === idx ? "w-12 h-3.5 mx-4 bg-[#F5FDFF] rounded-2xl border-none outline-none" : "w-3.5 h-3.5 mx-4 bg-[#F5FDFF] rounded-2xl border-none outline-none"}
              onClick={() => setSlide(idx)}
              ></button>
          );
          })}
      </span>
    </div>
  );
};
