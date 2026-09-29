import React from 'react'
import { assets } from '../assets/assets'
import SkillsChart from '../components/SkillsChart'
import { TypeAnimation } from 'react-type-animation'

const About = () => {
  return (
    <div className="w-full flex flex-col items-center overflow-x-hidden">
      <div className="w-full max-w-5xl px-4 sm:px-6 lg:px-8 mt-8 sm:mt-10">

        {/* ================= INTRO ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12">

          {/* Left: Heading */}
          <div className="slide-in-left text-center md:text-left">
            <h1 className="text-2xl sm:text-3xl font-bold mb-3 text-gray-600">
              Here’s the real me
            </h1>

            <h2 className="text-base sm:text-lg text-gray-600 max-w-sm mx-auto md:mx-0 leading-relaxed">
              A mix of code, coffee, and creativity—everything that shapes how
              I build, think, and create meaningful solutions!
            </h2>
          </div>

          {/* Right: Profile Picture */}
          <div className="slide-in-left flex justify-center">
            <img
              src={assets.AboutPic}
              alt="Profile"
              className="w-full max-w-[350px] sm:max-w-[450px] md:max-w-[500px] h-auto object-contain"
            />
          </div>

        </div>

        {/* Divider */}
        <div className="w-full h-[2px] bg-gray-300 my-10 sm:my-12 drop-shadow-[0_12px_16px_rgba(0,0,0,0.35)]" />


        {/* ================= ABOUT ME ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-10">

          {/* Left: Pie Chart */}
          <div className="slide-in-left flex justify-center">
            <img
              src={assets.piechart}
              alt="Pie Chart"
              className="w-full max-w-[250px] sm:max-w-[300px] h-auto object-contain"
            />
          </div>

          {/* Right: Paragraph */}
          <div className="text-center md:text-left">
            <h2 className="slide-in-left text-base sm:text-lg text-gray-600 leading-relaxed">
              I started my career in full-stack development and later expanded
              into data engineering and analytics. My experience spans
              frontend, backend, data pipelines, reporting, and analytics,
              giving me an end-to-end perspective on how software and data
              work together.
            </h2>
          </div>

        </div>


        {/* ================= PROFESSIONAL JOURNEY ================= */}
        <div className="mt-14 sm:mt-16">

          <div className="w-full h-[2px] bg-gray-300 mb-10 drop-shadow-[0_12px_16px_rgba(0,0,0,0.35)]" />

          <h2 className="mb-8 text-xl sm:text-2xl font-bold text-gray-600 text-center">
            Professional Journey
          </h2>

          {/* Timeline */}
          <div className="w-full">

            <ul className="relative border-l-2 border-gray-300 ml-3 sm:ml-4">

              {/* Ontario One Call */}
              <li className="mb-8 sm:mb-10 ml-5 sm:ml-6 transform transition duration-300 hover:scale-[1.01]">

                <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-gray-800 rounded-full ring-8 ring-white">
                </span>

                <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 sm:p-5">

                  <time className="mb-2 text-xs sm:text-sm font-mono italic block text-gray-500">
                    2023–Present
                  </time>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-3 text-center">

                    <img
                      src={assets.ooclogo}
                      alt="Ontario One Call logo"
                      className="h-10 w-10 sm:h-12 sm:w-12 object-contain"
                    />

                    <h3 className="text-base sm:text-lg font-bold break-words">
                      Ontario One Call
                    </h3>

                  </div>

                  <p className="text-sm sm:text-base text-gray-700 text-center sm:text-left">
                    Full Stack Developer (2023–2024) / Data Engineer (2024–2025)
                  </p>

                </div>
              </li>


              {/* Freelancer */}
              <li className="mb-8 sm:mb-10 ml-5 sm:ml-6 transform transition duration-300 hover:scale-[1.01]">

                <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-gray-800 rounded-full ring-8 ring-white">
                </span>

                <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 sm:p-5">

                  <time className="mb-2 text-xs sm:text-sm font-mono italic block text-gray-500">
                    2022–2023
                  </time>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-3 text-center">

                    <img
                      src={assets.freelancer}
                      alt="Freelancer logo"
                      className="h-10 w-10 sm:h-12 sm:w-12 object-contain"
                    />

                    <h3 className="text-base sm:text-lg font-bold">
                      Freelancer
                    </h3>

                  </div>

                  <p className="text-sm sm:text-base text-gray-700 text-center sm:text-left">
                    Software Developer - Full Stack
                  </p>

                </div>
              </li>


              {/* BlueCat Networks */}
              <li className="mb-8 sm:mb-10 ml-5 sm:ml-6 transform transition duration-300 hover:scale-[1.01]">

                <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-gray-800 rounded-full ring-8 ring-white">
                </span>

                <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 sm:p-5">

                  <time className="mb-2 text-xs sm:text-sm font-mono italic block text-gray-500">
                    2018–2019
                  </time>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-3 text-center">

                    <img
                      src={assets.bluecatlogo}
                      alt="BlueCat Networks logo"
                      className="h-10 w-10 sm:h-12 sm:w-12 object-contain"
                    />

                    <h3 className="text-base sm:text-lg font-bold break-words">
                      BlueCat Networks
                    </h3>

                  </div>

                  <p className="text-sm sm:text-base text-gray-700 text-center sm:text-left">
                    Software Development Co-op
                  </p>

                </div>
              </li>


              {/* Environment, Conservation and Parks */}
              <li className="mb-8 sm:mb-10 ml-5 sm:ml-6 transform transition duration-300 hover:scale-[1.01]">

                <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-gray-800 rounded-full ring-8 ring-white">
                </span>

                <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 sm:p-5">

                  <time className="mb-2 text-xs sm:text-sm font-mono italic block text-gray-500">
                    2018
                  </time>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-3 text-center">

                    <img
                      src={assets.ministrylogo}
                      alt="Ministry logo"
                      className="h-10 w-10 sm:h-12 sm:w-12 object-contain"
                    />

                    <h3 className="text-base sm:text-lg font-bold break-words">
                      Environment, Conservation and Parks
                    </h3>

                  </div>

                  <p className="text-sm sm:text-base text-gray-700 text-center sm:text-left">
                    Software and IT Assistant
                  </p>

                </div>
              </li>


              {/* TutorBright */}
              <li className="mb-8 sm:mb-10 ml-5 sm:ml-6 transform transition duration-300 hover:scale-[1.01]">

                <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-gray-800 rounded-full ring-8 ring-white">
                </span>

                <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 sm:p-5">

                  <time className="mb-2 text-xs sm:text-sm font-mono italic block text-gray-500">
                    2016–Present
                  </time>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-3 text-center">

                    <img
                      src={assets.tblogo}
                      alt="TutorBright logo"
                      className="h-10 w-10 sm:h-12 sm:w-12 object-contain"
                    />

                    <h3 className="text-base sm:text-lg font-bold">
                      TutorBright
                    </h3>

                  </div>

                  <p className="text-sm sm:text-base text-gray-700 text-center sm:text-left">
                    TutorBright
                  </p>

                </div>
              </li>


              {/* The Journey */}
              <li className="mb-8 sm:mb-10 ml-5 sm:ml-6 transform transition duration-300 hover:scale-[1.01]">

                <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-gray-800 rounded-full ring-8 ring-white">
                </span>

                <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 sm:p-5">

                  <time className="mb-2 text-xs sm:text-sm font-mono italic block text-gray-500">
                    2015–2016
                  </time>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-3 text-center">

                    <img
                      src={assets.journeylogo}
                      alt="The Journey logo"
                      className="h-10 w-10 sm:h-12 sm:w-12 object-contain"
                    />

                    <h3 className="text-base sm:text-lg font-bold break-words">
                      The Journey Neighbourhood Center
                    </h3>

                  </div>

                  <p className="text-sm sm:text-base text-gray-700 text-center sm:text-left">
                    Summer Camp Leader
                  </p>

                </div>
              </li>

            </ul>
          </div>
        </div>


        {/* ================= SKILLS ================= */}
        <div className="mt-14 sm:mt-16">

          <div className="w-full h-[2px] bg-gray-300 mb-10 drop-shadow-[0_12px_16px_rgba(0,0,0,0.35)]" />

          <div className="text-center">

            <h2 className="mb-3 text-xl sm:text-2xl font-bold text-gray-600">
              Skills ☕
            </h2>

            <p className="text-sm sm:text-base text-gray-600 mb-6">
              My skills run on caffeine and curiosity
            </p>

            <div className="w-full overflow-x-auto">
              <SkillsChart />
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default About
