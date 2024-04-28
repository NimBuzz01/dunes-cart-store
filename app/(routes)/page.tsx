import { getCategories, getProducts } from "@/actions/actions";
import CategoryList from "@/components/category/CategoryList";
import ProductList from "@/components/product/ProductList";

export default async function HomePage() {
  const products = await getProducts({ isFeatured: true });
  const categories = await getCategories();

  return (
    <div className="space-y-10 py-10">
      <CategoryList title="Browse By Categories" data={categories} />
      <ProductList title="Featured Products" data={products} />
    </div>
  );
}
