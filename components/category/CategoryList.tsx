import { ICategory } from "@/lib/types";
import NoResults from "../NoResults";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import CategoryCard from "./CategoryCard";
import CustomTitle from "../CustomTitle";
import CategoryListSkeleton from "../skeleton/CategoryListSkeleton";

interface CategoryListProps {
  data: ICategory[];
}

const CategoryList = ({ data }: CategoryListProps) => {
  return (
    <div className="space-y-4">
      <CustomTitle
        text1="Browse By"
        text2="Category"
        className="mb-6 sm:mb-10"
      />
      {data.length > 0 ? (
        <Carousel>
          <CarouselContent>
            {data.map((item) => (
              <CarouselItem
                key={item.id}
                className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6"
              >
                <CategoryCard category={item} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      ) : (
        <CategoryListSkeleton />
      )}
    </div>
  );
};

export default CategoryList;
