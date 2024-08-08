import React from "react";
import Loading from "../../assets/gif/loading.gif";
import './style.css'
const LoadingScreen = () => {
  return (
    <div className="overflow-hidden h-screen w-screen flex justify-center items-center bg-[#283771]">
      <img src={Loading} alt="Loading" className="w-96 h-auto" />
      <p className="spyagencyBoldItal text-white typewriter text-4xl xl:text-5xl text-start xss:hidden lg:block">Mentoring UMN 2024</p>
    </div>
  );
};

export default LoadingScreen;
