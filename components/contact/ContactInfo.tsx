import React from "react";
import CustomTitle from "../CustomTitle";
import {
  FacebookIcon,
  InstagramIcon,
  Mail,
  MapPin,
  Phone,
  TwitterIcon,
} from "lucide-react";
import { companyInfo } from "@/lib/data";
import { Button } from "../ui/button";
import Link from "next/link";

const ContactInfo = () => {
  return (
    <div className="flex h-full flex-col">
      <CustomTitle text1="Contact Us" text2="" />
      <p className="mt-4 text-sm sm:text-base">
        Any questions? We would be happy to help you!
      </p>
      <div className="flex flex-col gap-4 p-5 sm:p-10">
        <div className="flex max-w-xs items-center gap-4 rounded-sm border border-neutral-300 p-3 text-sm">
          <Phone className="h-5 w-5" />
          <p>{companyInfo.phone}</p>
        </div>
        <div className="flex max-w-xs items-center gap-4 rounded-sm border border-neutral-300 bg-cmprimary p-3 text-sm text-cmsecondary">
          <Mail className="h-5 w-5" />
          <p>{companyInfo.email}</p>
        </div>
        <div className="flex max-w-xs items-center gap-4 rounded-sm border border-neutral-300 p-3 text-sm">
          <MapPin className="h-5 w-5" />
          <p>{companyInfo.address}</p>
        </div>
      </div>
      <div className="mt-10 flex gap-6 sm:mt-auto">
        <Link href="#">
          <Button
            size="icon"
            className="rounded-full bg-[#405DE6] text-cmsecondary transition-all hover:bg-[#405DE6]/80 "
          >
            <FacebookIcon />
            <span className="sr-only">Facebook page</span>
          </Button>
        </Link>
        <Link href="#">
          <Button
            size="icon"
            className="rounded-full bg-[#E1306C] text-cmsecondary transition-all hover:bg-[#E1306C]/80 "
          >
            <InstagramIcon />
            <span className="sr-only">Facebook page</span>
          </Button>
        </Link>
        <Link href="#">
          <Button
            size="icon"
            className="rounded-full bg-[#1DA1F2] text-cmsecondary transition-all hover:bg-[#1DA1F2]/80 "
          >
            <TwitterIcon />
            <span className="sr-only">Twitter page</span>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ContactInfo;
