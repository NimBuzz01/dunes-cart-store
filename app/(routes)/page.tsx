import { getProducts } from "@/actions/actions";
import ProductList from "@/components/product/ProductList";

export default async function HomePage() {
  const products = await getProducts({ isFeatured: true });
  return (
    <div className="space-y-10 py-10">
      <ProductList title="Featured Products" data={products} />
    </div>
  );
}
