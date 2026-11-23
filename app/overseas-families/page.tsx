"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { FadeIn, ImageReveal, StaggerContainer, StaggerItem } from "@/components/motion/MotionWrapper";
import {
  Globe2,
  Heart,
  MessageCircle,
  Clock,
  ShieldCheck,
  CalendarCheck,
  Phone,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Sparkles,
  Smartphone,
  Eye,
  AlertTriangle,
  Send,
  Video,
  UserCheck,
  FileText,
  Activity,
} from "lucide-react";

export default function OverseasFamiliesPage() {
  const { isUrdu, t } = useLanguage();
  const ArrowIcon = isUrdu ? ArrowLeft : ArrowRight;
  const [activeStage, setActiveStage] = useState<number>(0);

  const arrangementStages = [
    {
      num: "01",
      icon: Send,
      titleEn: "Care Inquiry",
      titleUr: "ابتدائی نگہداشت استفسار",
      descEn: "Submit your family's initial requirements online or message directly on WhatsApp with your local time zone (UK, Gulf, USA, Canada).",
      descUr: "ہماری ویب سائٹ یا واٹس ایپ کے ذریعے رابطہ کریں۔ ہم آپ کے ملکی ٹائم زون (برطانیہ، خلیج، کینیڈا، امریکہ) کو مدنظر رکھ کر رابطہ کرتے ہیں۔",
      actionEn: "We review senior city, mobility status, and your preferred schedule within 4 hours.",
      actionUr: "ہمارا ایڈوائزر 4 گھنٹوں میں بزرگ کی رہائش، نقل و حرکت اور مطلوبہ اوقات کا جائزہ لیتا ہے۔"
    },
    {
      num: "02",
      icon: Video,
      titleEn: "Family Consultation",
      titleUr: "خاندانی ویڈیو مشاورت",
      descEn: "A dedicated Care Coordinator arranges a video conference with you and local family members to listen to doctor instructions and daily habits.",
      descUr: "ایک خصوصی کیئر کوآرڈینیٹر آپ اور مقامی خاندان کے ساتھ ویڈیو کال پر گفتگو کر کے ڈاکٹر کی ہدایات اور بزرگ کے مزاج کو سمجھتا ہے۔",
      actionEn: "We draft an individual Care Protocol covering dietary rhythms, prayer accompaniment, and vitals checkups.",
      actionUr: "ہم ایک انفرادی کیئر پروٹوکول تیار کرتے ہیں جس میں کھانے، نماز اور ادویات کا شیڈول طے ہوتا ہے۔"
    },
    {
      num: "03",
      icon: UserCheck,
      titleEn: "Caregiver Arrangement",
      titleUr: "تصدیق شدہ کیئر گیور کی تعیناتی",
      descEn: "We match a vetted male or female caregiver whose background, dialect, and experience align with your parents' dignity and household privacy.",
      descUr: "ہم نادرا اور پولیس سے مکمل تصدیق شدہ کیئر گیور کا انتخاب کرتے ہیں جو پردے کے آداب اور بزرگ کے وقار کا پاس رکھے۔",
      actionEn: "A supervisor conducts an introductory home accompaniment visit on Day 1 to ensure peace of mind.",
      actionUr: "پہلے دن سپروائزر بزرگ کے گھر پر موجود رہتا ہے تاکہ مانوس ماحول اور باہمی اعتماد قائم ہو سکے۔"
    },
    {
      num: "04",
      icon: MessageCircle,
      titleEn: "Visit Updates",
      titleUr: "ہر وزٹ پر واٹس ایپ رپورٹ",
      descEn: "After each care shift, you receive a transparent WhatsApp summary with resting vitals (BP, glucose), meal status, and daily observations.",
      descUr: "ہر شفٹ کے بعد آپ کو واٹس ایپ پر بلڈ پریشر، شوگر، خوراک اور بزرگ کے مزاج کی شفاف سمری موصول ہوتی ہے۔",
      actionEn: "Zero guesswork: you always know exactly how your parents spent their day.",
      actionUr: "مکمل ذہنی سکون: آپ کو ہمیشہ علم ہوتا ہے کہ والدین نے دن کیسا گزارا۔"
    },
    {
      num: "05",
      icon: Heart,
      titleEn: "Ongoing Communication",
      titleUr: "مسلسل رابطہ و خاندانی تسلی",
      descEn: "Continuous supervisor check-ins, monthly routine adjustments, and facilitating WhatsApp video calls with grandchildren whenever you call.",
      descUr: "ماہانہ سپروائزری جائزہ، معمولات میں ضرورت کے مطابق تبدیلی، اور بچوں و پوتوں کے ساتھ ویڈیو کال پر بات چیت کی سہولت۔",
      actionEn: "Direct emergency escalation protocols and priority standby coverage.",
      actionUr: "ہنگامی پروٹوکول اور متبادل عملے کی باقاعدہ فراہمی۔"
    }
  ];

  const sevenCareConcerns = [
    {
      num: "01",
      icon: Globe2,
      titleEn: "The Challenges of Living Thousands of Miles Away",
      titleUr: "ہزاروں میل دور پردیس میں رہنے کے چیلنجز",
      descEn: "Living in the UK, UAE, USA, Canada, or Australia creates constant emotional anxiety about your parents aging alone in Pakistan. We provide a respectful, vetted family-like presence to bridge the distance.",
      descUr: "برطانیہ، خلیج، امریکہ یا کینیڈا میں مقیم بچوں کے لیے والدین سے دوری کی بے چینی فطری ہے۔ ہم پاکستان میں ایک قابل اعتماد خاندانی سہارا فراہم کر کے اس فاصلے کو سمیٹتے ہیں۔",
    },
    {
      num: "02",
      icon: Clock,
      titleEn: "Understanding Daily Routines & Care Needs",
      titleUr: "والدین کے روزمرہ معمولات اور ضروریات کی تفہیم",
      descEn: "Every household has unique meal habits, prayer times, and mobility rhythms. Our initial family consultation captures these exact preferences before care ever begins.",
      descUr: "ہر گھرانے میں کھانے پینے، نماز اور آرام کے مخصوص اوقات ہوتے ہیں۔ خدمت شروع کرنے سے قبل ہم والدین کے انفرادی معمولات کو باریک بینی سے سمجھتے ہیں۔",
    },
    {
      num: "03",
      icon: Heart,
      titleEn: "Choosing Assistance: Companionship vs. Nursing",
      titleUr: "صحیح نگہداشت کا انتخاب: رفاقت بمقابلہ طبی نرسنگ",
      descEn: "We help you select between general companionship/daily living support and clinical home nursing (wound care, catheter management) under doctor supervision, ensuring your parents receive appropriate care.",
      descUr: "ہم آپ کو روزمرہ رفاقت اور معالج کی زیر نگرانی طبی نرسنگ (زخموں کی پٹی، کیتھیٹر) کے درمیان درست انتخاب میں رہنمائی دیتے ہیں تاکہ بزرگ کو مطلوبہ خدمت ملے۔",
    },
    {
      num: "04",
      icon: CalendarCheck,
      titleEn: "Arranging Reliable Daily or Live-In Schedules",
      titleUr: "روزانہ یا 24 گھنٹے لائیو ان شیڈول کا بااعتماد انتظام",
      descEn: "Whether your parents need a few hours of daytime assistance or 24/7 dedicated live-in care with agreed rest intervals, we organize consistent staffing with prompt backup coverage.",
      descUr: "چاہے والدین کو دن کے چند گھنٹوں کی رفاقت درکار ہو یا 24 گھنٹے لائیو ان نگہداشت، ہم متبادل عملے کی یقینی فراہمی کے ساتھ بغیر تعطل سروس فراہم کرتے ہیں۔",
    },
    {
      num: "05",
      icon: MessageCircle,
      titleEn: "Family Communication & Regular Updates",
      titleUr: "خاندانی رابطہ اور واٹس ایپ پر باقاعدہ اپ ڈیٹس",
      descEn: "Stay completely informed through structured WhatsApp briefings after visits, vitals logs (BP, blood sugar), meal notes, and facilitated video calls with your parents.",
      descUr: "ہر وزٹ کے بعد واٹس ایپ پر تفصیلی سمری، بلڈ پریشر و شوگر کا چارٹ، اور ویڈیو کال پر والدین سے بات چیت کے ذریعے آپ ہر لمحہ باخبر رہتے ہیں۔",
    },
    {
      num: "06",
      icon: Activity,
      titleEn: "Ongoing Coordination & Schedule Adjustments",
      titleUr: "مسلسل کوآرڈینیشن اور ضرورت کے مطابق تبدیلی",
      descEn: "Health needs change over time. Your dedicated Care Coordinator in Pakistan handles schedule adjustments, prescription restocking, and clinic visit accompaniments effortlessly.",
      descUr: "صحت کے تقاضے بدلتے رہتے ہیں۔ پاکستان میں موجود آپ کا کوآرڈینیٹر ادویات کی فراہمی، ڈاکٹر کے وزٹ اور شیڈول کی تبدیلی کو آسانی سے منظم کرتا ہے۔",
    },
    {
      num: "07",
      icon: Phone,
      titleEn: "How to Request a Consultation From Abroad",
      titleUr: "پردیس سے نگہداشت مشاورت شروع کرنے کا طریقہ",
      descEn: "Connect directly with our care team on WhatsApp or submit our brief care assessment form. We schedule a video consultation aligned with your international time zone.",
      descUr: "واٹس ایپ پر میسج کریں یا آن لائن فارم پر کریں۔ ہم آپ کے مقامی وقت (ٹائم زون) کے مطابق ویڈیو یا فون کال پر مکمل خاندانی مشاورت منعقد کرتے ہیں۔",
    },
  ];

  return (
    <div className="bg-cream-100 min-h-screen">
      {/* Emotionally Impressive Hero */}
      <section className="relative py-20 lg:py-28 bg-navy-900 text-white overflow-hidden border-b border-navy-800">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-sage-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <FadeIn className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-400/20 text-gold-300 text-xs font-bold uppercase tracking-wider border border-gold-400/30">
                <Globe2 className="w-4 h-4" />
                <span>{isUrdu ? "پردیس میں مقیم پاکستانیوں کے لیے" : "Specialized Care for Overseas Pakistanis"}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
                {isUrdu ? (
                  <span>
                    گھر سے دور،{" "}
                    <span className="text-gold-400 font-serif italic">مگر والدین کی نگہداشت کے قریب۔</span>
                  </span>
                ) : (
                  <span>
                    Far From Home.{" "}
                    <span className="text-gold-400 font-serif italic">Close to Their Care.</span>
                  </span>
                )}
              </h1>

              <p className="text-lg sm:text-xl text-cream-200 leading-relaxed font-light">
                {isUrdu
                  ? "پردیس میں رہنے کا مطلب والدین کی نگہداشت سے کٹ جانا نہیں ہے۔ انفرادی گھریلو دیکھ بھال اور مستقل خاندانی رابطے کے مخلصانہ طریقہ کار کو جانیے۔"
                  : "Living abroad shouldn't mean losing touch with the care your parents need. Explore personalized home-care arrangements and family communication options."}
              </p>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  href="/book-care?plan=overseas"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gold-400 text-navy-900 font-bold text-sm shadow-soft-md hover:bg-gold-500 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                >
                  <CalendarCheck className="w-4 h-4 text-navy-900" />
                  <span>{isUrdu ? "والدین کی دیکھ بھال پر بات چیت کریں" : "Discuss Care for Your Parents"}</span>
                  <ArrowIcon className="w-4 h-4" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-cream-200/30 text-cream-100 font-semibold text-sm hover:bg-white/10 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                >
                  <Phone className="w-4 h-4 text-gold-400" />
                  <span>{isUrdu ? "واٹس ایپ پر مشاورت کریں" : "Consult via WhatsApp"}</span>
                </Link>
              </div>
            </FadeIn>

            <div className="lg:col-span-5 relative">
              <ImageReveal>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-gold-400/40 aspect-[4/5] bg-navy-950 group">
                  <Image
                    src="https://images.unsplash.com/photo-1758686254457-6aaca1ca78e0?auto=format&fit=crop&w=1200&q=85"
                    alt="An overseas Pakistani adult talking to elderly parent through a warm video call"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 500px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent" />

                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-navy-900/90 backdrop-blur-md border border-gold-400/40">
                    <p className="text-xs font-bold text-gold-400 mb-1">
                      {isUrdu ? "فاصلے کبھی فکر کی وجہ نہ بنیں" : "Distance Should Never Mean Worry"}
                    </p>
                    <p className="text-[11px] text-cream-200">
                      {isUrdu
                        ? "ہم آپ کے والدین کو وہی محبت اور ادب فراہم کرتے ہیں جس کی وہ آپ سے امید رکھتے ہیں۔"
                        : "Preserving your parents' domestic dignity and your peace of mind around the clock."}
                    </p>
                  </div>
                </div>
              </ImageReveal>
            </div>
          </div>
        </div>
      </section>

      {/* The 7 Core Concerns We Address for Families Abroad */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-600">
            {isUrdu ? "اوورسیز خاندانوں کے 7 بنیادی سوالات" : "7 Essential Concerns We Address for Families Abroad"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900">
            {isUrdu
              ? "پردیس سے والدین کی باوقار نگہداشت کے 7 اہم ترین پہلو"
              : "Bridging the Miles: Our 7-Point Family Reassurance Model"}
          </h2>
          <p className="text-sm text-navy-600 max-w-2xl mx-auto">
            {isUrdu
              ? "فاصلے چاہے کتنے ہی زیادہ کیوں نہ ہوں، ہمارا نگہداشت کا نظام آپ کے والدین کے تحفظ اور آپ کے مکمل ذہنی سکون کو یقینی بناتا ہے۔"
              : "Every aspect of our coordination is designed to keep you connected, informed, and confident in your parents' daily comfort."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sevenCareConcerns.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`p-6 sm:p-7 rounded-3xl bg-white border border-navy-900/10 shadow-soft-sm hover:border-gold-400/50 hover:shadow-soft-md transition-all flex flex-col justify-between ${
                  idx === 6 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-gold-50 text-gold-700 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-gold-600" />
                    </div>
                    <span className="text-xs font-bold text-gold-600/80 font-serif">
                      {item.num}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-navy-900 mb-2.5">
                    {isUrdu ? item.titleUr : item.titleEn}
                  </h3>
                  <p className="text-xs sm:text-sm text-navy-600 leading-relaxed">
                    {isUrdu ? item.descUr : item.descEn}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* How Overseas Families Arrange Care — Interactive 5-Stage Visual Journey */}
      <section className="py-16 lg:py-24 bg-white border-y border-navy-900/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-600">
              {isUrdu ? "نگہداشت کا 5 مرحلہ وار سفر" : "How Care Is Arranged From Abroad"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900">
              {isUrdu ? "پردیس سے والدین کی دیکھ بھال شروع کرنے کا عملی طریقہ کار" : "5 Seamless Stages to Bridge the Miles"}
            </h2>
            <p className="text-sm text-navy-600 max-w-2xl mx-auto">
              {isUrdu
                ? "ہم نے اوورسیز فیملیز کے لیے رابطہ اور نگرانی کا ایسا نظام وضع کیا ہے جو فاصلوں کے باوجود ہر لمحہ آپ کو مطمئن رکھے۔"
                : "A step-by-step coordination framework specifically designed around the communication needs of Pakistani families living in the UK, Gulf, North America, and beyond."}
            </p>
          </div>

          {/* Interactive Stepper Navigation */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
            {arrangementStages.map((stg, idx) => {
              const isSelected = activeStage === idx;
              const Icon = stg.icon;
              return (
                <button
                  key={stg.num}
                  type="button"
                  onClick={() => setActiveStage(idx)}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold transition-all ${
                    isSelected
                      ? "bg-navy-900 text-white shadow-soft-sm ring-2 ring-gold-400"
                      : "bg-cream-100 text-navy-700 hover:bg-gold-50 hover:text-navy-900"
                  }`}
                >
                  <span className="w-5 h-5 rounded-full bg-gold-400 text-navy-900 flex items-center justify-center text-[10px] font-black">
                    {stg.num}
                  </span>
                  <span>{isUrdu ? stg.titleUr : stg.titleEn}</span>
                </button>
              );
            })}
          </div>

          {/* Active Stage Detailed Spotlight Box */}
          <div className="rounded-3xl bg-cream-50/80 border border-navy-900/10 p-8 sm:p-12 max-w-4xl mx-auto shadow-soft-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-200/70 pb-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-navy-900 text-gold-400 flex items-center justify-center shadow-soft-sm flex-shrink-0">
                  {React.createElement(arrangementStages[activeStage].icon, { className: "w-7 h-7" })}
                </div>
                <div>
                  <span className="text-xs font-bold text-gold-600 uppercase tracking-wider">
                    {isUrdu ? `مرحلہ ${arrangementStages[activeStage].num}` : `Stage ${arrangementStages[activeStage].num}`}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-navy-900">
                    {isUrdu ? arrangementStages[activeStage].titleUr : arrangementStages[activeStage].titleEn}
                  </h3>
                </div>
              </div>

              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gold-100 text-gold-800 self-start sm:self-auto">
                {isUrdu ? "عملی خاکہ" : "Illustrative Framework"}
              </span>
            </div>

            <p className="text-base text-navy-700 leading-relaxed">
              {isUrdu ? arrangementStages[activeStage].descUr : arrangementStages[activeStage].descEn}
            </p>

            <div className="p-4 rounded-2xl bg-white border border-navy-900/5 flex items-start gap-3 text-xs sm:text-sm text-navy-800 shadow-soft-2xs">
              <CheckCircle2 className="w-5 h-5 text-sage-600 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="block text-navy-900 mb-0.5">
                  {isUrdu ? "پاکستان میں ہماری کارروائی:" : "Action by Our Local Team in Pakistan:"}
                </strong>
                <span>{isUrdu ? arrangementStages[activeStage].actionUr : arrangementStages[activeStage].actionEn}</span>
              </div>
            </div>

            {/* Stepper controls */}
            <div className="pt-2 flex items-center justify-between border-t border-gray-200/70">
              <button
                type="button"
                onClick={() => setActiveStage((prev) => (prev > 0 ? prev - 1 : arrangementStages.length - 1))}
                className="text-xs font-bold text-navy-600 hover:text-navy-900"
              >
                {isUrdu ? "← پچھلا مرحلہ" : "← Previous Stage"}
              </button>

              <button
                type="button"
                onClick={() => setActiveStage((prev) => (prev < arrangementStages.length - 1 ? prev + 1 : 0))}
                className="text-xs font-bold text-gold-700 hover:text-navy-900"
              >
                {isUrdu ? "اگلا مرحلہ →" : "Next Stage →"}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Labeled Illustration of the Future Family Portal */}
      <section className="py-16 lg:py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-navy-900 text-white p-8 sm:p-12 border-2 border-gold-400/40 shadow-soft-xl space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-navy-800 pb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-gold-400">
                {isUrdu ? "مستقبل کی ٹیکنالوجی کا خاکہ" : "Planned Architecture Blueprint"}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                {isUrdu ? "محفوظ فیملی رپورٹنگ پورٹل کا تصوراتی ڈیزائن" : "The Mehrban Private Family Care Portal"}
              </h3>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-400/20 text-gold-300 text-xs font-bold border border-gold-400/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{isUrdu ? "فیز 2 کیلئے زیرِ منصوبہ بندی" : "Planned for Phase 2 Integration"}</span>
            </div>
          </div>

          {/* Interactive Mockup Visual Representation */}
          <div className="rounded-2xl bg-navy-950 p-6 sm:p-8 border border-navy-800 space-y-6">
            {/* Top Bar of the Mockup */}
            <div className="flex flex-wrap items-center justify-between gap-4 bg-navy-900/80 p-4 rounded-xl border border-navy-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold-400/20 border border-gold-400 text-gold-400 flex items-center justify-center font-bold">
                  MC
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">
                    {isUrdu ? "محترمہ والدہ صاحبہ — ڈیلی کیئر ڈیش بورڈ" : "Patient: Begum Shahnaz (Model Preview)"}
                  </h4>
                  <p className="text-[11px] text-cream-300">
                    {isUrdu ? "لاہور، ماڈل ٹاؤن • نرسنگ شفٹ: صبح 9 تا شام 5" : "Lahore, Model Town • Assigned: Sr. Caregiver Fatima B."}
                  </p>
                </div>
              </div>
              <span className="text-xs px-3 py-1 rounded-full bg-sage-500/20 text-sage-300 border border-sage-500/30">
                {isUrdu ? "سیشن فعال ہے" : "Active Visit Verified"}
              </span>
            </div>

            {/* Simulated Live Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-navy-900/60 border border-navy-800">
                <span className="text-[11px] text-cream-300 block">
                  {isUrdu ? "بلڈ پریشر (آج صبح)" : "Morning Resting Blood Pressure"}
                </span>
                <span className="text-xl font-extrabold text-gold-300 mt-1 block">126 / 82 mmHg</span>
                <span className="text-[10px] text-sage-400">{isUrdu ? "نارمل رینج میں" : "Within doctor target"}</span>
              </div>

              <div className="p-4 rounded-xl bg-navy-900/60 border border-navy-800">
                <span className="text-[11px] text-cream-300 block">
                  {isUrdu ? "بلڈ شوگر (نہار منہ)" : "Fasting Blood Sugar"}
                </span>
                <span className="text-xl font-extrabold text-gold-300 mt-1 block">112 mg/dL</span>
                <span className="text-[10px] text-sage-400">{isUrdu ? "بہترین کنٹرول" : "Normal fasting"}</span>
              </div>

              <div className="p-4 rounded-xl bg-navy-900/60 border border-navy-800">
                <span className="text-[11px] text-cream-300 block">
                  {isUrdu ? "ادویات کا شیڈول" : "Daily Medication Status"}
                </span>
                <span className="text-xl font-extrabold text-white mt-1 block">100% Completed</span>
                <span className="text-[10px] text-cream-300">{isUrdu ? "دوپہر اور شام تصدیق شدہ" : "Verified by caregiver"}</span>
              </div>
            </div>

            <p className="text-xs text-cream-300/80 italic text-center">
              {isUrdu
                ? "* نوٹ: یہ تصویر فیز 2 میں نافذ ہونے والے پرائیویٹ فیملی پورٹل کا تصدیق شدہ فنکشنل خاکہ ہے تاکہ اوورسیز فیملیز کو مستقبل کی سہولت سے آگاہ کیا جا سکے۔"
                : "* Architectural Notice: This is a clearly designated visual blueprint of our planned Phase 2 family authorization dashboard. In Phase 1, all reports are coordinated seamlessly via our dedicated WhatsApp Care Manager."}
            </p>
          </div>

          <div className="text-center pt-2">
            <Link
              href="/book-care?plan=overseas"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gold-400 text-navy-900 font-extrabold text-sm shadow-soft-md hover:bg-gold-500 transition-colors"
            >
              <span>{isUrdu ? "اوورسیز نگہداشت مشیر سے رابطہ کریں" : "Schedule an Overseas Consultation Call"}</span>
              <ArrowIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
