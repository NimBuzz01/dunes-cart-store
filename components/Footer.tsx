"use client";
import useStore from "@/hooks/useStore";
import { companyInfo, developerInfo } from "@/lib/data";
import { FacebookIcon, InstagramIcon, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const { collections } = useStore();
  return (
    <>
      {collections.length > 0 && (
        <footer className="border-t bg-cmprimary text-cmsecondary">
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
                  <ul className="text-sm font-medium text-cmsecondary transition-all">
                    <li className="mb-4">
                      <a href="/" className="hover:text-cmaccent">
                        Home
                      </a>
                    </li>
                    <li className="mb-4">
                      <a href="/products" className="hover:text-cmaccent">
                        Products
                      </a>
                    </li>
                    <li className="mb-4">
                      <a href="/about" className="hover:text-cmaccent">
                        About Us
                      </a>
                    </li>
                    <li className="mb-4">
                      <a href="/contact" className="hover:text-cmaccent">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="mb-6 font-semibold uppercase ">Follow us</h2>
                  <ul className="text-sm font-medium text-cmsecondary transition-all">
                    <li className="mb-4">
                      <a
                        href={companyInfo.instagramLink}
                        className="hover:text-cmaccent"
                      >
                        Instagram
                      </a>
                    </li>
                    <li>
                      <a
                        href={companyInfo.facebookLink}
                        className="hover:text-cmaccent"
                      >
                        Facebook
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="mb-6 font-semibold uppercase">Resources</h2>
                  <ul className="text-sm font-medium text-cmsecondary transition-all">
                    <li className="mb-4">
                      <a href="/help#faq" className="hover:text-cmaccent">
                        FAQ
                      </a>
                    </li>
                    <li className="mb-4">
                      <a
                        href="/help#privacy-policy"
                        className="hover:text-cmaccent"
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a
                        href="/help#terms-n-conditions"
                        className="hover:text-cmaccent"
                      >
                        Terms &amp; Conditions
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="border-t pt-3 sm:flex sm:items-center sm:justify-between">
              <p className="text-sm text-cmsecondary sm:text-center">
                © 2024{" "}
                <a href="#" className="transition-all hover:text-cmaccent">
                  Dunes Cart™
                </a>
                . All Rights Reserved.
              </p>
              <p className="mt-2 text-sm text-cmsecondary sm:mt-0 sm:text-center">
                Web Concept by{" "}
                <a
                  href={developerInfo.portfolioLink}
                  className="text-blue-500 transition-all hover:text-cmaccent/80"
                >
                  {developerInfo.name}
                </a>
              </p>
            </div>
          </div>
        </footer>
      )}
    </>
  );
};

export default Footer;
