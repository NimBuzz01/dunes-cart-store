import { cn } from "@/lib/utils";
import React from "react";

interface CustomTitleProps {
  text1: string;
  text2: string;
  className?: string;
}

const CustomTitle = ({ text1, text2, className }: CustomTitleProps) => {
  return (
    <h1 className={cn(`text-xl font-bold sm:text-2xl md:text-3xl`, className)}>
      {text1} <span className="text-cmsecondary">{text2}</span>
    </h1>
  );
};

export default CustomTitle;
