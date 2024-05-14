import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import React from "react";

const ContactPage = () => {
  return (
    <main className="px-3 py-10 sm:container sm:py-16">
      <div className="flex h-full flex-col md:flex-row lg:gap-10">
        <div className="md:mb-none mb-10 w-full p-2 md:w-1/2 md:border-r">
          <ContactInfo />
        </div>
        <div className="w-full  p-2 md:w-1/2 ">
          <ContactForm />
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
