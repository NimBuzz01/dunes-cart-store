"use client";
import { IProduct } from "@/lib/types";
import React, { useEffect, useState } from "react";
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
import IconButton from "../IconButton";

const SearchContent = ({ products }: { products: IProduct[] }) => {
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);

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
    <Dialog>
      <DialogTrigger asChild>
        <Button size="icon" className="rounded-full" variant="ghost">
          <AiOutlineSearch className="h-6 w-6 text-cmneutral" />
        </Button>
      </DialogTrigger>
      <DialogContent className="h-screen sm:h-[80dvh]">
        <div className="flex flex-col">
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
            <Button size="icon" variant="outline">
              <AiOutlineSearch className="h-6 w-6 text-cmneutral" />
            </Button>
          </div>
          <div className="mt-4 h-full overflow-hidden overflow-y-auto">
            {filteredProducts.map((product) => (
              <div key={product.id}>{product.name}</div>
            ))}
          </div>
          <DialogClose>
            <IconButton
              icon={<X size={20} />}
              className="absolute right-2 top-2 text-red-500"
            />
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchContent;
