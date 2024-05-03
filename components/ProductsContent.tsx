"use client";
import { ICategory, IProduct } from "@/lib/types";
import React, { useEffect, useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import { ChevronDown, Filter } from "lucide-react";
import ProductCard from "./product/ProductCard";
import ProductSkeleton from "./product/ProductSkeleton";
import EmptyState from "./product/EmptyState";
import { Button } from "./ui/button";
import CustomTitle from "./CustomTitle";

const SORT_OPTIONS = [
  { name: "None", value: "none" },
  { name: "Price: Low to High", value: "price-asc" },
  { name: "Price: High to Low", value: "price-desc" },
] as const;

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

interface ProductsContentProps {
  products: IProduct[];
  categories: ICategory[];
}

const ProductsContent = ({ products, categories }: ProductsContentProps) => {
  const [filteredProducts, setFilteredProducts] =
    useState<IProduct[]>(products);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100000]);
  const [sort, setSort] = useState<"none" | "price-asc" | "price-desc">("none");

  const handleCategoryToggle = (categoryId: string) => {
    if (selectedCategories.includes(categoryId)) {
      setSelectedCategories((prevIds) =>
        prevIds.filter((id) => id !== categoryId),
      );
    } else {
      // Select category
      setSelectedCategories((prevIds) => [...prevIds, categoryId]);
    }
  };

  const applyFilters = (products: IProduct[]): IProduct[] => {
    // Filter by selected categories
    const filteredByCategories =
      selectedCategories.length > 0
        ? products.filter((product) =>
            selectedCategories.includes(product.category.id),
          )
        : products;

    const filteredByPrice = filteredByCategories.filter((product) => {
      const price = parseInt(product.price);
      return price >= priceRange[0] && price <= priceRange[1];
    });

    // Apply sorting
    const sortedProducts = filteredByPrice.slice(); // Create a copy to avoid mutating original array
    if (sort === "price-asc") {
      sortedProducts.sort((a, b) => parseInt(a.price) - parseInt(b.price));
    } else if (sort === "price-desc") {
      sortedProducts.sort((a, b) => parseInt(b.price) - parseInt(a.price));
    }

    return sortedProducts;
  };

  const onSubmit = () => {
    const updatedFilteredProducts = applyFilters(products);
    setFilteredProducts(updatedFilteredProducts);
  };

  useEffect(() => {
    onSubmit();
  }, [selectedCategories, priceRange, sort]);

  return (
    <main className="">
      <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-10 sm:pt-16">
        <CustomTitle text1={"Browse All"} text2={"Products"} />

        <div className="flex items-center">
          <DropdownMenu>
            <DropdownMenuTrigger className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
              Sort
              <ChevronDown className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500" />
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
              {SORT_OPTIONS.map((option) => (
                <button
                  key={option.name}
                  className={cn("block w-full px-4 py-2 text-left text-sm", {
                    "rounded-md bg-cmsecondary/10 text-cmsecondary":
                      option.value === sort,
                    "text-cmneutral": option.value !== sort,
                  })}
                  onClick={() => {
                    setSort(option.value);
                  }}
                >
                  {option.name}
                </button>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Button size="icon" variant="outline" className="lg:hidden">
            <Filter className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <section className="pb-24 pt-6">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
          {/* Filters */}
          <div className="hidden lg:block">
            <ul className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900">
              {categories.map((category) => (
                <li key={category.id}>
                  <button
                    className={`${
                      selectedCategories.includes(category.id)
                        ? "bg-cmsecondary/10 text-cmsecondary"
                        : "text-cmneutral"
                    } rounded px-2 py-1 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900`}
                    onClick={() => {
                      handleCategoryToggle(category.id);
                    }}
                  >
                    {category.name}
                  </button>
                </li>
              ))}
            </ul>

            <Accordion type="multiple" className="animate-none">
              {/* Price filter */}
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
                        <p className="font-medium">Price</p>
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
            </Accordion>
          </div>

          {/* Product grid */}
          <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:col-span-3">
            {filteredProducts && filteredProducts.length === 0 ? (
              <EmptyState />
            ) : filteredProducts ? (
              filteredProducts.map((product) => (
                <ProductCard product={product} key={product.id} />
              ))
            ) : (
              new Array(12)
                .fill(null)
                .map((_, i) => <ProductSkeleton key={i} />)
            )}
          </ul>
        </div>
      </section>
    </main>
  );
};

export default ProductsContent;
