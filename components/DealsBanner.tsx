import { BadgePercent } from "lucide-react";
import MainButton from "./MainButton";
import Image from "next/image";

const DealsBanner = () => {
  return (
    <div className="flex w-full flex-col items-center gap-2 bg-red-200 px-4 pt-10 md:pt-16 lg:flex-row lg:justify-between lg:px-16 lg:py-0">
      <div className="w-full max-w-2xl space-y-6">
        <p className="flex  items-center gap-2 text-sm font-semibold text-red-500 sm:text-base md:text-lg ">
          <BadgePercent className="h-4 w-4 rounded-full text-red-500 md:h-6 md:w-6" />
          Best Deals
        </p>
        <h1 className="text-xl font-bold sm:text-2xl md:text-3xl lg:text-4xl">
          Upto 40% Off on Items
        </h1>
        <p className="pb-6 text-sm text-cmneutral sm:text-base">
          The exact percentage of the discount may vary depending on the
          specific product or promotion being offered.
        </p>
        <div className="w-44">
          <MainButton text="Shop Now" href={`/products`} />
        </div>
      </div>
      <div className="relative aspect-square w-full max-w-lg lg:max-w-xl">
        <Image
          src="/products/headphone.png"
          fill
          alt="deals image"
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  );
};

export default DealsBanner;
