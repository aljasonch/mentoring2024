import React, { useState, useEffect, useRef } from "react";
import './style.css'
import Daco from "../../assets/Blackdots_3.webp";
import data from "../division/data.js";
function Division() {
  const [showCard, setShowCard] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  const cardRef = useRef();
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        cardRef.current.classList.remove("slide-up");
        cardRef.current.classList.add("slide-down");
        setTimeout(() => setShowCard(false), 500);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleCardClick = (event) => {
    if (cardRef.current && cardRef.current.contains(event.target)) {
      cardRef.current.classList.remove("slide-up");
      cardRef.current.classList.add("slide-down");
      setTimeout(() => setShowCard(false), 500);
    }
  };

  const handleCardStay = (event) => {
    event.stopPropagation();
  };
  return (
    <>
      <div className="home xss:pt-32 xs:pt-40 md:pt-52 md:pb-15 ">
          <h2 className="spyagencyBoldItal text-white  xss:mb-4 xs:mb-8 md:mb-16 xss:text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            Our Division
          </h2>
        <div className="container flex justify-center relative z-10 mx-auto w-full p-4 xss:mt-8 xs:mt-12 md:mt-16">
          <div className="grid grid-cols-6 xs:grid-cols-6 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-8  gap-6 md:gap-10 justify-items-center">
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
                    setShowCard(!showCard);
                    setSelectedData({
                      title: item.title,
                      description: item.description,
                      image: item.image,
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
            className="w-[790px] h-[480px] overflow-hidden card-container"
            ref={cardRef}
            onClick={handleCardClick}
          >
            <div
              className="bg-white cursor-pointer flex justify-center xss:w-[60px] xs:w-[68px] md:w-[100px] lg:w-[120px] card-container xss:top-[42%] xs:top-[38%] md:top-[25%] lg:top-[20%] rounded-full shadow-lg "
              onClick={handleCardStay}
            >
              <img
                src={selectedData.image}
                className="xss:w-10 xs:w-[85px] md:w-[80px] lg:w-[100px] img-fluid object-cover"
              />
            </div>
            <div
              className="xss:mt-9 lg:mt-10 lg:mb-3 lg:px-10 lg:pb-5 gradientcolor card-container xss:w-[490px] xss:h-[130px] xs:w-[600px] xs:h-[160px] md:w-[700px] md:h-[300px] lg:w-[750px] lg:h-[370px] xss:rounded-[20px] xs:rounded-[35px] lg:rounded-[60px] z-[-1] overflow-hidden inShadow flex flex-col justify-between"
              onClick={handleCardStay}
            >
              <h2 className="spyagencyRegular text-white xss:text-[12px] xs:text-sm md:text-xl lg:text-3xl xss:mt-2  xs:mt-4 md:mt-14 lg:mt-16">
                {selectedData.title}
              </h2>
              <div className="flex-grow flex items-center justify-center">
                <p className=" text-white xss:text-[8px] xs:text-[10px] md:text-lg lg:text-2xl text-center z-10 xss:p-1 xs:p-1 md:p-4 lg:p-5 box-border xss:mb-2 lg:mb-5">
                  {selectedData.description}
                </p>
              </div>
                <p className="xss:text-[5px] xs:text-[7px] md:text-sm lg:text-sm mx-auto underline text-white">
                CLICK ANYWHERE TO CLOSE
                </p>
              <div className="card_1">
                <img src={Daco}/>
              </div>
              <div className="card_2">
                <img src={Daco}/>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
export default Division;
