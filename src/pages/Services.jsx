import React from 'react'
import ServiceCard from '../components/ServiceCard'
import { services } from '../components/services'
import { ArrowRight } from "lucide-react"; // optional icon lib

const Services = () => {
  return (
      <div className="flex flex-col justify-center items-center">
      <div className="text-center mt-10 max-w-5xl px-4">
        <br></br>
        <br></br>
        <h1 className="text-3xl font-bold mb-2 text-gray-600">Explore My Tutoring Services.</h1>
        <h2 className="slide-in-left text-m text-gray-600">
          Tech meets tradition in my one-of-a-kind learning space—where programming, math, music, and more are taught with heart and creativity!
        </h2>

        <br></br>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        {/* First Box */}
        <div className="slide-in-left p-6 bg-white rounded-2xl shadow-lg border border-gray-200">
          <h2 className="text-xl font-semibold text-center text-gray-800 mb-4">
            Why Learn With Me
          </h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-2">✔</span>
              <span className="text-gray-700">
                Personalized lessons tailored to each student’s needs
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-2">✔</span>
              <span className="text-gray-700">
                Blend of traditional and modern teaching methods
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-2">✔</span>
              <span className="text-gray-700">
                Focus on building confidence and problem-solving skills
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-2">✔</span>
              <span className="text-gray-700">
                Supportive and engaging learning environment
              </span>
            </li>
          </ul>
        </div>

        {/* Second Box */}
        <div className="slide-in-left p-6 bg-white rounded-2xl shadow-lg border border-gray-200">
          <h2 className="text-xl font-semibold text-center text-gray-800 mb-4">
            Flexible Options to Fit Your Schedule and Goals
          </h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-2">✔</span>
              <span className="text-gray-700">One-on-one tutoring</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-2">✔</span>
              <span className="text-gray-700">Group sessions</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-2">✔</span>
              <span className="text-gray-700">Online or in-person lessons</span>
            </li>
          </ul>
        </div>
      </div>
      <br></br>


      <div className="text-gray-900 font-bold text-xl mb-2">Courses I Teach</div>
      <h2>Tailored for students from Grades 1 through 12.</h2>
      <br></br>
      <a
        href="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__pnb_ytUNzNOSzk1SlU1ODg0WTgyM0FQMVdWV0ZXUS4u"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 text-white font-semibold rounded-lg shadow-sm transition"
        aria-label="Register"
      >
        Register
        <ArrowRight className="w-4 h-4" />
      </a>

        
        {/* Grid Container */}
        <div className=" mt-10 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <br></br>
      <br></br>
      <div className="w-full h-[2px] bg-gray-300 drop-shadow-[0_12px_16px_rgba(0,0,0,0.35)]" />
      <br></br>
      <br></br>
      <div className="text-gray-900 font-bold text-xl mb-2">Testimonials</div>

      <blockquote className="max-w-3xl mx-auto px-6 text-gray-800 italic relative my-8 leading-relaxed">
        <span className="text-3xl text-gray-400 absolute -left-4 -top-2">“</span>
        Thank you for all your help. I really appreciate it. You really helped me pass the class lol. Have a great summer!
        <span className="text-3xl text-gray-400 absolute -right-4 -bottom-2">”</span>
        <cite className="block mt-2 text-gray-600 font-semibold text-right">— Student</cite>
      </blockquote>

      <blockquote className="max-w-3xl mx-auto px-6 text-gray-800 italic relative my-8 leading-relaxed">
        <span className="text-3xl text-gray-400 absolute -left-4 -top-2">“</span>
        Hey I just finished my exam ! I think it went well..  I just wanted to say thank you cause you’ve helped me understand math a lot better! 
        <span className="text-3xl text-gray-400 absolute -right-4 -bottom-2">”</span>
        <cite className="block mt-2 text-gray-600 font-semibold text-right">— Student</cite>
      </blockquote>
      
      <blockquote className="max-w-3xl mx-auto px-6 text-gray-800 italic relative my-8 leading-relaxed">
        <span className="text-3xl text-gray-400 absolute -left-4 -top-2">“</span>
        Hi Priyanka, I thought you might like to see this email from Alex's maths teacher, after today's test. Your wonderful teaching of Alex is having great results for her! Thank you :)
        <span className="text-3xl text-gray-400 absolute -right-4 -bottom-2">”</span>
        <cite className="block mt-2 text-gray-600 font-semibold text-right">— Parent</cite>
      </blockquote>

      <blockquote className="max-w-3xl mx-auto px-6 text-gray-800 italic relative my-8 leading-relaxed">
        <span className="text-3xl text-gray-400 absolute -left-4 -top-2">“</span>
        PRIYANKA… YOU ARE ABSOLUTELY AMAZING!!!!!!!  
        Both to my daughter and myself.  
        You do an excellent job making sure Alyssa knows and understands her stuff!!  
        Not only that, but I’ve noticed you go above and beyond what’s expected of you.  
        Alyssa speaks very highly of you.. which I don’t hear much of from her about anyone.  
        You’re always very thorough when it comes to working with Alyssa and giving me updates… which is greatly appreciated!!  
        You’ve found a way to give my daughter the confidence back she once had, and she has come a long way since you came into her life.  
        Alyssa looks forward to her sessions with you.. which speaks volumes to me!!  
        You are, without a doubt, an amazing person.. and completely outstanding in what you’ve accomplished with Alyssa.  
        I am and forever will always be grateful for what you’ve instilled in Alyssa, and I truly hope you always remain a part of our lives.  
        <span className="text-3xl text-gray-400 absolute -right-4 -bottom-2">”</span>
        <cite className="block mt-4 text-gray-600 font-semibold text-right">— Parent</cite>
      </blockquote>




    </div>

  )
}

export default Services
