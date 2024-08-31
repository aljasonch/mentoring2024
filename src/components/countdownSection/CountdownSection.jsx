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
  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const [currentDateIndex, setCurrentDateIndex] = useState(0);
  const [isCountdownComplete, setIsCountdownComplete] = useState(false);

  useEffect(() => {
    const now = new Date();
    let foundUpcoming = false;

    for (let i = 0; i < endDate.length; i++) {
      for (let j = 0; j < endDate[i].date.length; j++) {
        if (now < endDate[i].date[j]) {
          setCurrentEventIndex(i);
          setCurrentDateIndex(j);
          foundUpcoming = true;
          break;
        }
      }
      if (foundUpcoming) break;
    }

    if (!foundUpcoming) {
      setIsCountdownComplete(true);
    }
  }, []);

  const handleCountdownComplete = () => {
    let nextEventIndex = currentEventIndex;
    let nextDateIndex = currentDateIndex + 1;

    if (nextDateIndex >= endDate[nextEventIndex].date.length) {
      nextEventIndex++;
      nextDateIndex = 0;
    }

    if (nextEventIndex < endDate.length) {
      setCurrentEventIndex(nextEventIndex);
      setCurrentDateIndex(nextDateIndex);
    } else {
      setIsCountdownComplete(true);
    }
  };

  if (isCountdownComplete) {
    return (
      <div className="relative py-36 md:py-42 w-full h-screen">
        <div className="text-[#D3FFF4] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl my-10 sm:my-12 md:my-16 lg:my-20 xl:my-28 min-h-[200px] transition-all duration-1000 opacity-100 sm:visible translate-y-0 sm:block">
          <p className="spyagencyCond xss:text-xl sm:text-3xl md:text-4xl md:mt-24 mb-12 lg:text-5xl">
            ALL EVENTS HAVE CONCLUDED
          </p>
        </div>
      </div>
    );
  }

  return (
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
  );
};

export default CountdownSection;