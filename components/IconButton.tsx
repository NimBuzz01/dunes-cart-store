import { cn } from "@/lib/utils";
import { MouseEventHandler, ReactElement } from "react";
import { Button } from "./ui/button";

interface IconButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  className?: string;
  icon: ReactElement;
}
const IconButton = ({ onClick, className, icon }: IconButtonProps) => {
  return (
    <Button
      type="button"
      size="icon"
      variant="outline"
      onClick={onClick}
      className={cn(
        "flex items-center justify-center rounded-full border shadow-md transition hover:scale-105",
        className,
      )}
    >
      {icon}
    </Button>
  );
};

export default IconButton;
