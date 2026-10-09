import React, { useState } from "react";
import { assets } from "../assets/assets";

const cards = [
  {
    title: "Dance",
    image: assets.dance,
    description:
      "Dance teacher, passionate dancer since age 12, and choreographer.",
  },
  {
    title: "Music",
    image: assets.music,
    description:
      "Music teacher and performer, trained in music since the age of 4.",
  },
  {
    title: "Gardening",
    image: assets.garden,
    description:
      "I enjoy growing plants and the process of nurturing them.",
  },
  {
    title: "Hiking",
    image: assets.hikes2,
    description:
      "Exploring nature, discovering trails, and enjoying the outdoors.",
  },
  {
    title: "Basketball",
    image: assets.raptors,
    description:
      "Hardcore fan of the Toronto Raptors!",
  },
];

const AnimatedCards = () => {
  const [flippedCards, setFlippedCards] = useState({});

  const toggleCard = (title) => {
    setFlippedCards((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <section className="w-full px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {cards.map((card, index) => (
            <button
              key={card.title}
              type="button"
              onClick={() => toggleCard(card.title)}
              onMouseEnter={() =>
                setFlippedCards((prev) => ({
                  ...prev,
                  [card.title]: true,
                }))
              }
              onMouseLeave={() =>
                setFlippedCards((prev) => ({
                  ...prev,
                  [card.title]: false,
                }))
              }
              onFocus={() =>
                setFlippedCards((prev) => ({
                  ...prev,
                  [card.title]: true,
                }))
              }
              onBlur={() =>
                setFlippedCards((prev) => ({
                  ...prev,
                  [card.title]: false,
                }))
              }
              aria-label={`${card.title}: ${
                flippedCards[card.title]
                  ? card.description
                  : "Click to reveal description"
              }`}
              aria-pressed={!!flippedCards[card.title]}
              className="animate-card group w-full h-72 text-center
                         rounded-xl focus-visible:outline-none
                         focus-visible:ring-2 focus-visible:ring-purple-500"
              style={{
                animationDelay: `${index * 0.25}s`,
                perspective: "1000px",
              }}
            >
              <div
                className="relative w-full h-full transition-transform
                           duration-700"
                style={{
                  transformStyle: "preserve-3d",
                  transform: flippedCards[card.title]
                    ? "rotateY(180deg)"
                    : "rotateY(0deg)",
                }}
              >
                {/* Front of card */}
                <div
                  className="absolute inset-0 bg-white border border-gray-200
                             rounded-xl shadow-sm p-5 flex flex-col
                             items-center justify-center
                             group-hover:shadow-lg"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <h3 className="text-lg font-semibold text-gray-700 mb-3">
                    {card.title}
                  </h3>

                  <img
                    src={card.image}
                    alt=""
                    className="w-full h-44 object-cover rounded-lg"
                  />

                  <p className="text-xs text-gray-400 mt-3">
                    Hover or tap
                  </p>
                </div>

                {/* Back of card */}
                <div
                  className="absolute inset-0 rounded-xl shadow-lg p-6
                             flex flex-col items-center justify-center
                             bg-gray-900 text-white border border-gray-700"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  <h3 className="text-xl font-semibold mb-4">
                    {card.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-gray-200">
                    {card.description}
                  </p>

                  
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimatedCards;
