import { IProduct } from "@/lib/types";
import NoResults from "../NoResults";
import ProductCard from "./ProductCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React from "react";

interface ProductListProps {
  data: IProduct[];
  title: string;
}

const ProductList = ({ data, title }: ProductListProps) => {
  return (
    <div className="space-y-4">
      <h3 className="mb-10 text-xl font-semibold lg:text-2xl">{title}</h3>
      {data.length === 0 && <NoResults />}
      <Carousel>
        <CarouselContent>
          {data.map((item) => (
            <CarouselItem
              key={item.id}
              className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
            >
              <ProductCard product={item} />
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious />
        <CarouselNext /> */}
      </Carousel>
    </div>
  );
};

export default ProductList;
