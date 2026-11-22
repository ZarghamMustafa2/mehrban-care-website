"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { servicesData, DetailedService } from "@/lib/servicesData";
import {
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Users,
  CalendarCheck,
  Phone,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  Filter,
  Heart,
  Activity,
  Home,
} from "lucide-react";

export default function ServicesPage() {
  const { isUrdu, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const ArrowIcon = isUrdu ? ArrowLeft : ArrowRight;

  const categoryFilters = [
    { id: "all", labelEn: "All 8 Services", labelUr: "تمام 8 خدمات" },
    { id: "daily", labelEn: "Daily Living & Companionship", labelUr: "روزمرہ معمولات و رفاقت" },
    { id: "clinical", labelEn: "Health & Clinical Oversight", labelUr: "طبی و نرسنگ معاونت" },
    { id: "specialized", labelEn: "Specialized & 24/7 Live-In", labelUr: "ہمہ وقتی اور اوورسیز سہولت" },
  ];

  const filteredServices =
    selectedCategory === "all"
      ? servicesData
      : servicesData.filter((s) => s.category === selectedCategory);

  return (
    <div className="bg-cream-100 min-h-screen">
      {/* Header */}
      <section className="py-16 lg:py-20 bg-white border-b border-navy-900/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-50 border border-gold-200 text-gold-700 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-gold-600" />
              <span>{isUrdu ? "ہماری مکمل خدمات" : "Comprehensive Care Catalog"}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy-900 tracking-tight leading-tight">
              {isUrdu
                ? "بزرگوں کی گھریلو دیکھ بھال کے تمام شعبہ جات"
                : "Tailored In-Home Assistance for Every Stage of Aging"}
            </h1>
            <p className="text-base sm:text-lg text-navy-700 leading-relaxed">
              {isUrdu
                ? "ہر بزرگ کی ضروریات منفرد ہوتی ہیں۔ ہم روزمرہ کی رفاقت سے لے کر 24 گھنٹے کی مسلسل دیکھ بھال تک ہر شعبے میں پیشہ ورانہ معاونت فراہم کرتے ہیں۔"
                : "Every senior's needs are unique. From light day-to-day companionship and vital tracking to 24/7 dedicated live-in assistance, explore our individual service offerings."}
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter Tabs Sticky Bar */}
      <section className="py-5 bg-white/80 border-b border-navy-900/5 sticky top-[73px] z-30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-auto">
          <div className="flex items-center gap-2.5 min-w-max pb-1">
            <Filter className="w-4 h-4 text-navy-400 mr-1" />
            {categoryFilters.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  selectedCategory === cat.id
                    ? "bg-navy-900 text-white shadow-soft-sm"
                    : "bg-cream-100 text-navy-700 hover:bg-gold-50 hover:text-navy-900"
                }`}
              >
                {isUrdu ? cat.labelUr : cat.labelEn}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services List Detail Cards */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {filteredServices.map((service, idx) => {
          const isEven = idx % 2 === 1;
          const includedList = isUrdu ? service.includedUr : service.includedEn;
          const suitableList = isUrdu ? service.suitableForUr : service.suitableForEn;
          const limitations = isUrdu ? service.limitationsUr : service.limitationsEn;
          const fullDesc = isUrdu ? service.fullDescUr : service.fullDescEn;
          const title = t(service.titleKey as any);

          return (
            <div
              id={service.slug}
              key={service.id}
              className="scroll-mt-28 rounded-3xl bg-white border border-navy-900/10 shadow-soft-sm overflow-hidden hover:shadow-soft-md transition-shadow"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
                {/* Visual Image Banner (Col 1 to 5) */}
                <div
                  className={`lg:col-span-5 relative min-h-[300px] lg:min-h-full bg-navy-900 ${
                    isEven ? "lg:order-last" : ""
                  }`}
                >
                  <Image
                    src={service.imageUrl}
                    alt={title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 450px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent" />

                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-gold-400 text-navy-900 uppercase tracking-wider">
                      {isUrdu ? service.categoryNameUr : service.categoryNameEn}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mt-2 drop-shadow-sm">
                      {title}
                    </h3>
                  </div>
                </div>

                {/* Service Details (Col 6 to 12) */}
                <div className="lg:col-span-7 p-8 sm:p-10 lg:p-12 flex flex-col justify-between space-y-8">
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 mb-3">
                        {title}
                      </h2>
                      <p className="text-navy-700 text-sm sm:text-base leading-relaxed">
                        {fullDesc}
                      </p>
                    </div>

                    {/* What's Included */}
                    <div className="space-y-3">
                      <h4 className="text-xs sm:text-sm font-bold text-navy-900 uppercase tracking-wider flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-sage-600" />
                        <span>{isUrdu ? "اس خدمت میں کیا شامل ہے؟" : "What Is Included:"}</span>
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-navy-700">
                        {includedList.slice(0, 4).map((item, i) => (
                          <li key={i} className="flex items-start gap-2 bg-cream-50/70 p-2.5 rounded-xl border border-navy-900/5">
                            <span className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-2 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Suitable For */}
                    <div className="space-y-2.5">
                      <h4 className="text-xs sm:text-sm font-bold text-navy-900 uppercase tracking-wider flex items-center gap-2">
                        <Users className="w-4 h-4 text-navy-700" />
                        <span>{isUrdu ? "یہ خدمت کس کے لیے موزوں ہے؟" : "Who This Service Is Suitable For:"}</span>
                      </h4>
                      <ul className="space-y-1.5 text-xs sm:text-sm text-navy-600">
                        {suitableList.slice(0, 2).map((item, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <span className="text-gold-500 font-bold">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Limitation notice */}
                    <div className="p-3.5 rounded-xl bg-gold-50/60 border border-gold-200/60 flex items-start gap-2.5 text-xs text-navy-800">
                      <AlertCircle className="w-4 h-4 text-gold-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold mr-1">
                          {isUrdu ? "سروس کی حدود:" : "Service Scope Notice:"}
                        </span>
                        <span>{limitations}</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions: Dedicated Detail Page + Booking CTA */}
                  <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-navy-900 text-white font-bold text-sm shadow-soft-sm hover:bg-navy-800 transition-colors"
                    >
                      <span>{isUrdu ? "مکمل تفصیلات دیکھیں" : "View Full Service Details"}</span>
                      <ArrowIcon className="w-4 h-4 text-gold-400" />
                    </Link>

                    <Link
                      href={`/book-care?service=${service.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-gold-700 hover:text-navy-900 transition-colors"
                    >
                      <CalendarCheck className="w-4 h-4" />
                      <span>{isUrdu ? "اس خدمت کے لیے کوٹیشن لیں ←" : "Request Quote for This Service →"}</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Bottom Consultation Banner */}
      <section className="pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-navy-900 text-white p-8 sm:p-12 text-center max-w-3xl mx-auto space-y-6 shadow-soft-xl border border-gold-400/30">
          <h2 className="text-2xl sm:text-3xl font-extrabold">
            {isUrdu ? "کیا آپ کو خصوصی نگہداشت پلان درکار ہے؟" : "Unsure Which Service Fits Your Loved One?"}
          </h2>
          <p className="text-sm sm:text-base text-cream-200 leading-relaxed">
            {isUrdu
              ? "ہمارا مشیرِ نگہداشت آپ کے بزرگ کی صحت اور معمولات کے مطابق بہترین سروس تجویز کر سکتا ہے۔"
              : "Our dedicated care advisors provide free, confidential care consultations to help tailor the exact level of support needed."}
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/book-care"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gold-400 text-navy-900 font-bold text-sm shadow-soft-sm hover:bg-gold-500 transition-colors"
            >
              <span>{t("hero_cta_primary")}</span>
              <ArrowIcon className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-cream-200/30 text-white font-semibold text-sm hover:bg-white/10 transition-colors"
            >
              <Phone className="w-4 h-4 text-gold-400" />
              <span>{isUrdu ? "ہم سے رابطہ کریں" : "Speak to an Advisor"}</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
