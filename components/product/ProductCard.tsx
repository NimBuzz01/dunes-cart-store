"use client";

import { MouseEventHandler } from "react";
import { IProduct } from "@/lib/types";
import Image from "next/image";
import IconButton from "../IconButton";
import { Expand, ShoppingCart } from "lucide-react";
import Currency from "../Currency";
import { useRouter } from "next/navigation";
import usePreviewModal from "@/hooks/useModal";
import useCart from "@/hooks/useCart";

interface ProductCardProps {
  product: IProduct;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const router = useRouter();
  const previewModal = usePreviewModal();
  const cart = useCart();
  const handleClick = () => {
    router.push(`/product/${product?.id}`);
  };

  const onPreview: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    previewModal.onOpen(product);
  };
  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    cart.addItem(product);
  };
  return (
    <div
      onClick={handleClick}
      className="group cursor-pointer space-y-4 rounded-xl border bg-white p-3"
    >
      <div className="relative aspect-square rounded-xl">
        <Image
          alt="image"
          src={product?.images?.[0]?.url}
          fill
          className="aspect-square overflow-hidden rounded-md object-cover transition-all group-hover:scale-95"
        />
        <div className="absolute bottom-5 hidden w-full px-6 opacity-0 transition group-hover:opacity-100 lg:block">
          <div className="flex justify-center gap-x-6">
            <IconButton
              onClick={onPreview}
              icon={<Expand size={20} className="text-gray-500" />}
            />
            <IconButton
              onClick={onAddToCart}
              icon={<ShoppingCart size={20} className="text-gray-500" />}
            />
          </div>
        </div>
      </div>
      {/** Description */}
      <div className="">
        <p className="text-lg font-semibold">{product?.name}</p>
        <p className="text-sm text-gray-500">{product?.category?.name}</p>
      </div>
      <div className="flex items-center justify-between">
        <Currency value={product?.price} />
      </div>
    </div>
  );
};

export default ProductCard;
