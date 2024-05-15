"use client";
import React, { useState, useEffect } from "react";
import { FiArrowUp } from "react-icons/fi";
import { usePathname } from "next/navigation";

const GoUpButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      <button
        className={`fixed bottom-6 right-6 z-[999] rounded-full border-[1px] border-cmaccent/30  bg-white p-2 text-cmaccent transition-all hover:bg-blue-100 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        onClick={scrollToTop}
      >
        <FiArrowUp className="h-6 w-6 lg:h-8 lg:w-8" />
      </button>
    </>
  );
};

export default GoUpButton;
