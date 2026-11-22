"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { CalendarCheck, Phone, MessageCircle } from "lucide-react";

export function MobileBottomBar() {
  const { isUrdu, t } = useLanguage();

  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-navy-900/10 px-4 py-2.5 shadow-2xl">
      <div className="flex items-center gap-3">
        {/* Book Care Assessment */}
        <Link
          href="/book-care"
          className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-navy-900 text-cream-100 font-bold text-xs shadow-soft-sm active:scale-95 transition-transform"
        >
          <CalendarCheck className="w-4 h-4 text-gold-400" />
          <span>{t("mobile_cta_book")}</span>
        </Link>

        {/* Call / WhatsApp Advisor */}
        <Link
          href="/contact"
          className="flex items-center justify-center gap-1.5 py-3 px-4 rounded-xl border border-navy-900/15 bg-cream-50 text-navy-900 font-bold text-xs active:scale-95 transition-transform"
        >
          <Phone className="w-4 h-4 text-gold-600" />
          <span>{t("mobile_cta_call")}</span>
        </Link>
      </div>
    </div>
  );
}
