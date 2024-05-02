import { ICategory } from "@/lib/types";
import NoResults from "../NoResults";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CategoryCard from "./CategoryCard";

interface CategoryListProps {
  data: ICategory[];
  title: string;
}

const CategoryList = ({ data, title }: CategoryListProps) => {
  return (
    <div className="space-y-4">
      <h3 className="mb-6 text-xl font-semibold sm:mb-10 sm:text-2xl md:text-3xl">
        {title}
      </h3>
      {data.length === 0 && <NoResults />}
      <Carousel>
        <CarouselContent>
          {data.map((item) => (
            <CarouselItem
              key={item.id}
              className="basis-[40%] sm:basis-[27%] md:basis-[22%] lg:basis-1/6"
            >
              <CategoryCard category={item} />
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious />
          <CarouselNext /> */}
      </Carousel>
    </div>
  );
};

export default CategoryList;
