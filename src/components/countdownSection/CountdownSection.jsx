// import React, { useEffect, useState } from "react";
// import Countdown from "../countdown/Countdown";
// import { endDate } from "./endDate";

// const CountdownSection = () => {
//   const now = new Date("2024-09-07T07:55:00");
//   const [targetDate, setTargetDate] = useState(null);
//   const [isCountdownComplete, setIsCountdownComplete] = useState(false);

//   useEffect(() => {
//     const upcomingDate = endDate.find((dateObj) => now <= dateObj.date);
//     if (upcomingDate) {
//       setTargetDate(upcomingDate);
//     } else {
//       setIsCountdownComplete(true);
//     }
//   }, [now]);

//   const handleCountdownComplete = () => {
//     setIsCountdownComplete(true);
//   };

//   return (
//     <>
//       {targetDate && !isCountdownComplete && (
//         <div className="relative py-36 md:py-42 w-full h-screen">
//           <div className="text-[#D3FFF4] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl my-10 sm:my-12 md:my-16 lg:my-20 xl:my-28 min-h-[200px] transition-all duration-1000 opacity-100 sm:visible translate-y-0 sm:block">
//             <p className="spyagencyCond xss:text-xl sm:text-3xl md:text-4xl md:mt-24 mb-12 lg:text-5xl">
//               {targetDate.title} BEGINS IN
//             </p>
//             <div>
//               <Countdown
//                 targetDate={targetDate.date}
//                 onCountdownComplete={handleCountdownComplete}
//               />
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default CountdownSection;

// import React, { useEffect, useState } from "react";
// import Countdown from "../countdown/Countdown";
// import { endDate } from "./endDate";

// const CountdownSection = () => {
//   const now = new Date("2024-09-07T07:55:00"); // Menggunakan waktu saat ini
//   const [currentIndex, setCurrentIndex] = useState(0); // Menggunakan index untuk tracking tanggal
//   const [isCountdownComplete, setIsCountdownComplete] = useState(false);

//   useEffect(() => {
//     const upcomingIndex = endDate.findIndex((dateObj) => now <= dateObj.date);
//     if (upcomingIndex !== -1) {
//       setCurrentIndex(upcomingIndex);
//     } else {
//       setIsCountdownComplete(true);
//     }
//   }, [now]);

//   const handleCountdownComplete = () => {
//     if (currentIndex + 1 < endDate.length) {
//       setCurrentIndex(currentIndex + 1);
//     } else {
//       setIsCountdownComplete(true);
//     }
//   };

//   return (
//     <>
//       {!isCountdownComplete && (
//         <div className="relative py-36 md:py-42 w-full h-screen">
//           <div className="text-[#D3FFF4] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl my-10 sm:my-12 md:my-16 lg:my-20 xl:my-28 min-h-[200px] transition-all duration-1000 opacity-100 sm:visible translate-y-0 sm:block">
//             <p className="spyagencyCond xss:text-xl sm:text-3xl md:text-4xl md:mt-24 mb-12 lg:text-5xl">
//               {endDate[currentIndex].title} BEGINS IN
//             </p>
//             <div>
//               <Countdown
//                 targetDate={endDate[currentIndex].date}
//                 onCountdownComplete={handleCountdownComplete}
//               />
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default CountdownSection;

import React, { useEffect, useState } from "react";
import Countdown from "../countdown/Countdown";
import { endDate } from "./endDate";

const CountdownSection = () => {
  const now = new Date("2024-09-06T07:54:00"); // Waktu saat ini
  const [currentEventIndex, setCurrentEventIndex] = useState(0); // Tracking event di endDate
  const [currentDateIndex, setCurrentDateIndex] = useState(0); // Tracking tanggal di dalam event
  const [isCountdownComplete, setIsCountdownComplete] = useState(false);

  useEffect(() => {
    const upcomingEventIndex = endDate.findIndex((event) => {
      return event.date.some((date) => now <= date);
    });

    if (upcomingEventIndex !== -1) {
      const upcomingDateIndex = endDate[upcomingEventIndex].date.findIndex(
        (date) => now <= date
      );
      setCurrentEventIndex(upcomingEventIndex);
      setCurrentDateIndex(upcomingDateIndex);
    } else {
      setIsCountdownComplete(true);
    }
  }, [now]);

  const handleCountdownComplete = () => {
    if (
      currentDateIndex + 1 < endDate[currentEventIndex].date.length
    ) {
      // Jika masih ada tanggal berikutnya dalam event yang sama
      setCurrentDateIndex(currentDateIndex + 1);
    } else if (currentEventIndex + 1 < endDate.length) {
      // Jika ada event berikutnya dalam endDate
      setCurrentEventIndex(currentEventIndex + 1);
      setCurrentDateIndex(0); // Reset tanggal ke yang pertama dalam event berikutnya
    } else {
      setIsCountdownComplete(true);
    }
  };

  return (
    <>
      {!isCountdownComplete && (
        <div className="relative py-36 md:py-42 w-full h-screen">
          <div className="text-[#D3FFF4] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl my-10 sm:my-12 md:my-16 lg:my-20 xl:my-28 min-h-[200px] transition-all duration-1000 opacity-100 sm:visible translate-y-0 sm:block">
            <p className="spyagencyCond xss:text-xl sm:text-3xl md:text-4xl md:mt-24 mb-12 lg:text-5xl">
              {endDate[currentEventIndex].title} BEGINS IN
            </p>
            <div>
              <Countdown
                targetDate={endDate[currentEventIndex].date[currentDateIndex]}
                onCountdownComplete={handleCountdownComplete}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CountdownSection;
