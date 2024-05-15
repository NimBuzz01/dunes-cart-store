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
import MainButton from "../MainButton";
import Currency from "../Currency";
import CartItem from "./CartItem";
import Image from "next/image";
import CartEmpty from "../CartEmpty";

const NavBarCart = () => {
  const cart = useCart();
  const totalPrice = cart.items.reduce(
    (total, item) => total + Number(item?.product.price) * item.quantity,
    0,
  );

  return (
    <Sheet>
      <SheetTrigger asChild className="relative text-2xl transition-all">
        <Button size="icon" className="rounded-full" variant="ghost">
          <AiOutlineShoppingCart className="h-6 w-6 text-cmneutral" />
          {cart.items.length > -1 && (
            <span
              key={cart.items.length}
              className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 px-1 text-xs text-white"
            >
              {cart.items.length}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="z-[1000] flex w-full flex-col px-2 sm:max-w-[450px] sm:px-4">
        <SheetHeader className="text-xl font-semibold">
          <SheetTitle>My Cart</SheetTitle>
        </SheetHeader>
        <div className="flex h-full flex-col gap-2 overflow-y-auto pb-2 scrollbar-thin scrollbar-track-cmsecondary scrollbar-thumb-cmprimary">
          {cart.items.length === 0 ? (
            <CartEmpty />
          ) : (
            cart.items.map((item) => (
              <CartItem item={item} key={item.product.id} />
            ))
          )}
        </div>
        <div className="mt-auto w-full">
          <div className="flex justify-end border-t">
            <div className="my-3 flex items-end gap-2">
              <p className="text-sm">Total</p>
              <h5 className="text-xl font-semibold">
                <Currency value={totalPrice as number} />
              </h5>
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
