import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/symposium/Logo/spidy logo.png";
import "../text.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  const handleToggle = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  const navItems = [
    { path: "/", label: "HOME" },
    { path: "/about", label: "ABOUT" },
    { path: "/events", label: "EVENTS" },
    { path: "/contact", label: "CONTACTS" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#081633]/90 backdrop-blur-md border-b border-[rgba(167,139,250,0.22)]">
        <div className="flex items-center justify-between w-full px-4 py-0">
          <a href="/" className="royal-logo h-16 flex items-center">
            <img src={logo} alt="Technovanza Logo" className="w-16 h-16 object-contain" />
          </a>

          <ul className="hidden md:flex md:space-x-10">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={"royal-nav-link" + (currentPath === item.path ? " active" : "")}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <button
            onClick={handleToggle}
            type="button"
            className="md:hidden flex flex-col justify-center gap-[5px] w-9 h-9"
            aria-controls="mobile-nav"
            aria-expanded={isMenuOpen}
          >
            <span
              className="block h-[2px] w-6 bg-[#A78BFA] transition-transform duration-300"
              style={isMenuOpen ? { transform: "translateY(7px) rotate(45deg)" } : {}}
            />
            <span
              className="block h-[2px] w-6 bg-[#A78BFA] transition-opacity duration-300"
              style={isMenuOpen ? { opacity: 0 } : {}}
            />
            <span
              className="block h-[2px] w-6 bg-[#A78BFA] transition-transform duration-300"
              style={isMenuOpen ? { transform: "translateY(-7px) rotate(-45deg)" } : {}}
            />
          </button>
        </div>
      </nav>

      {/* Slide-in mobile drawer */}
      <div
        id="mobile-nav"
        className={`fixed top-0 right-0 h-screen w-64 z-40 bg-[#081633] border-l border-[rgba(167,139,250,0.25)] shadow-2xl transform transition-transform duration-400 ease-in-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col mt-24 gap-8 px-8">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                onClick={closeMenu}
                className={"royal-nav-link text-lg" + (currentPath === item.path ? " active" : "")}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={closeMenu}
        />
      )}

      <div className="pt-16"></div>
    </>
  );
};

export default Header;