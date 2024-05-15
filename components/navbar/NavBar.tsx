"use client";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import NavLinks from "./NavLinks";
import NavMenuMobile from "./NavMenuMobile";
import NavBarSearch from "./NavBarSearch";
import NavBarCart from "./NavBarCart";
import Image from "next/image";
import { getCategories, getCollections, getProducts } from "@/actions/actions";
import useStore from "@/hooks/useStore";

const NavBar = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { collections, setCollections, setCategories, setProducts } =
    useStore();

  useEffect(() => {
    const fetchData = async () => {
      const products = await getProducts({ isFeatured: false });
      setProducts(products);
      const categories = await getCategories();
      setCategories(categories);
      const collections = await getCollections();
      setCollections(collections);
    };
    setIsMounted(true);
    fetchData();
  }, [setProducts, setCategories, setCollections]);

  if (!isMounted) return null;

  return (
    <>
      {collections.length > 0 && (
        <div className="sticky top-0 z-50 border-b bg-white shadow-md">
          <div className="relative flex h-16 items-center justify-between px-4 sm:container">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Dunes Cart Logo"
                width={140}
                height={0}
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
      )}
    </>
  );
};

export default NavBar;
