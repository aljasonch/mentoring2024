import React, { useState, useEffect, useRef } from "react";
import "./style.css";
import Asset from "../../assets/Asset8_1.webp";
import Assets from "../../assets/Asset8_2.webp";
import Daco from "../../assets/Daco_519625.webp";
import LightningLeft from "../../assets/petirkiriatas.webp";
import LightningRight from "../../assets/petirkananatas.webp";
import themeMobile from "../../assets/themeMobile.webp";
import ZacheryMobile from "../../assets/ZacheryMobile.webp";
import Logo from "../../assets/LogoAboutUS.webp";
import tagline from "../../assets/tagline.webp";
import zachery from "../../assets/zachery.webp";
import z1 from "../../assets/z1.webp";
import z2 from "../../assets/z2.webp";
import z3 from "../../assets/z3.webp";
import z4 from "../../assets/z4.webp";
import z5 from "../../assets/z5.webp";
import z6 from "../../assets/z6.webp";
import z7 from "../../assets/z7.webp";
import z8 from "../../assets/z8.webp";
import z9 from "../../assets/z9.webp";
import z10 from "../../assets/z10.webp";
import logo from "../../assets/logoabout.webp";
import data from "./data.js";
import theme from "../../assets/theme.webp";

const importImage = (name) => require(`../../assets/${name}.webp`);

