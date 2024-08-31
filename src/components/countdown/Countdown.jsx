import React, { useEffect, useState } from "react";

const calculateTimeLeft = (targetDate) => {
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
};

const Countdown = ({ targetDate, onCountdownComplete }) => {
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
};

export default Countdown;
