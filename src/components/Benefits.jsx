import React from "react";
import logoImg from "../assets/logo.png";

const Benefits = () => {
  // Data
  const features = [
    {
      id: 1,
      title: "Natural Ingredients",
      description: "Crafted with nature's finest ingredients for safe and effective skincare.",
      image: logoImg,
    },
    {
      id: 2,
      title: "Fragrance Free",
      description: "Designed for sensitive skin, free from harsh synthetic fragrances.",
      image: logoImg,
    },
    {
      id: 3,
      title: "Allergy Tested",
      description: "Clinically tested to ensure it’s gentle and suitable for all skin types.",
      image: logoImg,
    },
    {
      id: 4,
      title: "Paraben Free",
      description: "Free from parabens to prioritize your health and wellness.",
      image: logoImg,
    },
  ];

  return (
    // Card
    <div className="flex flex-wrap justify-center gap-8 p-8">
      {features.map((feature) => (
        <div
          key={feature.id}
          className="w-full sm:w-80 md:w-75 lg:w-60 xl:w-75 2xl:w-95 bg-white rounded-lg flex flex-col  items-center p-4"
        >
          <img
            src={feature.image}
            alt={feature.title}
            className="w-24 h-24 object-contain mb-4"
          />
          <h2 className="text-xl text-gray-700 font-bold mb-2 text-center">{feature.title}</h2>
          <p className="text-gray-600 text-center">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Benefits;
