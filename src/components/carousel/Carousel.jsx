import React, { useState } from "react";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import Blackdots_1 from "../../assets/Blackdots_1.webp";
import Blackdots_2 from "../../assets/Blackdots_2.webp";

export const Carousel = ({ data, logos }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  return (
    <div
      style={{
        boxShadow: "0px 20px 40px 0px #478198 inset, 0px 0px 10px 7px #F5FDFF",
      }}
      className="mx-auto relative flex justify-center items-center 
        w-48 h-[290px] sm:w-[440px] sm:h-[260px] md:w-[420px] md:h-[290px] lg:w-[530px] lg:h-[350px] xl:w-[794px] xl:h-[421px] 
        rounded-3xl sm:rounded-[32px] md:rounded-[40px] lg:rounded-[57px] bg-gradient-to-b from-teal-600 via-teal-400 to-cyan-400 bg-blend-overlay"
    >
      <img
        alt="blackdots"
        src={Blackdots_1}
        className="top-0 left-0 w-28 h-40 sm:w-44 sm:h-56 md:w-56 md:h-72 lg:w-64 lg:h-72 xl:w-80 xl:h-96 rounded-3xl sm:rounded-[32px] md:rounded-[40px] lg:rounded-[57px] opacity-25 absolute"
      />
      <img
        alt="blackdots"
        src={Blackdots_2}
        className="bottom-0 right-0 w-28 h-40 sm:w-44 sm:h-56 md:w-56 md:h-72 lg:w-64 lg:h-72 xl:w-80 xl:h-96 rounded-3xl sm:rounded-[32px] md:rounded-[40px] lg:rounded-[57px] opacity-25 absolute"
      />
      {logos.map((logo, idx) => (
        <img
          key={idx}
          src={logo}
          alt={`Logo ${idx}`}
          className={
            slide === idx
              ? "w-20 h-20 bg-white rounded-full shadow-xl sm:w-32 sm:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 bottom-60 sm:bottom-[185px] md:bottom-[210px] lg:bottom-64 xl:bottom-[310px] left-[1/2] absolute"
              : "w-20 h-20 bg-white rounded-full shadow-xl sm:w-32 sm:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 bottom-60 sm:bottom-[185px] md:bottom-[210px] lg:bottom-64 xl:bottom-[310px] left-[1/2] absolute hidden"
          }
        />
      ))}
      <MdOutlineKeyboardArrowLeft
        onClick={prevSlide}
        className="w-8 h-8 cursor-pointer sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20 -left-[72px] md:-left-24 lg:-left-36 hover:cursor-pointer absolute rounded-full bg-[#18E6B1]"
      />
      {data.map((item, idx) => {
        return (
          <div
            key={idx}
            className={
              slide === idx
                ? "w-full h-full pt-16 sm:pt-20 md:pt-24 lg:pt-28 xl:pt-40 rounded-3xl sm:rounded-[32px] md:rounded-[40px] lg:rounded-[57px] text-white"
                : "w-full h-full pt-16 sm:pt-20 md:pt-24 lg:pt-28 xl:pt-40 rounded-3xl md:rounded-[40px] lg:rounded-[57px] text-white slide hidden"
            }
            style={{ boxShadow: "0px 0px 7px #666" }}
          >
            <p className="spyagencyRegular text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mb-5 mx-2">
              {item.title}
            </p>
            <p className="px-6 lg:px-16 text-xs sm:text-sm md:text-base lg:text-lg xl:text-2xl font-semibold m-auto">
              {item.content}
            </p>
          </div>
        );
      })}
      <MdOutlineKeyboardArrowRight
        onClick={nextSlide}
        className="w-8 h-8 cursor-pointer sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20 -right-[72px] md:-right-24 lg:-right-36 absolute rounded-full bg-[#18E6B1]"
      />
      <span className="flex absolute mt-[360px] md:mt-[390px] lg:mt-[480px] xl:mt-[580px] cursor-pointer">
        {data.map((_, idx) => {
          return (
            <button
              key={idx}
              className={
                slide === idx
                  ? "w-5 h-1.5 sm:w-7 sm:h-2 lg:w-10 lg:h-3.5 xl:w-12 xl:h-3.5 mx-2.5 lg:mx-4 bg-white rounded-2xl border-none outline-none"
                  : "w-1.5 h-1.5 sm:w-2 sm:h-2 lg:w-3.5 lg:h-3.5 xl:w-3.5 xl:h-3.5 mx-2.5 lg:mx-4 bg-gray-500 rounded-2xl border-none outline-none"
              }
              onClick={() => setSlide(idx)}
            ></button>
          );
        })}
      </span>
    </div>
  );
};
