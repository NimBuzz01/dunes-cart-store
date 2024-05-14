import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ICategory } from "@/lib/types";
import React from "react";
import { Filter, X } from "lucide-react";
import { Button } from "../ui/button";
import FilterSection from "./FilterSection";
import IconButton from "../IconButton";

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
          className="ml-2 border-none bg-cmsecondary lg:hidden"
        >
          <Filter className="h-5 w-5 text-cmneutral" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-screen overflow-hidden overflow-y-auto scrollbar-thin">
        <div className="relative">
          <DialogHeader>
            <DialogTitle>Filters</DialogTitle>
          </DialogHeader>
          <DialogClose>
            <IconButton
              className="absolute right-0 top-0"
              icon={<X size={20} className="text-red-500" />}
            />
          </DialogClose>
          <FilterSection
            categories={categories}
            selectedCategories={selectedCategories}
            handleCategoryToggle={handleCategoryToggle}
            setPriceRange={setPriceRange}
            priceRange={priceRange}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FilterModal;
