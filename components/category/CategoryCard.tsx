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
      <Card className="flex h-full flex-col items-center justify-center gap-3 rounded-none p-2 py-4 text-center transition-all hover:scale-95 hover:cursor-pointer hover:shadow-lg">
        <div className="relative aspect-square w-24">
          <Image
            src={category.imageUrl}
            alt={category.name}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        <p className=" text-xs font-semibold text-cmneutral sm:text-sm">
          {category.name}
        </p>
      </Card>
    </Link>
  );
};

export default CategoryCard;
