import React from 'react'
import { assets } from '../assets/assets'

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <br></br>

      <div className="relative flex flex-col justify-center items-center overflow-hidden">
        {/* === Background Video === */}
        <video
          autoPlay
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        >
          <source src={assets.signature} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* === Content Wrapper === */}
        <div className="relative flex flex-col md:flex-row items-center justify-center mx-auto px-6 py-16 md:px-12 bg-transparent max-w-5xl">
          {/* Left side – text */}
          <div className="md:w-1/2 md:pr-2 text-center md:text-left text-gray-600 drop-shadow-md">
            <p className="mb-3 text-2xl font-bold text-[#800000]">
              Hi I'm Priyanka! 👋
            </p>
            <p className="text-lg leading-relaxed">
              I’m a developer who thrives at the intersection of software engineering and data.
              I love building data-driven applications — from scalable backend systems to
              intuitive frontends — and I’m increasingly drawn to applying AI and machine
              learning to uncover insights, streamline processes, and create smarter digital experiences.
            </p>
          </div>

          {/* Right side – image */}
          <div className="md:w-1/2 flex justify-center md:pl-2 mt-6 md:mt-0">
            <img
              src={assets.priyanka}
              alt="Priyanka portrait"
              className="w-56 h-56 rounded-2xl object-cover shadow-lg border-2 border-white"
            />
          </div>
        </div>
      </div>

      {/* Here are some of my latest projects */}



          {/* ===== Quote of the Week Section ===== */}
            <div className="w-full bg-[#f8f8f8] py-12 px-6 text-center border-t border-gray-200">
              <h2 className="text-2xl font-semibold text-[#800000] mb-4">
                Quote of the Week ✨
              </h2>
              <p className="text-lg italic text-gray-700 max-w-2xl mx-auto mb-4">
                "Success is not final, failure is not fatal: it is the courage to continue that counts."
              </p>
              <p className="text-sm text-gray-500 mb-6">— Winston Churchill</p>

              {/* Purpose of the quote section */}
              <p className="text-md text-gray-700 max-w-2xl mx-auto mb-0">
                The Quote of the Week is here to remind us to pause, reflect, and carry a positive mindset
                into our work and personal growth throughout the week.
              </p>
            </div>
        

        <div className="w-full h-[2px] bg-gray-300 drop-shadow-[0_12px_16px_rgba(0,0,0,0.35)]" />
    </div>
  )
}

export default Home
