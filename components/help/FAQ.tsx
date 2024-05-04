import React from "react";
import CustomTitle from "../CustomTitle";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { faq } from "@/lib/data";

const FAQ = () => {
  return (
    <div id="faq">
      <CustomTitle text1="Frequently Asked Questions" text2={""} />
      <Accordion type="multiple" className="mt-8">
        {faq.map((item, index) => (
          <AccordionItem value={`faq-${index}`} key={index}>
            <AccordionTrigger className="py-3 text-cmneutral hover:text-cmprimary">
              <span className="text-sm font-semibold text-cmprimary sm:text-base">
                {item.question}
              </span>
            </AccordionTrigger>
            <AccordionContent className="animate-none pt-6">
              <p className="text-sm text-cmneutral sm:text-base">
                {item.answer}
              </p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQ;
