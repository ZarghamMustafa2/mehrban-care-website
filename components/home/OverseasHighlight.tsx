"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { FadeIn, ImageReveal } from "@/components/motion/MotionWrapper";
import {
  Globe2,
  Clock,
  ShieldCheck,
  MessageCircle,
  ArrowRight,
  ArrowLeft,
  CalendarCheck,
  CheckCircle2,
} from "lucide-react";

export function OverseasHighlight() {
  const { isUrdu, t } = useLanguage();
  const ArrowIcon = isUrdu ? ArrowLeft : ArrowRight;

  const points = [
    {
      title: isUrdu ? "ٹائم زون کے مطابق رابطہ" : "Timezone-Aligned Communication",
      desc: isUrdu
        ? "برطانیہ، خلیجی ممالک، امریکہ اور کینیڈا کے مقامی اوقات کے مطابق باقاعدہ رپورٹنگ۔"
        : "Coordination adapted to UK (GMT), UAE (GST), Saudi (AST), and US/Canada timezones.",
    },
    {
      title: isUrdu ? "تصدیقی کیئر سمری اور واٹس ایپ اپ ڈیٹس" : "Direct WhatsApp Shift Summaries",
      desc: isUrdu
        ? "ہر وزٹ پر بلڈ پریشر، ادویات اور موڈ کے بارے میں تصدیق شدہ رپورٹ براہ راست موصول کریں۔"
        : "Daily logs detailing vital signs, meals, medications taken, and mood sent directly to your phone.",
    },
    {
      title: isUrdu ? "والدین کی ویڈیو کالز میں معاونت" : "Video Call Assistance for Parents",
      desc: isUrdu
        ? "بزرگوں کو اسمارٹ فون یا ٹیبلیٹ پر ویڈیو کال پر بات کروانے میں کیئر گیور کی مدد۔"
        : "Caregivers assist less tech-savvy parents to easily connect on regular video calls with children abroad.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-navy-900 text-cream-100 relative overflow-hidden border-b border-navy-800">
      {/* Background ambient decorative shapes */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-sage-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Content Narrative (Col 1 to 7) */}
          <div className="lg:col-span-7 space-y-6 lg:space-y-8 text-left rtl:text-right">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-400/20 border border-gold-400/40 text-gold-300 text-xs font-bold uppercase tracking-wider">
                <Globe2 className="w-4 h-4 text-gold-400" />
                <span>{t("overseas_eyebrow")}</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                {t("overseas_heading")}
              </h2>
            </FadeIn>

            <FadeIn delay={0.15}>
              <p className="text-base sm:text-lg text-cream-200/90 leading-relaxed max-w-2xl">
                {t("overseas_lead")}
              </p>
            </FadeIn>

            {/* Structured Points */}
            <div className="space-y-4 pt-2">
              {points.map((pt, idx) => (
                <FadeIn key={idx} delay={0.2 + idx * 0.08}>
                  <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-navy-800/60 border border-navy-700/80 hover:border-gold-400/30 transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-sm font-bold text-white mb-0.5">
                        {pt.title}
                      </h3>
                      <p className="text-xs text-cream-300/80 leading-relaxed">
                        {pt.desc}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* CTAs */}
            <FadeIn delay={0.45} className="pt-3">
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/overseas-families"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gold-400 text-navy-950 font-bold text-sm shadow-soft-md hover:bg-gold-500 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 group"
                >
                  <span>{isUrdu ? "بیرون ملک خصوصی سہولیات دیکھیں" : "Explore Overseas Family Services"}</span>
                  <ArrowIcon className="w-4 h-4 text-navy-950 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-cream-200/30 text-cream-100 font-semibold text-sm hover:bg-white/10 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                >
                  <CalendarCheck className="w-4 h-4 text-gold-400" />
                  <span>{isUrdu ? "آن لائن مشاورت کا آغاز" : "Start Online Consultation"}</span>
                </Link>
              </div>
            </FadeIn>
          </div>

          {/* Visual Showcase with Authentic Video Call Photography (Col 8 to 12) */}
          <div className="lg:col-span-5 relative">
            <ImageReveal>
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Image Frame */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-gold-400/40 aspect-[4/5] bg-navy-950 group">
                  <Image
                    src="https://images.unsplash.com/photo-1758686254457-6aaca1ca78e0?auto=format&fit=crop&w=1200&q=85"
                    alt="Authentic family video calling their elderly parents from overseas on a laptop with smiles and reassurance"
                    fill
                    sizes="(max-width: 1024px) 100vw, 480px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/30 to-transparent" />

                  {/* Overlaid Notice Card */}
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-navy-900/90 backdrop-blur-md border border-gold-400/40 text-left rtl:text-right shadow-soft-lg">
                    <p className="text-xs font-bold text-gold-400 mb-1 flex items-center gap-1.5">
                      <MessageCircle className="w-4 h-4 text-gold-400" />
                      <span>{isUrdu ? "دیارِ غیر میں بھی والدین کے قریب" : "Close to Their Heart, Everywhere"}</span>
                    </p>
                    <p className="text-[11px] text-cream-200 leading-snug">
                      {isUrdu
                        ? "ہم آپ کے والدین کو وہی محبت اور ادب فراہم کرتے ہیں جس کی وہ اپنے بچوں سے امید رکھتے ہیں۔"
                        : "Delivering respectful hands and daily presence for your parents in Lahore, Islamabad, and Multan."}
                    </p>
                  </div>
                </div>
              </div>
            </ImageReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
