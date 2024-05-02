import { getCategories, getProducts } from "@/actions/actions";
import ProductsContent from "@/components/ProductsContent";
import ProductCard from "@/components/product/ProductCard";
import React from "react";

const Products = async () => {
  const products = await getProducts({});
  const categories = await getCategories();

  return (
    <div className="px-3 sm:container">
      <ProductsContent products={products} categories={categories} />
    </div>
  );
};

export default Products;
