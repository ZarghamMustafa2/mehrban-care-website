"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { FadeIn, ImageReveal } from "@/components/motion/MotionWrapper";
import {
  Heart,
  ShieldCheck,
  ClipboardCheck,
  ArrowRight,
  ArrowLeft,
  Sparkles,
} from "lucide-react";

export function TrustIntro() {
  const { isUrdu, t } = useLanguage();
  const ArrowIcon = isUrdu ? ArrowLeft : ArrowRight;

  const highlights = [
    {
      icon: Heart,
      title: isUrdu ? "گھریلو وقار اور پردے کا احترام" : "Domestic Dignity & Purdah",
      desc: isUrdu
        ? "بزرگوں کی نجی زندگی اور خاندانی روایات کے عین مطابق باوقار دیکھ بھال۔"
        : "Every caregiver is trained to honor religious routines, prayer times, and domestic privacy.",
    },
    {
      icon: ShieldCheck,
      title: isUrdu ? "مکمل تصدیق شدہ کیئر گیورز" : "Vetted Male & Female Staff",
      desc: isUrdu
        ? "نادرا شناختی کارڈ، پولیس تصدیق اور میڈیکل اسکریننگ کا سخت معیار۔"
        : "Rigorous NADRA biometric verification, police character clearance, and health screenings.",
    },
    {
      icon: ClipboardCheck,
      title: isUrdu ? "شفاف خاندانی رابطہ و رپورٹس" : "Transparent Daily Updates",
      desc: isUrdu
        ? "ہر وزٹ پر واٹس ایپ رپورٹنگ تاکہ پردیس یا دفتر میں موجود بچے ہمیشہ مطمئن رہیں۔"
        : "Structured WhatsApp care summaries keeping resident and overseas families informed daily.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-navy-900/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Photographic Narrative (Col 1 to 5) */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <ImageReveal>
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Ambient glow */}
                <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-gold-300/40 via-sage-200/30 to-navy-200/20 blur-xl pointer-events-none" />

                <div className="relative rounded-[2.2rem] overflow-hidden bg-navy-950 shadow-soft-xl border-4 border-white aspect-[4/5] group">
                  <Image
                    src="https://images.unsplash.com/photo-1751977979157-133aa5d65420?auto=format&fit=crop&w=1200&q=85"
                    alt="South Asian elderly grandparents enjoying quiet morning tea in a warm, peaceful home environment"
                    fill
                    sizes="(max-width: 1024px) 100vw, 480px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent" />

                  {/* Overlaid Quote Card */}
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/40 shadow-soft-md text-left rtl:text-right">
                    <p className="text-xs font-bold text-navy-900 mb-1 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-gold-600" />
                      <span>{isUrdu ? "خاندان جیسا اپنائیت کا احساس" : "Care That Feels Like Family"}</span>
                    </p>
                    <p className="text-[11px] text-navy-600 leading-snug">
                      {isUrdu
                        ? "ہم خدمت کو محض پیشہ نہیں بلکہ والدین کا مقدس حق اور دینی فریضہ سمجھتے ہیں۔"
                        : "Rooted in our deep cultural reverence for elders, family honor, and attentive presence."}
                    </p>
                  </div>
                </div>
              </div>
            </ImageReveal>
          </div>

          {/* Text & Pillars (Col 6 to 12) */}
          <div className="lg:col-span-7 space-y-6 lg:space-y-8 order-1 lg:order-2 text-left rtl:text-right">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-50 border border-gold-200 text-gold-700 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-gold-600" />
                <span>{t("trust_eyebrow")}</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight leading-tight">
                {t("trust_heading")}
              </h2>
            </FadeIn>

            <FadeIn delay={0.15}>
              <p className="text-base sm:text-lg text-navy-700/90 leading-relaxed">
                {t("trust_body_1")}
              </p>
            </FadeIn>

            {/* Concise Trust Highlights */}
            <div className="space-y-4 pt-2">
              {highlights.map((h, idx) => {
                const Icon = h.icon;
                return (
                  <FadeIn key={idx} delay={0.2 + idx * 0.08}>
                    <div className="flex items-start gap-4 p-4 rounded-2xl bg-cream-50/70 border border-navy-900/5 hover:border-gold-400/40 hover:bg-white hover:shadow-soft-sm transition-all duration-200">
                      <div className="w-10 h-10 rounded-xl bg-gold-400/15 border border-gold-400/30 text-gold-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-navy-900 mb-0.5">
                          {h.title}
                        </h3>
                        <p className="text-xs text-navy-600 leading-relaxed">
                          {h.desc}
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                );
              })}
            </div>

            {/* Link to About Us Page */}
            <FadeIn delay={0.45}>
              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-navy-900 text-cream-100 font-bold text-sm shadow-soft-sm hover:bg-navy-800 hover:shadow-soft-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 group border border-navy-700"
                >
                  <span>{isUrdu ? "ہمارے مشن اور اقدار کے بارے میں جانیں" : "Read Our Story & Care Philosophy"}</span>
                  <ArrowIcon className="w-4 h-4 text-gold-400 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
