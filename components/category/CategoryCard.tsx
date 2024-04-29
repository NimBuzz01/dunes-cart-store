import { ICategory } from "@/lib/types";
import React from "react";
import { Card } from "../ui/card";
import Image from "next/image";

interface CategoryCardProps {
  category: ICategory;
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <Card className="my-1 flex flex-col items-center justify-center gap-3 rounded-none p-5 transition-all hover:scale-105 hover:cursor-pointer hover:shadow-lg">
      <Image src={"/sample.png"} alt={category.name} height={70} width={70} />
      <p className="text-cmneutral text-sm font-semibold">{category.name}</p>
    </Card>
  );
};

export default CategoryCard;
