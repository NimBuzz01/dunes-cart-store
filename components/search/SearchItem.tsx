import { IOrderItem, IProduct } from "@/lib/types";
import React from "react";
import Image from "next/image";
import { X } from "lucide-react";
import useCart from "@/hooks/useCart";
import { Card } from "../ui/card";
import IconButton from "../IconButton";
import Currency from "../Currency";
import Link from "next/link";

interface SearchItemProps {
  product: IProduct;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchItem = ({ product, setOpen }: SearchItemProps) => {
  return (
    <Link
      href={`/products/${product.id}`}
      onClick={() => {
        setOpen(false);
      }}
    >
      <Card
        key={product.id}
        className="group relative flex w-full gap-2 p-2 transition-all hover:bg-cmaccent/5"
      >
        <div className="relative aspect-square w-28 bg-gradient-to-r from-cmaccent/10 to-cmaccent/30">
          <Image
            src={product.images[0].url}
            alt={product.name}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="flex w-full flex-col pr-6">
          <p className="mb-1 text-sm font-semibold sm:text-base">
            {product.name}
          </p>
          <p className="mb-1 text-xs  text-cmneutral sm:text-sm">
            {product.category.name}
          </p>
          <div className="mt-auto">
            <Currency value={parseInt(product.price)} />
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default SearchItem;
