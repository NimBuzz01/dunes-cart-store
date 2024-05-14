import { ICategory } from "@/lib/types";
import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";

const PRICE_FILTERS = {
  id: "price",
  name: "Price",
  options: [
    { value: [0, 100000], label: "Any Amount" },
    {
      value: [0, 5000],
      label: "Under 5000",
    },
    {
      value: [0, 10000],
      label: "Under 10000",
    },
  ],
} as const;

interface FilterSectionProps {
  categories: ICategory[];
  selectedCategories: string[];
  handleCategoryToggle: (categoryId: string) => void;
  setPriceRange: (range: [number, number]) => void;
  priceRange: [number, number];
}

const FilterSection = ({
  categories,
  selectedCategories,
  handleCategoryToggle,
  setPriceRange,
  priceRange,
}: FilterSectionProps) => {
  return (
    <div>
      <Accordion
        type="multiple"
        defaultValue={["categories", "price"]}
        className="border-none"
      >
        <AccordionItem value="price">
          <AccordionTrigger className="py-3 text-sm text-cmneutral hover:text-cmprimary">
            <span className="font-medium text-cmprimary">Price</span>
          </AccordionTrigger>
          <AccordionContent className="animate-none pt-6">
            <ul className="space-y-4">
              {PRICE_FILTERS.options.map((option, index) => (
                <li key={option.label} className="flex items-center">
                  <input
                    type="radio"
                    id={`price-${index}`}
                    onChange={() => {
                      setPriceRange([...option.value]);
                    }}
                    checked={
                      option.value[0] === priceRange[0] &&
                      option.value[1] === priceRange[1]
                    }
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label
                    htmlFor={`price-${index}`}
                    className="ml-3 text-sm text-gray-600"
                  >
                    {option.label}
                  </label>
                </li>
              ))}
              <li className="flex flex-col justify-center gap-2">
                <div className="flex justify-between">
                  <p className="font-medium">Custom Price</p>
                  <div>
                    {priceRange[0]} LKR - {priceRange[1]} LKR
                  </div>
                </div>

                <Slider
                  className={cn("opacity-50")}
                  onValueChange={(range: [number, number]) => {
                    const [newMin, newMax] = range;
                    setPriceRange([newMin, newMax]);
                  }}
                  value={priceRange}
                  min={0}
                  defaultValue={priceRange}
                  max={100000}
                  step={5}
                />
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="categories" className="mt-4">
          <AccordionTrigger className="py-3 text-sm text-cmneutral hover:text-cmprimary">
            <span className="font-medium text-cmprimary">Categories</span>
          </AccordionTrigger>
          <AccordionContent className="animate-none pt-6">
            <ul className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900">
              {categories.map((category) => (
                <li key={category.id}>
                  <button
                    className={`${
                      selectedCategories.includes(category.id)
                        ? "bg-cmaccent/10 text-cmaccent"
                        : "text-cmneutral"
                    } rounded px-2 py-1 transition-all duration-200 `}
                    onClick={() => {
                      handleCategoryToggle(category.id);
                    }}
                  >
                    {category.name}
                  </button>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FilterSection;
