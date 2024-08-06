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
import { slidesCarousel } from "../../components/carousel/carouselData.json";
import React, { useState, useEffect, useMemo } from "react";
import { maps } from "./dataMap";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

export default function Home() {
  const [index, setIndex] = useState(-1);
  const [slides, setSlides] = useState([]);

  const today = useMemo(() => new Date(), []);
  const day1 = useMemo(() => new Date("2024-08-07"), []);
  const day2 = useMemo(() => new Date("2024-09-14"), []);
  const day3 = useMemo(() => new Date("2024-09-21"), []);
  const day4 = useMemo(() => new Date("2024-09-28"), []);
  const day5 = useMemo(() => new Date("2024-11-16"), []);
  const manifest = maps[4];

  useEffect(() => {
    const newSlides = [];

    if (today < day1) {
      newSlides.push({ src: maps[0].locked, title: maps[0].title });
    } else {
      newSlides.push({ src: maps[0].unlocked, title: maps[0].title });
    }

    if (today < day2) {
      newSlides.push({ src: maps[1].locked, title: maps[1].title });
    } else {
      newSlides.push({ src: maps[1].unlocked, title: maps[1].title });
    }

    if (today < day3) {
      newSlides.push({ src: maps[2].locked, title: maps[2].title });
    } else {
      newSlides.push({ src: maps[2].unlocked, title: maps[2].title });
    }

    if (today < day4) {
      newSlides.push({ src: maps[3].locked, title: maps[3].title });
    } else {
      newSlides.push({ src: maps[3].unlocked, title: maps[3].title });
    }

    if (today < day5) {
      newSlides.push({ src: manifest.locked, title: manifest.title });
    } else {
      newSlides.push({ src: manifest.unlocked, title: manifest.title });
    }

    setSlides(newSlides);
  }, [today, maps, day1, day2, day3, day4, day5, manifest]);

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
        <a
          href="https://www.instagram.com/mentoringumn/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={Logo}
            className={`absolute left-1/2 transform hover:scale-110 hover:cursor-pointer -translate-x-1/2 w-48 sm:w-56 md:w-64 lg:w-80 xl:w-[402px] top-52 shadow-logo-home transition-all duration-[1500ms] delay-100 ${
              showLogo
                ? "opacity-100 visible translate-y-0"
                : "opacity-0 invisible translate-y-10"
            }`}
            alt="logo"
          />
        </a>

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
              Character Building Mentoring (CBM) adalah kegiatan tahunan yang
              wajib diikuti oleh Mentee (Mahasiswa Baru UMN) dengan tujuan
              menyeluruh, memperkenalkan secara mendalam nilai-nilai 5C UMN.
              Character Building Mentoring juga memiliki maskot bernama ZACHERY!
            </p>
          </div>
        </div>

        <p className="text-white spyagencyBoldItal text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            Mentoring Verse
          </p>

          <div className="mt-10 columns-1 md:columns-2 gap-5 px-14 md:px-24 xl:px-72 mx-auto">
            {slides.map(
              (slide, index) =>
                index < 4 && (
                  <div
                    key={index}
                    className="w-full relative cursor-pointer"
                    onClick={() => setIndex(index)}
                  >
                    <img
                      className="overflow-hidden mb-5 border-4 border-white object-cover"
                      src={slide.src}
                      alt={slide.title}
                    />
                    <div className="absolute bottom-0 p-4 z-0 bg-opacity-50 left-0 w-full h-full transition-opacity duration-500 ease-in-out xl:opacity-0 xl:hover:opacity-100 xss:opacity-100 xss:bg-opacity-50">
                      <div className="spyagencyCond polygon absolute bottom-0">
                        <div className="bg-white xss:py-1 py-2 xss:text-md md:text-lg lg:text-xl xl:text-2xl xss:px-6 xss:pr-2 md:pl-4 md:pr-8 xl:pr-10">
                          {slide.title}
                        </div>
                      </div>
                    </div>
                  </div>
                )
            )}
          </div>
          <div className="mb-10 columns-1 px-14 md:px-24 xl:px-72 mx-auto">
            <div
              className="w-full relative cursor-pointer"
              onClick={() => index === -1 && setIndex(slides.length - 1)}
            >
              <img
                className="overflow-hidden mb-5 border-4 border-white object-cover"
                src={manifest.locked}
                alt={manifest.title}
              />
              <div className="absolute bottom-0 p-4 z-0 bg-opacity-50 left-0 w-full h-full transition-opacity duration-500 ease-in-out xl:opacity-0 xl:hover:opacity-100 xss:opacity-100 xss:bg-opacity-50">
                <div className="spyagencyCond polygon absolute bottom-0">
                  <div className="bg-white xss:py-1 py-2 xss:text-md md:text-lg lg:text-xl xl:text-2xl xss:px-6 xss:pr-2 md:pl-4 md:pr-8 xl:pr-10">
                    {manifest.title}
                  </div>
                </div>
              </div>

              <Lightbox
                slides={slides}
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
                plugins={[Zoom]}
              />
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
        <div className="pb-20 md:pb-40 background-mentoring">
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
              5C merupakan nilai yang ditanamkan UMN kepada mahasiswanya melalui
              berbagai aktivitas kehidupan sehari-hari.
            </p>
          </div>
          <div className="md:pb-16">
            <img src={Green_Line} className="absolute w-6 md:w-8 xl:w-10" />
          </div>
          <Carousel data={slidesCarousel} logos={logos} />
        </div>
      </div>
    </>
  );
}
