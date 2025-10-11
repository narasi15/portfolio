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
    <div className="flex flex-col justify-center items-center">
        <div className="text-center mt-10 max-w-5xl px-4">
          <br></br>
          <br></br>
          <h1 className="text-3xl font-bold mb-2 text-gray-600">Built and Delivered.</h1>
          <h2 className="text-m text-gray-600">
            A showcase of my latest creations — blending design, code, and problem-solving into real-world impact.
          </h2>
        </div>
        <br></br>

        {/* Carousel */}
        <div className="w-1/2 mx-auto">
          {/* Image container */}
          <div className="relative h-56 md:h-96 overflow-hidden rounded-lg">
            {images.map((image, index) => (
              <img
                key={index}
                src={image.src}
                alt={image.alt}
                className={`absolute w-full h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-500 ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}

            {/* Prev Button */}
              <button
                onClick={prevSlide}
                className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white bg-opacity-90 rounded-full p-3 hover:bg-opacity-100 shadow-lg z-10 text-xl"
              >
                &#8592;
              </button>

              {/* Next Button */}
              <button
                onClick={nextSlide}
                className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white bg-opacity-90 rounded-full p-3 hover:bg-opacity-100 shadow-lg z-10 text-xl"
              >
                &#8594;
              </button>
          </div>

          <br></br>
          <br></br>
          {/* Subheading */}
          <div className="text-center justify-center items-center mt-6">
            <h1 className="text-3xl font-bold mb-2 text-gray-600">In the works.</h1>
            <h2 className="text-md text-gray-600">
              Behind the scenes: the things I’m designing, coding, and fine-tuning.
            </h2>
          </div>
        </div>
    </div>
  )
}

export default Featured
