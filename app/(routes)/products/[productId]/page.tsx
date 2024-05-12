"use client";
import ProductInfo from "@/components/product/ProductInfo";
import Gallery from "@/components/Gallery";
import RelatedList from "@/components/product/RelatedList";
import useStore from "@/hooks/useStore";

interface ProductPageProps {
  params: {
    productId: string;
  };
}

const ProductPage = ({ params }: ProductPageProps) => {
  const { products } = useStore();
  const product = products.find((p) => p.id === params.productId);
  const suggestedProducts = product
    ? products.filter(
        (p) => p.category === product.category && p.id !== product.id,
      )
    : [];

  return (
    <div className="container px-4 py-10 sm:px-6 lg:px-8">
      <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
        {product && product.images ? (
          <Gallery images={product.images} />
        ) : (
          <p>No images available</p>
        )}
        <div className="mt-10 sm:mt-16 sm:px-0 lg:mt-0">
          {product ? <ProductInfo data={product} /> : <p>Product not found</p>}
        </div>
      </div>
      <hr className="my-10" />
      {suggestedProducts.length > 0 ? (
        <RelatedList data={suggestedProducts} />
      ) : (
        <p>No suggested products found</p>
      )}
    </div>
  );
};

export default ProductPage;
