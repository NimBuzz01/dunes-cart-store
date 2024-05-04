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
      <div className="grid grid-cols-1 place-items-center justify-center gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.slice(0, 8).map((item) => (
          <ProductCard product={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedList;
