"use client";

import PreviewModal from "@/components/PreviewModal";
import React, { useEffect, useState } from "react";

const ModalPreview = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  return <PreviewModal />;
};

export default ModalPreview;
