"use client";

import { useState, useEffect } from "react";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "LKR",
});

const Currency = ({ value }: { value: string | number }) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) return null;
  return <p className="font-semibold">{formatter.format(Number(value))}</p>;
};

export default Currency;
