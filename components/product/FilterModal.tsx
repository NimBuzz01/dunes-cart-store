import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ICategory } from "@/lib/types";
import React from "react";
import { Filter } from "lucide-react";
import { Button } from "../ui/button";
import FilterSection from "./FilterSection";

interface FilterModalProps {
  categories: ICategory[];
  selectedCategories: string[];
  handleCategoryToggle: (categoryId: string) => void;
  setPriceRange: (range: [number, number]) => void;
  priceRange: [number, number];
}

const FilterModal = ({
  categories,
  selectedCategories,
  handleCategoryToggle,
  setPriceRange,
  priceRange,
}: FilterModalProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size="icon"
          variant="outline"
          className="ml-2 border-none lg:hidden"
        >
          <Filter className="h-5 w-5 text-cmneutral" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Filters</DialogTitle>
        </DialogHeader>
        <FilterSection
          categories={categories}
          selectedCategories={selectedCategories}
          handleCategoryToggle={handleCategoryToggle}
          setPriceRange={setPriceRange}
          priceRange={priceRange}
        />
      </DialogContent>
    </Dialog>
  );
};

export default FilterModal;
