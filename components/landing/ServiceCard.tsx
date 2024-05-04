import React from "react";
import { Card } from "../ui/card";
import Image from "next/image";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
}

const ServiceCard = ({ title, description, image }: ServiceCardProps) => {
  return (
    <Card className="my-1 flex h-64 w-96 flex-col items-center justify-center gap-3 rounded-none px-2.5 text-center shadow-xl transition-all sm:p-5">
      <Image src={image} alt={title} height={60} width={80} />
      <p className="text-lg font-semibold text-cmneutral sm:text-xl">{title}</p>
      <p className="text-xs text-cmneutral sm:text-sm">{description}</p>
    </Card>
  );
};

export default ServiceCard;
