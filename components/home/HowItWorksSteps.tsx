"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/MotionWrapper";
import {
  FileText,
  PhoneCall,
  ClipboardCheck,
  HeartHandshake,
  ArrowRight,
  ArrowLeft,
  CalendarCheck,
  Sparkles,
} from "lucide-react";

export function HowItWorksSteps() {
  const { isUrdu, t } = useLanguage();
  const ArrowIcon = isUrdu ? ArrowLeft : ArrowRight;

  const steps = [
    {
      step: "01",
      icon: FileText,
      title: t("hiw_step_1_title"),
      desc: t("hiw_step_1_desc"),
    },
    {
      step: "02",
      icon: PhoneCall,
      title: t("hiw_step_2_title"),
      desc: t("hiw_step_2_desc"),
    },
    {
      step: "03",
      icon: ClipboardCheck,
      title: t("hiw_step_3_title"),
      desc: t("hiw_step_3_desc"),
    },
    {
      step: "04",
      icon: HeartHandshake,
      title: t("hiw_step_4_title"),
      desc: t("hiw_step_4_desc"),
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-cream-100 border-b border-navy-900/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-400/20 text-navy-900 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-gold-600" />
              <span>{t("hiw_eyebrow")}</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight">
              {t("hiw_heading")}
            </h2>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="text-base text-navy-700/80 leading-relaxed max-w-2xl mx-auto">
              {isUrdu
                ? "پہلے مشورے سے لے کر کیئر گیور کے باوقار آغاز تک، ہمارا ہر قدم آپ کی تسلی اور بزرگ کی حفاظت پر مبنی ہے۔"
                : "From your initial confidential consultation to daily supervisory check-ins, our onboarding is smooth, safe, and transparent."}
            </p>
          </FadeIn>
        </div>

        {/* 4 Steps Timeline with connecting gradient line */}
        <div className="relative">
          {/* Desktop timeline track */}
          <div className="hidden lg:block absolute top-12 left-12 right-12 h-0.5 bg-gradient-to-r from-gold-300 via-sage-300 to-navy-300 z-0" />

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((item, idx) => {
              const Icon = item.icon;
              return (
                <StaggerItem key={idx}>
                  <div className="group relative bg-white rounded-3xl p-7 border border-navy-900/5 shadow-soft-sm hover:shadow-soft-lg hover:border-gold-400/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full">
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <span className="text-2xl font-black text-gold-500 font-serif group-hover:scale-105 transition-transform">
                          {item.step}
                        </span>
                        <div className="w-12 h-12 rounded-2xl bg-navy-50 text-navy-800 flex items-center justify-center group-hover:bg-gold-400 group-hover:text-navy-950 transition-colors">
                          <Icon className="w-6 h-6" />
                        </div>
                      </div>
                      <h3 className="text-lg font-bold text-navy-900 mb-2.5 group-hover:text-gold-600 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-navy-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                      <span className="text-[11px] font-semibold text-sage-600 uppercase tracking-wider">
                        {isUrdu ? `مرحلہ ${idx + 1}` : `Stage ${idx + 1}`}
                      </span>
                      <span className="text-[10px] text-navy-400">
                        {idx === 0
                          ? isUrdu ? "مفت جائزہ" : "No obligation"
                          : idx === 1
                          ? isUrdu ? "24 گھنٹے میں" : "Within 24h"
                          : idx === 2
                          ? isUrdu ? "ٹرائل سپورٹ" : "Trial period"
                          : isUrdu ? "مسلسل رابطہ" : "Ongoing reports"}
                      </span>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>

        {/* Bottom CTA Actions */}
        <FadeIn delay={0.3} className="mt-14 text-center">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-navy-900 text-cream-100 font-bold text-sm shadow-soft-sm hover:bg-navy-800 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 group border border-navy-700"
            >
              <span>{isUrdu ? "مکمل 4 مرحلہ وار سفر پڑھیں" : "Read Full 4-Step Care Journey"}</span>
              <ArrowIcon className="w-4 h-4 text-gold-400 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-navy-900 font-bold text-sm border border-navy-900/10 shadow-soft-sm hover:bg-gold-50 hover:border-gold-400 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <CalendarCheck className="w-4 h-4 text-gold-600" />
              <span>{isUrdu ? "نگہداشت کا شیڈول طے کریں" : "Schedule Care Consultation"}</span>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
