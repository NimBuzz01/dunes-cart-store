import React from "react";
import CustomTitle from "../CustomTitle";
import { privacyPolicy } from "@/lib/data";

const PrivacyPolicy = () => {
  return (
    <div id="privacy-policy">
      <CustomTitle text1="Privacy Policy" text2={""} />
      <div className="mt-8">
        {privacyPolicy.map((item, index) => (
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

export default PrivacyPolicy;
