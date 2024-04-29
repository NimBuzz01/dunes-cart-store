import { getCategories, getProducts } from "@/actions/actions";
import HeroBanner from "@/components/HeroBanner";
import CategoryList from "@/components/category/CategoryList";
import FeaturedList from "@/components/product/FeaturedList";
import ProductList from "@/components/product/ProductList";

export default async function HomePage() {
  const products = await getProducts({ isFeatured: true });
  const categories = await getCategories();

  return (
    <>
      <HeroBanner />
      <div className="container space-y-10 py-20">
        {categories && (
          <CategoryList title="Browse By Category" data={categories} />
        )}
        {products && <FeaturedList title="Featured Products" data={products} />}
      </div>
    </>
  );
}
