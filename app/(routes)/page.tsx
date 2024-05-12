"use client";
import DealsBanner from "@/components/landing/DealsBanner";
import HeroBanner from "@/components/landing/HeroBanner";
import NewArrivals from "@/components/landing/NewArrivals";
import Services from "@/components/landing/Services";
import CategoryList from "@/components/category/CategoryList";
import FeaturedList from "@/components/product/FeaturedList";
import useStore from "@/hooks/useStore";

export default function HomePage() {
  const { products, categories, collections } = useStore();

  return (
    <>
      {collections && <HeroBanner collections={collections} />}
      <div className="space-y-10 px-3 py-8 sm:container sm:space-y-16 sm:py-16">
        {categories && <CategoryList data={categories} />}
        {products && (
          <>
            <FeaturedList data={products} />
            <NewArrivals data={products} />
          </>
        )}
        <DealsBanner />
      </div>
      <Services />
    </>
  );
}
