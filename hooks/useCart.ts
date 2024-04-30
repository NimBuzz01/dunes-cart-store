import { IOrderItem } from "@/lib/types";
import toast from "react-hot-toast";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface CartProps {
  items: IOrderItem[];
  addItem: (data: IOrderItem) => void;
  removeItem: (id: string) => void;
  removeAllItems: () => void;
}
const useCart = create(
  persist<CartProps>(
    (set, get) => ({
      items: [],
      addItem: (data: IOrderItem) => {
        const currentItems = get().items;
        const existingItemIndex = currentItems.findIndex(
          (item) => item.product.id === data.product.id,
        );

        if (existingItemIndex !== -1) {
          const updatedItems = [...currentItems];
          updatedItems[existingItemIndex].quantity += data.quantity;
          //@ts-ignore
          set({ items: updatedItems });
          toast.success("Quantity updated successfully");
        } else {
          //@ts-ignore
          set({ items: [...currentItems, data] });
          toast.success("Item added successfully");
        }
      },
      removeItem: (id: string) => {
        //@ts-ignore
        set({
          items: [...get().items?.filter((item) => item.product.id !== id)],
        });
        toast.success("Item removed successfully");
      },
      removeAllItems: () => set({ items: [] }),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default useCart;
