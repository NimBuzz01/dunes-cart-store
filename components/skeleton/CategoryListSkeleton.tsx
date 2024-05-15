import React from "react";
import { Skeleton } from "../ui/skeleton";

const CategoryListSkeleton = () => {
  const items = Array(10).fill(null);

  return (
    <div className="flex gap-4 overflow-hidden">
      {items.map((_, index) => (
        <div key={index} className="flex flex-col items-center gap-2">
          <Skeleton className="h-24 w-24 rounded-full" />
          <Skeleton className="h-4 w-32" />
        </div>
      ))}
    </div>
  );
};

export default CategoryListSkeleton;
