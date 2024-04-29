import { getCategories, getProducts } from "@/actions/actions";
import HeroBanner from "@/components/HeroBanner";
import CategoryList from "@/components/category/CategoryList";
import FeaturedList from "@/components/product/FeaturedList";

export default async function HomePage() {
  const products = await getProducts({ isFeatured: true });
  const categories = await getCategories();

  return (
    <>
      <HeroBanner />
      <div className="space-y-10 px-3 py-20 sm:container">
        {categories && (
          <CategoryList title="Browse By Category" data={categories} />
        )}
        {products && <FeaturedList title="Featured Products" data={products} />}
      </div>
    </>
  );
}
