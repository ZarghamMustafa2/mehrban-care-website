"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import {
  HeartHandshake,
  UserCheck,
  ClipboardList,
  MessageSquareShare,
  CalendarClock,
  Lock,
  Sparkles,
} from "lucide-react";

export function WhyChooseUs() {
  const { isUrdu, t } = useLanguage();

  const reasons = [
    {
      icon: HeartHandshake,
      title: t("why_item_1_title"),
      desc: t("why_item_1_desc"),
    },
    {
      icon: ClipboardList,
      title: t("why_item_2_title"),
      desc: t("why_item_2_desc"),
    },
    {
      icon: UserCheck,
      title: t("why_item_3_title"),
      desc: t("why_item_3_desc"),
    },
    {
      icon: MessageSquareShare,
      title: t("why_item_4_title"),
      desc: t("why_item_4_desc"),
    },
    {
      icon: CalendarClock,
      title: t("why_item_5_title"),
      desc: t("why_item_5_desc"),
    },
    {
      icon: Lock,
      title: t("why_item_6_title"),
      desc: t("why_item_6_desc"),
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-navy-900/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs md:text-sm font-bold tracking-widest uppercase text-gold-600">
            {t("why_eyebrow")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight">
            {t("why_heading")}
          </h2>
          <div className="w-16 h-1 bg-gold-400 mx-auto rounded-full mt-2" />
          <p className="text-base text-navy-600 leading-relaxed">
            {isUrdu
              ? "ہمارا مقصد بزرگوں کو وہی خلوص اور تحفظ فراہم کرنا ہے جو ایک سچا خاندانی فرد پیش کرتا ہے۔"
              : "Our operational commitments are engineered around elderly dignity, caregiver accountability, and complete family reassurance."}
          </p>
        </div>

        {/* 6 Grid of Commitments */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group relative p-8 rounded-3xl bg-cream-50/60 border border-navy-900/5 hover:border-gold-400/40 hover:bg-white hover:shadow-soft-md transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-navy-900 text-gold-400 flex items-center justify-center mb-6 shadow-soft-sm group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-navy-900 mb-2.5 group-hover:text-gold-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-navy-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
