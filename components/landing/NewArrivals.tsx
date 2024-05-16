import React from "react";
import MainButton from "../MainButton";
import { IProduct } from "@/lib/types";
import NoResults from "../NoResults";
import Image from "next/image";
import { Card } from "../ui/card";
import Link from "next/link";
import Currency from "../Currency";
import CustomTitle from "../CustomTitle";
import NewArrivalsSkeleton from "../skeleton/NewArrivalsSkeleton";

interface ProductListProps {
  data: IProduct[];
}

const NewArrivals = ({ data }: ProductListProps) => {
  const newArrivals = data.slice(data.length - 3);

  return (
    <div className="space-y-4">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4 sm:mb-10 sm:flex-row">
        <CustomTitle text1="New" text2="Arrivals" />
        <MainButton text="View All Products" href={`/products`} />
      </div>
      {newArrivals.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 lg:gap-4">
          <div className="sm:col-span-2 lg:row-span-2 lg:block">
            <BigCard product={newArrivals[0]} />
          </div>
          <SideCards product={newArrivals[1]} />
          <SideCards product={newArrivals[2]} />
        </div>
      ) : (
        <NewArrivalsSkeleton />
      )}
    </div>
  );
};

export default NewArrivals;

const BigCard = ({ product }: { product: IProduct }) => {
  return (
    <Card className="flex min-h-[450px] flex-col bg-gradient-to-t from-cmaccent/10 to-cmaccent/30 md:flex-row md:bg-gradient-to-l">
      <div className="relative aspect-square w-full max-w-md self-center lg:w-1/2">
        <Image
          alt="image"
          src={product.images[0].url}
          fill
          className="aspect-square scale-90 overflow-hidden object-cover "
        />
      </div>
      <div className="item-center flex w-full flex-col justify-center px-5 pb-10 md:my-10 md:pb-0 lg:w-1/2">
        <h1 className="mb-2 text-2xl font-semibold sm:mb-5 sm:text-3xl">
          {product.name}
        </h1>
        <p className="mb-5 text-sm text-cmneutral">{product.description}</p>
        <div className="mb-5 text-lg sm:text-xl">
          <Currency value={product.price} />
        </div>
        <div className="w-44 sm:mb-0">
          <MainButton text="Shop Now" href={`/products/${product.id}`} />
        </div>
      </div>
    </Card>
  );
};

const SideCards = ({ product }: { product: IProduct }) => {
  return (
    <>
      {product ? (
        <Link href={`/products/${product.id}`}>
          <Card className="relative flex h-56 w-full items-center gap-2 rounded-none bg-gradient-to-r from-cmaccent/10 to-cmaccent/30 transition-all hover:from-cmaccent/20 hover:to-cmaccent/40 sm:aspect-auto sm:gap-10 lg:h-full">
            <div className="absolute bottom-0 right-0 aspect-square w-48">
              <Image
                alt="image"
                src={product.images[0].url}
                fill
                className="aspect-square overflow-hidden object-cover"
              />
            </div>
            <div className="absolute left-0 top-0 flex w-44 flex-col p-4">
              <h1 className="mb-3 text-lg font-semibold sm:text-xl">
                {product.name}
              </h1>
              <div className="text-lg font-semibold text-cmneutral sm:text-xl">
                <Currency value={product.price} />
              </div>
            </div>
          </Card>
        </Link>
      ) : (
        <p>No Results Found</p>
      )}
    </>
  );
};
