import { Globe } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full border-t bg-white">
      <div className="flex w-full flex-col items-center justify-center space-x-3 p-10 md:flex-row">
        <p className="text-xs text-slate-500 md:text-sm">
          &copy; {year} Dunes Cart store. All rights reserved.
        </p>
        <p>
          <Link
            className="flex flex-row"
            href="https://bit.ly/kayange"
            target="_blank"
          >
            <span className="text-xs text-slate-500">powered by</span>
            <Globe className="ml-2 h-4 w-4 text-blue-600" />
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
