"use client";
import { IProduct } from "@/lib/types";
import Image from "next/image";
import React from "react";
import IconButton from "./IconButton";
import { X } from "lucide-react";
import useCart from "@/hooks/useCart";
import { Button } from "./ui/button";

interface CartItemProps {
  item: IProduct;
}
const CartItem = ({ item }: CartItemProps) => {
  const cart = useCart();
  return (
    <li className="flex border-b py-6">
      <div className="relative h-24 w-24 overflow-hidden rounded-md sm:h-48 sm:w-48">
        <Image
          alt="Image"
          src={item.images?.[0]?.url}
          loading="lazy"
          fill
          className="object-cover object-center"
        />
      </div>
      <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
        <div className="absolute right-2 top-2">
          <Button
            onClick={() => cart.removeItem(item?.id)}
            size="icon"
            variant="outline"
          >
            <X size={16} color="red" />
          </Button>
        </div>
        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div className="flex justify-between">
            <p className="text-lg font-semibold">{item?.name}</p>
          </div>
          <div className="mt-1 flex text-sm">
            <p className="text-cmneutral">{item?.size?.name}</p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
