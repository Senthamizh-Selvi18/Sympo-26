import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/symposium/Logo/spidy logo.png";
import "./navbar.css";

// Keep this in sync with SHOW_CONTACT_PAGE in Pages/Contact.jsx.
const SHOW_CONTACTS_NAV = true;

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
    ...(SHOW_CONTACTS_NAV ? [{ path: "/contact", label: "CONTACTS" }] : []),
  ];

  return (
    <>
      {/* ── Main navbar ── */}
      <nav className="tnav-bar">
        <div className="tnav-inner">

          {/* Logo — left side */}
          <a href="/" className="tnav-logo-link" aria-label="Technovanza Home">
            <img
              src={logo}
              alt="Technovanza Logo"
              className="tnav-logo-img"
            />
          </a>

          {/* Desktop nav links — right side */}
          <ul className="tnav-links">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={
                    "tnav-link" +
                    (currentPath === item.path ? " tnav-active" : "")
                  }
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Hamburger — mobile only */}
          <button
            onClick={handleToggle}
            type="button"
            className={`tnav-hamburger${isMenuOpen ? " open" : ""}`}
            aria-controls="tnav-mobile-drawer"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* ── Mobile slide-in drawer ── */}
      <div
        id="tnav-mobile-drawer"
        className={`tnav-mobile-drawer${isMenuOpen ? " open" : ""}`}
        aria-hidden={!isMenuOpen}
      >
        <ul className="tnav-mobile-links">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                onClick={closeMenu}
                className={
                  "tnav-mobile-link" +
                  (currentPath === item.path ? " tnav-active" : "")
                }
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Backdrop overlay for mobile drawer */}
      <div
        className={`tnav-backdrop${isMenuOpen ? " open" : ""}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* Spacer so page content starts below the fixed navbar.
          Navbar is 92px tall on desktop/tablet, 78px on mobile — this
          uses the larger value plus a touch of buffer. */}
      <div style={{ paddingTop: "100px" }} />
    </>
  );
};

export default Header;