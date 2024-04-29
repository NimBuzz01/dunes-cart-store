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
      <h3 className="mb-10 text-xl font-semibold lg:text-2xl">{title}</h3>
      {data.length === 0 && <NoResults />}
      <Carousel>
        <CarouselContent>
          {data.map((item) => (
            <CarouselItem
              key={item.id}
              className="basis-[35%] sm:basis-[27%] md:basis-[22%] lg:basis-1/6"
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
