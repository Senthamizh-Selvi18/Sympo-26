import React from "react";
import { Link } from "react-router-dom";
import "../text.css";

const Teams = () => {
  return (
    <footer className="bg-transparent text-[#d9e2f5] font-body-royal px-8 sm:px-36 py-4">
      <div className="container mx-auto flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 text-sm text-center">
        <div>
          &copy; {new Date().getFullYear()} Technovanza<sup>TM</sup> All rights reserved.
        </div>
        <div>
          Meet our{" "}
          <Link to="/teams" className="gold-link font-semibold">
            Web Team
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Teams;