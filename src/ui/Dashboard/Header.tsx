"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "@/assets/logo.png";

const Header = () => {
  return (
    <div className="flex items-center justify-start ms-20 h-16">
      <Link href={"/"}>
        <Image alt="Logo" src={Logo} width={100} height={100} />
      </Link>
    </div>
  );
};

export default Header;
