"use client";

import CartItem from "@/components/CartItem";
import Summary from "@/components/Summary";
import useCart from "@/hooks/useCart";
import { useState, useEffect } from "react";

const CartPage = () => {
  const [isMounted, setIsMounted] = useState(false);
  const cart = useCart();
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) return null;

  return (
    <div>
      <div className="px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold">Shopping cart</h2>
        <div className="mt-12 gap-x-12 lg:grid lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            {cart.items?.length === 0 ? (
              <>
                <p className="text-cmneutral">No items in the cart</p>
              </>
            ) : (
              <ul>
                {cart.items?.map((item) => (
                  <CartItem item={item} key={item.id} />
                ))}
              </ul>
            )}
          </div>
          <Summary />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
