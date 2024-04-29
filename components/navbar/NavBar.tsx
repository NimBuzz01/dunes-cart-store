"use client";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import NavLinks from "./NavLinks";
import NavMenuMobile from "./NavMenuMobile";
import NavBarSearch from "./NavBarSearch";
import NavBarCart from "./NavBarCart";
import Image from "next/image";

const NavBar = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) return null;

  return (
    <div className="sticky top-0 z-50 border-b bg-white shadow-md">
      <div className="container relative flex h-16 items-center justify-between">
        <Link href="/" className="flex">
          <Image
            src="/logo.png"
            alt="Dunes Cart Logo"
            width={180}
            height={90}
          />
        </Link>
        <NavLinks />
        <div>
          <NavMenuMobile />
          <NavBarSearch />
          <NavBarCart />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
