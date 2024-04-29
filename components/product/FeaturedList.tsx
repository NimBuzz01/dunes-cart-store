import { IProduct } from "@/lib/types";
import NoResults from "../NoResults";
import ProductCard from "./ProductCard";
import React from "react";
import { Button } from "../ui/button";

interface ProductListProps {
  data: IProduct[];
  title: string;
}

const FeaturedList = ({ data, title }: ProductListProps) => {
  return (
    <div className="space-y-4">
      <div className="mb-10 flex items-center justify-between">
        <h3 className="text-xl font-semibold lg:text-2xl">{title}</h3>
        <Button>View All Products</Button>
      </div>

      {data.length === 0 && <NoResults />}
      <div className="flex flex-wrap justify-center gap-4">
        {data.slice(0, 8).map((item) => (
          <div key={item.id} className="mb-4">
            <ProductCard product={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedList;
