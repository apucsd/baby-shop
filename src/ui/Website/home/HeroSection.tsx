import Image from "next/image";
import React from "react";
import { Button } from "antd";
import { AiOutlineShareAlt } from "react-icons/ai";
import { FaAppleAlt, FaClock, FaLeaf } from "react-icons/fa";
import { motion } from "framer-motion";
import Banner from "@/assets/banner.webp";

const HeroSection = () => {
  return (
    <div className="bg-secondary py-20 min-h-[80vh] relative">
      <div className="container grid grid-cols-1 gap-10 md:gap-2 md:grid-cols-2 md:px-[200px]">
        <div className="w-full space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-8xl font-extrabold text-primary"
          >
            Real Food, Just For Your Baby
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white text-lg"
          >
            Our babies deserve the very best, and that means a superior
            nutritional quality at every stage in their start with solids.
            We&apos;ve made it easy for you to introduce delicious,
            nutrient-rich, and 100% organic food that your baby will love. With
            our thoughtfully crafted flavour combinations, your little one will
            never get bored. We know that feeding your baby can be
            time-consuming, so were here to lend a hand. When your baby needs
            something to eat, trust Impress Baby Food to provide the quality and
            convenience you deserve. We ship our products to your doorstep from
            Monday to Thursday!
          </motion.p>

          <div className="flex items-center gap-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Button
                style={{
                  height: 42,
                  fontWeight: 500,
                  textTransform: "uppercase",
                }}
                shape="round"
                type="primary"
              >
                See Products
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <Button
                iconPosition="end"
                icon={<AiOutlineShareAlt size={20} />}
                style={{
                  height: 42,
                  fontWeight: 500,
                  textTransform: "uppercase",
                }}
                shape="round"
                type="primary"
              >
                Share
              </Button>
            </motion.div>
          </div>

          <div>
            <div className="flex flex-col md:flex-row items-center gap-4 text-center">
              {/* Organic Section */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{
                  y: -10,
                  transition: {
                    duration: 0.3,
                  },
                }}
                className="flex items-center gap-4 group"
              >
                <div className="p-4 bg-primary/20 rounded-full group-hover:bg-primary transition-all duration-300">
                  <FaLeaf
                    className="text-primary group-hover:text-white"
                    size={24}
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-nowrap text-primary group-hover:text-primary transition-all duration-300">
                    100% Organic
                  </h3>
                </div>
              </motion.div>

              {/* Divider */}
              <div className="hidden md:block w-px h-16 bg-gray-300"></div>

              {/* Convenient Section */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{
                  y: -10,
                  transition: {
                    duration: 0.3,
                  },
                }}
                className="flex items-center gap-4 group"
              >
                <div className="p-4 bg-primary/20 rounded-full group-hover:bg-primary transition-all duration-300">
                  <FaClock
                    className="text-primary group-hover:text-white"
                    size={24}
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary transition-all duration-300">
                    Convenient
                  </h3>
                </div>
              </motion.div>

              {/* Divider */}
              <div className="hidden md:block w-px h-16 bg-gray-300"></div>

              {/* Nutritious Section */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{
                  y: -10,
                  transition: {
                    duration: 0.3,
                  },
                }}
                className="flex items-center gap-4 group"
              >
                <div className="p-4 bg-primary/20 rounded-full group-hover:bg-primary transition-all duration-300">
                  <FaAppleAlt
                    className="text-primary group-hover:text-white"
                    size={24}
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary transition-all duration-300">
                    Nutritious
                  </h3>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        <motion.div
          initial={{ scale: 0.8, x: 5, y: -5 }}
          animate={{ scale: 1, x: 0, y: 0, z: 0 }}
          transition={{ duration: 1 }}
          className="w-[300px] mx-auto md:w-[30vw] h-[300px] md:h-[60vh] relative"
        >
          <Image className="w-full h-full" fill src={Banner} alt="banner" />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
