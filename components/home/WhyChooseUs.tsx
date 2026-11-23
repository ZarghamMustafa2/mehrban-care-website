"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { FadeIn, ImageReveal } from "@/components/motion/MotionWrapper";
import {
  HeartHandshake,
  UserCheck,
  ClipboardList,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Sparkles,
} from "lucide-react";

export function WhyChooseUs() {
  const { isUrdu, t } = useLanguage();
  const ArrowIcon = isUrdu ? ArrowLeft : ArrowRight;

  const keyTrustPoints = [
    {
      num: "01",
      icon: ShieldCheck,
      title: isUrdu ? "مکمل نادرا اور پولیس تصدیق" : "100% Biometric & Police Clearance",
      desc: isUrdu
        ? "ہر کیئر گیور کے قومی شناختی کارڈ اور پولیس ریکارڈ کی مکمل جانچ پڑتال کے بعد تعیناتی۔"
        : "Strict NADRA biometric identity validation, local police character checks, and professional reference auditing.",
    },
    {
      num: "02",
      icon: HeartHandshake,
      title: isUrdu ? "پردے اور اسلامی خاندانی آداب کا احترام" : "Cultural Purdah & Family Sanctity",
      desc: isUrdu
        ? "مرد و خواتین عملے کی علیحدہ تعیناتی، نماز کے اوقات کی پاسداری اور بزرگوں کی عزت کا تحفظ۔"
        : "Female caregivers for elderly mothers, male staff for fathers, honoring prayer routines and domestic privacy.",
    },
    {
      num: "03",
      icon: ClipboardList,
      title: isUrdu ? "ہر وزٹ پر شفاف واٹس ایپ رپورٹنگ" : "Transparent Visit Reporting",
      desc: isUrdu
        ? "بلڈ پریشر، خوراک، ادویات اور موڈ کے بارے میں مکمل روزانہ تحریری سمری۔"
        : "Concise shift summaries sent directly to family members, detailing meals, vitals, and medications taken.",
    },
    {
      num: "04",
      icon: UserCheck,
      title: isUrdu ? "بغیر تعطل نگہداشت اور فوری متبادل" : "Continuous Care & Relief Guarantee",
      desc: isUrdu
        ? "کیئر گیور کی ناگہانی چھٹی یا عدم مطابقت کی صورت میں پیشگی متبادل کا فوری انتظام۔"
        : "Structured relief coverage and caregiver matching to ensure your loved ones are never left unassisted.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-navy-900/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Visual Showcase (Col 1 to 5) */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <ImageReveal>
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Outer decorative ambient glow */}
                <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-gold-300/30 via-sage-300/20 to-navy-300/20 blur-xl transform -rotate-1 pointer-events-none" />

                {/* Main Photographic Frame */}
                <div className="relative rounded-[2.2rem] overflow-hidden bg-navy-950 shadow-soft-xl border-4 border-white aspect-[4/5] group">
                  <Image
                    src="https://images.unsplash.com/photo-1758612897699-9cdd1a4361de?auto=format&fit=crop&w=1200&q=85"
                    alt="Dignified South Asian elderly father receiving gentle, respectful assistance from a vetted caregiver"
                    fill
                    sizes="(max-width: 1024px) 100vw, 480px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Bottom subtle gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/20 to-transparent" />

                  {/* Overlaid Floating Reassurance Card */}
                  <div className="absolute top-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/50 shadow-soft-md text-left rtl:text-right">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gold-50 border border-gold-200 text-gold-700 flex items-center justify-center flex-shrink-0">
                        <ShieldCheck className="w-5 h-5 text-gold-600" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-navy-900">
                          {isUrdu ? "100% تصدیق شدہ عملہ" : "100% Vetted Personnel"}
                        </p>
                        <p className="text-[11px] text-navy-600">
                          {isUrdu ? "نادرا بائیو میٹرک اور کرمنل چیک" : "Biometric CNIC & Police Vetting"}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Bottom reassurance card */}
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-navy-900/90 backdrop-blur-md border border-navy-700 text-left rtl:text-right">
                    <p className="text-xs font-bold text-gold-400 mb-0.5">
                      {isUrdu ? "اہل خانہ کا سکون، ہماری اولین ترجیح" : "Family Peace of Mind"}
                    </p>
                    <p className="text-[11px] text-cream-200">
                      {isUrdu
                        ? "ہم آپ کے گھر کے تقدس اور بزرگوں کے سکون کی مکمل ضمانت دیتے ہیں۔"
                        : "Safeguarding your household boundaries and honoring your parents' wellbeing."}
                    </p>
                  </div>
                </div>
              </div>
            </ImageReveal>
          </div>

          {/* Text Content & 4 Distinct Trust Pillars (Col 6 to 12) */}
          <div className="lg:col-span-7 space-y-6 lg:space-y-8 order-1 lg:order-2 text-left rtl:text-right">
            <div>
              <FadeIn>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-50 text-gold-700 text-xs font-bold uppercase tracking-wider mb-3">
                  <Sparkles className="w-3.5 h-3.5 text-gold-600" />
                  <span>{t("why_eyebrow")}</span>
                </div>
              </FadeIn>

              <FadeIn delay={0.1}>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight leading-tight">
                  {t("why_heading")}
                </h2>
              </FadeIn>

              <FadeIn delay={0.15}>
                <p className="mt-4 text-base sm:text-lg text-navy-700 leading-relaxed">
                  {t("why_lead")}
                </p>
              </FadeIn>
            </div>

            {/* Clean 4-Item List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {keyTrustPoints.map((reason, idx) => {
                const Icon = reason.icon;
                return (
                  <FadeIn key={idx} delay={0.2 + idx * 0.08}>
                    <div className="p-5 rounded-2xl bg-cream-50/70 border border-navy-900/5 hover:border-gold-400/30 hover:bg-white hover:shadow-soft-sm transition-all duration-200 flex flex-col justify-between h-full">
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-xs font-black text-gold-600 font-serif">
                            {reason.num}
                          </span>
                          <div className="w-8 h-8 rounded-lg bg-white border border-gray-100 flex items-center justify-center text-navy-800">
                            <Icon className="w-4 h-4 text-gold-600" />
                          </div>
                        </div>
                        <h3 className="text-sm font-bold text-navy-900 mb-1.5">
                          {reason.title}
                        </h3>
                        <p className="text-xs text-navy-600 leading-relaxed">
                          {reason.desc}
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                );
              })}
            </div>

            {/* Consultation Action */}
            <FadeIn delay={0.45} className="pt-2">
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-navy-900 text-cream-100 font-bold text-sm shadow-soft-sm hover:bg-navy-800 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 group border border-navy-700"
                >
                  <span>{isUrdu ? "گھریلو مشاورت کی درخواست کریں" : "Request Free In-Home Consultation"}</span>
                  <ArrowIcon className="w-4 h-4 text-gold-400 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/care-plans"
                  className="inline-flex items-center gap-1.5 px-5 py-3.5 rounded-full text-navy-800 font-semibold text-sm hover:text-gold-600 transition-colors"
                >
                  <span>{isUrdu ? "دیکھ بھال کے پیکیجز دیکھیں" : "Explore Care Plans"}</span>
                  <ArrowIcon className="w-3.5 h-3.5" />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
