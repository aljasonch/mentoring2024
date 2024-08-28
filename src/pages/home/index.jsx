import React, { useState, useEffect } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Petir_1 from "../../assets/1.webp";
import Petir_2 from "../../assets/2.webp";
import GreenLine from "../../assets/7.webp";
import Transition1 from "../../assets/3.webp";
import Transition2 from "../../assets/4.webp";
import Bintik_3 from "../../assets/5.webp";
import Green_Line from "../../assets/6.webp";
import Asset_6 from "../../assets/15.webp";
import Chat from "../../assets/bubblechat.webp";
import ChatMobile from "../../assets/bubblechatMobile.webp";
import Zachery from "../../assets/zacheryspeak.webp";
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
import T1 from "../../assets/map/verse 1_LOCKED.jpg";
import T2 from "../../assets/map/verse 2_LOCKED.jpg";
import T3 from "../../assets/map/verse 3_LOCKED.jpg";
import T4 from "../../assets/map/the quest_LOCKED.jpg";
import T5 from "../../assets/map/manifest_LOCKED.jpg";
import T1_2 from "../../assets/map/verse 1_UNLOCKED.jpg";
import T2_2 from "../../assets/map/verse 2_UNLOCKED.jpg";
import T3_2 from "../../assets/map/verse 3_UNLOCKED.jpg";
import T4_2 from "../../assets/map/the quest_UNLOCKED.jpg";
import T5_2 from "../../assets/map/manifest_UNLOCKED.jpg";

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
  const [showAdditionalSection, setShowAdditionalSection] = useState(false);
  const [showCountdown, setShowCountdown] = useState(true);

  useEffect(() => {
    const now = new Date();
    const endDate = new Date("2024-08-30T17:00:00");

    if (now >= endDate) {
      localStorage.setItem("countdownComplete", "true");
      setShowCountdown(false);
      setShowText(true);
      setShowAdditionalSection(true);
      return;
    }

    const timer1 = setTimeout(() => {
      setShowText(true);
    }, 1500);

    const timer2 = setTimeout(() => {
      setShowAdditionalSection(true);
    }, 3000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const targetDate = "2024-08-30T17:00:00";

  const handleCountdownComplete = () => {
    setShowCountdown(false);
    localStorage.setItem("countdownCompleted", "true");
  };

  const [unlocked, setUnlocked] = useState({
    T1: false,
    T2: false,
    T3: false,
    T4: false,
    T5: false,
  });

  useEffect(() => {
    const today = new Date();

    const dates = [
      { key: "T1", date: new Date("2024-08-07") },
      { key: "T2", date: new Date("2024-08-14") },
      { key: "T3", date: new Date("2024-08-21") },
      { key: "T4", date: new Date("2024-08-28") },
      { key: "T5", date: new Date("2024-08-05") },
    ];

    dates.forEach(({ key, date }) => {
      if (today >= date) {
        setUnlocked((prevState) => ({ ...prevState, [key]: true }));
      }
    });
  }, []);

  return (
    <>
      <div className="relative py-36 md:py-42 home w-full">
        <img src={GreenLine} className="absolute top-36 w-6 md:w-10 left-0" />
        <img
          src={GreenLine}
          className="absolute top-36 w-6 md:w-10 right-0 scale-x-[-1]"
        />
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
              OUR JOURNEY BEGINS iN
            </p>
            <div>
              <Countdown
                targetDate={targetDate}
                onCountdownComplete={handleCountdownComplete}
              />
            </div>
          </div>
          <div
            id="display"
            style={{
              display: showCountdown ? "none" : "block",
              visibility: showCountdown ? "hidden" : "visible",
            }}
          >
            {showAdditionalSection && (
              <div className="relative -top-10 sm:top-6 md:top-12 lg:-top-10 xl:-top-20">
                <img
                  src={GreenLine}
                  className="absolute top-8 sm:hidden block w-6 left-0"
                />
                <img
                  src={GreenLine}
                  className="absolute top-8 sm:hidden block w-6 right-0 scale-x-[-1]"
                />
                <img
                  src={Zachery}
                  alt="Loading"
                  className="absolute center-mobile xss:top-72 xs:top-80 sm:left-4 md:left-4 lg:left-8 sm:top-0 md:-top-4 lg:-top-8 sm:w-[40%] xss:w-[50%] shadow-object"
                />
                <div className="absolute sm:right-0 md:right-12 lg:right-24 xl:right-36 sm:w-[60%] md:w-[55%] lg:w-[50%] xl:w-[45%] w-full flex justify-center sm:justify-end">
                  <div className="flex justify-center items-center">
                    <img
                      src={Chat}
                      className="sm:block hidden lg:w-full md:w-[90%] sm:w-[85%] h-auto"
                    />
                    <img
                      src={ChatMobile}
                      className="block sm:hidden h-auto w-[65%] "
                    />
                    <div className="absolute inset-0 flex flex-col justify-center items-center xss:-top-8 xs:-top-10 sm:top-0 text-center sm:ml-8 md:ml-9 lg:ml-12 xl:ml-20 text-white xss:max-w-[50%] xss:mx-auto sm:max-w-[100%]">
                      <h1 className="spyagencyRegular xss:text-xs sm:text-sm md:text-base lg:text-2xl xl:text-3xl">
                        Welcome To
                      </h1>
                      <h1 className="spyagencyGradient font-normal xss:text-2xl xs:text-3xl xs:leading-[20px] xss:leading-[18px] sm:text-2xl md:text-3xl lg:text-5xl lg:leading-[36px] xl:text-7xl xl:leading-[56px] md:leading-[24px] sm:leading-[20px] italic">
                        Mentoring
                        <br /> 2024
                      </h1>
                      <p className="xs:text-[11px] xss:text-[10px] xss:leading-[10px] xs:leading-[12px] sm:text-[10px] md:text-[10px] sm:leading-[12px] md:leading-[14px] lg:text-sm xl:text-lg sm:max-w-[75%] md:max-w-[60%] lg:max-w-[80%] xss:mt-6 sm:mt-2 md:mt-2 lg:mt-6 xl:mt-8">
                        Selamat datang di website Mentoring UMN 2024! <br />
                        Kenalin, Aku{" "}
                        <span className="font-bold italic">
                          Zachery&#x1F44B;
                        </span>
                        , dan aku akan menjadi pemandu kamu dalam menemukan
                        kelompokmu.
                        <p className="mt-6 sm:mt-5 md:mt-6 lg:mt-10 font-bold italic">
                          Yuk, temukan kelompokmu sekarang dengan menekan tombol
                          di bawah ini!
                        </p>
                      </p>
                      <Link
                        to="/groups"
                        className="bg-white xss:w-24 xs:w-28 xss:h-7 xs:h-8 sm:w-32 sm:h-8 lg:w-48 lg:h-10 text-sm lg:text-lg rounded-3xl font-semibold shadow-lg text-[#2B2476] mt-4 flex items-center justify-center hover:text-white hover:bg-transparent hover:border-white hover:border-2"
                      >
                        Let&apos;s Go!
                      </Link>
                    </div>
                  </div>
                </div>
                <img
                  src={Asset_6}
                  className="absolute hidden sm:block scale-x-[-1] z-10 w-72 sm:w-7/12 sm:-top-10 md:-top-14 lg:top-4 left-0 lg:w-1/2"
                  alt="3"
                />
                <img
                  src={Asset_6}
                  className="absolute hidden sm:block z-10 w-72 sm:w-7/12 sm:-bottom-80 md:-bottom-[23rem] lg:-bottom-[30rem] xl:-bottom-[40rem] right-0 lg:w-1/2"
                  alt="3"
                />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="relative py-20 lg:py-36 home">
        <p className="spyagencyBoldItal text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white">
          TIMELINE
        </p>
        <div className="flex flex-col items-center space-y-4 p-4 mt-4 ">
          <div className="relative right-32 xs:right-40 md:right-56 lg:right-0">
            <div className="w-0.5 h-11 md:h-20 lg:h-40 bg-[#95A9FF] mx-auto"></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 size-2 lg:size-4 rounded-full bg-[#95A9FF]"></div>
          </div>
          <div className="relative">
            <div className="absolute -right-32 xs:-right-40 md:-right-60 lg:right-24 -top-8">
              <div className="flex w-60 xs:w-72 md:w-[26rem] xl:w-[28rem] h-28 xs:h-32 xl:h-36 bg-white rounded-3xl p-4 items-center cardTl">
                <img
                  src={unlocked.T1 ? T1_2 : T1}
                  className="w-24 lg:w-[7.5rem] h-20 lg:h-[6.5rem] rounded-xl md:block lg:block hidden"
                  alt="Timeline 1"
                />
                <div className="flex-row text-start ml-4">
                  <div className="text-[#AF71FF] text-xs lg:text-sm font-medium px-3 border rounded-2xl border-[#9747FF]">
                    Sabtu, 7 September 2024
                  </div>
                  <div className="spyagencyBoldItal text-[#4458AD] font-bold lg:text-lg">
                    {unlocked.T1 ? "TUTORIAL" : "???"}
                  </div>
                  <div className="text-[#4458AD] font-bold text-xs sm:text-base">
                    {unlocked.T1
                      ? "THE QUEST: INTRODUCTION TO MENTORING"
                      : "???"}
                  </div>
                  <div className="text-[#AF71FF] text-xs lg:text-base font-medium">
                    Offline
                  </div>
                </div>
              </div>
            </div>
            <div className="relative right-32 xs:right-40 md:right-56 lg:right-0 size-8 md:size-12 lg:size-16 rounded-full border-2 md:border-3 lg:border-4 eclipse border-[#18E6B1] border-r-transparent lg:border-l-transparent lg:border-r-[#18E6B1] flex items-center justify-center my-2">
              <div className="size-6 md:size-8 lg:size-12 rounded-full border-2 md:border-3 lg:border-4 border-[#18E6B1] border-r-transparent lg:border-l-transparent lg:border-r-[#18E6B1] "></div>
            </div>
          </div>
          <div className="relative right-32 xs:right-40 md:right-56 lg:right-0">
            <div className="w-2 lg:w-4 h-2 lg:h-4 rounded-full bg-[#95A9FF]"></div>
            <div className="w-0.5 h-20 md:h-28 lg:h-28 bg-[#95A9FF] mx-auto"></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 size-2 lg:size-4 rounded-full bg-[#95A9FF]"></div>
          </div>
          <div className="relative">
            <div className="absolute -left-20 xs:-left-24 md:-left-32 lg:left-24 -top-8">
              <div className="flex w-60 xs:w-72 md:w-[26rem] xl:w-[28rem] h-28 xs:h-32 xl:h-36 bg-white rounded-3xl p-4 items-center cardTl">
                <img
                  src={unlocked.T2 ? T2_2 : T2}
                  className="w-24 lg:w-[7.5rem] h-20 lg:h-[6.5rem] rounded-xl md:block lg:block hidden"
                  alt="Timeline 2"
                />
                <div className="flex-row text-start ml-4">
                  <div className="text-[#AF71FF] text-xs lg:text-sm font-medium px-3 border rounded-2xl border-[#9747FF]">
                    Sabtu, 14 September 2024
                  </div>
                  <div className="spyagencyBoldItal text-[#4458AD] font-bold lg:text-lg">
                    {unlocked.T2 ? "1st VERSE" : "???"}
                  </div>
                  <div className="text-[#4458AD] font-bold text-xs sm:text-base">
                    {unlocked.T2 ? "COOPERATING THE SAFARI" : "???"}
                  </div>
                  <div className="text-[#AF71FF] text-xs lg:text-base font-medium">
                    Offline
                  </div>
                </div>
              </div>
            </div>
            <div className="relative right-32 xs:right-40 md:right-56 lg:right-0 size-8 md:size-12 lg:size-16 rounded-full border-2 md:border-3 lg:border-4 eclipse border-[#18E6B1] border-r-transparent flex items-center justify-center my-2">
              <div className="size-6 md:size-8 lg:size-12 rounded-full border-2 md:border-3 lg:border-4 border-[#18E6B1] border-r-transparent "></div>
            </div>
          </div>
          <div className="relative right-32 xs:right-40 md:right-56 lg:right-0">
            <div className="w-2 lg:w-4 h-2 lg:h-4 rounded-full bg-[#95A9FF]"></div>
            <div className="w-0.5 h-20 md:h-28 lg:h-28 bg-[#95A9FF] mx-auto"></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 size-2 lg:size-4 rounded-full bg-[#95A9FF]"></div>
          </div>
          <div className="relative">
            <div className="absolute -right-32 xs:-right-40 md:-right-60 lg:right-24 -top-8">
              <div className="flex w-60 xs:w-72 md:w-[26rem] xl:w-[28rem] h-28 xs:h-32 xl:h-36 bg-white rounded-3xl p-4 items-center cardTl">
                <img
                  src={unlocked.T3 ? T3_2 : T3}
                  className="w-24 lg:w-[7.5rem] h-20 lg:h-[6.5rem] rounded-xl md:block lg:block hidden"
                  alt="Timeline 3"
                />
                <div className="flex-row text-start ml-4">
                  <div className="text-[#AF71FF] text-xs lg:text-sm font-medium px-3 border rounded-2xl border-[#9747FF]">
                    Sabtu, 21 September 2024
                  </div>
                  <div className="spyagencyBoldItal text-[#4458AD] font-bold lg:text-lg">
                    {unlocked.T3 ? "2nd VERSE" : "???"}
                  </div>
                  <div className="text-[#4458AD] font-bold text-xs sm:text-base">
                    {unlocked.T3 ? "CONQUERING THE ABYSS" : "???"}
                  </div>
                  <div className="text-[#AF71FF] text-xs lg:text-base font-medium">
                    Offline
                  </div>
                </div>
              </div>
            </div>
            <div className="relative right-32 xs:right-40 md:right-56 lg:right-0 size-8 md:size-12 lg:size-16 rounded-full border-2 md:border-3 lg:border-4 eclipse border-[#18E6B1] border-r-transparent lg:border-l-transparent lg:border-r-[#18E6B1] flex items-center justify-center my-2">
              <div className="size-6 md:size-8 lg:size-12 rounded-full border-2 md:border-3 lg:border-4 border-[#18E6B1] border-r-transparent lg:border-l-transparent lg:border-r-[#18E6B1] "></div>
            </div>
          </div>
          <div className="relative right-32 xs:right-40 md:right-56 lg:right-0">
            <div className="w-2 lg:w-4 h-2 lg:h-4 rounded-full bg-[#95A9FF]"></div>
            <div className="w-0.5 h-20 md:h-28 lg:h-28 bg-[#95A9FF] mx-auto"></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 size-2 lg:size-4 rounded-full bg-[#95A9FF]"></div>
          </div>
          <div className="relative">
            <div className="absolute -left-20 xs:-left-24 md:-left-32 lg:left-24 -top-8">
              <div className="flex w-60 xs:w-72 md:w-[26rem] xl:w-[28rem] h-28 xs:h-32 xl:h-36 bg-white rounded-3xl p-4 items-center cardTl">
                <img
                  src={unlocked.T4 ? T4_2 : T4}
                  className="w-24 lg:w-[7.5rem] h-20 lg:h-[6.5rem] rounded-xl md:block lg:block hidden"
                  alt="Timeline 4"
                />
                <div className="flex-row text-start ml-4">
                  <div className="text-[#AF71FF] text-xs lg:text-sm font-medium px-3 border rounded-2xl border-[#9747FF]">
                    Sabtu, 28 September 2024
                  </div>
                  <div className="spyagencyBoldItal text-[#4458AD] font-bold lg:text-lg">
                    {unlocked.T4 ? "3rd VERSE" : "???"}
                  </div>
                  <div className="text-[#4458AD] font-bold text-xs sm:text-base">
                    {unlocked.T4 ? "RESURRECTION OF KALPATARU" : "???"}
                  </div>
                  <div className="text-[#AF71FF] text-xs lg:text-base font-medium">
                    Offline
                  </div>
                </div>
              </div>
            </div>
            <div className="relative right-32 xs:right-40 md:right-56 lg:right-0 size-8 md:size-12 lg:size-16 rounded-full border-2 md:border-3 lg:border-4 eclipse border-[#18E6B1] border-r-transparent flex items-center justify-center my-2">
              <div className="size-6 md:size-8 lg:size-12 rounded-full border-2 md:border-3 lg:border-4 border-[#18E6B1] border-r-transparent "></div>
            </div>
          </div>
          <div className="relative right-32 xs:right-40 md:right-56 lg:right-0">
            <div className="w-2 lg:w-4 h-2 lg:h-4 rounded-full bg-[#95A9FF]"></div>
            <div className="w-0.5 h-20 md:h-28 lg:h-28 bg-[#95A9FF] mx-auto"></div>
            <div className="w-2 lg:w-4 h-2 lg:h-4 rounded-full bg-[#95A9FF]"></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 size-2 lg:size-4 rounded-full bg-[#95A9FF] hidden"></div>
          </div>
          <div className="relative ">
            <div className="absolute -right-32 xs:-right-40 md:-right-60 lg:right-24 -top-8">
              <div className="flex w-60 xs:w-72 md:w-[26rem] xl:w-[28rem] h-28 xs:h-32 xl:h-36 bg-white rounded-3xl p-4 items-center cardTl">
                <img
                  src={unlocked.T5 ? T5_2 : T5}
                  className="w-24 lg:w-[7.5rem] h-20 lg:h-[6.5rem] rounded-xl md:block lg:block hidden"
                  alt="Timeline 5"
                />
                <div className="flex-row text-start ml-4">
                  <div className="text-[#AF71FF] text-xs lg:text-sm font-medium px-3 border rounded-2xl border-[#9747FF]">
                    Coming Soon
                  </div>
                  <div className="spyagencyBoldItal text-[#4458AD] font-bold lg:text-lg">
                    {unlocked.T5 ? "MANIFEST" : "???"}
                  </div>
                  <div className="text-[#AF71FF] text-xs lg:text-base font-medium">
                    Offline
                  </div>
                </div>
              </div>
            </div>
            <div className="relative right-32 xs:right-40 md:right-56 lg:right-0 size-8 md:size-12 lg:size-16 rounded-full border-2 md:border-3 lg:border-4 eclipse border-[#18E6B1] border-r-transparent lg:border-l-transparent lg:border-r-[#18E6B1] flex items-center justify-center my-2">
              <div className="size-6 md:size-8 lg:size-12 rounded-full border-2 md:border-3 lg:border-4 border-[#18E6B1] border-r-transparent lg:border-l-transparent lg:border-r-[#18E6B1] "></div>
            </div>
          </div>
          <div className="relative right-32 xs:right-40 md:right-52 lg:right-0">
            <div className="w-0.5 h-11 md:h-20 lg:h-40 bg-[#95A9FF] mx-auto"></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 size-2 lg:size-4 rounded-full bg-[#95A9FF]"></div>
          </div>
        </div>
      </div>
      <div className="relative background-transition mt-20">
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
        <div className="relative py-20 lg:py-36 home">
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
            className="mt-24 w-2/6 top-0 left-0 absolute"
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
