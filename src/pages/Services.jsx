import React from 'react'
import ServiceCard from '../components/ServiceCard'
import { services } from '../components/services'

const Services = () => {
  return (
      <div className="flex flex-col justify-center items-center">
      <div className="text-center mt-10 max-w-5xl px-4">
        <h1 className="text-3xl font-bold mb-2 text-gray-600">Explore My Tutoring Services</h1>
        <h2 className="text-m text-gray-600">
          Tech meets tradition in my one-of-a-kind learning space—where programming, math, music, and more are taught with heart and creativity!
        </h2>
        
        {/* Grid Container */}
        <div className="mt-10 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </div>

  )
}

export default Services
