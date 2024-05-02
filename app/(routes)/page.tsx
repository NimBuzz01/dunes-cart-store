import { getCategories, getCollections, getProducts } from "@/actions/actions";
import DealsBanner from "@/components/DealsBanner";
import HeroBanner from "@/components/HeroBanner";
import NewArrivals from "@/components/NewArrivals";
import Services from "@/components/Services";
import CategoryList from "@/components/category/CategoryList";
import FeaturedList from "@/components/product/FeaturedList";

export default async function HomePage() {
  const products = await getProducts({ isFeatured: true });
  const categories = await getCategories();
  const banners = await getCollections();

  return (
    <>
      <HeroBanner banners={banners} />
      <div className="space-y-10 px-3 py-8 sm:container sm:space-y-16 sm:py-16">
        {categories && (
          <CategoryList title="Browse By Category" data={categories} />
        )}
        {products && <FeaturedList title="Featured Products" data={products} />}
        <NewArrivals title="New Arrivals" data={products} />
        <DealsBanner />
      </div>
      <Services />
    </>
  );
}
