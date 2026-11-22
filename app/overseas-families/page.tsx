"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
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

  const overseasConcerns = [
    {
      title: isUrdu ? "ادویات کے چھوٹ جانے کا خوف" : "Missed Medications & Dosing Errors",
      desc: isUrdu
        ? "والدین تنہائی یا کمزوری کی وجہ سے شوگر یا بی پی کی اہم دوائی کھانا بھول جاتے ہیں۔"
        : "Worrying from thousands of miles away whether morning and evening clinical prescriptions are taken accurately.",
    },
    {
      title: isUrdu ? "اچانک گرنے یا ہنگامی صورتحال کا دھڑکا" : "Fear of Sudden Falls & Night Emergencies",
      desc: isUrdu
        ? "رات کے وقت باتھ روم جاتے ہوئے پھسل جانا یا اچانک بلڈ پریشر خطرناک حد تک بڑھ جانا۔"
        : "Uncertainty over bathroom slips, nocturnal dizziness, or delayed response during acute health fluctuations.",
    },
    {
      title: isUrdu ? "بزرگوں کی خاموش اداسی اور تنہائی" : "Silent Loneliness & Emotional Isolation",
      desc: isUrdu
        ? "بچوں کے پردیس چلے جانے کے بعد گھر کی خاموشی اور بات چیت کی کمی بزرگوں کو توڑ دیتی ہے۔"
        : "Watching beloved parents quietly endure social loneliness and loss of cheerful daily conversation.",
    },
    {
      title: isUrdu ? "غیر تصدیق شدہ ملازمین کا خطرہ" : "Unverified Staff Security Risks",
      desc: isUrdu
        ? "غیر پیشہ ور یا بغیر تصدیق کے رکھے گئے ملازمین کی جانب سے بدسلوکی یا غفلت کا خدشہ۔"
        : "Anxiety surrounding untrusted local domestic staff entering the elderly family home without supervision.",
    },
  ];

  const overseasPillars = [
    {
      step: "01",
      title: isUrdu ? "وقت کے فرق کے مطابق رابطہ" : "Time-Zone Conscious Communication",
      desc: isUrdu
        ? "ہم برطانیہ، مشرقِ وسطیٰ، کینیڈا اور امریکہ کے اوقات کو مدنظر رکھ کر آپ سے رابطہ کرتے ہیں۔"
        : "Coordinated update channels aligning with your work hours in London, Dubai, Toronto, Riyadh, or New York.",
    },
    {
      step: "02",
      title: isUrdu ? "ہر وزٹ کے بعد تفصیلی واٹس ایپ سمری" : "Transparent Structured WhatsApp Briefs",
      desc: isUrdu
        ? "بی پی، شوگر چارٹ، خوراک اور بزرگ کے مزاج کی سمری فیملی گروپ میں باقاعدگی سے شیئر کی جاتی ہے۔"
        : "Detailed bulleted debriefs after visits: vitals readings, meal intake, sleep quality, and caregiver observations.",
    },
    {
      step: "03",
      title: isUrdu ? "ماہانہ ادویات اور راشن کی کوآرڈینیشن" : "Prescription & Medical Logistics Support",
      desc: isUrdu
        ? "ہم باقاعدگی سے چیک کرتے ہیں کہ والدین کی دوائیاں ختم نہ ہوں اور مستند فارمیسی سے منگوائی جائیں۔"
        : "Auditing medication boxes and coordinating safe pharmacy refills so vital prescriptions never run out.",
    },
    {
      step: "04",
      title: isUrdu ? "ویڈیو کال پر بات چیت میں تعاون" : "Facilitating Family Video Connections",
      desc: isUrdu
        ? "ہمارا نگہداشت کار بزرگوں کو اسمارٹ فون پر ویڈیو کال آن کر کے بچوں اور پوتوں پوتیوں سے بات کرواتا ہے۔"
        : "Helping tech-hesitant elderly parents answer WhatsApp video calls comfortably to see their grandchildren.",
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
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-400/20 text-gold-300 text-xs font-bold uppercase tracking-wider border border-gold-400/30">
                <Globe2 className="w-4 h-4" />
                <span>{isUrdu ? "پردیس میں مقیم پاکستانیوں کے لیے" : "Specialized Care for Overseas Pakistanis"}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
                {isUrdu ? (
                  <span>
                    دوریاں ہزاروں میل کی،{" "}
                    <span className="text-gold-400 font-serif italic">دیکھ بھال ہمیشہ قریب۔</span>
                  </span>
                ) : (
                  <span>
                    Miles Apart.{" "}
                    <span className="text-gold-400 font-serif italic">Always Connected</span> Through Care.
                  </span>
                )}
              </h1>

              <p className="text-lg sm:text-xl text-cream-200 leading-relaxed font-light">
                {isUrdu
                  ? "ہم سمجھتے ہیں کہ پردیس میں رہتے ہوئے والدین کی فکر کس قدر ستاتی ہے۔ مہربان کیئر پاکستان میں آپ کے والدین کے لیے باوقار نگہبان اور آپ کے دل کا سکون ہے۔"
                  : "We understand the quiet heartache carried by overseas children. When miles separate you from aging parents in Pakistan, Mehrban Care stands as your trusted, compassionate family presence on the ground."}
              </p>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  href="/book-care?plan=overseas"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gold-400 text-navy-900 font-bold text-sm shadow-soft-md hover:bg-gold-500 transition-colors"
                >
                  <CalendarCheck className="w-4 h-4 text-navy-900" />
                  <span>{isUrdu ? "والدین کی دیکھ بھال پر بات چیت کریں" : "Discuss Care for Your Parents"}</span>
                  <ArrowIcon className="w-4 h-4" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-cream-200/30 text-cream-100 font-semibold text-sm hover:bg-white/10 transition-colors"
                >
                  <Phone className="w-4 h-4 text-gold-400" />
                  <span>{isUrdu ? "واٹس ایپ پر مشاورت کریں" : "Consult via WhatsApp"}</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-gold-400/40 aspect-[4/5] bg-navy-950">
                <Image
                  src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=85"
                  alt="An overseas Pakistani adult talking to elderly parent through a warm video call"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover"
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
            </div>
          </div>
        </div>
      </section>

      {/* The 4 Anxieties We Relieve */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-600">
            {isUrdu ? "پردیسیوں کی دلی فکر" : "The Burdens You Carry Abroad"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900">
            {isUrdu
              ? "وہ چار خوف جو ہر اوورسیز پاکستانی کو بے چین رکھتے ہیں"
              : "The Four Worries We Lift From Your Shoulders"}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {overseasConcerns.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-white border border-navy-900/10 shadow-soft-sm hover:border-gold-400/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-gold-50 text-gold-700 flex items-center justify-center mb-6">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-navy-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-navy-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
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
