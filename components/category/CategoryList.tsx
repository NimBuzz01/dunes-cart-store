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
import CustomTitle from "../CustomTitle";

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
