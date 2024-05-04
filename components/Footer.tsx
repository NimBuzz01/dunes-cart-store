import { companyInfo, developerInfo } from "@/lib/data";
import { FacebookIcon, InstagramIcon, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t bg-cmprimary text-cmbackground">
      <div className="container mx-auto w-full p-4">
        <div className="py-6 md:flex md:justify-between">
          <div className="mb-10 space-y-8 md:mb-0">
            <Link href="/" className="flex">
              <Image
                src="/logo-white.png"
                alt="Dunes Cart Logo"
                width={140}
                height={0}
              />
            </Link>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 text-sm">
                <Phone className="h-5 w-5 text-background" />
                <p>{companyInfo.phone}</p>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-5 w-5 text-background" />
                <p>{companyInfo.email}</p>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="h-5 w-5 text-background" />
                <p>{companyInfo.address}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
            <div>
              <h2 className="mb-6 font-semibold uppercase">Quick Links</h2>
              <ul className="text-sm font-medium text-cmbackground transition-all">
                <li className="mb-4">
                  <a href="/" className="hover:text-cmsecondary">
                    Home
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/products" className="hover:text-cmsecondary">
                    Products
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/about" className="hover:text-cmsecondary">
                    About Us
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/contact" className="hover:text-cmsecondary">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 font-semibold uppercase ">Follow us</h2>
              <ul className="text-sm font-medium text-cmbackground transition-all">
                <li className="mb-4">
                  <a
                    href={companyInfo.instagramLink}
                    className="hover:text-cmsecondary"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href={companyInfo.facebookLink}
                    className="hover:text-cmsecondary"
                  >
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 font-semibold uppercase">Resources</h2>
              <ul className="text-sm font-medium text-cmbackground transition-all">
                <li className="mb-4">
                  <a href="/help#faq" className="hover:text-cmsecondary">
                    FAQ
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="/help#privacy-policy"
                    className="hover:text-cmsecondary"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/help#terms-n-conditions"
                    className="hover:text-cmsecondary"
                  >
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t pt-3 sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-cmbackground sm:text-center">
            © 2024{" "}
            <a href="#" className="transition-all hover:text-cmsecondary">
              Dunes Cart™
            </a>
            . All Rights Reserved.
          </span>
          <div className="mt-4 flex sm:mt-0 sm:justify-center">
            <a
              href="#"
              className="text-cmbackground transition-all hover:text-cmsecondary"
            >
              <FacebookIcon className="h-6 w-6" />
              <span className="sr-only">Facebook page</span>
            </a>
            <a
              href="#"
              className="ms-5 text-cmbackground transition-all hover:text-cmsecondary"
            >
              <InstagramIcon className="h-6 w-6" />
              <span className="sr-only">Instagram Page</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
