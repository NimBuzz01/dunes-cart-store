import React from "react";
import { Skeleton } from "../ui/skeleton";

const ProductSkeleton = () => {
  return (
    <div className="w-full max-w-[20rem] space-y-2">
      <Skeleton className="aspect-square" />
      <Skeleton className="mt-1 h-6 w-full" />
      <Skeleton className="mt-1 h-4 w-full" />
      <Skeleton className="mt-2 h-6 w-full" />
    </div>
  );
};

export default ProductSkeleton;
