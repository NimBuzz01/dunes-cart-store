"use client";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { Button } from "./ui/button";

interface Props {
  href?: string;
  text: string;
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
  variant?:
    | "link"
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | null
    | undefined;
  disabled?: boolean;
  hideIcon?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const MainButton = ({
  href,
  text,
  className,
  variant,
  hideIcon,
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
      {!hideIcon && (
        <>
          {loading ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : (
            <BsArrowRight className="text-lg transition-all duration-300 group-hover:translate-x-1 md:text-xl" />
          )}
        </>
      )}
    </>
  );

  const buttonProps = {
    onClick: handleClick,
    className: `flex w-full items-center cursor-pointer justify-center gap-2 rounded-sm text-xs sm:text-sm md:text-base font-medium tracking-wider transition-all px-6 lg:px-8 sm:py-3 ${variant === "outline" ? "" : "bg-cmaccent group-hover:bg-cmaccent/90  text-white"}  ${disabled && "bg-cmneutral group-hover:bg-cmneutral cursor-not-allowed"}`,
  };

  return href ? (
    <Link href={href} className={cn("group", className)}>
      <Button {...buttonProps} disabled={disabled} variant={variant}>
        {buttonContent}
      </Button>
    </Link>
  ) : (
    <div className={cn("group", className)}>
      <Button
        {...buttonProps}
        type={type}
        disabled={disabled}
        variant={variant}
      >
        {buttonContent}
      </Button>
    </div>
  );
};

export default MainButton;
