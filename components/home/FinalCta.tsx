"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { CalendarCheck, Phone, ArrowRight, ArrowLeft, Heart, Shield } from "lucide-react";

export function FinalCta() {
  const { isUrdu, t } = useLanguage();
  const ArrowIcon = isUrdu ? ArrowLeft : ArrowRight;

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Decorative floral/curved shape accents */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-navy-900 via-gold-400 to-navy-900" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[2.5rem] bg-gradient-to-br from-navy-900 via-navy-950 to-navy-900 text-white p-10 sm:p-14 lg:p-20 text-center shadow-soft-xl border border-gold-400/30 overflow-hidden">
          {/* Subtle Ambient Glow */}
          <div className="absolute -top-24 -left-24 w-80 h-80 bg-gold-400/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-sage-400/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-400/20 text-gold-300 text-xs font-bold uppercase tracking-wider border border-gold-400/30">
              <Heart className="w-3.5 h-3.5 fill-gold-400 text-gold-400" />
              <span>{isUrdu ? "خلوص اور خدمت کا عہد" : "Compassion • Dignity • Peace of Mind"}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {t("cta_heading")}
            </h2>

            <p className="text-base sm:text-lg text-cream-200/90 leading-relaxed max-w-2xl mx-auto">
              {t("cta_subheading")}
            </p>

            <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/book-care"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-full bg-gold-400 text-navy-900 font-extrabold text-base shadow-soft-lg hover:bg-gold-500 transition-all duration-300 group"
              >
                <CalendarCheck className="w-5 h-5 text-navy-900" />
                <span>{t("cta_btn_book")}</span>
                <ArrowIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-cream-200/30 text-white font-semibold text-base hover:bg-white/10 transition-colors"
              >
                <Phone className="w-4 h-4 text-gold-400" />
                <span>{t("cta_btn_contact")}</span>
              </Link>
            </div>

            {/* Quick pilot availability reassurance */}
            <div className="pt-8 text-xs text-cream-300/80 flex items-center justify-center gap-2">
              <Shield className="w-4 h-4 text-gold-400" />
              <span>
                {isUrdu
                  ? "سروس دستیابی کی تصدیق کے لیے رابطہ فرمائیں (لاہور، اسلام آباد/راولپنڈی، ملتان)"
                  : "Contact Us to Confirm Service Availability (Inquiries in Lahore, Islamabad/Rawalpindi & Multan)"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
