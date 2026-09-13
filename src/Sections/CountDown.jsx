import React, { useState, useEffect } from "react";
import "../text.css";

const EVENT_DATE = new Date("2026-10-10T00:00:00");

const calculateTimeLeft = () => {
  const diff = EVENT_DATE.getTime() - new Date().getTime();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff / 3600000) % 24),
    minutes: Math.floor((diff / 60000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
};

const pad = (n) => String(n).padStart(2, "0");

const WHITISH_CYAN = "#dffaff";

const Star = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
    <path
      d="M12 1 L14.5 9.5 L23 12 L14.5 14.5 L12 23 L9.5 14.5 L1 12 L9.5 9.5 Z"
      fill={WHITISH_CYAN}
    />
  </svg>
);

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const tiles = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Minutes" },
    { value: timeLeft.seconds, label: "Seconds" },
  ];

  return (
    <div className="event-banner" style={{ borderBottom: "none", boxShadow: "none" }}>
      <div className="flex items-center justify-center gap-3 mb-8" style={{ color: WHITISH_CYAN }}>
        <Star />
        <span
          style={{
            width: "70px",
            height: "1px",
            background: WHITISH_CYAN,
            flexShrink: 0,
          }}
        />
        <h3
          className="font-heading-royal text-lg sm:text-xl font-bold tracking-widest text-center"
          style={{ color: WHITISH_CYAN, margin: 0, whiteSpace: "nowrap" }}
        >
          THE WAIT IS ALMOST OVER
        </h3>
        <span
          style={{
            width: "70px",
            height: "1px",
            background: WHITISH_CYAN,
            flexShrink: 0,
          }}
        />
        <Star />
      </div>

      <div className="flex items-center justify-between gap-6 flex-wrap max-w-5xl mx-auto">
        <svg className="event-chevron hidden sm:block" width="14" height="32" viewBox="0 0 16 34" fill="none">
          <path d="M14 2 L4 17 L14 32" strokeWidth="2" />
          <path d="M9 2 L-1 17 L9 32" strokeWidth="2" opacity="0.45" />
        </svg>

        <div>
          <div className="event-label">Event begins on</div>
          <div
            style={{
              width: "36px",
              height: "2px",
              margin: "6px 0",
              background: WHITISH_CYAN,
              borderRadius: "2px",
            }}
          />
          <div className="event-date">Oct 10, 2026</div>
        </div>

        <div className="flex gap-2 sm:gap-3">
          {tiles.map((t) => (
            <div key={t.label} className="event-tile">
              <div className="event-num">{pad(t.value)}</div>
              <span className="event-lbl">{t.label}</span>
            </div>
          ))}
        </div>

        <svg className="event-chevron hidden sm:block" width="14" height="32" viewBox="0 0 16 34" fill="none">
          <path d="M2 2 L12 17 L2 32" strokeWidth="2" />
          <path d="M7 2 L17 17 L7 32" strokeWidth="2" opacity="0.45" />
        </svg>
      </div>
    </div>
  );
};

export default CountdownTimer;