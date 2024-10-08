import React from "react";

const IngredientsSection = () => {
  return (
    <div className="container my-20">
      <div className="grid md:grid-cols-12">
        <div className="col-span-5">
          <h2 className="uppercase text-lg font-medium text-primary">
            Ingredients
          </h2>
          <div className="space-y-6">
            <h1 className="text-quaternary text-4xl font-semibold">
              Better Ingredients
            </h1>
            <p className="text-secondary text-lg">
              We utilize the purest and highest quality forms of all our
              ingredients across our entire product range.
            </p>
          </div>
        </div>
        <div className="col-span-7 grid grid-cols-2 gap-8 w-full">
          <div className="bg-[#E6F2F0] p-5 w-full h-[250px] rounded-lg">
            <div className="space-y-4">
              <h1 className="text-quaternary text-2xl font-medium">
                Chickpea & Banana
              </h1>
              <p className="text-[#878787]">
                A creamy blend that offers plant-based protein, fiber, and
                natural energy to support your baby s growth.
              </p>
            </div>
          </div>
          <div className="bg-[#E6F2F0] p-5 w-full h-[250px] rounded-lg">
            <div className="space-y-4">
              <h1 className="text-quaternary text-2xl font-medium">
                Butternut Squash
              </h1>
              <p className="text-[#878787]">
                Rich in vitamins A and C, this comforting puree supports vision
                and immune health for your baby.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-6">
        <div className="bg-[#E6F2F0] p-5 w-full h-[250px] rounded-lg">
          <div className="space-y-4">
            <h1 className="text-quaternary text-2xl font-medium">
              Locally Sourced Ingredients
            </h1>
            <p className="text-[#878787]">
              We choose local farms to minimize our carbon footprint and ensure
              the freshest ingredients for your baby.
            </p>
          </div>
        </div>
        <div className="bg-[#E6F2F0] p-5 w-full h-[250px] rounded-lg">
          <div className="space-y-4">
            <h1 className="text-quaternary text-2xl font-medium">
              No Pesticides
            </h1>
            <p className="text-[#878787]">
              We use only pesticide-free, non-GMO produce to provide your baby
              with the purest ingredients available.
            </p>
          </div>
        </div>
        <div className="bg-[#E6F2F0] p-5 w-full h-[250px] rounded-lg">
          <div className="space-y-4">
            <h1 className="text-quaternary text-2xl font-medium">
              Flash-Frozen
            </h1>
            <p className="text-[#878787]">
              Our purees are flash-frozen right after preparation, locking in
              essential nutrients and flavors for optimal health.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IngredientsSection;
