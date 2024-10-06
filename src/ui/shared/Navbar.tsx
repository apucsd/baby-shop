/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Logo from "@/assets/logo.png";
import Link from "next/link";
import { Drawer } from "antd";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

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
      label: "Statement",
      path: "/statement",
    },
    {
      label: "Story",
      path: "/story",
    },
    {
      label: "Dashboard",
      path: "/dashboard/products",
    },
  ];

  return (
    <div
      className={`
                sticky z-10 top-0 w-full left-0 transition-all duration-200
                bg-primary 
            `}
    >
      <div className="container relative  flex items-center justify-between h-20">
        {/* logo */}
        <Link href={"/"}>
          <Image
            alt="Logo"
            src={Logo}
            width={164}
            height={70}
            className="brightness-0 invert"
          />
        </Link>

        {/* routes container */}
        <div className="hidden  sm:flex items-center gap-6">
          {item.map((menu, index) => {
            return (
              <Link
                key={index}
                className={`
                                        w-fit text-[16px] leading-5 
                                        text-white px-4 py-2 rounded-[30px]

                                        ${
                                          menu.path === pathName
                                            ? "bg-quaternary font-semibold"
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
