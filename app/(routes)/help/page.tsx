import FAQ from "@/components/help/FAQ";
import PrivacyPolicy from "@/components/help/PrivacyPolicy";
import TermsNConditions from "@/components/help/TermsNConditions";
import React from "react";

const page = () => {
  return (
    <div>
      <FAQ />
      <TermsNConditions />
      <PrivacyPolicy />
    </div>
  );
};

export default page;
