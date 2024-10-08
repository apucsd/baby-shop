"use client";
import React from "react";
import Image from "next/image"; // If using Next.js
import Title from "@/ui/shared/Title"; // Assuming you have a reusable Title component
import { Button } from "antd";
import { AiOutlineComment } from "react-icons/ai";

const BabyFoodDetails = () => {
  const babyFood = {
    name: "Chickpea & Banana Puree",
    image:
      "https://recipes.ventray.com/wp-content/uploads/2021/06/Mango-and-banana-puree-great-first-foods-for-baby-blended-into-a-puree-14.jpg",
    description:
      "A creamy, protein-packed blend of chickpeas and bananas, rich in fiber and plant-based proteins to support your baby's healthy growth.",
    ingredients: ["Chickpeas", "Bananas", "Water"],
    benefits: [
      "Chickpeas provide plant-based protein and fiber, supporting digestion and muscle development.",
      "Bananas are a natural source of potassium, helping heart health and providing natural energy.",
    ],
    instructions:
      "Simply pop out the number of cubes you need, thaw them in the fridge, or quickly warm them up in a microwave or stovetop.",
    reviews: [
      {
        user: "Jane D.",
        rating: 5,
        comment: "My baby loves this puree! It's nutritious and convenient.",
      },
      {
        user: "Mike R.",
        rating: 4,
        comment: "Great product, but I wish there were more flavors available.",
      },
    ],
  };

  return (
    <div className="container mx-auto p-5">
      <Title title={babyFood.name} subtitle="Nourishing Baby Food" />

      <div className="flex flex-col md:flex-row md:space-x-10">
        <div className="md:w-1/2">
          <Image
            src={babyFood.image}
            alt={babyFood.name}
            className="w-full h-auto rounded-lg shadow-lg"
            width={500}
            height={300}
          />
        </div>

        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold mt-5 md:mt-0">Description</h2>
          <p className="text-gray-700 mt-2">{babyFood.description}</p>

          <h2 className="text-xl font-semibold mt-5">Ingredients</h2>
          <ul className="list-disc list-inside mt-2">
            {babyFood.ingredients.map((ingredient, index) => (
              <li key={index} className="text-gray-700">
                {ingredient}
              </li>
            ))}
          </ul>

          <h2 className="text-xl font-semibold mt-5">Benefits</h2>
          <ul className="list-disc list-inside mt-2">
            {babyFood.benefits.map((benefit, index) => (
              <li key={index} className="text-gray-700">
                {benefit}
              </li>
            ))}
          </ul>

          <h2 className="text-xl font-semibold mt-5">How to Use</h2>
          <p className="text-gray-700 mt-2">{babyFood.instructions}</p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-10">Customer Reviews</h2>
      <div className="mt-5 space-y-4">
        {babyFood.reviews.map((review, index) => (
          <div key={index} className="p-4 border rounded-lg bg-gray-100">
            <h3 className="font-bold">{review.user}</h3>
            <p className="text-gray-600">{review.comment}</p>
            <p className="text-yellow-500">Rating: {review.rating} ★</p>
          </div>
        ))}
      </div>
      <div className="my-5 flex justify-end">
        <Button
          style={{
            height: 42,
          }}
          icon={<AiOutlineComment size={24} />}
          type="primary"
        >
          Leave a Review{" "}
        </Button>
      </div>
    </div>
  );
};

export default BabyFoodDetails;
