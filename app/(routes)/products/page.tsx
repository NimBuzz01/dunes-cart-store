"use client";
import ProductsContent from "@/components/product/ProductsContent";
import useStore from "@/hooks/useStore";
import React from "react";

const Products = () => {
  const { products, categories } = useStore();

  return (
    <div className="px-3 sm:container">
      <ProductsContent products={products} categories={categories} />
    </div>
  );
};

export default Products;
