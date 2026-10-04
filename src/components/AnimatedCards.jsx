import React from "react";
import { assets } from '../assets/assets'

const cards = [
  {
    title: "Dance",
    image: assets.dance,
  },
  {
    title: "Music",
    image: assets.music,
  },
  {
    title: "Gardening",
    image: assets.garden,
  },
  {
    title: "Hiking",
    image: assets.hikes2,
  },
  {
    title: "Basketball",
    image: assets.raptors,
  },
];

const AnimatedCards = () => {
  return (
    <section className="w-full px-4 py-12">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {cards.map((card, index) => (
            <div
              key={card.title}
              className="animate-card bg-white border border-gray-200 rounded-xl shadow-sm p-6 text-center
                         hover:shadow-lg hover:-translate-y-1
                         transition-all duration-300"
              style={{
                animationDelay: `${index * 0.25}s`,
              }}
            >
              

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-700 mb-3">
                {card.title}
              </h3>

              {/* Image */}
              <img src={card.image} alt={card.title} className="w-full h-auto rounded-lg" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AnimatedCards;