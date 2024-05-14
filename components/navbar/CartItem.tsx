import { IOrderItem } from "@/lib/types";
import React from "react";
import Image from "next/image";
import { X } from "lucide-react";
import useCart from "@/hooks/useCart";
import { Card } from "../ui/card";
import IconButton from "../IconButton";
import Currency from "../Currency";
import Link from "next/link";

interface CartItemProps {
  item: IOrderItem;
}

const CartItem = ({ item }: CartItemProps) => {
  const cart = useCart();

  return (
    <Card
      key={item.product.id}
      className="relative flex w-full gap-2 border-b border-none py-4"
    >
      <div className="relative aspect-square w-28 bg-gradient-to-r from-cmaccent/10 to-cmaccent/30">
        <Image
          src={item.product.images[0].url}
          alt={item.product.name}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="flex w-full flex-col pr-6">
        <Link
          href={`/products/${item.product.id}`}
          className="mb-1 text-sm transition-all hover:text-cmaccent"
        >
          {item.product.name}
        </Link>
        <p className="text-xs text-cmneutral">Quantity: {item.quantity}</p>
        <p className="mt-auto text-sm text-cmprimary">
          <Currency value={parseInt(item.product.price) * item.quantity} />
        </p>
      </div>
      <IconButton
        onClick={() => {
          cart.removeItem(item.product.id);
        }}
        className="absolute right-2 top-0"
        icon={<X className="h-4 w-4 text-red-500 hover:text-red-600" />}
      />
    </Card>
  );
};

export default CartItem;
