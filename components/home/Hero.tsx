"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { motion, useReducedMotion } from "framer-motion";
import {
  ShieldCheck,
  Heart,
  CalendarCheck,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Clock,
} from "lucide-react";
import { HeroFloatingComposition } from "@/components/home/HeroFloatingComposition";

export function Hero() {
  const { isUrdu, t } = useLanguage();
  const ArrowIcon = isUrdu ? ArrowLeft : ArrowRight;
  const shouldReduceMotion = useReducedMotion();

  // Words for word-by-word staggered entrance
  const enWords = [
    { text: "Because", isGold: false },
    { text: "Your", isGold: false },
    { text: "Loved", isGold: false },
    { text: "Ones", isGold: false },
    { text: "Deserve", isGold: false },
    { text: "the", isGold: false },
    { text: "Best", isGold: true },
    { text: "Care.", isGold: true },
  ];

  const urWords = [
    { text: "کیونکہ", isGold: false },
    { text: "آپ", isGold: false },
    { text: "کے", isGold: false },
    { text: "پیارے", isGold: false },
    { text: "صرف", isGold: false },
    { text: "بہترین", isGold: true },
    { text: "دیکھ", isGold: true },
    { text: "بھال", isGold: true },
    { text: "کے", isGold: false },
    { text: "حقدار", isGold: false },
    { text: "ہیں۔", isGold: false },
  ];

  const headlineWords = isUrdu ? urWords : enWords;

  // Word entrance motion variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.07,
        delayChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  };

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 18,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.05 : 0.55,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section className="relative overflow-hidden bg-cream-100 pt-8 pb-16 lg:pt-12 lg:pb-20 border-b border-navy-900/5">
      {/* Subtle Background Radial Ambient Glows */}
      <div className="absolute top-1/4 -left-36 w-96 h-96 bg-gold-200/35 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-36 w-96 h-96 bg-sage-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* ========================================================= */}
          {/* LEFT SIDE: Word-by-Word Headline & Interactive CTAs       */}
          {/* ========================================================= */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-6 lg:space-y-7 text-center lg:text-left rtl:lg:text-right">
            {/* Animated Introductory Label */}
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-400/15 border border-gold-400/40 text-navy-900 text-xs sm:text-sm font-semibold shadow-soft-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-gold-600" />
              <span>{t("hero_badge")}</span>
            </motion.div>

            {/* Main Headline: Animated Word by Word */}
            <motion.h1
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.6rem] font-extrabold text-navy-900 tracking-tight leading-[1.14] text-balance flex flex-wrap justify-center lg:justify-start rtl:lg:justify-start gap-x-2.5 sm:gap-x-3 gap-y-1"
            >
              {headlineWords.map((item, idx) => (
                <motion.span
                  key={`${item.text}-${idx}`}
                  variants={wordVariants}
                  className={
                    item.isGold
                      ? isUrdu
                        ? "text-gold-500 font-bold underline decoration-gold-300 underline-offset-8 inline-block"
                        : "text-gold-500 font-extrabold italic font-serif inline-block"
                      : "inline-block"
                  }
                >
                  {item.text}
                </motion.span>
              ))}
            </motion.h1>

            {/* Soft Fade-Up Description */}
            <motion.p
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="text-base sm:text-lg md:text-xl text-navy-700/90 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              {t("hero_subheadline")}
            </motion.p>

            {/* Staggered CTA Buttons with Micro-Interactions */}
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.58, ease: [0.22, 1, 0.36, 1] }}
              className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <Link
                href="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-navy-900 text-cream-100 font-bold text-base shadow-soft-md hover:bg-navy-800 hover:shadow-soft-lg hover:-translate-y-1 active:translate-y-0 transition-all duration-200 group border border-navy-700"
              >
                <span>{t("hero_cta_primary")}</span>
                <ArrowIcon className="w-4 h-4 text-gold-400 transition-transform duration-200 group-hover:translate-x-1.5" />
              </Link>

              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white text-navy-900 font-semibold text-base border border-navy-900/15 shadow-soft-sm hover:bg-gold-50 hover:border-gold-400 hover:-translate-y-1 active:translate-y-0 transition-all duration-200"
              >
                <CalendarCheck className="w-5 h-5 text-gold-600" />
                <span>{t("hero_cta_secondary")}</span>
              </Link>
            </motion.div>

            {/* Truthful Trust Points Strip */}
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="pt-6 border-t border-navy-900/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left rtl:text-right"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-sage-100 flex items-center justify-center flex-shrink-0 text-sage-600">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-navy-900">
                    {isUrdu ? "جانچ شدہ نگہداشت کار" : "Caregiver Screening"}
                  </h4>
                  <p className="text-[11px] text-navy-600">
                    {isUrdu ? "شناختی اور حوالہ جاتی تصدیق" : "Identity & background vetting"}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gold-100 flex items-center justify-center flex-shrink-0 text-gold-700">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-navy-900">
                    {isUrdu ? "باوقار معاونت" : "Dignified Assistance"}
                  </h4>
                  <p className="text-[11px] text-navy-600">
                    {isUrdu ? "روایات اور اقدار کا احترام" : "Respectful domestic care"}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-navy-100 flex items-center justify-center flex-shrink-0 text-navy-800">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-navy-900">
                    {isUrdu ? "خاندانی رابطہ" : "Family Coordination"}
                  </h4>
                  <p className="text-[11px] text-navy-600">
                    {isUrdu ? "باقاعدہ دیکھ بھال کی تفصیل" : "Routine visit communication"}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ========================================================= */}
          {/* RIGHT SIDE: Animated Floating Glass Cards & Parallax      */}
          {/* ========================================================= */}
          <div className="lg:col-span-6 xl:col-span-6 relative">
            <HeroFloatingComposition />
          </div>
        </div>
      </div>
    </section>
  );
}
