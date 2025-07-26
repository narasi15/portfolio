import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';
import "tailwindcss";

const NavBar = () => {


  return (
    <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">

        {/* Logo */}
    

        {/* Nav Links */}
        <ul className="flex gap-8 text-gray-700">
        <NavLink to="/" className={'hover:underline transition-all duration-200'}>HOME</NavLink>
        <NavLink to="/about" className={'hover:underline transition-all duration-200'}>ABOUT</NavLink>
        <NavLink to="/featured" className={'hover:underline transition-all duration-200'}>FEATURED</NavLink>
        <NavLink to="/services" className={'hover:underline transition-all duration-200'}>SERVICES</NavLink>
        <NavLink to="/contact" className={'hover:underline transition-all duration-200'}>CONTACT</NavLink>
        </ul>

        </div>
    </div>


  )
}

export default NavBar;