function About() {
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

  const handleDivisionClick = async (index) => {
    const image = await importImage(data[index].imageName);
    setSelectedData({
      title: data[index].title,
      description: data[index].description,
      image: image.default,
    });
    setShowCard(true);
  };

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
      <div className="background-mentoring ">
        <div className="relative">
          <img
            src={LightningLeft}
            className="absolute top-0 left-0 w-24 h-auto xss:w-12 xss:top-28 md:w-24 md:top-44"
            alt="Lightning Left"
          />
          <img
            src={LightningRight}
            className="absolute top-0 right-0 w-44 h-auto z-10 xss:w-16 xss:top-12 md:w-28 md:top-16"
            alt="Lightning Right"
          />
          <div className="text-white text-7xl sm:pt-60 xss:pt-36 xss:text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl spyagencyBoldItal">
            ABOUT US
          </div>
          <p className=" text-white text-3xl xss:text-xs sm:text-lg md:text-xl lg:text-2xl xl:text-3xl ">
            CHARACTER BUILDING MENTORING 2024
          </p>
        </div>
        <div className="w-9/12 md:w-[36.25rem] lg:hidden relative z-10 mx-auto mt-16">
          <div className="relative">
            <img
              src={themeMobile}
              className="border-4 sm:border-8 border-white rounded-3xl"
              alt="Theme"
            />
            <div className=" border-4 sm:border-8 rounded-3xl absolute inset-0 bg-[#5D52DD] opacity-50 "></div>
          </div>
          <div className="spyagencyHalftone  z-0 polygonTheme absolute bottom-0">
            <div className="bg-white xss:py-1 py-2 sm:py-2 text-[#832AD0] text-xl sm:text-4xl sm:pl-24 sm:pr-12 pl-16 pr-6 rounded-br-2xl">
              THEME
            </div>
          </div>
        </div>
        <div className="lg:justify-center lg:flex lg:mt-16">
          <div className="mx-auto w-9/12 xl:ml-36 lg:ml-24 lg:w-[400px] xl:w-[600px]">
            <div className="spyagencyBoldItal xss:text-xl lg:text-4xl xl:text-6xl xs:text-2xl sm:text-4xl text-start text-white mt-8">
              REVEAL YOUR CAPABiLiTY WiTHiN A PURPOSEFUL QUEST
            </div>
            <p className=" text-justify text-white xss:text-xs xs:text-sm lg:text-sm xl:text-lg sm:text-lg mt-6 ">
              Mahasiswa yang baru masuk ke dunia perkuliahan pasti merasakan
              beberapa perbedaan aspek dalam kehidupan barunya pada masa
              perkuliahan. Melalui CBM 2024 kata "Reveal Your Capability"
              mencakup bagaimana mentee dapat mengungkapkan kapabilitas mereka
              pada dunia perkuliahan. “Purposeful Quest” mengajak mentee untuk
              menjelajahi hidup dengan tujuan yang bermakna. Seperti
              berpetualang mencari arti dan tujuan hidup yang memberikan makna
              dalam setiap pertemuan yang mereka alami.
            </p>
          </div>
          <img
            src={theme}
            className="hidden lg:block lg:w-[480px] xl:w-[600px] object-contain lg:mr-12"
          ></img>
        </div>
        <div className="mt-12">
          <div className=" relative">
            <img src={z1} className="w-7/12 z-20 relative lg:w-1/3" alt="1" />
            <img
              src={z2}
              className="absolute z-10 w-9/12 top-12 sm:top-24 left-0 lg:w-3/5"
              alt="2"
            />
            <img
              src={z3}
              className="absolute z-30 w-6/12 top-8 sm:top-16 right-0 lg:w-2/5"
              alt="3"
            />
          </div>
        </div>
      </div>
      <div className="background-mentoring py-6">
        <div className="w-9/12 md:w-[36.25rem] lg:hidden relative z-10 mx-auto mt-16">
          <div className="relative">
            <img
              src={themeMobile}
              className="border-4 sm:border-8 border-white rounded-3xl"
              alt="Theme"
            />
            <div className=" border-4 sm:border-8 rounded-3xl absolute inset-0 bg-[#5D52DD] opacity-50 "></div>
          </div>
          <div className="spyagencyHalftone  z-0 polygonTheme absolute bottom-0">
            <div className="bg-white xss:py-1 py-2 sm:py-2 text-[#832AD0] text-xl sm:text-4xl sm:pl-24 sm:pr-12 pl-12 pr-4 rounded-br-2xl">
              TAGLINE
            </div>
          </div>
        </div>
        <div className="w-9/12 mx-auto lg:w-full lg:flex lg:justify-between">
          <img
            src={tagline}
            className="hidden lg:block lg:w-[480px] xl:w-[600px] object-contain lg:ml-12 xl:ml-24"
          ></img>
          <div className="mx-auto lg:mr-24 lg:w-[400px] xl:w-[600px]">
            <div className="spyagencyBoldItal xss:text-xl xs:text-2xl lg:text-4xl xl:text-6xl sm:text-4xl text-end text-white mt-8">
              <p>REVEAL,</p>
            </div>
            <p className=" text-justify text-white xss:text-xs xs:text-sm sm:text-lg mb-2 lg:text-sm xl:text-lg">
              Mentee dan panitia Character Building Mentoring UMN 2024
              diharapkan dapat mengungkapkan kapabilitas dalam diri mereka
              selama di dunia perkuliahan melalui proses Character Building
              Mentoring UMN 2024.
            </p>
            <div className="spyagencyBoldItal xss:text-xl lg:text-4xl xl:text-6xl xs:text-2xl sm:text-4xl text-end text-white">
              <p>REFiNE,</p>
            </div>
            <p className=" text-justify text-white xss:text-xs xs:text-sm sm:text-lg mb-2 lg:text-sm xl:text-lg">
              Mentee dan panitia CBM 2024 dapat melakukan pembentukan diri
              dengan mengembangkan kapabilitas dalam diri mereka selama
              perkuliahan melalui CBM 2024.
            </p>
            <div className="spyagencyBoldItal xss:text-xl lg:text-4xl xl:text-6xl xs:text-2xl sm:text-4xl text-end text-white">
              <p>RADiATE</p>
            </div>
            <p className=" text-justify text-white xss:text-xs xs:text-sm sm:text-lg mb-2 lg:text-sm xl:text-lg">
              Mentee dan panitia Character Building Mentoring UMN 2024 dapat
              memancarkan kapabilitas mereka menjadi lebih bersinar dengan
              mengandalkan kemampuan yang mereka miliki agar dapat berdampak
              bagi orang sekitar.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-12">
        <div className="relative">
          <img src={z4} className="w-7/12 z-20 relative lg:w-2/5" alt="1" />
          <img
            src={z5}
            className="absolute z-10 w-8 top-12 sm:top-24 -left-4 lg:w-12 lg:top-28"
            alt="2"
          />
          <img
            src={z6}
            className="absolute z-10 w-72 sm:w-7/12 top-6 sm:top-10 right-0 lg:w-1/2"
            alt="3"
          />
          <img
            src={z7}
            className="absolute z-0 w-36 -top-16 sm:w-48 sm:-top-16 right-0 lg:w-1/5 lg:-top-40 "
            alt="3"
          />
        </div>
        <div className="background-mentoring py-6 lg:flex lg:justify-between">
          <div className="w-9/12 md:w-[36.25rem] lg:hidden relative z-10 mx-auto mt-16">
            <div className="relative">
              <img
                src={Logo}
                className="border-4 relative z-10 sm:border-8 border-white rounded-3xl"
                alt="Theme"
              />
              <div className=" border-4 sm:border-8 rounded-3xl z-0 absolute inset-0 bg-[#38467E] opacity-100 "></div>
            </div>
            <div className="spyagencyHalftone  z-0 polygonTheme absolute bottom-0">
              <div className="bg-white xss:py-1 py-2 sm:py-2 text-[#832AD0] text-xl sm:text-4xl sm:pl-24 sm:pr-12 pl-12 pr-4 rounded-br-2xl">
                LOGO
              </div>
            </div>
          </div>
          <div className="mx-auto w-9/12 xl:ml-36 lg:ml-24 lg:w-[400px] xl:w-[600px] lg:my-auto">
            <div className="spyagencyBoldItal xss:text-xl xs:text-2xl sm:text-4xl lg:text-4xl xl:text-6xl text-start text-white mt-8">
              <p>THE MEANiNG</p>
              <p>BEHiND OUR LOGO</p>
            </div>
            <p className=" text-justify text-white xss:text-xs xs:text-sm sm:text-lg mt-6 lg:text-sm xl:text-lg ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
          <img
            src={logo}
            className="hidden lg:block lg:w-[480px] xl:w-[600px] object-contain lg:mr-12"
          ></img>
        </div>
      </div>
      <div className="mt-12">
        <div className="relative">
          <img src={z8} className="w-7/12 z-20 relative lg:bottom-4" alt="1" />
          <img
            src={z9}
            className="absolute z-20 w-7/12 top-12 sm:top-24 left-0 lg:w-2/5"
            alt="2"
          />
          <img
            src={z10}
            className="absolute z-20 w-56 sm:-top-10 sm:w-7/12 -top-6 right-0 lg:w-2/5"
            alt="3"
          />
        </div>
        <div className="background-mentoring py-6">
          <div className="lg:w-full lg:flex lg:justify-between">
            <img
              src={zachery}
              className="hidden lg:block lg:w-[480px] xl:w-[600px] object-contain lg:ml-12 xl:ml-24"
            ></img>
            <div className="w-9/12 md:w-[36.25rem] lg:hidden relative z-10 mx-auto mt-16">
              <div className="relative">
                <img
                  src={ZacheryMobile}
                  className="border-4 relative z-10 sm:border-8 border-white rounded-3xl"
                  alt="Theme"
                />
                <div className=" border-4 sm:border-8 rounded-3xl z-0 absolute inset-0 bg-[#38467E] opacity-100 "></div>
              </div>
              <div className="spyagencyHalftone  z-0 polygonTheme absolute bottom-0">
                <div className="bg-white xss:py-1 py-2 sm:py-2 text-[#832AD0] text-xl sm:text-4xl sm:pl-24 sm:pr-12 pl-12 pr-4 rounded-br-2xl">
                  ZACHERY
                </div>
              </div>
            </div>
            <div className="mx-auto w-9/12 lg:mr-24 lg:w-[400px] xl:w-[600px] lg:my-auto">
              <div className="spyagencyBoldItal xss:text-xl xs:text-2xl sm:text-4xl lg:text-4xl xl:text-6xl text-end text-white mt-8">
                <p>MEET ZACHERY</p>
              </div>
              <p className=" text-justify text-white xss:text-xs xs:text-sm sm:text-lg mt-6 lg:text-sm xl:text-lg">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between background-atas background-mentoring mt-12">
          <img
            src={Asset}
            className="pb-5 xss:h-[60px] xs:h-[75px] md:h-[120px] lg:h-[160px] xl:h-[190px]"
          />
          <img
            src={Assets}
            className="pb-5 xss:h-[60px] xs:h-[75px] md:h-[120px] lg:h-[160px] xl:h-[190px]"
          />
        </div>
        <div className="background-mentoring">
          <div className="xss:mt-12 xs:mt-16 md:mt-14 md:mb-15 ">
            <h2 className="spyagencyBoldItal text-white text-3xl  xss:mb-4 xs:mb-8 md:mb-16 xss:text-lg xs:text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
              Our Division
            </h2>
            <a
              href="#"
              className="underline text-white text-xs lg:text-sm xl:text-md"
            >
              Click for more information
            </a>
          </div>
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

          <div className="Daco relative top-0 right-0 w-full overflow-hidden">
            <img src={Daco} className="daco-image" />
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
                <h2 className="spyagencyRegular text-white xss:text-sm xs:text-md md:text-xl lg:text-3xl xss:mt-3  xs:mt-6 md:mt-14 lg:mt-16">
                  {selectedData.title}
                </h2>
                <div className="flex-grow flex items-center justify-center">
                  <p className="text-monsserat text-white xss:text-[10px] xs:text-[10px] md:text-lg lg:text-2xl text-center z-10 xss:p-1 xs:p-3 md:p-4 lg:p-5 box-border xss:mb-2 lg:mb-5">
                    {selectedData.description}
                  </p>
                </div>
                <div className="daco-card">
                  <img src={Daco} className="daco-image" />
                </div>
                <div className="daco-card1">
                  <img src={Daco} className="daco-image" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default About;
