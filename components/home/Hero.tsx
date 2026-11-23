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
  CheckCircle2,
} from "lucide-react";

export function Hero() {
  const { isUrdu, t } = useLanguage();
  const ArrowIcon = isUrdu ? ArrowLeft : ArrowRight;
  const shouldReduceMotion = useReducedMotion();

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
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-400/15 border border-gold-400/40 text-navy-900 text-xs sm:text-sm font-semibold shadow-soft-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-gold-600" />
              <span>{t("hero_badge")}</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-navy-900 tracking-tight leading-[1.15] text-balance"
            >
              {isUrdu ? (
                <span>
                  کیونکہ آپ کے پیارے صرف{" "}
                  <span className="text-gold-500 font-bold underline decoration-gold-300 underline-offset-8">
                    بہترین دیکھ بھال
                  </span>{" "}
                  کے حقدار ہیں۔
                </span>
              ) : (
                <span>
                  Because Your Loved Ones Deserve the{" "}
                  <span className="text-gold-500 font-extrabold italic font-serif">
                    Best Care.
                  </span>
                </span>
              )}
            </motion.h1>

            {/* Supporting Description */}
            <motion.p
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="text-base sm:text-lg md:text-xl text-navy-700/90 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              {t("hero_subheadline")}
            </motion.p>

            {/* Call to Actions with subtle staggering */}
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <Link
                href="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-navy-900 text-cream-100 font-bold text-base shadow-soft-md hover:bg-navy-800 hover:shadow-soft-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 group border border-navy-700"
              >
                <span>{t("hero_cta_primary")}</span>
                <ArrowIcon className="w-4 h-4 text-gold-400 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white text-navy-900 font-semibold text-base border border-navy-900/15 shadow-soft-sm hover:bg-gold-50 hover:border-gold-400 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <CalendarCheck className="w-5 h-5 text-gold-600" />
                <span>{t("hero_cta_secondary")}</span>
              </Link>
            </motion.div>

            {/* Truthful Trust Points (Updated per Task 9) */}
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.44, ease: [0.22, 1, 0.36, 1] }}
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

          {/* Minimalist Editorial Care Process Panel (Col 8 to 12) */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl bg-white/95 backdrop-blur-md p-6 sm:p-8 border border-navy-900/10 shadow-soft-xl space-y-6">
              {/* Top Label & Badge */}
              <div className="flex items-center justify-between border-b border-navy-900/10 pb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-gold-500 animate-pulse" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-navy-800">
                    {isUrdu ? "دیکھ بھال کا منظم طریقہ کار" : "Care Process Protocol"}
                  </span>
                </div>
                <span className="text-[11px] font-semibold text-gold-700 bg-gold-400/15 px-2.5 py-0.5 rounded-full border border-gold-400/30">
                  {isUrdu ? "۳ آسان مراحل" : "3 Guided Steps"}
                </span>
              </div>

              {/* 3 Care Process Steps */}
              <div className="space-y-4">
                {/* Step 01 */}
                <motion.div
                  initial={{ opacity: 0, x: shouldReduceMotion ? 0 : (isUrdu ? -15 : 15) }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="group p-4 rounded-2xl bg-cream-50/70 border border-navy-900/5 hover:border-gold-300 hover:bg-gold-50/40 transition-all duration-300"
                >
                  <div className="flex items-start gap-3.5">
                    <span className="flex-shrink-0 w-8 h-8 rounded-xl bg-gold-500/15 border border-gold-500/30 text-gold-700 font-extrabold text-xs flex items-center justify-center font-mono">
                      01
                    </span>
                    <div className="space-y-1">
                      <h4 className="text-sm font-bold text-navy-900">
                        {isUrdu ? "ضروریات کا فہم و جائزہ" : "Understand Your Needs"}
                      </h4>
                      <p className="text-xs text-navy-600 leading-relaxed">
                        {isUrdu
                          ? "ہم آپ کے بزرگوں کے معمولات، طبی کیفیات اور انفرادی ضروریات کو تفصیل سے سمجھتے ہیں۔"
                          : "We listen attentively to daily routines, medical history, and specific daily assistance requirements."}
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Step 02 */}
                <motion.div
                  initial={{ opacity: 0, x: shouldReduceMotion ? 0 : (isUrdu ? -15 : 15) }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="group p-4 rounded-2xl bg-cream-50/70 border border-navy-900/5 hover:border-sage-300 hover:bg-sage-50/40 transition-all duration-300"
                >
                  <div className="flex items-start gap-3.5">
                    <span className="flex-shrink-0 w-8 h-8 rounded-xl bg-sage-500/15 border border-sage-500/30 text-sage-700 font-extrabold text-xs flex items-center justify-center font-mono">
                      02
                    </span>
                    <div className="space-y-1">
                      <h4 className="text-sm font-bold text-navy-900">
                        {isUrdu ? "منظم اور ذاتی منصوبہ بندی" : "Plan Personalized Care"}
                      </h4>
                      <p className="text-xs text-navy-600 leading-relaxed">
                        {isUrdu
                          ? "تربیت یافتہ اور جانچے گئے نگہداشت کار کے ساتھ انفرادی شیڈول اور معاونت کا انتخاب۔"
                          : "Matching compassionate, verified attendants or nurses customized to your loved one's pace."}
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Step 03 */}
                <motion.div
                  initial={{ opacity: 0, x: shouldReduceMotion ? 0 : (isUrdu ? -15 : 15) }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
                  className="group p-4 rounded-2xl bg-cream-50/70 border border-navy-900/5 hover:border-navy-300 hover:bg-navy-50/40 transition-all duration-300"
                >
                  <div className="flex items-start gap-3.5">
                    <span className="flex-shrink-0 w-8 h-8 rounded-xl bg-navy-500/15 border border-navy-500/30 text-navy-800 font-extrabold text-xs flex items-center justify-center font-mono">
                      03
                    </span>
                    <div className="space-y-1">
                      <h4 className="text-sm font-bold text-navy-900">
                        {isUrdu ? "مسلسل رابطہ اور باخبر رہنا" : "Stay Connected"}
                      </h4>
                      <p className="text-xs text-navy-600 leading-relaxed">
                        {isUrdu
                          ? "باقاعدہ رپورٹس اور شفاف مواصلت تاکہ اندرون و بیرون ملک اہل خانہ مطمئن رہیں۔"
                          : "Transparent communication and regular updates ensuring peace of mind, locally or abroad."}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Bottom reassuring note with link to full How It Works */}
              <div className="pt-2 flex items-center justify-between text-[11px] text-navy-600 border-t border-navy-900/5">
                <span className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sage-600" />
                  {isUrdu ? "لاہور اور ملحقہ علاقوں میں سروس" : "Service across Lahore"}
                </span>
                <Link
                  href="/how-it-works"
                  className="text-navy-900 font-bold hover:text-gold-600 transition-colors inline-flex items-center gap-1"
                >
                  <span>{isUrdu ? "مکمل طریقہ کار دیکھیں" : "View Full Process"}</span>
                  <ArrowIcon className="w-3 h-3 text-gold-500" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
