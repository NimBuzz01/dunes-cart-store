import { getProducts } from "@/actions/actions";
import ProductCard from "@/components/product/ProductCard";
import React from "react";

const Products = async () => {
  const products = await getProducts({ isFeatured: true });

  return (
    <div className="px-3 sm:container">
      <div>All Products</div>
      <div className="flex flex-wrap justify-center gap-4">
        {products.map((item) => (
          <React.Fragment key={item.id}>
            <ProductCard product={item} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Products;
