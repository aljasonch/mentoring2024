import React, { useState, useEffect } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Petir_1 from "../../assets/1.webp";
import Petir_2 from "../../assets/2.webp";
import Transition1 from "../../assets/3.webp";
import Transition2 from "../../assets/4.webp";
import Bintik_3 from "../../assets/5.webp";
import Green_Line from "../../assets/6.webp";
import Chat from "../../assets/bubblechat.png";
import Zachery from "../../assets/gif/loading.gif";
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
    <div className="flex justify-center xl:gap-24 lg:gap-12 md:gap-6 xss:gap-0 items-center  xss:flex-col md:flex-row spyagencyGradient ">
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
        <div
          className={`invisible text-[#D3FFF4] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl my-10 sm:my-12 md:my-16 lg:my-20 xl:my-28 min-h-[200px] transition-all duration-1000 ${
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
              <div className="relative -top-24">
                <img
                  src={Zachery}
                  alt="Loading"
                  className="absolute left-12 top-8 w-[50%] shadow-object"
                />
                <div className="absolute lg:right-24 xl:right-36 lg:w-[50%] xl:w-[45%]">
                  <div className="relative">
                    <img src={Chat} className="w-full h-auto" />
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center lg:ml-10 xl:ml-14 text-white">
                      <h1 className="spyagencyRegular lg:text-2xl xl:text-4xl">
                        Welcome To
                      </h1>
                      <h1 className="spyagencyGradient font-normal lg:text-5xl xl:text-7xl xl:leading-[56px] italic">
                        Mentoring
                        <br /> 2024
                      </h1>
                      <p className="lg:text-xs xl:text-sm max-w-[70%] lg:mt-6 xl:mt-8">
                        Selamat datang di website Mentoring UMN 2024! <br />
                        Kenalin, Aku{" "}
                        <span className="font-bold italic">
                          Zachery&#x1F44B;
                        </span>
                        , dan aku akan menjadi pemandu kamu dalam menemukan
                        kelompokmu.
                        <p className="xl:mt-10 font-bold  italic">
                          Yuk, temukan kelompokmu sekarang dengan menekan tombol
                          di bawah ini!
                        </p>
                      </p>
                      <Link
                        to="/groups"
                        className="bg-white w-48 h-10 text-base rounded-3xl font-normal shadow-lg text-black mt-4 flex items-center justify-center hover:text-white hover:bg-transparent hover:border-white hover:border-2"
                      >
                        Find Your Group
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
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
            <div className="mx-auto my-12 md:my-16 w-72 md:w-[500px] lg:w-[600px] xl:w-[700px] shadow-2xl">
              <img
                src={Mentoring}
                className=" border-8 rounded-3xl md:rounded-3xl lg:rounded-[36px]"
                alt="Mentoring"
              />
            </div>
            <p className="xss:text-sm xs:text-base sm:text-base lg:text-lg xl:text-xl font-medium px-14 md:px-24 xl:px-72 mx-auto">
              Mentoring UMN adalah kegiatan tahunan yang wajib diikuti oleh
              Mentee dengan tujuan menyeluruh, memperkenalkan secara mendalam
              nilai-nilai 5C UMN. Mentoring UMN juga memiliki maskot bernama
              ZACHERY!
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
        <div className="pb-20 md:pb-40 home">
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
            <p className="xss:text-sm xs:text-base sm:text-base lg:text-lg xl:text-xl font-medium px-12 md:px-40 xl:px-72 mx-auto mt-10 md:my-12 mb-24 lg:mb-16 xl:mb-20">
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
