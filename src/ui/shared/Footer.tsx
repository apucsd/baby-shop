"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "@/assets/logo.png";
import Heading from "./Heading";
import facebook from "@/assets/facebook.png";
import instagram from "@/assets/instagram.png";
import linkedin from "@/assets/linkedin.png";
import twitter from "@/assets/twitter.png";

const Footer = () => {
  const item = [
    {
      label: "About Us",
      path: "/about",
    },
    {
      label: "Faq",
      path: "/faq",
    },
    {
      label: "Contact",
      path: "/contact",
    },
  ];
  return (
    <div
      className="bg-primary text-white"
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <div className="container flex items-center justify-between py-[80px] ">
        <Link href={"/"} className="">
          <Image
            alt="Logo"
            src={Logo}
            width={188}
            height={150}
            className="mx-auto brightness-0 invert"
          />
        </Link>

        <div className="flex items-center gap-10">
          {item.map((menu, index) => {
            return (
              <Link
                key={index}
                className={`
                                        h-[21px]
                                        font-normal text-[16px] leading-6 
                                        border-[#D9D9D9]
                                    `}
                href={`${menu.path}`}
              >
                {menu.label}
              </Link>
            );
          })}
        </div>

        <div className="">
          <Heading
            name="Follow Us:"
            style="font-semibold text-[16px] leading-[20px] mb-0"
          />
          <div className="flex items-center gap-6 mt-4">
            <a href="https://www.facebook.com/" target="_blank">
              <Image alt="social-link" src={facebook} width={32} height={32} />
            </a>

            <a href="https://www.instagram.com/" target="_blank">
              <Image alt="social-link" src={instagram} width={32} height={32} />
            </a>

            <a href="https://www.linkedin.com/" target="_blank">
              <Image alt="social-link" src={linkedin} width={32} height={32} />
            </a>

            <a href="https://www.twitter.com/" target="_blank">
              <Image alt="social-link" src={twitter} width={32} height={32} />
            </a>
          </div>
        </div>
      </div>

      {/* <div className='bg-[#003642] py-3'>
                <p className='text-center text-[#ffffff]'>© Copyright UX/UI 2204 Team Md. Asadujjaman Mahfuz</p>
            </div> */}
    </div>
  );
};

export default Footer;
