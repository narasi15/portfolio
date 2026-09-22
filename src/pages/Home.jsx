import React from 'react'
import { assets } from '../assets/assets'
import { TypeAnimation } from "react-type-animation";

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
              <p className="mb-3 text-4xl font-bold text-[#800000]">
                Hi I'm Priyanka!  <span className="wave">👋</span>
              </p>
              <p className="mb-3 text-2xl">
                <TypeAnimation
                  sequence={[
                    "Data Engineer • Software Developer",
                    2000,
                  ]}
                  speed={50}
                  repeat={Infinity}
                />
              </p>
              <br></br>
              <p className="text-lg leading-relaxed">
                I design and build scalable, data-driven applications, using code and data as my canvas. 
                With an eye for detail, I create intuitive solutions powered by AI.
              </p>
              {/* CTA Buttons */}
              <br></br>
              <div className="flex items-center gap-4">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  className="px-4 py-2 border border-black rounded inline-block hover:bg-black hover:text-white transition"
                >
                  View Resume
                </a>
                <a
                  href="/featured"
                  className="px-4 py-2 border border-black rounded inline-block hover:bg-black hover:text-white transition duration-300 ease-in-out"
                >
                  View Projects
                </a>
                
              </div>
            </div>

            {/* Right side – image */}
            <div className="md:w-1/2 flex justify-center md:pl-2 mt-6 md:mt-0">
              <img
                src={assets.priyanka3}
                alt="Priyanka portrait"
                className="w-70 h-70 rounded-2xl object-cover shadow-lg border-2 border-white"
              />
            </div>
        </div>
      </div>

      {/* Here are some of my latest projects */}
      <div className="w-full bg-[#f8f8f8] py-12 px-6 text-center border-t border-gray-200">
        <h4>SOME OF MY LATEST WORK</h4>
      </div>



          {/* ===== Quote of the Week Section ===== */}
            <div className="w-full bg-[#f2f2f2] py-12 px-6 text-center border-t border-gray-200">
              <h2 className="text-2xl font-semibold text-[#800000] mb-4">
                Quote of the Week ✨
              </h2>
              <img
                src={assets.quote}
                alt="Quote"
                className="w-full max-w-[600px] h-auto object-contain mx-auto rounded-xl"
              />

              {/*}
              <p className="text-lg italic text-gray-700 max-w-2xl mx-auto mb-4">
                "Success is not final, failure is not fatal: it is the courage to continue that counts."
              </p>
              <p className="text-sm text-gray-500 mb-6">— Winston Churchill</p> */}
              <br></br>
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
