import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className="mt-20">
        <div className="w-screen bg-black overflow-x-hidden">
      
            {/* Centered content inside max-width container */}
            <div className="max-w-7xl mx-auto flex items-center justify-between py-10 px-6">
                <h3 className='text-m mb-2 text-gray-400'>© 2025 Priyanka N. All rights reserved.</h3>

            </div>
        </div>
    </div>
  )
}

export default Footer
