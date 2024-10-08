"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import React from "react";
import { FaEye } from "react-icons/fa6";
import Product from "@/assets/product.png";
import ProductBack from "@/assets/product-back.png";
import Image from "next/image";
import SwiperButton from "@/ui/shared/SwiperButton";
import Title from "@/ui/shared/Title";
import Link from "next/link";
const BestDeal = () => {
  return (
    <div className="container my-20">
      <Title
        title="Best Deals"
        subtitle="  Discover amazing discounts on our range of organic baby food products"
      />

      <div className="my-5 mx-auto relative group/slider">
        <Swiper
          navigation={true}
          modules={[]}
          className="mySwiper"
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {[...Array(10)].map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div>
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
                      href={`all-products/details/${1}`}
                      className="flex transition-all duration-300 opacity-0 group-hover:opacity-100 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[99] items-center justify-center rounded-full bg-white p-2"
                    >
                      <button>
                        <FaEye
                          size={20}
                          className="text-primary rounded-full"
                        />
                      </button>
                    </Link>
                  </div>
                  <div className="w-[400px] text-center mx-auto">
                    <h1 className="font-semibold text-quaternary text-2xl my-4">
                      Best Organic Baby Food
                    </h1>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}

          <div className="mt-5">
            <SwiperButton />
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default BestDeal;
