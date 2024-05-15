"use client";
import DealsBanner from "@/components/landing/DealsBanner";
import HeroBanner from "@/components/landing/HeroBanner";
import NewArrivals from "@/components/landing/NewArrivals";
import Services from "@/components/landing/Services";
import CategoryList from "@/components/category/CategoryList";
import FeaturedList from "@/components/product/FeaturedList";
import useStore from "@/hooks/useStore";
import Preloader from "@/components/preloader/preloader";

export default function HomePage() {
  const { products, categories, collections } = useStore();

  return (
    <>
      {collections.length > 0 ? (
        <>
          <HeroBanner collections={collections} />
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
      ) : (
        <div className="absolute left-0 top-0 z-[100] flex h-screen w-full items-center justify-center bg-cmsecondary">
          <Preloader />
        </div>
      )}
    </>
  );
}
