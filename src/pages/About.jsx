import React from 'react'
import { assets } from '../assets/assets'
import SkillsChart from '../components/SkillsChart'
import { TypeAnimation } from 'react-type-animation'
import AnimatedPieChart from '../components/AnimatedPieChart'
import AnimatedCards from '../components/AnimatedCards'

const About = () => {
  
  return (
    <div className="w-full">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 mt-8 sm:mt-10">

        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12">

          {/* Left: Heading */}
          <div className="slide-in-left text-center md:text-left">
            <h1 className="text-2xl sm:text-3xl font-bold mb-3 text-gray-600">
              Here’s the real me
            </h1>

            <h2 className="text-base sm:text-lg text-gray-600 max-w-sm mx-auto md:mx-0 leading-relaxed">
              A mix of code, coffee, and creativity—everything that shapes how I
              build, think, and create meaningful solutions!
            </h2>
          </div>

          {/* Right: Profile picture */}
          <div className="slide-in-left flex justify-center">
            <img
              src={assets.AboutPic}
              alt="Profile"
              className="w-full max-w-[280px] sm:max-w-[400px] md:max-w-[500px] h-auto object-contain"
            />
          </div>

        </div>

        {/* Divider */}
        <div className="w-full h-[2px] bg-gray-300 mt-10 sm:mt-14" />

      </div>
    

    

    <div className="w-full max-w-6xl mx-auto mt-12 px-4 sm:px-6">
      <p className="mb-6 text-xl sm:text-2xl font-bold text-gray-600 text-center">
        Professional Journey
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12">
        

        {/* Left: Pie chart */}
        <div className="w-full flex justify-center min-w-0">
          <div className="w-full max-w-[400px]">
            <AnimatedPieChart />
          </div>
        </div>

        {/* Right: Paragraph */}
        <div className="w-full flex justify-center md:justify-start">
          <h2 className="slide-in-left text-base sm:text-lg text-gray-600 max-w-md leading-relaxed">
            I started my career in full-stack development and later expanded into
            data engineering and analytics. My experience spans frontend, backend,
            data pipelines, reporting, and analytics, giving me an end-to-end
            perspective on how software and data work together.
          </h2>
        </div>

        </div>
        </div>
      <br></br>
      
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6">
        <ul className="relative border-l-2 border-gray-300 ml-2 sm:ml-4">

          {/* your <li> elements */}
          <li className="mb-10 ml-6 transform transition duration-300 hover:scale-105">
                <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-gray-800 rounded-full ring-8 ring-white"></span>
                <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4">
                  <time className="mb-1 text-sm font-mono italic block text-centre">
                    2023–Present
                  </time>
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <img 
                      src={assets.ooclogo}
                      alt="Ontario One Call logo"
                      className="h-12 w-12 object-contain" 
                    />
                    <h3 className="text-lg font-bold">Ontario One Call</h3>
                  </div>
                  <p className="text-gray-700">
                    Full Stack Developer (2023–2024) / Data Engineer (2024–2026)
                  </p>
                </div>
              </li>

              <li className="mb-10 ml-6 transform transition duration-300 hover:scale-105">
                <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-gray-800 rounded-full ring-8 ring-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    viewBox="0 0 20 20"
                    className="w-3 h-3"
                  >
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16z" />
                  </svg>
                </span>
                <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4">
                  <time className="mb-1 text-sm font-mono italic block text-centre">
                    2022-2023
                  </time>
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <img 
                      src={assets.freelancer}
                      alt="Freelancer logo"
                      className="h-12 w-12 object-contain" 
                    />
                    <h3 className="text-lg font-bold">Freelancer</h3>
                  </div>
                  <p className="text-gray-700">
                    Software Developer - Full Stack
                  </p>
                </div>
              </li>

              <li className="mb-10 ml-6 transform transition duration-300 hover:scale-105">
                <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-gray-800 rounded-full ring-8 ring-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    viewBox="0 0 20 20"
                    className="w-3 h-3"
                  >
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16z" />
                  </svg>
                </span>
                <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4">
                  <time className="mb-1 text-sm font-mono italic block text-centre">
                    2018-2019
                  </time>
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <img 
                      src={assets.bluecatlogo}
                      alt="BlueCat Networks logo"
                      className="h-12 w-12 object-contain" 
                    />
                    <h3 className="text-lg font-bold">BlueCat Networks</h3>
                  </div>
                  <p className="text-gray-700">
                    Software Development Co-op
                  </p>
                </div>
              </li>


              <li className="mb-10 ml-6 transform transition duration-300 hover:scale-105">
                <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-gray-800 rounded-full ring-8 ring-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    viewBox="0 0 20 20"
                    className="w-3 h-3"
                  >
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16z" />
                  </svg>
                </span>
                <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4">
                  <time className="mb-1 text-sm font-mono italic block text-centre">
                    2018
                  </time>
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <img 
                      src={assets.ministrylogo}
                      alt="Ministry logo"
                      className="h-12 w-12 object-contain" 
                    />
                    <h3 className="text-lg font-bold">Environment, Conservation and Parks</h3>
                  </div>
                  <p className="text-gray-700">
                    Software and IT Assistant
                  </p>
                </div>
              </li>

              <li className="mb-10 ml-6 transform transition duration-300 hover:scale-105">
                <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-gray-800 rounded-full ring-8 ring-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    viewBox="0 0 20 20"
                    className="w-3 h-3"
                  >
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16z" />
                  </svg>
                </span>
                <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4">
                  <time className="mb-1 text-sm font-mono italic block text-centre">
                  2016-Present
                  </time>
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <img 
                      src={assets.tblogo}
                      alt="TB logo"
                      className="h-12 w-12 object-contain" 
                    />
                    <h3 className="text-lg font-bold">TutorBright</h3>
                  </div>
                  <p className="text-gray-700">
                    TutorBright
                  </p>
                </div>
              </li>

              <li className="mb-10 ml-6 transform transition duration-300 hover:scale-105">
                <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-gray-800 rounded-full ring-8 ring-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    viewBox="0 0 20 20"
                    className="w-3 h-3"
                  >
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16z" />
                  </svg>
                </span>
                <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4">
                  <time className="mb-1 text-sm font-mono italic block text-centre">
                  2015-2016
                  </time>
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <img 
                      src={assets.journeylogo}
                      alt="The Journey logo"
                      className="h-12 w-12 object-contain" 
                    />
                    <h3 className="text-lg font-bold">The Journey Neighbourhood Center</h3>
                  </div>
                  <p className="text-gray-700">
                    Summer Camp Leader
                  </p>
                </div>
              </li>

        </ul>
      </div>


    


        {/* Skill Set */}
        <div className="w-full max-w-6xl mx-auto mt-10 sm:mt-14 px-4 sm:px-6">
          <div className="w-full h-[2px] bg-gray-300 mb-8" />

          <div className="text-center">
            <p className="mb-3 text-xl sm:text-2xl font-bold text-gray-600">
              Skills ☕
            </p>

            <p className="text-sm sm:text-base text-gray-600 mb-6">
              My skills run on caffeine and curiosity
            </p>
          </div>

          <div className="w-full flex justify-center overflow-x-auto">
            <div className="w-full max-w-5xl">
              <SkillsChart />
            </div>
          </div>
        </div>


      <div className="w-full mt-10 sm:mt-14 px-4 sm:px-6">
      <p className="mb-6 text-xl sm:text-2xl font-bold text-gray-600 text-center">
        Hobbies & Interests
      </p>

      <div className="w-full max-w-7xl mx-auto">
        <AnimatedCards />
      </div>
    </div>





  
  </div>

    
    
    
  )
}

export default About
