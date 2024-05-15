import React from "react";
import Image from "next/image";

const CartEmpty = () => {
  return (
    <div className="flex h-full min-h-[300px] w-full flex-col items-center justify-center gap-4">
      <div className="relative aspect-square w-28 sm:w-32">
        <Image
          src="/icons/empty-cart.png"
          alt="Empty Cart"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>

      <h1 className="text-xl font-bold sm:text-2xl">Your Cart is Empty</h1>
      <p className="text-sm text-cmneutral sm:text-base">
        Looks like you haven&apos;t made your choice yet...
      </p>
    </div>
  );
};

export default CartEmpty;
