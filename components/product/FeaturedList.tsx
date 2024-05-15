import { IProduct } from "@/lib/types";
import NoResults from "../NoResults";
import ProductCard from "./ProductCard";
import React from "react";
import MainButton from "../MainButton";
import CustomTitle from "../CustomTitle";
import FeaturedProductsSkeleton from "../skeleton/FeaturedProductsSkeleton";

interface ProductListProps {
  data: IProduct[];
}

const FeaturedList = ({ data }: ProductListProps) => {
  const featured = data.filter((product) => product.isFeatured);
  return (
    <div className="space-y-4">
      <div className="mb-10 flex flex-wrap items-center justify-between gap-4 sm:flex-row">
        <CustomTitle text1="Featured" text2="Products" />
        <MainButton text="View All Products" href={`/products`} />
      </div>
      {data.length > 0 ? (
        <div className="grid grid-cols-2 place-items-center items-start justify-center gap-4 md:grid-cols-3 lg:grid-cols-4">
          {featured.slice(0, 8).map((item) => (
            <ProductCard product={item} key={item.id} />
          ))}
        </div>
      ) : (
        <FeaturedProductsSkeleton />
      )}
    </div>
  );
};

export default FeaturedList;
