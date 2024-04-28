import { getCollections, getProducts } from "@/actions/actions";
import Container from "@/components/ui/Container";
import ProductList from "@/components/product/ProductList";
import Collection from "@/components/Collection/Collection";

export const revalidate = 0;

export default async function HomePage() {
  const collections = await getCollections();

  const randomIndex = Math.floor(Math.random() * collections?.length);

  const collection = collections[randomIndex];
  const products = await getProducts({ isFeatured: true });
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Collection data={collection} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" data={products} />
        </div>
      </div>
    </Container>
  );
}
