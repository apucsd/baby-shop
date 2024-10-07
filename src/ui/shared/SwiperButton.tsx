"use client";

import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { useSwiper } from "swiper/react";

const SwiperButton = () => {
  const swiper = useSwiper();

  return (
    <div className="flex justify-between items-center w-full">
      {/* Previous Button */}
      <div
        className=" opacity-0 group-hover/slider:opacity-100 duration-500 absolute top-1/2 -translate-y-1/2 left-1 bg-secondary rounded-full z-[9999] p-2 hover:cursor-pointer shadow-lg"
        onClick={() => swiper.slidePrev()}
      >
        <GoChevronLeft className="text-primary" size={30} />
      </div>

      {/* Next Button */}
      <div
        className="opacity-0 group-hover/slider:opacity-100 duration-500 absolute top-1/2 -translate-y-1/2 right-1 bg-secondary rounded-full z-[9999] p-2 hover:cursor-pointer shadow-lg"
        onClick={() => swiper.slideNext()}
      >
        <GoChevronRight className="text-primary" size={30} />
      </div>
    </div>
  );
};

export default SwiperButton;
