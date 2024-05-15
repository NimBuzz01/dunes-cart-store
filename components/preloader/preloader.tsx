import React from "react";
import Lottie from "lottie-react";
import preloader from "./preloader.json";
import { cn } from "@/lib/utils";

const Preloader = ({ className }: { className?: string }) => {
  return (
    <Lottie
      className={cn("h-96 w-96", className)}
      animationData={preloader}
      loop={true}
    />
  );
};

export default Preloader;
