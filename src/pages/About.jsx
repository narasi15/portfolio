import React from 'react'
import { assets } from '../assets/assets'
import SkillsChart from '../components/SkillsChart'

const About = () => {
  
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-center mt-10 max-w-5xl px-4">
        <br></br>
        <br></br>

        <div className="flex flex-wrap items-center justify-between gap-None">
          {/* Left: Heading */}
          <div>
            <h1 className="text-3xl font-bold mb-2 text-gray-600">404 Boring Bio Not Found</h1>
            <h2 className="text-lg text-gray-600 max-w-sm leading-relaxed">
            Instead, here’s the real me —  
            A quick peek into my code,  
            my coffee habits,  
            and everything in between.
          </h2>
          </div>
          
          {/* Right: Profile picture */}
          <div className="flex flex-col items-center">
            <img
              src={assets.AboutPic}
              alt="Profile"
              className="max-w-[608px] object-contain"
            />
          
        </div>
        <div className="w-full h-[2px] bg-gray-300 drop-shadow-[0_12px_16px_rgba(0,0,0,0.35)]" />

        </div>

        


        {/* Education 
        <br></br>
        <div className="w-full h-[2px] bg-gray-300 drop-shadow-[0_12px_16px_rgba(0,0,0,0.35)]" />
        <br></br>
        <br></br>
        <div>
          <p className="mb-4 text-2xl font-bold text-gray-600">
            Education
          </p>
          <div class="flex justify-center items-center">
            <img src={assets.uoft2} alt="Description 1" className='w-45 h-50'/>
            <img src={assets.uoft1} alt="Description 2" className='w-45 h-60'/>
          </div>
        </div>*/}



        {/* Career timeline */}
        <br></br>
        <br></br>
        <div>
          <p className="mb-4 text-2xl font-bold text-gray-600">
            Professional Journey
          </p>
          <div>

            <ul className="relative border-l-2 border-gray-300 ml-4">
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
                <time className="mb-1 text-sm font-mono italic">2023-Present</time>
                <div className="flex items-center justify-center space-x-2">
                  <img 
                    src={assets.ooclogo}
                    alt="Ontario One Call logo"
                    className="h-12 w-12 object-contain" 
                  />
                  <h3 className="text-lg font-bold">Ontario One Call</h3>
                </div>
                <p className="text-gray-700">
                  Full Stack Developer (2023-2024) / Data Engineer (2024-2025)
                </p>
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
                <time className="mb-1 text-sm font-mono italic">2022-2023</time>
                <div className="flex items-center justify-center space-x-2">
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
                <time className="mb-1 text-sm font-mono italic">2018-2019</time>
                <div className="flex items-center justify-center space-x-2">
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
                <time className="mb-1 text-sm font-mono italic">2018</time>
                <div className="flex items-center justify-center space-x-2">
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
                <time className="mb-1 text-sm font-mono italic">2016-Present</time>
                <div className="flex items-center justify-center space-x-2">
                  <img 
                    src={assets.tblogo}
                    alt="TutorBright logo"
                    className="h-12 w-12 object-contain" 
                  />
                  <h3 className="text-lg font-bold">TutorBright</h3>
                </div>
                <p className="text-gray-700">
                  Tutor Mentor
                </p>
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
                <time className="mb-1 text-sm font-mono italic">2015-2016</time>
                <div className="flex items-center justify-center space-x-2">
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
              </li>
            </ul>
          </div>
        </div>

        {/* Skill Set */}
        <br></br>
        <div className="w-full h-[2px] bg-gray-300 drop-shadow-[0_12px_16px_rgba(0,0,0,0.35)]" />
        <br></br>
        <br></br>
        <div>
          <p className="mb-4 text-2xl font-bold text-gray-600">
            Skills ☕
          </p>
          <p>My skills run on caffeine and curiosity</p>
          <SkillsChart/>
          
        </div>

      
      
      </div>
      
    </div>
  )
}

export default About
