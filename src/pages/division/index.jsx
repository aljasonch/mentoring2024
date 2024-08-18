import React, { useState, useRef } from "react";
import "./style.css";
import Daco from "../../assets/Blackdots_3.webp";
import data from "../division/data.js";
import Screen from "../../assets/screen.png";
import ScreenMobile from "../../assets/screenMobile.png";
import Button from "../../assets/button.png";

function Division() {
  const [showCard, setShowCard] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  const cardRef = useRef(null);

  const handleCardClick = () => {
    if (cardRef.current) {
      cardRef.current.classList.remove("slide-up");
      cardRef.current.classList.add("slide-down");
      setTimeout(() => setShowCard(false), 500);
    }
  };

  return (
    <>
      <div className="home xss:pt-32 xs:pt-40 md:pt-52 md:pb-15 ">
        <h2 className="spyagencyBoldItal text-white text-3xl sm:text-5xl md:text-5xl lg:text-7xl">
          Our Division
        </h2>
        <h4 className="text-white font-medium text-lg sm:text-xl lg:text-2xl mt-1">
          MENTORING UMN 2024
        </h4>
        <div className="container flex justify-center relative z-10 mx-auto w-full p-4 xss:mt-8 xs:mt-12 md:mt-16">
          <div className="grid grid-cols-6 xs:grid-cols-6 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-8 gap-6 md:gap-10 justify-items-center">
            {data.map((item, index) => {
              const isLastRow = index >= data.length - (data.length % 3);
              const isThirdToLast = index === data.length - 3;
              return (
                <div
                  key={index}
                  className={`bg-white cursor-pointer p-4 md:p-6 sm:p-4 xs:p-4 col-span-2 rounded-full inner-shadow transition-color duration-500 ease-in-out hover:shadow-none shadow-2xl ${
                    isLastRow
                      ? data.length % 3 === 2 && index === data.length - 2
                        ? "col-start-2 xl:col-start-auto"
                        : ""
                      : ""
                  }${isThirdToLast ? "xl:col-start-2" : ""}`}
                  onClick={() => {
                    setShowCard(true);
                    setSelectedData({
                      title: item.title,
                      description: item.description,
                      image: item.image,
                      picture: item.picture,
                    });
                  }}
                  style={{
                    transition: "background-color 0.5s ease-in-out",
                    backgroundColor: "white",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = item.hoverColor)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "white")
                  }
                >
                  <img
                    src={item.image}
                    className="h-auto w-full max-w-[7rem] img-fluid mx-auto flex items-center justify-center"
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div className="daco relative top-0 right-0 w-full overflow-hidden">
          <img src={Daco} />
        </div>
        {showCard && selectedData && (
          <div
            className="xss:w-[53.125rem] overflow-hidden card-container xss:top-[40%] sm:top-1/2 lg:top-[55%]"
            ref={cardRef}
          >
            <div className="relative" id="screenPopUp">
              <div
                className="absolute bg-[#02B4A8] border-2 border-[rgb(24,230,177)] md:rounded-tl-[15px] md:rounded-br-[15px] flex items-center justify-center
              lg:w-60 lg:h-14 lg:top-[22%] lg:right-[9%] sm:w-60 sm:h-14
              md:w-40 md:h-[34px] md:top-[22%] md:right-[10%] 
              xss:w-32 xss:h-8 xss:top-[50%] xss:rounded-tl-[10px] xss:rounded-br-[10px]
              xs:w-40 xs:h-10 xs:top-[50%] center"
              >
                <p
                  className="text-[#F5FDFF] text-center
                lg:text-[18px] md:text-[12px] xss:text-[10px] spyagencyRegular sm:text-base"
                >
                  {selectedData.title}
                </p>
              </div>

              <div
                className="absolute bg-white md:w-[48%] xss:w-[85%]
                    center
                    md:top-[20%] lg:top-[20%] xss:top-[12%]
                    md:left-[7%] "
              >
                <img
                  className=" w-full xss:mt-2 md:mt-3"
                  src={selectedData.picture}
                />
              </div>
              <button
                className="xss:w-[72px] md:w-[120px] fixed right-[7%] xss:top-[3%] md:top-[0%]"
                onClick={handleCardClick}
              >
                <img src={Button} />
              </button>
              <p
                className="text-white absolute
            md:bottom-[7%] lg:bottom-[12%] xss:bottom-[20%] xs:bottom-[22%] sm:bottom-[28%]
            md:w-1/2 md:max-w-full
            md:text-justify xss:text-center
            md:text-xs lg:text-sm xss:text-[8px] xs:text-[10px] sm:text-sm
            md:left-[6%] lg:left-[7%] sm:w-96 xss:w-56 xs:w-64 center
            h-16"
              >
                {selectedData.description}
              </p>

              <img src={Screen} className="hidden md:block" />
              <img src={ScreenMobile} className="md:hidden block" />
              <div
                className="bg-white flex justify-center card-container absolute
                    md:top-[75%]
                    xss:top-[82%] xs:top-[81%] 
                    xss:left-[50%] xss:max-w-12 xs:max-w-16 sm:max-w-20 sm:p-4 md:max-w-[80%] md:left-[84%] rounded-full shadow-lg xss:p-2 md:p-5"
              >
                <img src={selectedData.image} className=" object-cover" loading="lazy"/>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Division;
