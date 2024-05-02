import React from "react";
import MainButton from "./MainButton";
import { IProduct } from "@/lib/types";
import NoResults from "./NoResults";
import Image from "next/image";
import { Card } from "./ui/card";
import Link from "next/link";
import Currency from "./Currency";

interface ProductListProps {
  data: IProduct[];
  title: string;
}

const NewArrivals = ({ data, title }: ProductListProps) => {
  const newArrivals = data.slice(data.length - 4);

  return (
    <div className="space-y-4">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4 sm:mb-10 sm:flex-row">
        <h3 className="text-xl font-semibold sm:text-2xl md:text-3xl">
          {title}
        </h3>
        <MainButton text="View All Products" href={`/products`} />
      </div>
      {data.length === 0 && <NoResults />}
      <div className="flex flex-col gap-4 lg:grid lg:grid-cols-2 lg:grid-rows-3 lg:gap-4">
        <div className="hidden lg:row-span-3 lg:block">
          <BigCard product={newArrivals[0]} />
        </div>
        <div className="lg:hidden">
          <SideCards product={newArrivals[0]} />
        </div>
        <div>
          <SideCards product={newArrivals[1]} />
        </div>
        <div className="lg:col-start-2">
          <SideCards product={newArrivals[2]} />
        </div>
        <div className="lg:col-start-2 lg:row-start-3">
          <SideCards product={newArrivals[3]} />
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;

const BigCard = ({ product }: { product: IProduct }) => {
  return (
    <Card className="flex w-full flex-col items-center bg-cmsecondary/10 p-8">
      <h1 className="mb-5 self-start text-4xl font-semibold">{product.name}</h1>
      <div className="w-44 self-start">
        <MainButton text="Shop Now" href={`/products/${product.id}`} />
      </div>
      <div className="relative aspect-square w-full max-w-sm">
        <Image
          alt="image"
          src={product.images[0].url}
          fill
          className="aspect-square overflow-hidden object-cover"
        />
      </div>
    </Card>
  );
};

const SideCards = ({ product }: { product: IProduct }) => {
  return (
    <>
      {product ? (
        <Link href={`/products/${product.id}`}>
          <Card className="flex h-full w-full items-center gap-2 p-2 sm:gap-10 lg:px-4">
            <div className="relative aspect-square w-36 bg-cmsecondary/10">
              <Image
                alt="image"
                src={product.images[0].url}
                fill
                className="aspect-square overflow-hidden object-cover"
              />
            </div>
            <div className="flex flex-col">
              <h1 className="font-semibold lg:text-xl">{product.name}</h1>
              <p className="mb-5 text-sm text-cmneutral">
                {product.category.name}
              </p>
              <p>
                <Currency value={product.price} />
              </p>
            </div>
          </Card>
        </Link>
      ) : (
        <p>No Results Found</p>
      )}
    </>
  );
};
