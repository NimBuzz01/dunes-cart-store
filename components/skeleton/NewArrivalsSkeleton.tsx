import React from "react";
import { Skeleton } from "../ui/skeleton";

const NewArrivalsSkeleton = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 lg:gap-4">
      <div className="sm:col-span-2 lg:row-span-2 lg:block">
        <Skeleton className="h-full" />
      </div>
      <Skeleton className="h-56" />
      <Skeleton className="h-56" />
    </div>
  );
};

export default NewArrivalsSkeleton;
