import React from 'react'
import { assets } from '../assets/assets'
import 'flowbite'
import { Carousel } from "flowbite-react";
import { useState } from "react";

const Featured = () => {
  const images = [
  { src: assets.P1, alt: "P1" },
  { src: assets.P2, alt: "P2" },
  { src: assets.P3, alt: "P3" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };



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
          Side projects, new technologies, and ideas 
          just for the fun of building and learning.
        </h2>

        <div className="slide-in-left mt-6 max-w-xl mx-auto space-y-3">
          <div className="flex items-center gap-3 text-left text-gray-800
                          bg-gray-50 border border-gray-200 rounded-xl p-4
                          hover:shadow-md transition duration-300">
            <span className="text-xl">🧪</span>
            <span className="font-medium">Personal Project / Experiment 1</span>
          </div>

          <div className="flex items-center gap-3 text-left text-gray-800
                          bg-gray-50 border border-gray-200 rounded-xl p-4
                          hover:shadow-md transition duration-300">
            <span className="text-xl">🔬</span>
            <span className="font-medium">Personal Project / Experiment 2</span>
          </div>
        </div>
      </section>

    </div>


  )
}

export default Featured
