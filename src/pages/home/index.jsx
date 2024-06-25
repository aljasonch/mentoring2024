import "./style.css";
import Petir_1 from "../../assets/1.webp";
import Petir_2 from "../../assets/2.webp";
import Transition1 from "../../assets/3.webp";
import Transition2 from "../../assets/4.webp";
import Bintik_3 from "../../assets/5.webp";
import Green_Line from "../../assets/6.webp";
import Green_Line_LancipKiri from "../../assets/7.webp";
import Green_Line_LancipKanan from "../../assets/8.webp";
import Logo from "../../assets/Logo.webp";
import Mentoring from "../../assets/Mentoring.webp";
import Logo_5C from "../../assets/5C.webp";
import Logo_Caring from "../../assets/CARING.webp";
import Logo_Credible from "../../assets/CREDIBLE.webp";
import Logo_Competent from "../../assets/COMPETENT.webp";
import Logo_Competitive from "../../assets/COMPETITIVE.webp";
import Logo_Customer_Delight from "../../assets/CUSTOMER.webp";
import { Carousel } from "../../components/carousel/Carousel";
import { slides } from "../../components/carousel/carouselData.json";
import React, { useState, useEffect } from "react";
function Home() {
  const logos = [
    Logo_Caring,
    Logo_Credible,
    Logo_Competent,
    Logo_Competitive,
    Logo_Customer_Delight,
  ];

  const [showText, setShowText] = useState(false);
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setShowText(true);
    }, 2000);

    const timer2 = setTimeout(() => {
      setShowLogo(true);
    }, 3000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <>
      <div className="relative py-36 md:py-42 home w-full">
        <img
          src={Green_Line_LancipKiri}
          className="absolute w-6 md:w-8 xl:w-10"
        />
        <div
          className={`spyagencyGradient invisible text-[#D3FFF4] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl my-10 sm:my-12 md:my-16 lg:my-20 xl:my-28 min-h-[200px] transition-all duration-1000 ${
            showText
              ? "opacity-100 sm:visible translate-y-0"
              : "opacity-0 invisible translate-y-10"
          } sm:block`}
        >
          <p className="mb-2 sm:mb-3 md:mb-4 lg:mb-5 sm:text-5xl lg:text-6xl xl:text-8xl">
            REVEAL YOUR
          </p>
          <p className="mb-2 sm:mb-3 md:mb-4 lg:mb-5 sm:text-5xl lg:text-6xl xl:text-8xl">
            CAPABiLiTY WiTHiN A
          </p>
          <p className="mb-2 sm:mb-3 md:mb-4 lg:mb-5 sm:text-5xl lg:text-6xl xl:text-8xl">
            PURPOSEFUL QUEST
          </p>
        </div>
        <img
          src={Logo}
          className={`absolute left-1/2 transform -translate-x-1/2 w-48 sm:w-56 md:w-64 lg:w-80 xl:w-[402px] top-52  shadow-logo-home transition-all duration-[1500ms] delay-500 ${
            showLogo
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible translate-y-10"
          }`}
          alt=""
        />
        <img
          src={Green_Line_LancipKanan}
          className="right-0 top-52 absolute w-6 md:w-8 xl:w-10"
        />
      </div>
      <div className="relative background-transition">
        <img src={Transition1} className="relative z-10" />
        <img
          src={Petir_1}
          className="absolute xl:w-1/6 w-1/4  xss:top-10 xl:top-40 sm:top-20 lg:top-24 left-0 z-0"
        />
        <img
          src={Petir_2}
          className="absolute xl:w-1/6 w-1/4 xss:top-16 xs:top-20 sm:top-36 xl:top-[300px] lg:top-48 right-0 z-0"
        />
        <div className="pb-20 md:pb-28 background-mentoring">
          <div className="text-white my-10 mx-auto">
            <img src={Logo} className="w-[81px] mx-auto" alt="Logo Mentoring" />
            <p className="spyagencyCond text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              APA iTU
            </p>
            <p className="spyagencyBoldItal text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              Mentoring?
            </p>
            <div
              className="mx-auto my-12 md:my-16 w-72 md:w-[500px] lg:w-[600px] xl:w-[800px] border-8 rounded-3xl md:rounded-[30px] lg:rounded-[40px] inline-block"
              style={{ boxShadow: "0px 4px 60px 0px #F5FDFF4D" }}
            >
              <img
                src={Mentoring}
                className="mx-auto rounded-2xl md:rounded-3xl lg:rounded-[36px]"
              />
            </div>
            <p className="text-xs sm:text-base lg:text-lg xl:text-xl font-medium px-14 md:px-24 xl:px-72 mx-auto">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="background-transition_2">
          <img src={Transition2} className="z-10 relative" />
          <img
            src={Bintik_3}
            className="mt-24 w-2/6 top-0 left-0 absolute z-0"
          />
        </div>
        <div className=" pb-20 md:pb-40 background-mentoring">
          <img
            src={Logo_5C}
            className="w-[76px] h-[81px] mx-auto"
            alt="Logo 5C"
          />
          <div className="text-white my-10">
            <p className="spyagencyCond text-2xl md:text-4xl lg:text-5xl text-center">
              NILAI-NILAI
            </p>
            <p className="spyagencyBoldItal text-5xl lg:text-9xl text-center">
              5C
            </p>
            <p className="text-base sm:text-base lg:text-lg xl:text-xl font-medium px-12 md:px-40 xl:px-72 mx-auto mt-10 md:my-12 mb-24 lg:mb-16 xl:mb-20">
            5C merupakan nilai yang ditanamkan UMN kepada mahasiswanya melalui berbagai aktivitas kehidupan sehari-hari.
            </p>
          </div>
          <div className="md:pb-16">
            <img src={Green_Line} className="absolute w-6 md:w-8 xl:w-10" />
          </div>
          <Carousel data={slides} logos={logos} />
        </div>
      </div>
    </>
  );
}

export default Home;
