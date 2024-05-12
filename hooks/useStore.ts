import { ICategory, ICollection, IProduct } from "@/lib/types";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface StoreProps {
  collections: ICollection[];
  categories: ICategory[];
  products: IProduct[];
  setCategories: (categories: ICategory[]) => void;
  setCollections: (collections: ICollection[]) => void;
  setProducts: (products: IProduct[]) => void;
}
const useStore = create(
  persist<StoreProps>(
    (set) => ({
      categories: [],
      collections: [],
      products: [],
      setCategories: (categories: ICategory[]) => {
        set((state) => ({
          ...state,
          categories: categories,
        }));
      },
      setCollections: (collections: ICollection[]) => {
        set((state) => ({
          ...state,
          collections: collections,
        }));
      },
      setProducts: (products: IProduct[]) => {
        set((state) => ({
          ...state,
          products: products,
        }));
      },
    }),
    {
      name: "store",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default useStore;
