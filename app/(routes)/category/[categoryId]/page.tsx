import { getProducts, getSizes } from "@/actions/actions";
import ProductCard from "@/components/product/ProductCard";
import Filters from "@/components/Filters";
import MobileFilters from "@/components/MobileFilters";
import NoResults from "@/components/NoResults";

interface CategoryPageProps {
  params: {
    categoryId: string;
  };
  searchParams: {
    sizeId: string;
  };
}

const CategoryPage = async ({ params, searchParams }: CategoryPageProps) => {
  const products = await getProducts({
    sizeId: searchParams.sizeId,
    categoryId: params.categoryId,
  });
  const sizes = await getSizes();
  return (
    <div>
      <div className="p-4 px-4 pb-20 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
          <MobileFilters sizes={sizes} />
          <div className="hidden lg:block">
            <Filters valueKey="sizeId" name="sizes" data={sizes} />
          </div>
          <div className="mt-6 lg:col-span-4 lg:mt-0">
            {products.length === 0 && <NoResults />}
            <div className="grid grid-cols-3 gap-4 lg:grid-cols-5">
              {products.map((product) => (
                <ProductCard product={product} key={product?.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
