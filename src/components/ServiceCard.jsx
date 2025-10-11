import React from 'react'
import { assets } from '../assets/assets'

// ServiceCard.jsx className=""
const ServiceCard = ({ service }) => {
  return (
    <div className="transform transition duration-300 hover:scale-105 max-w-sm w-full bg-white shadow-md rounded-lg overflow-hidden">
      <div className="h-48 w-full bg-cover">
        <img src={service.service_image} alt="Service" className="object-cover w-full h-full" />
      </div>
      <div className="p-4 flex flex-col justify-between leading-normal">
        <p className="text-sm text-gray-600 flex items-center">
          <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
          </svg>
          {service.service_lock}
        </p>
        <div className="text-gray-900 font-bold text-xl mb-2">{service.service_title}</div>
        <ul className="text-left text-gray-700 text-base list-disc list-inside">
          {service.service_descr.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceCard;

