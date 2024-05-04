import React from "react";
import CustomTitle from "../CustomTitle";
import { termsAndConditions } from "@/lib/data";

const TermsNConditions = () => {
  return (
    <div id="terms-and-conditions">
      <CustomTitle text1="Terms And Conditions" text2={""} />
      <div className="mt-8">
        {termsAndConditions.map((item, index) => (
          <div key={index} className="mb-8">
            <h3 className="font-semibold text-cmprimary sm:text-lg">
              {item.section}
            </h3>
            <p className="mt-2 text-sm text-cmneutral sm:text-base">
              {item.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TermsNConditions;
