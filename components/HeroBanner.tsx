"use client";
import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import HeroBannerContent from "./HeroBannerContent";
import Autoplay from "embla-carousel-autoplay";
import { ICollection } from "@/lib/types";

interface HeroBannerProps {
  banners: ICollection[];
}

const HeroBanner = ({ banners }: HeroBannerProps) => {
  return (
    <div className="relative bg-cmsecondary/10">
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
