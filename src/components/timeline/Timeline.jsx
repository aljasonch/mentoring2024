import React, { useState, useEffect } from "react";
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

const Timeline = () => {
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
    <div className="relative mt-40 home">
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
              <div className="flex-row w-full text-start ml-4">
                <div className="text-[#AF71FF] text-xs text-center lg:text-sm font-medium px-3 border rounded-2xl border-[#9747FF]">
                  Sabtu, 7 September 2024
                </div>
                <div className="spyagencyBoldItal text-[#4458AD] font-bold lg:text-lg">
                  {unlocked.T1 ? "TUTORIAL" : "???"}
                </div>
                <div className="text-[#4458AD] font-bold text-xs sm:text-base">
                  {unlocked.T1 ? "THE QUEST: INTRODUCTION TO MENTORING" : "???"}
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
              <div className="flex-row text-start w-full ml-4">
                <div className="text-[#AF71FF] text-xs text-center lg:text-sm font-medium px-3 border rounded-2xl border-[#9747FF]">
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
              <div className="flex-row w-full text-start ml-4">
                <div className="text-[#AF71FF] text-xs text-center lg:text-sm font-medium px-3 border rounded-2xl border-[#9747FF]">
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
              <div className="flex-row w-full text-start ml-4">
                <div className="text-[#AF71FF] text-xs text-center lg:text-sm font-medium px-3 border rounded-2xl border-[#9747FF]">
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
              <div className="flex-row w-full text-start ml-4">
                <div className="text-[#AF71FF] text-xs text-center lg:text-sm font-medium px-3 border rounded-2xl border-[#9747FF]">
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
  );
};

export default Timeline;
