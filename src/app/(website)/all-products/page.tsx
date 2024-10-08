import Title from "@/ui/shared/Title";
import Image from "next/image";
import React from "react";
import { FaEye } from "react-icons/fa6";
import Product from "@/assets/product.png";
import ProductBack from "@/assets/product-back.png";
import Link from "next/link";

const AllProducts = () => {
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
  ];
  return (
    <div className="container my-20">
      <Title
        title="Our All Products"
        subtitle="Explore our range of wholesome, organic baby food"
      />

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
  );
};

export default AllProducts;
