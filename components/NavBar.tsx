"use client";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ShoppingBag } from "lucide-react";
import useCart from "@/hooks/useCart";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

const NavBar = () => {
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();
  const cart = useCart();

  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) return null;

  return (
    <div className="border-b">
      <div className="relative flex h-16 items-center">
        <Link href="/" className="flex">
          <p className="text-xl font-bold">DUNES CART</p>
        </Link>
        <div className="ml-auto flex items-center">
          <Button
            onClick={() => router.push("/cart")}
            className="item-center rounded-full px-4 py-2 text-black"
          >
            <ShoppingBag size={20} color="white" />
            <span className="ml-2 text-sm font-semibold text-white">
              {cart?.items?.length}
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
