import { ICategory } from "@/lib/types";
import React from "react";
import { Card } from "../ui/card";
import Image from "next/image";

interface CategoryCardProps {
  category: ICategory;
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <Card className="my-1 flex h-36 flex-col items-center justify-center gap-3 rounded-none p-5 text-center transition-all hover:scale-105 hover:cursor-pointer hover:shadow-lg">
      <Image
        src={category.imageUrl}
        alt={category.name}
        className="scale-150"
        height={60}
        width={60}
      />
      <p className=" text-xs font-semibold text-cmneutral sm:text-sm">
        {category.name}
      </p>
    </Card>
  );
};

export default CategoryCard;
