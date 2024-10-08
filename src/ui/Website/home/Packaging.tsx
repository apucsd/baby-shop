import React from "react";

const MasonryGrid = () => {
  const items = [
    {
      title: "Eco-Friendly Packaging",
      description:
        "Our packaging is designed to be environmentally friendly while ensuring the safety and freshness of our baby food products.",
    },
    {
      title: "Sustainability Efforts",
      description:
        "We believe in responsible sourcing and sustainable practices. Our ingredients are sourced from local, organic farms.",
    },
    {
      title: "Locally Sourced Ingredients",
      description:
        "We choose local farms to ensure the freshness and quality of our ingredients, reducing transportation emissions.",
    },
    {
      title: "No Pesticides",
      description:
        "Our commitment to organic farming means no harmful pesticides are used, ensuring a pure product for your baby.",
    },
    {
      title: "Flash-Frozen Quality",
      description:
        "We flash-freeze our purees right after preparation to lock in nutrients, flavor, and color.",
    },
    {
      title: "No Additives or Preservatives",
      description:
        "Our products are free from additives and preservatives, providing only pure, wholesome baby food.",
    },
  ];

  return (
    <div className="container mx-auto my-20">
      <h2 className="text-4xl font-semibold text-primary text-center mb-6">
        Sustainability & Packaging
      </h2>
      <p className="text-lg text-gray-600 text-center mb-10">
        At Cove Valley, we are committed to making choices that benefit both
        babies and the planet.
      </p>

      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="break-inside-avoid bg-[#E6F2F0] p-6 rounded-lg shadow-lg mb-6"
          >
            <h3 className="text-2xl font-semibold text-primary mb-4">
              {item.title}
            </h3>
            <p className="text-gray-700">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MasonryGrid;
