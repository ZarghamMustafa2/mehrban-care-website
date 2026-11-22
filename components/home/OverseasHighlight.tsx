"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import {
  Globe2,
  CheckCircle,
  MessageCircle,
  ShieldCheck,
  Smartphone,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  CalendarCheck,
} from "lucide-react";

export function OverseasHighlight() {
  const { isUrdu, t } = useLanguage();
  const ArrowIcon = isUrdu ? ArrowLeft : ArrowRight;

  const features = [
    t("overseas_feature_1"),
    t("overseas_feature_2"),
    t("overseas_feature_3"),
    t("overseas_feature_4"),
  ];

  return (
    <section className="py-20 lg:py-28 bg-navy-900 text-cream-100 relative overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-sage-400/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Content (Col 1 to 7) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-400/15 border border-gold-400/30 text-gold-300 text-xs font-bold uppercase tracking-wider">
              <Globe2 className="w-3.5 h-3.5" />
              <span>{t("overseas_eyebrow")}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {t("overseas_heading")}
            </h2>

            <p className="text-xl font-medium text-gold-300/90 font-serif italic">
              {t("overseas_subheading")}
            </p>

            <p className="text-sm sm:text-base text-cream-200/90 leading-relaxed">
              {t("overseas_p1")}
            </p>

            <p className="text-sm sm:text-base text-cream-200/90 leading-relaxed">
              {t("overseas_p2")}
            </p>

            {/* Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
              {features.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-cream-100">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                href="/overseas-families"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gold-400 text-navy-900 font-bold text-sm shadow-soft-md hover:bg-gold-500 transition-colors group"
              >
                <span>{isUrdu ? "بیرون ملک خصوصی سہولیات دیکھیں" : "Explore Overseas Family Services"}</span>
                <ArrowIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/book-care"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-cream-200/30 text-cream-100 font-semibold text-sm hover:bg-white/10 transition-colors"
              >
                <CalendarCheck className="w-4 h-4 text-gold-400" />
                <span>{t("hero_cta_primary")}</span>
              </Link>
            </div>
          </div>

          {/* Visual Showcase (Col 8 to 12) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Image Frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gold-400/30 aspect-[4/5] bg-navy-950">
                <Image
                  src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1000&q=80"
                  alt="Overseas Pakistani communicating lovingly through video call with elderly parent"
                  fill
                  sizes="(max-width: 768px) 100vw, 450px"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent" />

                {/* Conceptual Portal Preview Notice Card */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-navy-900/90 backdrop-blur-md border border-gold-400/40 text-left rtl:text-right shadow-soft-lg">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gold-400">
                      {isUrdu ? "تصوراتی پیش منظر: فیملی رپورٹنگ پورٹل" : "Conceptual Architecture: Family Reporting Portal"}
                    </span>
                    <span className="text-[9px] bg-navy-800 text-cream-300 px-2 py-0.5 rounded-full border border-navy-700">
                      {isUrdu ? "فیز 2 کیلئے تیار" : "Phase 2 Target"}
                    </span>
                  </div>
                  <p className="text-xs text-cream-200 leading-snug">
                    {isUrdu
                      ? "ہر وزٹ کی مکمل تفصیلات، بی پی چارٹ، کھانے کی رپورٹ اور نرسنگ سمری ایک محفوظ فیملی ڈیش بورڈ پر۔"
                      : "Daily caregiver check-in logs, biometric charts, meal verification, and direct WhatsApp alerts for children abroad."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
