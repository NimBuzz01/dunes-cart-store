"use client";

import CartItem from "@/components/cart/CartItem";
import CustomTitle from "@/components/CustomTitle";
import Summary from "@/components/cart/Summary";
import useCart from "@/hooks/useCart";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import CartEmpty from "@/components/CartEmpty";

const CartPage = () => {
  const [isMounted, setIsMounted] = useState(false);
  const cart = useCart();
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) return null;

  return (
    <div className="container px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
      <CustomTitle text1={"Shopping"} text2={"Cart"} />
      <div className="mt-6 gap-x-12 sm:mt-12 lg:grid lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-8">
          {cart.items?.length === 0 ? (
            <CartEmpty />
          ) : (
            <>
              <ul>
                {cart.items?.map((item) => (
                  <CartItem item={item} key={item.product.id} />
                ))}
              </ul>
              <Link
                className="mt-10 flex items-center gap-2 font-semibold transition-all hover:text-cmaccent"
                href={"/products"}
              >
                <ArrowLeft />
                Continue Shopping
              </Link>
            </>
          )}
        </div>
        <Summary />
      </div>
    </div>
  );
};

export default CartPage;
