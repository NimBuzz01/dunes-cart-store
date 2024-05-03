import { IProduct } from "@/lib/types";
import NoResults from "../NoResults";
import ProductCard from "./ProductCard";
import React from "react";
import { Button } from "../ui/button";
import MainButton from "../MainButton";
import CustomTitle from "../CustomTitle";

interface ProductListProps {
  data: IProduct[];
}

const FeaturedList = ({ data }: ProductListProps) => {
  return (
    <div className="space-y-4">
      <div className="mb-10 flex flex-wrap items-center justify-between gap-4 sm:flex-row">
        <CustomTitle text1="Featured" text2="Products" />
        <MainButton text="View All Products" href={`/products`} />
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
