"use client";
import { ISize } from "@/lib/types";
import { useRouter, useSearchParams } from "next/navigation";
import queryString from "query-string";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

interface FiltersProps {
  name: string;
  valueKey: string;
  data: ISize[];
}
const Filters = ({ name, valueKey, data }: FiltersProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const selectedValue = searchParams.get(valueKey);

  const handleClick = (id: string) => {
    const currentParam = queryString.parse(searchParams.toString());
    const query = {
      ...currentParam,
      [valueKey]: id,
    };
    if (currentParam[valueKey] === id) {
      query[valueKey] = null;
      // delete query[valueKey];
    }
    const url = queryString.stringify(
      {
        url: window.location.href,
        query,
      },
      { skipNull: true },
    );
    router.push(url);
  };

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold">{name}</h3>
      <hr className="my-3" />
      <div className="flex flex-wrap gap-2">
        {data.map((filter) => (
          <div className="flex items-center" key={filter?.id}>
            <Button
              onClick={() => handleClick(filter?.id)}
              className={cn(
                "rounded-md border border-gray-300 bg-white pb-2 text-sm text-gray-800",
                selectedValue && "bg-black text-white",
              )}
            >
              {filter?.name}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filters;
