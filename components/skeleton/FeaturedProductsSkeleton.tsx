import React from "react";
import ProductSkeleton from "./ProductSkeleton";

const FeaturedProductsSkeleton = () => {
  const items = Array(8).fill(null);

  return (
    <>
      <div className="grid grid-cols-2 place-items-center justify-center gap-4 md:grid-cols-3 lg:grid-cols-4">
        {items.map((_, index) => (
          <ProductSkeleton key={index} />
        ))}
      </div>
    </>
  );
};

export default FeaturedProductsSkeleton;
