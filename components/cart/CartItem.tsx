import { IOrderItem } from "@/lib/types";
import Image from "next/image";
import React, { MouseEventHandler } from "react";
import { Expand, X } from "lucide-react";
import useCart from "@/hooks/useCart";
import IconButton from "../IconButton";
import Currency from "../Currency";
import Link from "next/link";
import usePreviewModal from "@/hooks/useModal";

interface CartItemProps {
  item: IOrderItem;
}
const CartItem = ({ item }: CartItemProps) => {
  const cart = useCart();
  const previewModal = usePreviewModal();

  const onPreview: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    previewModal.onOpen(item.product);
  };
  return (
    <li className="relative flex flex-col border-b py-6 sm:flex-row">
      <div className="relative aspect-square w-24 overflow-hidden rounded-md bg-gradient-to-r from-cmaccent/10 to-cmaccent/30 sm:h-48 sm:w-48">
        <Image
          alt="Image"
          src={item.product.images?.[0]?.url}
          loading="lazy"
          fill
          className="object-cover object-center"
        />
        <div className="absolute bottom-2 right-2">
          <IconButton
            onClick={onPreview}
            icon={<Expand size={20} className="text-cmneutral" />}
          />
        </div>
      </div>
      <div className="relative mt-1 flex w-full flex-1 flex-col justify-between sm:ml-6 sm:mt-0">
        <div className="relative flex h-full w-full flex-col pr-9">
          <div className="flex h-full w-full flex-col md:pr-3">
            <Link
              href={`/products/${item.product.id}`}
              className="w-full text-lg font-semibold transition-all hover:text-cmaccent sm:mb-1 sm:text-xl"
            >
              {item?.product.name}
            </Link>
            <p className="mb-3 text-sm text-cmneutral sm:mb-1 sm:text-base">
              {item?.product.category.name}
            </p>
            <p className="mt-auto flex gap-1 text-sm text-cmneutral sm:text-base">
              <span>Quantity: {item.quantity} x</span>
              <Currency value={item?.product.price} />
            </p>
            <p className="text-lg sm:text-xl">
              <Currency value={parseInt(item?.product.price) * item.quantity} />
            </p>
          </div>
        </div>
      </div>
      <div className="absolute right-2 top-4">
        <IconButton
          onClick={() => cart.removeItem(item?.product.id)}
          icon={<X size={20} color="red" />}
        />
      </div>
    </li>
  );
};

export default CartItem;
