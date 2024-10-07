import React from "react";
import Image from "next/image"; // Assuming you're using Next.js

const BlogDetails = () => {
  const blogPost = {
    title: "5 Ways to 'Spring Clean' Your Health",
    date: "August 1, 2024",
    author: "Codazon Group",
    content: `
      Spring is the perfect time to refresh your health routine. Here are five ways to give your wellness a boost:

      1. **Detox Your Diet**: Remove processed foods and incorporate more whole foods into your meals. Focus on fruits, vegetables, and lean proteins.
      
      2. **Stay Hydrated**: Drinking enough water is crucial for maintaining good health. Aim for at least 8 glasses a day.

      3. **Get Moving**: Incorporate physical activity into your daily routine. Whether it's a walk, yoga, or a workout, staying active is essential.

      4. **Declutter Your Space**: A clean environment can lead to a clearer mind. Take some time to declutter and organize your living space.

      5. **Practice Mindfulness**: Take moments throughout your day to pause, breathe, and reflect. Mindfulness can help reduce stress and improve your mental well-being.
    `,
    image:
      "https://blog.pamperedchef.ca/wp-content/uploads/2020/05/featured-baby-food.jpg",
  };

  return (
    <div className="container mx-auto my-10">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Main Content */}
        <div className="flex-1 bg-white p-5 rounded-lg shadow-lg">
          <Image
            src={blogPost.image}
            alt={blogPost.title}
            width={800}
            height={500}
            className="w-full h-[500px] object-cover rounded-lg mb-5"
          />
          <h1 className="text-3xl font-bold text-primary mb-2">
            {blogPost.title}
          </h1>
          <p className="text-gray-500 mb-4">
            {blogPost.date} • {blogPost.author}
          </p>
          <div className="text-gray-700">
            {blogPost.content.split("\n").map((paragraph, index) => (
              <p key={index} className="mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Sidebar (optional) */}
        <div className="w-full lg:w-1/3 bg-white p-5 rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold text-primary mb-4">
            Related Posts
          </h2>
          <ul>
            <li className="mb-2">
              <a href="#" className="text-primary hover:underline">
                How to Boost Your Immune System
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-primary hover:underline">
                Nutrition Tips for a Healthy Lifestyle
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-primary hover:underline">
                The Importance of Regular Exercise
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
