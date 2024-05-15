import { ICategory } from "@/lib/types";
import React from "react";
import { Card } from "../ui/card";
import Image from "next/image";
import Link from "next/link";

interface CategoryCardProps {
  category: ICategory;
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <Link href={`/products?category=${category.id}`}>
      <div className="flex h-full flex-col items-center justify-center gap-3 text-center transition-all hover:scale-95 hover:cursor-pointer">
        <div className="relative aspect-square w-24 rounded-full bg-cmaccent/10">
          <Image
            src={category.imageUrl}
            alt={category.name}
            fill
            style={{ objectFit: "cover" }}
            className="scale-90"
          />
        </div>

        <p className=" text-xs font-semibold text-cmneutral sm:text-sm">
          {category.name}
        </p>
      </div>
    </Link>
  );
};

export default CategoryCard;
