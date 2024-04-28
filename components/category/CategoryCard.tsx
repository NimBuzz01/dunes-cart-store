import { ICategory } from "@/lib/types";
import React from "react";
import { Card } from "../ui/card";
import Image from "next/image";

interface CategoryCardProps {
  category: ICategory;
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <Card className="flex flex-col items-center justify-center rounded-none transition-all hover:shadow-lg">
      <Image src={"/sample.png"} alt={category.name} height={100} width={100} />
      <p>{category.name}</p>
    </Card>
  );
};

export default CategoryCard;
