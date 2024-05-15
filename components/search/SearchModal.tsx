"use client";
import { X } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AiOutlineSearch } from "react-icons/ai";
import { useEffect, useState } from "react";
import { IProduct } from "@/lib/types";
import useStore from "@/hooks/useStore";
import SearchItem from "./SearchItem";

const SearchModal = () => {
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);
  const { products } = useStore();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (search !== "") {
      const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase()),
      );
      setFilteredProducts(filteredProducts);
    } else {
      setFilteredProducts([]);
    }
  }, [search, products]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="icon" className="rounded-full" variant="ghost">
          <AiOutlineSearch className="h-6 w-6 text-cmneutral" />
        </Button>
      </DialogTrigger>
      <DialogContent className="w-full px-3 py-0 sm:max-w-3xl sm:px-6">
        <div className="flex h-screen w-full flex-col sm:h-[80dvh]">
          <div className="mt-8 flex space-x-2">
            <div className="flex w-full">
              <Label htmlFor="link" className="sr-only">
                Search
              </Label>
              <Input
                id="Search"
                placeholder="Enter Product Name..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full grow"
              />
            </div>
            <DialogClose>
              <Button size="icon" variant="outline">
                <X className="h-6 w-6 text-red-500" />
              </Button>
            </DialogClose>
          </div>
          <div className="my-4 flex h-full flex-col space-y-2 overflow-hidden overflow-y-auto">
            {filteredProducts.length === 0 && search !== "" && (
              <div className="mt-4 text-center text-cmneutral">
                No products found
              </div>
            )}
            {filteredProducts.length > 0
              ? filteredProducts.map((product) => (
                  <SearchItem
                    key={product.id}
                    product={product}
                    setOpen={setOpen}
                  />
                ))
              : search === "" && (
                  <div className="mt-4 text-center text-cmneutral">
                    Search for products
                  </div>
                )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchModal;
