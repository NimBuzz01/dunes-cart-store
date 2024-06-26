"use client";

import { MouseEventHandler } from "react";
import { IOrderItem, IProduct } from "@/lib/types";
import Image from "next/image";
import IconButton from "../IconButton";
import { Expand, ShoppingCart } from "lucide-react";
import Currency from "../Currency";
import { useRouter } from "next/navigation";
import usePreviewModal from "@/hooks/useModal";
import useCart from "@/hooks/useCart";
import { Button } from "../ui/button";

interface ProductCardProps {
  product: IProduct;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const router = useRouter();
  const previewModal = usePreviewModal();
  const cart = useCart();
  const handleClick = () => {
    router.push(`/products/${product?.id}`);
  };

  const onPreview: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    previewModal.onOpen(product);
  };
  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    const order: IOrderItem = {
      product: product,
      quantity: 1,
    };

    cart.addItem(order);
  };
  return (
    <div
      onClick={handleClick}
      className="group w-full max-w-[20rem] cursor-pointer space-y-2"
    >
      <div className="relative aspect-square bg-gradient-to-r from-cmaccent/10 to-cmaccent/30">
        <Image
          alt="image"
          src={product?.images?.[0]?.url}
          fill
          className="aspect-square overflow-hidden object-cover transition-all group-hover:scale-95"
        />
        <div className="absolute bottom-5 block w-full px-6 opacity-0 transition group-hover:opacity-100">
          <div className="flex justify-center gap-x-2">
            <Button
              className="hidden bg-cmaccent transition-all hover:scale-105 hover:bg-cmaccent/90 sm:block"
              onClick={onAddToCart}
            >
              Add To Cart
            </Button>
            <IconButton
              className="sm:hidden"
              onClick={onPreview}
              icon={<ShoppingCart size={20} className="text-cmaccent" />}
            />
            <IconButton
              onClick={onPreview}
              icon={<Expand size={20} className="text-cmneutral" />}
            />
          </div>
        </div>
      </div>
      {/** Description */}
      <div className="">
        <p className="text-sm font-semibold sm:text-lg">{product?.name}</p>
        <p className="text-xs text-cmneutral sm:text-sm">
          {product?.category?.name}
        </p>
      </div>
      <div className="flex items-center justify-between text-sm  sm:text-lg">
        <Currency value={product?.price} />
      </div>
    </div>
  );
};

export default ProductCard;
