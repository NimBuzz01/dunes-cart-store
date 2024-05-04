import { AiOutlineMenu } from "react-icons/ai";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import Link from "next/link";
import { navLinks } from "@/lib/data";
import Image from "next/image";

const NavMenuMobile = () => {
  return (
    <Sheet>
      <SheetTrigger
        className="relative text-2xl transition-all md:hidden"
        asChild
      >
        <Button size="icon" className="rounded-full" variant="ghost">
          <AiOutlineMenu className="h-6 w-6 text-cmneutral" />
        </Button>
      </SheetTrigger>
      <SheetContent className="z-[1000] flex w-full flex-col sm:max-w-[450px]">
        <Link href="/">
          <Image src="/logo.png" alt="Dunes Cart Logo" width={140} height={0} />
        </Link>
        <div className="flex flex-col gap-4 overflow-y-auto px-2 py-16 scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-800">
          {navLinks.map((link, index) => (
            <SheetClose asChild key={index}>
              <Link
                key={index}
                href={link.href}
                className="text-lg font-semibold transition-all hover:text-cmsecondary"
              >
                {link.name}
              </Link>
            </SheetClose>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default NavMenuMobile;
