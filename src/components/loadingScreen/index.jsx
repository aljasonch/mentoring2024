import React from "react";
import Loading from "../../assets/gif/loading.gif";

const LoadingScreen = () => {
  return (
    <div className="overflow-hidden h-screen w-screen flex justify-center items-center">
      <img src={Loading} alt="Loading" className="w-96 h-auto" />
    </div>
  );
};

export default LoadingScreen;
