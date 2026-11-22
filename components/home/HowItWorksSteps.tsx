"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import {
  FileText,
  PhoneCall,
  ClipboardCheck,
  HeartHandshake,
  ArrowRight,
  ArrowLeft,
  CalendarCheck,
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
    <section className="py-20 lg:py-28 bg-cream-100 border-b border-navy-900/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs md:text-sm font-bold tracking-widest uppercase text-gold-600">
            {t("hiw_eyebrow")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight">
            {t("hiw_heading")}
          </h2>
          <div className="w-16 h-1 bg-gold-400 mx-auto rounded-full mt-2" />
        </div>

        {/* 4 Steps Timeline / Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="relative bg-white rounded-3xl p-8 border border-navy-900/5 shadow-soft-sm hover:shadow-soft-lg hover:border-gold-400/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-black text-gold-400/80 font-serif">
                      {item.step}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-navy-50 text-navy-800 flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-navy-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-navy-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100">
                  <span className="text-[11px] font-semibold text-sage-600 uppercase tracking-wider">
                    {isUrdu ? `مرحلہ ${idx + 1}` : `Stage ${idx + 1}`}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Button */}
        <div className="mt-14 text-center">
          <Link
            href="/how-it-works"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-navy-900 text-cream-100 font-bold text-sm shadow-soft-sm hover:bg-navy-800 transition-colors"
          >
            <span>{isUrdu ? "مکمل سفر اور طریقہ کار دیکھیں" : "View Full Customer Journey & Protocol"}</span>
            <ArrowIcon className="w-4 h-4 text-gold-400" />
          </Link>
        </div>
      </div>
    </section>
  );
}
