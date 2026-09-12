import React, { useState, useEffect } from "react";
import "animate.css";

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const eventDate = new Date("2025-10-10T00:00:00").getTime();
    const currentTime = new Date().getTime();
    const difference = eventDate - currentTime;

    let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return {
      days: timeLeft.days < 10 ? `0${timeLeft.days}` : timeLeft.days,
      hours: timeLeft.hours < 10 ? `0${timeLeft.hours}` : timeLeft.hours,
      minutes: timeLeft.minutes < 10 ? `0${timeLeft.minutes}` : timeLeft.minutes,
      seconds: timeLeft.seconds < 10 ? `0${timeLeft.seconds}` : timeLeft.seconds,
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center text-white animate__animated animate__fadeInUp duration-500">
      <br />
      <h1 className="font-heading-royal gold-solid text-lg sm:text-xl md:text-xl lg:text-xl xl:text-2xl font-bold py-4 sm:py-2 lg:py-1 text-center">
        THE WAIT IS ALMOST OVER
      </h1>

      <div className="royal-divider">
        <span className="diamond"></span>
      </div>

      <p className="font-date-royal gold-solid text-xl mb-4">
        Oct 10, 2025
      </p>

      <div className="grid grid-cols-4 gap-4 sm:gap-5 text-center m-3">
        <div className="royal-tile transform hover:scale-105">
          <p className="font-display-royal gold-solid text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl font-bold countdown">
            {timeLeft.days}
          </p>
          <p className="font-label-royal gold-solid mt-2 text-xs uppercase">
            Days
          </p>
        </div>

        <div className="royal-tile transform hover:scale-105">
          <p className="font-display-royal gold-solid text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl font-bold countdown">
            {timeLeft.hours}
          </p>
          <p className="font-label-royal gold-solid mt-2 text-xs uppercase">
            Hours
          </p>
        </div>

        <div className="royal-tile transform hover:scale-105">
          <p className="font-display-royal gold-solid text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl font-bold countdown">
            {timeLeft.minutes}
          </p>
          <p className="font-label-royal gold-solid mt-2 text-xs uppercase">
            Minutes
          </p>
        </div>

        <div className="royal-tile transform hover:scale-105">
          <p className="font-display-royal gold-solid text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl font-bold countdown">
            {timeLeft.seconds}
          </p>
          <p className="font-label-royal gold-solid mt-2 text-xs uppercase">
            Seconds
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;