import React from "react";
import "../text.css";

const LocateMap = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="mb-4 w-full">
        <div className="font-heading-royal gold-solid p-2 text-xl text-center md:text-2xl px-2 font-semibold">
          Locate Us
        </div>
        <div className="flex flex-col justify-center py-3 px-3 overflow-hidden">
          <iframe
            className="w-50 h-60 rounded outline outline-2 shadow-md"
            style={{ border: 0, outlineColor: "#e8c766" }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.40934140514!2d80.20517417404153!3d12.945638087367369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525dcaf1158b69%3A0x2faed53a93b675d8!2sJerusalem%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1724333299768!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default LocateMap;