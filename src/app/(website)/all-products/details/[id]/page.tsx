import React from "react";
import Product from "@/assets/product.png";
import ProductBack from "@/assets/product-back.png";
import Image from "next/image";
import Title from "@/ui/shared/Title";
import Link from "next/link";
import { FaEye } from "react-icons/fa6";
const ProductDetails = () => {
  const products = [
    {
      name: "Chickpea & Banana Puree",
      image: [Product, ProductBack],
      description:
        "A creamy, protein-packed blend of chickpeas and bananas, rich in fiber and plant-based proteins to support your baby's healthy growth.",
      ingredients: ["Chickpeas", "Bananas", "Water"],
      benefits:
        "Chickpeas provide plant-based protein and fiber, supporting digestion and muscle development. Bananas are a natural source of potassium, helping heart health and providing natural energy.",
      instructions:
        "Simply pop out the number of cubes you need, thaw them in the fridge, or quickly warm them up in a microwave or stovetop.",
    },
    {
      name: "Butternut Squash, Apple & Cinnamon",
      image: [Product, ProductBack],
      description:
        "A smooth blend of butternut squash, apples, and cinnamon. Packed with vitamins and flavors your baby will love.",
      ingredients: ["Butternut Squash", "Apples", "Cinnamon"],
      benefits:
        "Butternut squash is rich in vitamins A and C, supporting vision and immune health. Apples provide fiber and antioxidants, while cinnamon adds a mild baby-friendly spice that can aid digestion.",
      instructions:
        "Each cube is pre-portioned to lock in essential nutrients and flavors. Just pop out the cubes you need, thaw, and serve.",
    },
    {
      name: "Chickpea & Banana Puree",
      image: [Product, ProductBack],
      description:
        "A creamy, protein-packed blend of chickpeas and bananas, rich in fiber and plant-based proteins to support your baby's healthy growth.",
      ingredients: ["Chickpeas", "Bananas", "Water"],
      benefits:
        "Chickpeas provide plant-based protein and fiber, supporting digestion and muscle development. Bananas are a natural source of potassium, helping heart health and providing natural energy.",
      instructions:
        "Simply pop out the number of cubes you need, thaw them in the fridge, or quickly warm them up in a microwave or stovetop.",
    },
  ];
  return (
    <div>
      <div className="bg-secondary h-[80vh]">
        <div className="container grid grid-cols-2 py-20">
          <div className="relative">
            <Image
              height={500}
              width={500}
              className="h-full"
              src={Product.src}
              alt="image"
            />
            <div className="bg-white flex flex-col justify-center text-center border-primary border-2 size-[100px] rounded-full absolute bottom-[10%] right-[30%]">
              <h1 className="text-primary font-extrabold text-xl">
                Cove
                <br />
                Valley
              </h1>
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-medium text-primary">
                Real Food, Just For Your Baby
              </h2>
              <h2 className="text-7xl font-semibold text-primary">
                Chickpea & Banana
              </h2>
            </div>
            <div className="text-white space-y-3 ">
              <h1 className="text-2xl">Ingredients:</h1>
              <ul className="text-xl">
                <li>Chickpeas </li>
                <li>Bananas</li>
                <li>Water</li>
              </ul>
            </div>
            <div className="text-white space-y-3">
              <h1 className="text-2xl">How Frozen Baby Food Cubes Work:</h1>
              <ul className="text-xl space-y-2">
                <li>Quick Prep: Thaw or warm as needed.</li>
                <li>Freshness Lock: Flash-frozen to retain nutrients.</li>
                <li>Portion Control: Perfect serving size to reduce waste.</li>
                <li>Versatile: Mix and match for varied meals.</li>
              </ul>
              <p className="text-lg">Nutritious meals in minutes!</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-20">
        <Title title="Relative Product" />

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 justify-center">
          {products.map((product, index) => (
            <div key={index}>
              <div className="text-center w-[400px] mx-auto overflow-hidden group relative">
                <div className="flex">
                  <Image
                    width={500}
                    height={500}
                    className="w-[400px] group-hover:-translate-x-[100%] duration-300"
                    src={Product.src}
                    alt=""
                  />
                  <Image
                    width={500}
                    height={500}
                    className="w-[400px] group-hover:-translate-x-[100%] scale-125 duration-300"
                    src={ProductBack.src}
                    alt=""
                  />
                </div>

                {/* Button container */}
                <Link
                  href={`/all-products/details/${1}`}
                  className="flex transition-all duration-300 opacity-0 group-hover:opacity-100 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[99] items-center justify-center rounded-full bg-white p-2"
                >
                  <button>
                    <FaEye size={20} className="text-primary rounded-full" />
                  </button>
                </Link>
              </div>
              <div className="w-[400px] text-center mx-auto">
                <h1 className="text-quaternary font-semibold text-2xl my-4">
                  {product.name}
                </h1>
                <p className="text-primary text-lg">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
