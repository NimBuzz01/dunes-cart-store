import { ICollection } from "@/common.types";

interface CollectionProps {
  data: ICollection;
}

const Collection = ({ data }: CollectionProps) => {
  if (!data) {
    return <div className="text-center">No collection</div>;
  }
  return (
    <div className="mx-1 max-h-[300px] overflow-hidden rounded-xl p-3 sm:p-6 lg:p-8">
      <div
        className="relative aspect-square overflow-hidden rounded-xl bg-no-repeat object-cover md:aspect-[2.4/1]"
        style={{ backgroundImage: `url(${data?.imageUrl})` }}
      >
        <div className="flex h-full w-full items-center justify-center gap-y-8 text-center">
          <div className="max-w-xs text-3xl font-bold sm:max-w-xl sm:text-5xl lg:text-6xl">
            {data?.label}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
