"use client";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";

interface Props {
  href?: string;
  text: string;
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
  bgColor?: string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const MainButton = ({
  href,
  text,
  className,
  type = "button",
  disabled,
  onClick,
}: Props) => {
  const [loading, setLoading] = useState(false);

  const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    setLoading(true);
    if (onClick) {
      setLoading(true);
      try {
        onClick(event);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 3000);
      }
    }
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  const buttonContent = (
    <>
      {text}{" "}
      {loading ? (
        <Loader2 className="h-5 w-5 animate-spin" />
      ) : (
        <BsArrowRight className="text-lg transition-all duration-300 group-hover:translate-x-1 md:text-xl" />
      )}
    </>
  );

  const buttonProps = {
    onClick: handleClick,
    className: `flex w-full items-center cursor-pointer justify-center gap-2 rounded-sm px-4 py-3 text-xs sm:text-sm md:text-base font-medium tracking-wider text-white transition-all sm:px-6 sm:py-3 bg-cmsecondary group-hover:bg-cmsecondary/90 ${disabled && "bg-cmneutral group-hover:bg-cmneutral cursor-not-allowed"}`,
  };

  return href ? (
    <Link href={href} className={cn("group", className)}>
      <button {...buttonProps} disabled={disabled}>
        {buttonContent}
      </button>
    </Link>
  ) : (
    <div className={cn("group", className)}>
      <button {...buttonProps} type={type} disabled={disabled}>
        {buttonContent}
      </button>
    </div>
  );
};

export default MainButton;
