import React, { useState, useEffect } from "react";
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
import Mentoring from "../../assets/Mentoring.jpg";
import Logo_5C from "../../assets/5C.webp";
import Logo_Caring from "../../assets/CARING.webp";
import Logo_Credible from "../../assets/CREDIBLE.webp";
import Logo_Competent from "../../assets/COMPETENT.webp";
import Logo_Competitive from "../../assets/COMPETITIVE.webp";
import Logo_Customer_Delight from "../../assets/CUSTOMER.webp";
import { Carousel } from "../../components/carousel/Carousel";
import { slidesCarousel } from "../../components/carousel/carouselData.json";

function calculateTimeLeft(targetDate) {
  const difference = +new Date(targetDate) - +new Date();
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
}

function Countdown({ targetDate, onCountdownComplete }) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setTimeout(() => {
      const newTimeLeft = calculateTimeLeft(targetDate);
      setTimeLeft(newTimeLeft);

      if (
        newTimeLeft.days === 0 &&
        newTimeLeft.hours === 0 &&
        newTimeLeft.minutes === 0 &&
        newTimeLeft.seconds === 0
      ) {
        onCountdownComplete();
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, targetDate, onCountdownComplete]);

  return (
    <div className="flex justify-center xl:gap-24 lg:gap-12 md:gap-6 xss:gap-0 items-center  xss:flex-col md:flex-row">
      <div className="text-center xl:text-8xl lg:text-6xl md:text-5xl xss:text-4xl">
        {String(timeLeft.days || "0").padStart(2, "0")}
        <span className="xss:text-base md:text-xl block">Days</span>
      </div>
      <div className="text-center xl:text-8xl lg:text-6xl md:text-5xl xss:text-base">
        <p>:</p>
      </div>
      <div className="text-center xl:text-8xl lg:text-6xl md:text-5xl xss:text-4xl">
        {String(timeLeft.hours || "0").padStart(2, "0")}
        <span className="xss:text-base md:text-xl block">Hours</span>
      </div>
      <div className="text-center xl:text-8xl lg:text-6xl md:text-5xl xss:text-base">
        <p>:</p>
      </div>
      <div className="text-center xl:text-8xl lg:text-6xl md:text-5xl xss:text-4xl">
        {String(timeLeft.minutes || "0").padStart(2, "0")}
        <span className="xss:text-base md:text-xl block">Minutes</span>
      </div>
      <div className="text-center xl:text-8xl lg:text-6xl md:text-5xl xss:text-base">
        <p>:</p>
      </div>
      <div className="text-center xl:text-8xl lg:text-6xl md:text-5xl xss:text-4xl">
        {String(timeLeft.seconds || "0").padStart(2, "0")}
        <span className="xss:text-base md:text-xl block">Seconds</span>
      </div>
    </div>
  );
}

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
  const [showAdditionalSection, setShowAdditionalSection] = useState(false);
  const [showCountdown, setShowCountdown] = useState(true);

  useEffect(() => {
    const now = new Date();
    const endDate = new Date("2024-09-09T17:00:00");

    if (now >= endDate) {
      localStorage.setItem("countdownComplete", "true");
      setShowCountdown(false);
      setShowText(true);
      setShowLogo(true);
      setShowAdditionalSection(true);
      return;
    }

    const timer1 = setTimeout(() => {
      setShowText(true);
    }, 2000);

    const timer2 = setTimeout(() => {
      setShowLogo(true);
    }, 3000);

    const timer3 = setTimeout(() => {
      setShowAdditionalSection(true);
    }, 4000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  const targetDate = "2024-09-09T17:00:00";

  const handleCountdownComplete = () => {
    setShowCountdown(false);
    localStorage.setItem("countdownCompleted", "true");
  };

  return (
    <>
      <div className="relative py-36 md:py-42 home w-full">
        <img
          src={Green_Line_LancipKiri}
          className="absolute w-6 md:w-8 xl:w-10"
          alt="Green Line"
        />
        <div
          className={`spyagencyGradient invisible text-[#D3FFF4] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl my-10 sm:my-12 md:my-16 lg:my-20 xl:my-28 min-h-[200px] transition-all duration-1000 ${
            showText
              ? "opacity-100 sm:visible translate-y-0"
              : "opacity-0 invisible translate-y-10"
          } sm:block`}
        >
          <div
            id="count"
            style={{
              display: showCountdown ? "block" : "none",
              visibility: showCountdown ? "visible" : "hidden",
            }}
          >
            <p className="spyagencyCond xss:text-xl sm:text-3xl md:text-4xl md:mt-24 mb-12 lg:text-5xl">
              OUR JOURNEY BEGINS IN
            </p>
            <div>
              <Countdown
                targetDate={targetDate}
                onCountdownComplete={handleCountdownComplete}
              />
            </div>
          </div>
          <div
            id="count2"
            style={{
              display: showCountdown ? "none" : "block",
              visibility: showCountdown ? "hidden" : "visible",
            }}
          >
            {showAdditionalSection && (
              <>
                <p className="mb-2 sm:mb-3 md:mb-4 lg:mb-5 sm:text-5xl lg:text-6xl xl:text-8xl">
                  REVEAL YOUR
                </p>
                <p className="mb-2 sm:mb-3 md:mb-4 lg:mb-5 sm:text-5xl lg:text-6xl xl:text-8xl">
                  CAPABiLiTY WiTHiN A
                </p>
                <p
                  style={{ marginBottom: "00px" }}
                  className="mb-2 sm:mb-3 md:mb-4 lg:mb-5 sm:text-5xl lg:text-6xl xl:text-8xl"
                >
                  PURPOSEFUL QUEST
                </p>
              </>
            )}
            <a
              href="https://www.instagram.com/mentoringumn/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Logo}
                className={`absolute left-1/2 transform hover:scale-110 hover:cursor-pointer -translate-x-1/2 w-48 sm:w-56 md:w-64 lg:w-80 xl:w-[402px] -top-8 shadow-logo-home transition-all duration-[1500ms] delay-100 ${
                  showLogo
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible translate-y-10"
                }`}
                alt="Logo"
              />
            </a>
          </div>
        </div>

        <img
          src={Green_Line_LancipKanan}
          className="right-0 top-52 absolute w-6 md:w-8 xl:w-10"
          alt="Green Line"
        />
      </div>
      <div className="relative background-transition">
        <img src={Transition1} className="relative z-20" alt="Transition 1" />
        <img
          src={Petir_1}
          className="absolute xl:w-1/6 w-1/4 xss:top-10 xl:top-40 sm:top-20 lg:top-24 left-0 z-10"
          alt="Petir 1"
        />
        <img
          src={Petir_2}
          className="absolute xl:w-1/4 w-1/6 xss:top-10 xl:top-72 sm:top-20 lg:top-24 right-0 z-10"
          alt="Petir 2"
        />
        <div className="relative z-0 py-20 lg:py-36 home">
          <div className="text-white my-10 mx-auto">
            <img src={Logo} className="w-[81px] mx-auto" alt="Logo Mentoring" />
            <p className="spyagencyCond text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              APA iTU
            </p>
            <p className="spyagencyBoldItal text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              Mentoring?
            </p>
            <div
              className="mx-auto my-12 md:my-16 w-72 md:w-[500px] lg:w-[600px] xl:w-[700px] shadow-2xl"
              
            >
              <img
                src={Mentoring}
                className=" border-8 rounded-3xl md:rounded-3xl lg:rounded-[36px]"
                alt="Mentoring"
              />
            </div>
            <p className="text-xs sm:text-base lg:text-lg xl:text-xl font-medium px-14 md:px-24 xl:px-72 mx-auto">
              Mentoring UMN adalah kegiatan tahunan yang
              wajib diikuti oleh Mentee dengan tujuan
              menyeluruh, memperkenalkan secara mendalam nilai-nilai 5C UMN.
              Mentoring UMN juga memiliki maskot bernama ZACHERY!
            </p>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="background-transition_2">
          <img src={Transition2} className="z-10 relative" alt="Transition 2" />
          <img
            src={Bintik_3}
            className="mt-24 w-2/6 top-0 left-0 absolute z-0"
            alt="Bintik 3"
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
            <img
              src={Green_Line}
              className="absolute w-6 md:w-8 xl:w-10"
              alt="Green Line"
            />
          </div>
          <Carousel data={slidesCarousel} logos={logos} />
        </div>
      </div>
    </>
  );
}

export default Home;
