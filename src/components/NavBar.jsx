import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';
import "tailwindcss";

const NavBar = () => {
  return (
    // Full-width black background bar
    <div className="w-screen bg-black overflow-x-hidden">
      
      {/* Centered content inside max-width container */}
      <div className="max-w-7xl mx-auto flex items-center justify-between py-6 px-6">
        
        {/* Logo */}
        <Link to="/">
        <img
            src={assets.logo2}
            alt="Logo"
            className="w-[160px] h-[60px] transition-transform duration-200 hover:scale-105 active:scale-95 cursor-pointer"
        />
        </Link>

        {/* Nav Links */}
        <ul className="flex gap-8 text-white text-l list-none">
          {[
            { to: "/", label: "Home" },
            { to: "/about", label: "About" },
            { to: "/featured", label: "Featured" },
            { to: "/services", label: "Services" },
            { to: "/contact", label: "Contact" },
          ].map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `transition-all duration-200 hover:underline ${
                    isActive ? "text-gray-500" : "text-white"
                  }`
                }>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
