"use client";
import { AiOutlineMenu } from "react-icons/ai";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { navLinks } from "@/lib/data";

const NavMenuMobile = () => {
  const router = useRouter();

  return (
    <Sheet>
      <SheetTrigger className="relative text-2xl transition-all md:hidden">
        <Button size="icon" className="rounded-full" variant="ghost">
          <AiOutlineMenu className="text-cmneutral h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent className="z-[1000] flex w-full flex-col sm:max-w-[450px]">
        <SheetHeader className="text-xl font-semibold">
          <SheetTitle>Dunes Cart</SheetTitle>
        </SheetHeader>
        <div className="scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-800 flex flex-col gap-2 overflow-y-auto px-2 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm transition-all hover:text-red-500 lg:text-base"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default NavMenuMobile;
