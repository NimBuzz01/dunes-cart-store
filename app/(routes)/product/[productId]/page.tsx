import { getProduct, getProducts } from "@/actions/actions";
import ProductInfo from "@/components/product/ProductInfo";
import ProductList from "@/components/product/ProductList";
import Gallery from "@/components/Gallery";

interface ProductPageProps {
  params: {
    productId: string;
  };
}

const ProductPage = async ({ params }: ProductPageProps) => {
  const product = await getProduct(params.productId);
  const suggestedProducts = (
    await getProducts({ categoryId: product?.category?.id })
  )?.filter((prod) => prod?.id !== params?.productId);
  return (
    <div>
      <div className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          <Gallery images={product?.images} />
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <ProductInfo data={product} />
          </div>
        </div>
        <hr className="my-10" />
        <ProductList title="Related Products" data={suggestedProducts} />
      </div>
    </div>
  );
};

export default ProductPage;
