/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Logo from "@/assets/logo.png";
import Link from "next/link";
import { Drawer } from "antd";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { AiOutlineUser } from "react-icons/ai";

const Navbar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathName = usePathname() || "/";

  console.log(pathName);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 5) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const item = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "Products",
      path: "/all-products",
    },
    {
      label: "Statement",
      path: "/statement",
    },
    {
      label: "Story",
      path: "/story",
    },
  ];

  return (
    <div
      className={`

        
                sticky z-[999]  top-0 w-full font-medium left-0 transition-all duration-200
                bg-secondary 
            `}
    >
      <div className="container relative  flex items-center justify-between h-[80px]">
        <div className="hidden  sm:flex items-center gap-6">
          {item.map((menu, index) => {
            return (
              <Link
                key={index}
                className={`


                  hover:bg-primary duration-300 rounded-s-full rounded-r-full px-4 py-1
                                        w-fit text-[16px] leading-5 
                                        text-white 

                                        ${
                                          menu.path === pathName
                                            ? "bg-primary font-medium"
                                            : ""
                                        }
                                    `}
                href={`${menu.path}`}
              >
                {menu.label}
              </Link>
            );
          })}
        </div>
        <Link href={"/"}>
          <Image
            alt="Logo"
            src={Logo}
            width={164}
            height={80}
            className="brightness-0 invert h-[50px]"
          />
        </Link>
        <div className="flex items-center">
          <Link
            className="flex items-center hover:bg-primary duration-300 rounded-s-full rounded-r-full px-4 py-1 text-white  gap-2"
            href={"/account"}
          >
            {/* ? This need to be changed */}
            <AiOutlineUser size={20} />
            <span>Account</span>
          </Link>
          <Link
            className="flex items-center hover:bg-primary duration-300 rounded-s-full rounded-r-full px-4 py-1 text-white  gap-2"
            href={"/dashboard/products"}
          >
            <span>Dashboard</span>
          </Link>
        </div>

        <div className="block sm:hidden">
          <Menu onClick={() => setOpenDrawer(true)} size={30} color="#555656" />
        </div>
      </div>

      <Drawer
        title={
          <div className="flex items-center justify-between">
            <Link href={"/"}>
              <Image alt="Logo" src={Logo} width={100} height={60} />
            </Link>
            <X
              onClick={() => setOpenDrawer(false)}
              color="black"
              className="cursor-pointer"
              size={26}
            />
          </div>
        }
        placement={"left"}
        closable={false}
        onClose={() => setOpenDrawer(false)}
        open={openDrawer}
        key={"left"}
      >
        <div className="flex items-start justify-center flex-col gap-6 mb-6">
          {item.map((menu, index) => {
            return (
              <Link
                key={index}
                className={`
                                        h-[21px]
                                        text-[16px] leading-6 
                                        ${
                                          menu.path === pathName
                                            ? "text-primary font-bold transition-all duration-200"
                                            : "text-base font-normal"
                                        }
                                        border-[#D9D9D9]
                                        hover:text-primary
                                    `}
                onClick={() => setOpenDrawer(false)}
                href={`${menu.path}`}
              >
                {menu.label}
              </Link>
            );
          })}
        </div>
      </Drawer>
    </div>
  );
};

export default Navbar;
