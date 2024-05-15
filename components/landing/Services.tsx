import { services } from "@/lib/data";
import React from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div className="w-full bg-gradient-to-r from-cmaccent/60 to-cmaccent/70 py-24">
      <div className="flex flex-wrap items-center justify-center gap-8 px-3 sm:container sm:px-0">
        {services.map((item, index) => (
          <ServiceCard
            key={index}
            title={item.title}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
