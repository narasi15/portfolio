import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';
import "tailwindcss";


const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/featured", label: "Featured" },
    { to: "/services", label: "Services" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <div className="w-full bg-black overflow-x-hidden">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 md:py-6 px-6">

        {/* Logo */}
        <Link to="/" onClick={() => setIsMenuOpen(false)}>
          <img
            src={assets.logo2}
            alt="Logo"
            className="w-[130px] h-auto md:w-[160px] md:h-[60px] transition-transform duration-200 hover:scale-105 active:scale-95 cursor-pointer"
          />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 text-white text-lg list-none">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `transition-all duration-200 hover:underline ${
                    isActive ? "text-gray-500" : "text-white"
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white text-3xl focus:outline-none"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-800">
          <ul className="flex flex-col items-center gap-6 py-6 text-white text-lg">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `transition-all duration-200 hover:underline ${
                      isActive ? "text-gray-500" : "text-white"
                    }`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavBar;
