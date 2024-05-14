"use client";
import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import HeroBannerContent from "./HeroBannerContent";
import Autoplay from "embla-carousel-autoplay";
import { ICollection } from "@/lib/types";

interface HeroBannerProps {
  collections: ICollection[];
}

const HeroBanner = ({ collections }: HeroBannerProps) => {
  return (
    <div className="relative bg-gradient-to-b from-cmaccent/20 to-cmaccent/70 lg:bg-gradient-to-r">
      {/* <Image src="/hero-bg.webp" fill alt="banner-bg" /> */}
      <div className="container lg:py-16">
        <Carousel
          opts={{
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 3000,
              stopOnInteraction: false,
              stopOnMouseEnter: false,
              stopOnFocusIn: false,
            }),
          ]}
        >
          <CarouselContent>
            {collections.map((item) => (
              <CarouselItem key={item.id}>
                <HeroBannerContent key={item.id} banner={item} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default HeroBanner;
