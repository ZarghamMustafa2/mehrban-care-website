"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/MotionWrapper";
import {
  Sparkles,
  Check,
  Clock,
  ShieldCheck,
  CalendarCheck,
  ArrowRight,
  ArrowLeft,
  FileQuestion,
  HelpCircle,
  AlertCircle,
} from "lucide-react";

export default function CarePlansPage() {
  const { isUrdu, t } = useLanguage();
  const ArrowIcon = isUrdu ? ArrowLeft : ArrowRight;

  const comparisonFeatures = [
    {
      category: isUrdu ? "اوقات کار اور دورانیہ" : "Schedule & Presence",
      items: [
        {
          name: isUrdu ? "وزٹ کا دورانیہ" : "Daily Time Commitment",
          essential: isUrdu ? "2 سے 4 گھنٹے" : "2 – 4 Hours",
          daily: isUrdu ? "6 سے 8 گھنٹے" : "6 – 8 Hours",
          liveIn: isUrdu ? "12 گھنٹے یا 24 گھنٹے لائیو ان" : "12h Shift or 24/7 Live-In",
        },
        {
          name: isUrdu ? "نگہداشت کار کی نوعیت" : "Caregiver Allocation",
          essential: isUrdu ? "شیڈولڈ وزٹ اسٹاف" : "Scheduled Visiting Aide",
          daily: isUrdu ? "مخصوص ڈے کیئر گیور" : "Dedicated Day Caregiver",
          liveIn: isUrdu ? "مستقل رہائشی / شفٹ کیئر گیور" : "Primary Live-In / Shift Team",
        },
      ],
    },
    {
      category: isUrdu ? "روزمرہ معاونت کی سہولیات" : "Daily Living Support",
      items: [
        {
          name: isUrdu ? "بلڈ پریشر اور شوگر مانیٹرنگ" : "Vitals & Glucose Tracking",
          essential: true,
          daily: true,
          liveIn: true,
        },
        {
          name: isUrdu ? "ادویات کے اوقات کی یاد دہانی" : "Medication Timing Prompts",
          essential: true,
          daily: true,
          liveIn: true,
        },
        {
          name: isUrdu ? "ہمدردانہ رفاقت اور چہل قدمی" : "Social Companionship & Walks",
          essential: true,
          daily: true,
          liveIn: true,
        },
        {
          name: isUrdu ? "ذاتی صفائی، شاور اور غسل میں مدد" : "Personal Hygiene & Bathing",
          essential: false,
          daily: true,
          liveIn: true,
        },
        {
          name: isUrdu ? "کھانا کھلانے اور خوراک کا انتظام" : "Mealtime Feeding & Hydration",
          essential: false,
          daily: true,
          liveIn: true,
        },
        {
          name: isUrdu ? "رات کے وقت بیداری اور واش روم سیفٹی" : "Overnight Restroom & Fall Vigilance",
          essential: false,
          daily: false,
          liveIn: true,
        },
        {
          name: isUrdu ? "بستر پر کروٹ بدلنا (Bedbound Support)" : "Bedbound Repositioning & Skin Care",
          essential: false,
          daily: false,
          liveIn: true,
        },
      ],
    },
    {
      category: isUrdu ? "رپورٹنگ اور فیملی رابطہ" : "Reporting & Supervision",
      items: [
        {
          name: isUrdu ? "واٹس ایپ وزٹ رپورٹس" : "WhatsApp Visit Summaries",
          essential: isUrdu ? "ہر وزٹ پر" : "Per Visit",
          daily: isUrdu ? "روزانہ تفصیلی" : "Daily Detailed",
          liveIn: isUrdu ? "دن رات کی مسلسل اپ ڈیٹس" : "Continuous Shift Reports",
        },
        {
          name: isUrdu ? "متبادل عملے کی دستیابی" : "Caregiver Relief Coverage",
          essential: true,
          daily: true,
          liveIn: true,
        },
        {
          name: isUrdu ? "کیئر کوآرڈینیٹر سے براہ راست رابطہ" : "Direct Care Manager Access",
          essential: true,
          daily: true,
          liveIn: true,
        },
      ],
    },
  ];

  return (
    <div className="bg-cream-100 min-h-screen">
      {/* Header */}
      <section className="py-16 lg:py-20 bg-white border-b border-navy-900/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-50 border border-gold-200 text-gold-700 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-gold-600" />
              <span>{isUrdu ? "منصوبے اور نرخ" : "Care Plans & Transparent Quoting"}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy-900 tracking-tight leading-tight">
              {isUrdu
                ? "لچکدار نگہداشت کے منصوبے، شفاف مشاورت"
                : "Flexible In-Home Care Packages Tailored to Your Family"}
            </h1>
            <p className="text-base sm:text-lg text-navy-700 leading-relaxed">
              {isUrdu
                ? "ہم کوئی غیر لچکدار یا خود ساختہ پیکجز مسلط نہیں کرتے۔ فیس کا تعین بزرگ کی مطلوبہ ضروریات، شہر اور اوقات کے مطابق شفاف انداز میں کوٹ کیا جاتا ہے۔"
                : "We do not enforce rigid, one-size-fits-all fees. All service scopes are custom-quoted according to city, skill level, and schedule without hidden costs."}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 3 Core Tier Highlights */}
      <section className="py-16 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Plan 1 */}
          <StaggerItem className="rounded-3xl bg-white p-8 border border-navy-900/10 shadow-soft-sm flex flex-col justify-between hover:shadow-soft-md transition-shadow">
            <div className="space-y-4">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-navy-50 text-navy-800 uppercase tracking-wider">
                {isUrdu ? "مرحلہ وار سپورٹ" : "Daytime Check-in"}
              </span>
              <h2 className="text-2xl font-bold text-navy-900">
                {t("plan_1_name")}
              </h2>
              <div className="flex items-center gap-2 text-xs font-bold text-gold-600">
                <Clock className="w-4 h-4" />
                <span>{t("plan_1_duration")}</span>
              </div>
              <p className="text-sm text-navy-600 leading-relaxed">
                {t("plan_1_desc")}
              </p>
            </div>
            <div className="pt-8 border-t border-gray-100 mt-6">
              <Link
                href="/contact?plan=essential"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-navy-900 text-white font-bold text-sm hover:bg-navy-800 transition-colors"
              >
                <span>{t("plan_cta")}</span>
                <ArrowIcon className="w-4 h-4" />
              </Link>
            </div>
          </StaggerItem>

          {/* Plan 2: Featured */}
          <StaggerItem className="rounded-3xl bg-navy-900 text-white p-8 border-2 border-gold-400 shadow-soft-xl flex flex-col justify-between relative lg:-translate-y-2">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gold-400 text-navy-900 text-xs font-black uppercase tracking-wider shadow">
              {isUrdu ? "سب سے زیادہ منتخب کردہ" : "Most Recommended"}
            </div>
            <div className="space-y-4 pt-2">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-navy-800 text-gold-300 border border-navy-700 uppercase tracking-wider">
                {isUrdu ? "مکمل دن کی دیکھ بھال" : "Extended Daytime"}
              </span>
              <h2 className="text-2xl font-bold text-white">
                {t("plan_2_name")}
              </h2>
              <div className="flex items-center gap-2 text-xs font-bold text-gold-400">
                <Clock className="w-4 h-4" />
                <span>{t("plan_2_duration")}</span>
              </div>
              <p className="text-sm text-cream-200 leading-relaxed">
                {t("plan_2_desc")}
              </p>
            </div>
            <div className="pt-8 border-t border-navy-800 mt-6">
              <Link
                href="/contact?plan=daily"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gold-400 text-navy-900 font-bold text-sm hover:bg-gold-500 transition-colors shadow-soft-sm"
              >
                <span>{t("plan_cta")}</span>
                <ArrowIcon className="w-4 h-4" />
              </Link>
            </div>
          </StaggerItem>

          {/* Plan 3 */}
          <StaggerItem className="rounded-3xl bg-white p-8 border border-navy-900/10 shadow-soft-sm flex flex-col justify-between hover:shadow-soft-md transition-shadow">
            <div className="space-y-4">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-navy-50 text-navy-800 uppercase tracking-wider">
                {isUrdu ? "چوبیس گھنٹے رفاقت" : "24/7 Dedicated Support"}
              </span>
              <h2 className="text-2xl font-bold text-navy-900">
                {t("plan_3_name")}
              </h2>
              <div className="flex items-center gap-2 text-xs font-bold text-gold-600">
                <Clock className="w-4 h-4" />
                <span>{t("plan_3_duration")}</span>
              </div>
              <p className="text-sm text-navy-600 leading-relaxed">
                {t("plan_3_desc")}
              </p>
            </div>
            <div className="pt-8 border-t border-gray-100 mt-6">
              <Link
                href="/contact?plan=live-in"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-navy-900 text-white font-bold text-sm hover:bg-navy-800 transition-colors"
              >
                <span>{t("plan_cta")}</span>
                <ArrowIcon className="w-4 h-4" />
              </Link>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </section>

      {/* Feature By Feature Comparison Matrix */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-navy-900/10 shadow-soft-sm overflow-x-auto">
          <div className="min-w-[650px]">
            <h3 className="text-2xl font-extrabold text-navy-900 mb-8">
              {isUrdu ? "تمام منصوبوں کا تفصیلی تقابلی جائزہ" : "Detailed Side-by-Side Scope Comparison"}
            </h3>

            {/* Table Header */}
            <div className="grid grid-cols-12 pb-4 border-b-2 border-navy-900/10 text-xs font-bold uppercase tracking-wider text-navy-400">
              <div className="col-span-5">{isUrdu ? "خصوصیات / سہولیات" : "Service Features"}</div>
              <div className="col-span-2 text-center text-navy-900">{t("plan_1_name")}</div>
              <div className="col-span-2 text-center text-gold-600 font-black">{t("plan_2_name")}</div>
              <div className="col-span-3 text-center text-navy-900">{t("plan_3_name")}</div>
            </div>

            {/* Table Categories and Rows */}
            {comparisonFeatures.map((cat, cIdx) => (
              <div key={cIdx} className="pt-6">
                <h4 className="text-xs font-extrabold text-gold-600 uppercase tracking-widest mb-3 bg-cream-50 px-3 py-1.5 rounded-lg inline-block">
                  {cat.category}
                </h4>

                <div className="divide-y divide-gray-100">
                  {cat.items.map((item, iIdx) => (
                    <div key={iIdx} className="grid grid-cols-12 py-3.5 items-center text-xs sm:text-sm">
                      <div className="col-span-5 font-semibold text-navy-800 pr-2">
                        {item.name}
                      </div>

                      {/* Essential */}
                      <div className="col-span-2 text-center flex items-center justify-center text-navy-700">
                        {typeof item.essential === "boolean" ? (
                          item.essential ? (
                            <Check className="w-4 h-4 text-sage-600" />
                          ) : (
                            <span className="text-gray-300">—</span>
                          )
                        ) : (
                          <span className="font-medium text-xs">{item.essential}</span>
                        )}
                      </div>

                      {/* Daily */}
                      <div className="col-span-2 text-center flex items-center justify-center font-semibold text-navy-900 bg-gold-50/50 py-1 rounded">
                        {typeof item.daily === "boolean" ? (
                          item.daily ? (
                            <Check className="w-4 h-4 text-gold-600 font-bold" />
                          ) : (
                            <span className="text-gray-300">—</span>
                          )
                        ) : (
                          <span className="font-bold text-xs text-gold-700">{item.daily}</span>
                        )}
                      </div>

                      {/* Live In */}
                      <div className="col-span-3 text-center flex items-center justify-center text-navy-700">
                        {typeof item.liveIn === "boolean" ? (
                          item.liveIn ? (
                            <Check className="w-4 h-4 text-sage-600" />
                          ) : (
                            <span className="text-gray-300">—</span>
                          )
                        ) : (
                          <span className="font-medium text-xs">{item.liveIn}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Policy Transparency Notice */}
      <section className="pb-24 max-w-4xl mx-auto px-4 sm:px-6">
        <div className="rounded-3xl bg-white p-8 border border-gold-400/30 shadow-soft-sm flex items-start gap-4">
          <AlertCircle className="w-6 h-6 text-gold-600 flex-shrink-0 mt-1" />
          <div className="space-y-2 text-xs sm:text-sm text-navy-700">
            <h4 className="font-bold text-navy-900 text-base">
              {isUrdu ? "نرخوں کے تعین کا شفاف طریقہ کار" : "Transparent Quotation Policy"}
            </h4>
            <p className="leading-relaxed">
              {isUrdu
                ? "ہم جعلی یا فکسڈ ریٹ لسٹ آویزاں نہیں کرتے۔ ہر بزرگ کی جسمانی حالت (خود مختار، وہیل چیئر پر، یا بیڈ باؤنڈ)، رہائش کا شہر، اور درکار اوقاتِ کار کو جانچنے کے بعد باقاعدہ تفصیلی کوٹیشن تحریری طور پر فراہم کی جاتی ہے۔"
                : "Mehrban Care strictly provides bespoke quotes following an initial care consultation. Factors influencing fees include client acuity (independent, semi-ambulatory, or bedbound), city of service, male/female staffing preference, and shift length. No unexpected surcharges."}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
