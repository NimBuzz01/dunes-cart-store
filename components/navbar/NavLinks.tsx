import { navLinks } from "@/lib/data";
import Link from "next/link";
import React from "react";

const NavLinks = () => {
  return (
    <div className="text-cmneutral hidden space-x-10 md:block">
      {navLinks.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className="hover:text-cmsecondary text-sm transition-all lg:text-base"
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;