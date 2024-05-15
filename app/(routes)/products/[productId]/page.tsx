"use client";
import ProductInfo from "@/components/product/ProductInfo";
import Gallery from "@/components/Gallery";
import RelatedList from "@/components/product/RelatedList";
import useStore from "@/hooks/useStore";
import Preloader from "@/components/preloader/preloader";
import CustomTitle from "@/components/CustomTitle";

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
    <>
      {product ? (
        <div className="container px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <Gallery images={product.images} />
            <div className="mt-10 sm:mt-16 sm:px-0 lg:mt-0">
              <ProductInfo data={product} />
            </div>
          </div>
          <hr className="my-10" />
          {suggestedProducts.length > 0 ? (
            <RelatedList data={suggestedProducts} />
          ) : (
            <p className="flex h-32 items-center justify-center text-center">
              No suggested products found
            </p>
          )}
        </div>
      ) : (
        <div className="flex h-[80dvh] items-center justify-center">
          <Preloader />
        </div>
      )}
    </>
  );
};

export default ProductPage;
