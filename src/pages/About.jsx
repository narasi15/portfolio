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
</div>
    

    
    
    
  )
}

export default About
