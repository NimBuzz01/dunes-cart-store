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
      <Image src={"/sample.png"} alt={category.name} height={60} width={60} />
      <p className="text-sm font-semibold text-cmneutral">{category.name}</p>
    </Card>
  );
};

export default CategoryCard;
