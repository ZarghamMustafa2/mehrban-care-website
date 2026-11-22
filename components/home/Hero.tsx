"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import {
  ShieldCheck,
  Heart,
  CalendarCheck,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  PhoneCall,
  Clock,
} from "lucide-react";

export function Hero() {
  const { isUrdu, t } = useLanguage();
  const ArrowIcon = isUrdu ? ArrowLeft : ArrowRight;

  return (
    <section className="relative overflow-hidden bg-cream-100 pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-navy-900/5">
      {/* Subtle background ambient circles */}
      <div className="absolute top-1/4 -left-36 w-96 h-96 bg-gold-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-36 w-96 h-96 bg-sage-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Text Content (Col 1 to 7) */}
          <div className="lg:col-span-7 space-y-6 lg:space-y-8 text-center lg:text-left rtl:lg:text-right">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-400/15 border border-gold-400/40 text-navy-900 text-xs sm:text-sm font-semibold shadow-soft-sm">
              <Sparkles className="w-3.5 h-3.5 text-gold-600" />
              <span>{t("hero_badge")}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-navy-900 tracking-tight leading-[1.15] text-balance">
              {isUrdu ? (
                <span>
                  جن کا وجود{" "}
                  <span className="text-gold-500 font-bold underline decoration-gold-300 underline-offset-8">
                    سب سے انمول ہے
                  </span>
                  ، ان کی باوقار اور پرخلوص دیکھ بھال۔
                </span>
              ) : (
                <span>
                  Compassionate Care for the{" "}
                  <span className="text-gold-500 font-extrabold italic font-serif">
                    Ones Who Matter Most.
                  </span>
                </span>
              )}
            </h1>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg md:text-xl text-navy-700/90 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {t("hero_subheadline")}
            </p>

            {/* Call to Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                href="#care-finder"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-navy-900 text-cream-100 font-bold text-base shadow-soft-md hover:bg-navy-800 hover:shadow-soft-lg transition-all duration-300 group border border-navy-700"
              >
                <Sparkles className="w-5 h-5 text-gold-400" />
                <span>{t("hero_cta_primary")}</span>
                <ArrowIcon className="w-4 h-4 text-gold-400 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white text-navy-900 font-semibold text-base border border-navy-900/15 shadow-soft-sm hover:bg-gold-50 hover:border-gold-400 transition-colors"
              >
                <span>{t("hero_cta_secondary")}</span>
              </Link>
            </div>

            {/* Trust Points */}
            <div className="pt-6 border-t border-navy-900/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left rtl:text-right">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-sage-100 flex items-center justify-center flex-shrink-0 text-sage-600">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-navy-900">
                    {isUrdu ? "مکمل تصدیق شدہ" : "Vetted Caregivers"}
                  </h4>
                  <p className="text-[11px] text-navy-600">
                    {isUrdu ? "شناختی اور حوالہ جانچ" : "Police & reference check"}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gold-100 flex items-center justify-center flex-shrink-0 text-gold-700">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-navy-900">
                    {isUrdu ? "باوقار معاونت" : "Dignified Care"}
                  </h4>
                  <p className="text-[11px] text-navy-600">
                    {isUrdu ? "مرد و خواتین عملہ" : "Male & female staff"}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-navy-100 flex items-center justify-center flex-shrink-0 text-navy-800">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-navy-900">
                    {isUrdu ? "مسلسل اپ ڈیٹس" : "Family Updates"}
                  </h4>
                  <p className="text-[11px] text-navy-600">
                    {isUrdu ? "واٹس ایپ سمری" : "Transparent visit reports"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Cinematic Hero Photography (Col 8 to 12) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Decorative Glow & Borders */}
              <div className="absolute -inset-3 rounded-[2.5rem] bg-gradient-to-tr from-gold-300 via-sage-300 to-navy-200 opacity-60 blur-md transform -rotate-1" />
              
              <div className="relative rounded-[2.2rem] overflow-hidden bg-white shadow-soft-xl border-4 border-white aspect-[4/5]">
                <Image
                  src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1200&q=85"
                  alt="Pakistani elderly mother supported with compassion by a dedicated caregiver at home"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover object-center"
                />

                {/* Soft gradient bottom overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent" />

                {/* Floating Reassurance Floating Card */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/40 shadow-soft-lg">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-full bg-gold-400/20 border border-gold-400 flex items-center justify-center flex-shrink-0 text-gold-700">
                      <Heart className="w-6 h-6 fill-gold-400 text-gold-500" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-navy-900">
                        {isUrdu ? "خاندان کا باہمی اعتماد" : "Compassion & Family Respect"}
                      </p>
                      <p className="text-[11px] text-navy-600">
                        {isUrdu
                          ? "محبت، احترام اور پردے کے اصولوں پر مبنی خدمت"
                          : "Cultural sensitivity, prayer routines & personal dignity"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
