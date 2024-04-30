import Image from "next/image";
import React from "react";
import { Star } from "lucide-react";
import MainButton from "./MainButton";
import { getCollections } from "@/actions/actions";
import { ICollection } from "@/lib/types";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

const HeroBanner = async () => {
  const banners = await getCollections();

  return (
    <div className="relative bg-cmsecondary/20">
      {/* <Image src="/hero-bg.webp" fill alt="banner-bg" /> */}
      <div className="container">
        <Carousel
          opts={{
            loop: true,
          }}
        >
          <CarouselContent>
            {banners.map((banner) => (
              <CarouselItem key={banner.id}>
                <HeroBannerContent key={banner.id} banner={banner} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default HeroBanner;

const HeroBannerContent = ({ banner }: { banner: ICollection }) => {
  return (
    <div className="flex w-full flex-col items-center gap-0 lg:flex-row lg:justify-between">
      <div className="mt-20 w-full max-w-2xl space-y-6 text-lg lg:mt-0">
        <p className="flex  items-center gap-2 text-sm font-semibold text-red-500 sm:text-base md:text-lg ">
          <Star className="h-4 w-4 rounded-full border border-red-500 bg-red-500 fill-white md:h-6 md:w-6" />{" "}
          Top Products of the Month
        </p>
        <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">
          {banner.title}
        </h1>
        <p className="pb-8 text-sm text-cmneutral sm:text-base md:text-lg">
          {banner.description}
        </p>
        <div className="w-44">
          <MainButton text="Shop Now" href={banner.productUrl} />
        </div>
      </div>
      <div className="relative aspect-square w-full">
        <Image
          src={banner.imageUrl}
          fill
          alt="hero image"
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  );
};
