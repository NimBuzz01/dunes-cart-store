import { navLinks } from "@/lib/data";
import Link from "next/link";
import React from "react";

const NavLinks = () => {
  return (
    <div className="hidden space-x-10 text-cmneutral md:block">
      {navLinks.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className="hover:text-cmaccent text-sm transition-all lg:text-base"
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;
