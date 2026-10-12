import React from 'react'
import { assets } from '../assets/assets'
import 'flowbite'
import { Carousel } from "flowbite-react";
import { useState } from "react";

const Featured = () => {
  const projects = [ 
    { title: "EasyBites", 
      subtitle: "Restaurant Management & Food Ordering App", 
      image: assets.project1,
      link: "https://github.com/narasi15/EasyBites",
      description: "An Uber Eats-style full-stack web application for restaurant discovery and food ordering and restaurantqueue management.", 
      tags: ["Full Stack", "Node.js", "MongoDB", "jQuery", "AJAX"],  }, 

      { title: "Prescripto", 
      subtitle: "Doctors Appointment Booking App", 
      image: assets.project2,
      link: "https://github.com/narasi15/prescripto",
      description: "A frontend-focused website for booking appointments and managing prescriptions, with a user-friendly interface and responsive design.", 
      tags: ["Frontend", "React", "TailWind CSS", "JavaScript", "VSCode"],  }, 

      { title: "Image Processing Script", 
      subtitle: "Image filters", 
      image: assets.project3,
      link: "https://github.com/narasi15/ImageProcessing",
      description: "An application that places different filters and functions on any image. There are 2 functions(copy, scale) and 3 filters(greyscale, edge detection, gaussian blur).", 
      tags: ["C", "VSCode"],  }, 
    ];



  return (
    
    <div className="flex flex-col justify-center items-center w-full px-4 py-12">

      {/* Built and Delivered */}
      <section className="text-center mt-20 max-w-5xl w-full">
        <h1 className="slide-in-left text-3xl font-bold mb-2 text-gray-600">
          Built & Delivered 🚀
        </h1>

        <h2 className="slide-in-left text-md text-gray-600">
          A showcase of my creations — blending design, code, and
          problem-solving into real-world impact.
        </h2>

        {/* Add your completed projects or carousel here */}
      </section>
      <br></br>




      {/* Experiments and Explorations */}
      <section className="text-center mt-20 max-w-5xl w-full"> 
        <h1 className="slide-in-left text-3xl font-bold mb-2 text-gray-600">
          Experiments & Explorations 🧪
        </h1>
        <h2 className="slide-in-left text-md text-gray-600">
          Side projects, exploring new technologies, and ideas just for the fun of building and learning.
        </h2>
        <br></br>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6"> 
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white border border-gray-200 rounded-2xl
                        p-6 shadow-sm hover:shadow-lg hover:-translate-y-1
                        transition-all duration-300 cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />

              <h3 className="text-2xl font-bold text-gray-700 mb-1">
                {project.title}
              </h3>

              <h4 className="text-sm font-medium text-gray-500 mb-4">
                {project.subtitle}
              </h4>

              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium rounded-full
                              bg-gray-100 text-gray-600 border border-gray-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-sm text-blue-600 mt-5 font-medium">
                View Project ↗
              </p>
            </a>
          ))}
        </div> 
      </section>

    </div>


  )
}

export default Featured
