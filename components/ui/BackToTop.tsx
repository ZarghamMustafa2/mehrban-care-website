"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function BackToTop() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", toggleVisible, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label={t("btn_back_to_top")}
      className="fixed bottom-20 md:bottom-8 right-5 rtl:right-auto rtl:left-5 z-40 p-3 rounded-full bg-navy-900 text-gold-400 shadow-soft-lg border border-gold-400/40 hover:bg-gold-500 hover:text-navy-900 active:scale-95 transition-all duration-200"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}
