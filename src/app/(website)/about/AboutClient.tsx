/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";

const AboutClient = () => {
  return (
    <div className="container">
      <>
        {/* First Section - Our Story */}
        <div className="flex flex-col w-full bg-secondary md:flex-row">
          <div className="flex flex-col items-center justify-start w-full p-5 md:w-1/2 lg:p-16 xl:p-24">
            <h2 className="w-full text-4xl font-light leading-tight text-primary md:text-3xl lg:text-4xl">
              The Story Behind Cove Valley Organic
            </h2>
            <p className="max-w-lg mt-5 text-xl text-white md:text-base lg:text-xl xl:text-2xl">
              Cove Valley Organic was born from a simple idea: to nurture the
              next generation with the cleanest and healthiest food possible. As
              parents ourselves, we understand the importance of giving our
              little ones the best start in life. Inspired by nature, we set out
              to create baby food that’s free from chemicals, additives, and
              artificial ingredients — just pure, wholesome nutrition.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src="https://img.freepik.com/free-photo/team-businesspeople-meeting_23-2148824861.jpg?t=st=1728290132~exp=1728293732~hmac=42370f9cecfeb1f071ddb02b5359f4a53e2ab80fc49345028195999bf41a63b3&w=996"
              alt="Baby enjoying organic food"
              className="inset-0 object-cover h-full w-full"
            />
          </div>
        </div>

        {/* Second Section - Our Mission */}
        <div className="flex flex-col  w-full bg-secondary md:flex-row">
          <div className="w-full md:w-1/2">
            <img
              src="https://img.freepik.com/free-photo/team-businesspeople-meeting_23-2148824861.jpg?t=st=1728290132~exp=1728293732~hmac=42370f9cecfeb1f071ddb02b5359f4a53e2ab80fc49345028195999bf41a63b3&w=996"
              alt="Organic ingredients"
              className="inset-0 object-cover h-full w-full"
            />
          </div>
          <div className="flex flex-col items-start justify-center w-full p-5 md:w-1/2 lg:p-16 xl:p-24">
            <h2 className="max-w-lg text-4xl font-light leading-tight text-primary md:text-3xl lg:text-4xl">
              Our Mission: Nurture with Nature
            </h2>
            <p className="max-w-lg mt-5 text-xl text-white md:text-base lg:text-xl xl:text-2xl">
              Our mission is simple: to provide babies with clean, organic food
              that is as close to nature as possible. We are passionate about
              sourcing the best organic ingredients, ensuring that every bite of
              Cove Valley food is packed with nutrients. Every product we create
              is a reflection of our belief that healthy food should not only
              nourish but also pave the way for a brighter, healthier future.
            </p>
          </div>
        </div>

        {/* Third Section - Commitment to Sustainability */}
        <div className="flex flex-col w-full bg-secondary md:flex-row">
          <div className="flex flex-col items-center justify-center w-full p-5 md:w-1/2 lg:p-16 xl:p-24">
            <h2 className="max-w-lg text-4xl font-light leading-tight text-primary md:text-3xl lg:text-4xl">
              Commitment to Organic and Sustainable Practices
            </h2>
            <p className="max-w-lg mt-5 text-xl text-white md:text-base lg:text-xl xl:text-2xl">
              We are dedicated to not only providing high-quality organic baby
              food, but also ensuring that our production processes are
              environmentally friendly. From using sustainable farming practices
              to eco-friendly packaging, we are committed to reducing our carbon
              footprint while delivering wholesome nutrition to your baby.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src="https://img.freepik.com/free-photo/team-businesspeople-meeting_23-2148824861.jpg?t=st=1728290132~exp=1728293732~hmac=42370f9cecfeb1f071ddb02b5359f4a53e2ab80fc49345028195999bf41a63b3&w=996"
              alt="Sustainable farming"
              className="inset-0 object-cover h-full w-full"
            />
          </div>
        </div>
      </>
    </div>
    // <div>
    //     <Heading
    //         name="About"
    //         style="font-bold sm:text-[32px] text-[20px] leading-[38px] sm:leading-[46px] text-[#333333] mb-4"
    //     />

    //     <p>
    //         Welcome to X, your trusted partner in providing nutritious,
    //         organic baby food tailored to your child&apos;s developmental needs. We understand how important it is to offer the best possible
    //         start for your baby, which is why our mission is to deliver healthy,
    //         high-quality meals that make feeding time stress-free for parents and delightful for little ones.
    //     </p>
    //     <br />

    //     <p>
    //         Our curated selection of baby food is crafted from 100% organic ingredients,
    //         ensuring that your child gets all the essential nutrients without any harmful
    //         additives or preservatives. Whether you&apos;re starting with purees for your 6-month-old or need a
    //         wholesome snack for your toddler, X offers a range of options to support every stage of growth.

    //     </p>

    //     <br />
    //     <p>
    //         We prioritize transparency, convenience, and safety. Our products undergo rigorous testing
    //         to ensure they meet the highest safety standards. Plus, with our easy-to-use web app, you can
    //         browse through products, customize your orders, and choose a subscription plan that fits your
    //         schedule—all from the comfort of your home.
    //     </p>

    //     <br />
    //     <p>
    //         Explore X today and discover the joy of feeding your baby healthy, delicious food that you can trust!
    //     </p>
    // </div>
  );
};

export default AboutClient;
