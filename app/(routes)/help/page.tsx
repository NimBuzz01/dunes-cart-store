import FAQ from "@/components/help/FAQ";
import PrivacyPolicy from "@/components/help/PrivacyPolicy";
import TermsNConditions from "@/components/help/TermsNConditions";
import React from "react";

const page = () => {
  return (
    <div className="space-y-16 px-3 py-16 sm:container">
      <FAQ />
      <TermsNConditions />
      <PrivacyPolicy />
    </div>
  );
};

export default page;
