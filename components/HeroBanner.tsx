import Image from "next/image";
import React from "react";
import { Star } from "lucide-react";
import MainButton from "./MainButton";

const HeroBanner = () => {
  return (
    <div className="relative h-[80dvh] w-full sm:h-[100dvh] lg:h-[80dvh]">
      <Image src="/hero-bg.webp" fill alt="banner-bg" />
      <div className="container absolute bottom-0 left-0 right-0 top-0 flex w-full flex-col items-center gap-0 lg:flex-row lg:justify-between">
        <div className="mt-20 w-full max-w-2xl space-y-6 text-lg lg:mt-0">
          <p className="flex  items-center gap-2 text-sm font-semibold text-red-500 sm:text-base md:text-lg ">
            <Star className="h-4 w-4 rounded-full border border-red-500 bg-red-500 fill-white md:h-6 md:w-6" />{" "}
            Top Products of the Month
          </p>
          <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">
            Microphone MHP Headphones Black
          </h1>
          <p className="pb-8 text-sm text-cmneutral sm:text-base md:text-lg">
            The Micropack Headphones offers a stereo PC headset with volume
            control, a feasible, adjustable billboard.
          </p>
          <MainButton text="Shop Now" className="w-44" />
        </div>
        <div className="relative aspect-square w-full">
          <Image
            src="/shoe.png"
            fill
            alt="hero image"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
