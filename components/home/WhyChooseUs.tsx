"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import {
  HeartHandshake,
  UserCheck,
  ClipboardList,
  MessageSquareShare,
  CalendarClock,
  Lock,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";

export function WhyChooseUs() {
  const { isUrdu, t } = useLanguage();
  const ArrowIcon = isUrdu ? ArrowLeft : ArrowRight;

  const reasons = [
    {
      num: "01",
      icon: HeartHandshake,
      title: t("why_item_1_title"),
      desc: t("why_item_1_desc"),
    },
    {
      num: "02",
      icon: ClipboardList,
      title: t("why_item_2_title"),
      desc: t("why_item_2_desc"),
    },
    {
      num: "03",
      icon: UserCheck,
      title: t("why_item_3_title"),
      desc: t("why_item_3_desc"),
    },
    {
      num: "04",
      icon: MessageSquareShare,
      title: t("why_item_4_title"),
      desc: t("why_item_4_desc"),
    },
    {
      num: "05",
      icon: CalendarClock,
      title: t("why_item_5_title"),
      desc: t("why_item_5_desc"),
    },
    {
      num: "06",
      icon: Lock,
      title: t("why_item_6_title"),
      desc: t("why_item_6_desc"),
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-navy-900/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Visual Showcase (Col 1 to 5) - Breaks the repetitive card pattern */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative ambient glow */}
              <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-gold-300/30 via-sage-300/20 to-navy-300/20 blur-xl transform -rotate-1 pointer-events-none" />

              {/* Main Photographic Frame */}
              <div className="relative rounded-[2.2rem] overflow-hidden bg-navy-950 shadow-soft-xl border-4 border-white aspect-[4/5]">
                <Image
                  src="https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?auto=format&fit=crop&w=1200&q=85"
                  alt="Pakistani elderly parent receiving gentle, respectful assistance from a trained caregiver"
                  fill
                  sizes="(max-width: 1024px) 100vw, 480px"
                  className="object-cover"
                />
                {/* Bottom subtle gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/20 to-transparent" />

                {/* Overlaid Floating Reassurance Card 1 */}
                <div className="absolute top-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/50 shadow-soft-md">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gold-50 border border-gold-200 text-gold-700 flex items-center justify-center flex-shrink-0">
                      <ShieldCheck className="w-5 h-5 text-gold-600" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-navy-900">
                        {isUrdu ? "100% تصدیق شدہ عملہ" : "100% Police Cleared"}
                      </p>
                      <p className="text-[11px] text-navy-600">
                        {isUrdu ? "نادرا بائیو میٹرک اور کرمنل چیک" : "Biometric CNIC & Character Vetting"}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Overlaid Floating Reassurance Card 2 */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-navy-900/90 backdrop-blur-md border border-gold-400/30 text-white shadow-soft-lg">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0" />
                      <span className="text-xs font-bold text-cream-100">
                        {isUrdu ? "مرد و خواتین عملے کا شرعی و اخلاقی لحاظ" : "Culturally Modest Gender Matching"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Editorial Content & Commitments List (Col 6 to 12) */}
          <div className="lg:col-span-7 space-y-8 order-1 lg:order-2">
            <div className="space-y-4 text-center lg:text-left rtl:lg:text-right">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-50 border border-gold-200 text-gold-700 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-gold-600" />
                <span>{t("why_eyebrow")}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight leading-tight">
                {t("why_heading")}
              </h2>
              <div className="w-16 h-1 bg-gold-400 rounded-full mx-auto lg:mx-0 rtl:lg:mr-0" />
              <p className="text-base text-navy-700 leading-relaxed max-w-2xl">
                {isUrdu
                  ? "ہمارا مقصد بزرگوں کو وہی خلوص اور تحفظ فراہم کرنا ہے جو ایک سچا خاندانی فرد پیش کرتا ہے۔ ہمارا ادارہ محض نوکری نہیں بلکہ وقار کی بحالی کا مشن ہے۔"
                  : "Our operational commitments are engineered around elderly dignity, caregiver accountability, and complete family reassurance—bridging compassion with professional rigor."}
              </p>
            </div>

            {/* 6 Structured Rows - Asymmetric & Editorial */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {reasons.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="group p-5 rounded-2xl bg-cream-50/70 border border-navy-900/5 hover:border-gold-400/40 hover:bg-white hover:shadow-soft-md transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-10 h-10 rounded-xl bg-navy-900 text-gold-400 flex items-center justify-center shadow-soft-xs group-hover:scale-105 transition-transform">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-bold text-gold-500/80 font-serif">
                          {item.num}
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-navy-900 mb-1.5 group-hover:text-gold-600 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-navy-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Learn More link */}
            <div className="pt-2 flex items-center justify-center lg:justify-start rtl:lg:justify-start">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-bold text-navy-900 hover:text-gold-600 transition-colors"
              >
                <span>{isUrdu ? "ہماری 4 سطحی تصدیق اور اقدار کے بارے میں مزید پڑھیں" : "Learn About Our 4-Stage Vetting Protocol"}</span>
                <ArrowIcon className="w-4 h-4 text-gold-500" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
