"use client";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import NavLinks from "./NavLinks";
import NavMenuMobile from "./NavMenuMobile";
import NavBarSearch from "./NavBarSearch";
import NavBarCart from "./NavBarCart";

const NavBar = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) return null;

  return (
    <div className="border-b">
      <div className="relative flex h-16 items-center justify-between">
        <Link href="/" className="flex">
          <p className="text-xl font-bold">DUNES CART</p>
        </Link>
        <NavLinks />
        <div className="text-slate-600">
          <NavMenuMobile />
          <NavBarSearch />
          <NavBarCart />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
