import { IImage } from "@/lib/types";
import React from "react";
import { Tab } from "@headlessui/react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface GalleryTabProps {
  image: IImage;
}
const GalleryTab = ({ image }: GalleryTabProps) => {
  return (
    <Tab className="relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white">
      {({ selected }) => (
        <div className="">
          <span className="absolute inset-0 aspect-square h-full w-full overflow-hidden rounded-md">
            <Image
              fill
              src={image?.url}
              alt="image"
              className="object-cover object-center"
            />
          </span>
          <span
            className={cn(
              "insert-0 absolute rounded-md ring-2 ring-offset-2 ",
              selected ? "ring-black" : "ring-transparent",
            )}
          ></span>
        </div>
      )}
    </Tab>
  );
};

export default GalleryTab;
