import React from "react";
import { events } from "../utils/events";
import VoltageButton from "./VoltageButton";

const EventCard = () => {
  return (
    <div className="bg-[#040d1f]">
      <h2 className="text-[#eaf6ff]">Event</h2>
      <div className="event-card">
        <div className="m-5 h-[400px] rounded-lg shadow-2xl bg-gradient-to-br from-[#0c1f42] to-[#12356b] border border-[#2e6fb0] flex flex-col items-center justify-center gap-4 p-4">
          <h2 className="text-[#eaf6ff] font-bold text-xl">Event name</h2>
          <img src="" alt="" className="max-h-40 object-contain" />
          <VoltageButton label="Register Now" />
        </div>
      </div>
    </div>
  );
};

export default EventCard;