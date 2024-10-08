"use client";
import BestDeal from "@/ui/Website/home/BestDeal";
import Blogs from "@/ui/Website/home/Blogs";
import HeroSection from "@/ui/Website/home/HeroSection";
import IngredientsSection from "@/ui/Website/home/OurIngredient";
import OurProduct from "@/ui/Website/home/OurProduct";
// import SustainabilityAndPackaging from "@/ui/Website/home/Packaging";
import React from "react";

const HomeClient = () => {
  return (
    <div>
      <HeroSection />
      <BestDeal />
      <OurProduct />
      <IngredientsSection />
      {/* <SustainabilityAndPackaging /> */}
      <Blogs />
    </div>
  );
};

export default HomeClient;
