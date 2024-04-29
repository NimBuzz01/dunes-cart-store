"use client";
import { AiOutlineShoppingCart } from "react-icons/ai";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import useCart from "@/hooks/useCart";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import MainButton from "../MainButton";

const NavBarCart = () => {
  const cart = useCart();
  const router = useRouter();

  return (
    <Sheet>
      <SheetTrigger className="relative text-2xl transition-all">
        <Button size="icon" className="rounded-full" variant="ghost">
          <AiOutlineShoppingCart className="h-6 w-6 text-cmneutral" />
        </Button>
        {cart.items.length > -1 && (
          <span
            key={cart.items.length}
            className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 px-1 text-xs text-white"
          >
            {cart.items.length}
          </span>
        )}
      </SheetTrigger>
      <SheetContent className="z-[1000] flex w-full flex-col sm:max-w-[450px]">
        <SheetHeader className="text-xl font-semibold">
          <SheetTitle>My Cart</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-2 overflow-y-auto px-2 py-4 scrollbar-thin scrollbar-track-cmbackground scrollbar-thumb-cmprimary">
          {cart.items.length === 0 ? (
            <p>Cart Empty</p>
          ) : (
            cart.items.map((item) => <div key={item.id}>{item.name}</div>)
          )}
        </div>
        <div className="mt-auto w-full">
          <div className="flex justify-end border-t">
            <div className="my-3 flex items-end gap-2">
              <p className="text-sm">Total</p>
              <h5 className="text-xl font-semibold">LKR 10000</h5>
            </div>
          </div>
          <SheetClose asChild>
            <MainButton text="View Cart" href="/cart" />
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default NavBarCart;
