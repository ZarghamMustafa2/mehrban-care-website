"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { servicesData, DetailedService } from "@/lib/servicesData";
import {
  Compass,
  User,
  Users,
  Activity,
  Heart,
  Clock,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  ShieldCheck,
  AlertCircle,
  CheckCircle2,
  CalendarCheck,
  Stethoscope,
  Moon,
  Sun,
  Home,
} from "lucide-react";

export function SmartCareFinder() {
  const { isUrdu, t } = useLanguage();
  const ArrowIcon = isUrdu ? ArrowLeft : ArrowRight;
  const BackArrowIcon = isUrdu ? ArrowRight : ArrowLeft;

  // Step 1: Who needs care?
  // Step 2: What kind of assistance?
  // Step 3: What duration?
  // Step 4: Results
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [recipient, setRecipient] = useState<string>("parent");
  const [assistanceNeed, setAssistanceNeed] = useState<string>("daily-personal");
  const [preferredDuration, setPreferredDuration] = useState<string>("2-4h");

  // Step 1 Options
  const recipientOptions = [
    {
      id: "parent",
      labelEn: "Elderly Parent (Mother / Father)",
      labelUr: "والدہ یا والد محترم",
      descEn: "Seeking respectful companionship, routine prompts, and safety at home.",
      descUr: "گھر میں باوقار رفاقت، نماز و خوراک کے اوقات اور حفاظت کے لیے۔",
      icon: Heart,
    },
    {
      id: "family",
      labelEn: "Other Senior Family Member",
      labelUr: "خاندان کا کوئی دیگر معزز بزرگ",
      descEn: "Grandparent, uncle, aunt, or elderly relative needing personalized care.",
      descUr: "دادا، دادی، نانا، نانی یا کوئی دیگر بزرگ رشتہ دار جنہیں توجہ درکار ہو۔",
      icon: Users,
    },
    {
      id: "post-hospital",
      labelEn: "Post-Hospital Recovery Patient",
      labelUr: "ہسپتال سے ڈسچارج کے بعد صحتیابی",
      descEn: "Assistance with recovery, wound oversight, vitals, or post-operative care.",
      descUr: "سرجری یا بیماری کے بعد گھر پر طبی نگرانی، ڈریسنگ اور معمولات میں مدد۔",
      icon: Stethoscope,
    },
    {
      id: "other",
      labelEn: "Specialized Living Support",
      labelUr: "خصوصی یا دیگر گھریلو ضروریات",
      descEn: "Tailored daytime help or continuous supervision for unique routines.",
      descUr: "منفرد معمولات، رات کے وقت بیداری یا ہمہ وقتی خاندانی ضرورت۔",
      icon: User,
    },
  ];

  // Step 2 Options
  const needOptions = [
    {
      id: "daily-personal",
      labelEn: "Daily Personal Assistance",
      labelUr: "ذاتی صفائی اور روزمرہ معاونت",
      descEn: "Bathing, dressing, light indoor mobility, and hydration.",
      descUr: "غسل، شاور، کپڑے بدلنے، اور معمول کی چہل قدمی میں سہارا۔",
      icon: Heart,
    },
    {
      id: "monitoring",
      labelEn: "Health & Vitals Monitoring",
      labelUr: "بلڈ پریشر اور شوگر مانیٹرنگ",
      descEn: "Tracking blood pressure, sugar logs, and doctor prescriptions.",
      descUr: "بی پی، بلڈ شوگر کا باقاعدہ اندراج اور ادویات کی یاد دہانی۔",
      icon: Activity,
    },
    {
      id: "nursing",
      labelEn: "Home Nursing & Clinical Oversight",
      labelUr: "گھریلو نرسنگ اور کلینیکل نگرانی",
      descEn: "Supervised clinical care, wound dressing, and catheter hygiene.",
      descUr: "ماہر نرس کی زیرِ نگرانی زخموں کی ڈریسنگ اور طبی دیکھ بھال۔",
      icon: Stethoscope,
    },
    {
      id: "full-day",
      labelEn: "Full-Day or Overnight Vigilance",
      labelUr: "دن بھر یا رات کے وقت مکمل نگہداشت",
      descEn: "Continuous support throughout the day or dedicated night watch.",
      descUr: "دن بھر کی مکمل دیکھ بھال یا رات کو گرنے سے بچاؤ کی بیداری۔",
      icon: Moon,
    },
    {
      id: "companionship",
      labelEn: "Companionship & Social Uplift",
      labelUr: "مخلص رفاقت اور دلجوئی",
      descEn: "Meaningful conversation, reading, prayer accompaniment, and walks.",
      descUr: "ہمدردانہ گفتگو، کتاب خوانی، نماز میں رفاقت اور چہل قدمی۔",
      icon: Sun,
    },
    {
      id: "not-sure",
      labelEn: "Not Sure (Need Advisory)",
      labelUr: "ابھی واضح نہیں (مشاورت درکار ہے)",
      descEn: "We will help you evaluate during the initial consultation.",
      descUr: "ہمارے نگہداشت مشیر سے گفتگو کے بعد ضرورت کا تعین کریں۔",
      icon: Compass,
    },
  ];

  // Step 3 Options
  const durationOptions = [
    {
      id: "occasional",
      labelEn: "Occasional / Scheduled Check-ins",
      labelUr: "وقتاً فوقتاً یا مخصوص وزٹس",
      descEn: "Periodic monitoring visits or accompaniment to doctor appointments.",
      descUr: "ہفتے میں چند وزٹس یا ڈاکٹر کے پاس لے جانے کی معاونت۔",
    },
    {
      id: "2-4h",
      labelEn: "2 to 4 Hours Daily (Part-Time)",
      labelUr: "روزانہ 2 سے 4 گھنٹے (پارٹ ٹائم)",
      descEn: "Ideal for morning hygiene, medicine prompts, and lunch support.",
      descUr: "صبح کی تیاری، ادویات اور دوپہر کے کھانے کے لیے موزوں۔",
    },
    {
      id: "8-12h",
      labelEn: "8 to 12 Hours (Full Daytime / Night Shift)",
      labelUr: "8 سے 12 گھنٹے (ڈے شفٹ یا نائٹ شفٹ)",
      descEn: "Dedicated attention while family members are at work or resting.",
      descUr: "دفتر کے اوقات میں یا رات کے وقت مکمل ذہنی سکون کے لیے۔",
    },
    {
      id: "live-in",
      labelEn: "24/7 Dedicated Live-In Care",
      labelUr: "24 گھنٹے ہمہ وقتی لائیو ان دیکھ بھال",
      descEn: "Continuous around-the-clock caregiver presence in the home.",
      descUr: "گھر پر مستقل رہائش پذیر نگہداشت کار کا قیام۔",
    },
    {
      id: "not-sure",
      labelEn: "Flexible / Not Sure Yet",
      labelUr: "لچکدار معمول / ابھی فیصلہ نہیں ہوا",
      descEn: "Explore custom timing based on family requirements.",
      descUr: "مشاورت کے دوران مناسب دورانیے کا تعین فرمائیں۔",
    },
  ];

  // Rule-based matching engine (Transparent & Informational)
  const getRecommendedServices = (): DetailedService[] => {
    let slugs: string[] = [];

    if (assistanceNeed === "nursing" || recipient === "post-hospital") {
      slugs = ["home-nursing", "monitoring", "doctor-visits"];
    } else if (assistanceNeed === "monitoring") {
      slugs = ["monitoring", "daily-care", "doctor-visits"];
    } else if (assistanceNeed === "daily-personal") {
      slugs = ["hygiene-care", "daily-care", "monitoring"];
    } else if (assistanceNeed === "full-day" || preferredDuration === "live-in" || preferredDuration === "8-12h") {
      slugs = ["live-in-care", "daily-care", "hygiene-care"];
    } else if (assistanceNeed === "companionship") {
      slugs = ["daily-care", "doctor-visits", "overseas-support"];
    } else {
      // General default recommendations
      slugs = ["daily-care", "monitoring", "overseas-support"];
    }

    return servicesData.filter((s) => slugs.includes(s.slug));
  };

  const recommended = getRecommendedServices();

  const handleReset = () => {
    setCurrentStep(1);
    setRecipient("parent");
    setAssistanceNeed("daily-personal");
    setPreferredDuration("2-4h");
  };

  return (
    <section id="care-finder" className="py-20 lg:py-28 bg-cream-50 border-b border-navy-900/5 scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-400/15 border border-gold-400/30 text-navy-900 text-xs font-bold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5 text-gold-600" />
            <span>{isUrdu ? "رہنمائی نگہداشت گائیڈ" : "Smart Care Finder"}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight">
            {isUrdu ? "کیا آپ فیصلہ نہیں کر پا رہے کہ کون سی خدمت درکار ہے؟" : "Not Sure Which Care Service You Need?"}
          </h2>

          <p className="text-base text-navy-700 leading-relaxed">
            {isUrdu
              ? "صرف تین آسان سوالات کے جواب دیں اور اپنے بزرگ کی صورتحال کے مطابق موزوں گھریلو خدمات کی ابتدائی تجاویز حاصل کریں۔"
              : "Answer three simple questions to explore suitable in-home care options tailored to your family's daily routine."}
          </p>
        </div>

        {/* Wizard Card Container */}
        <div className="rounded-3xl bg-white border border-navy-900/10 shadow-soft-lg overflow-hidden">
          {/* Progress Indicator */}
          <div className="bg-navy-900 px-6 py-4 text-white">
            <div className="flex items-center justify-between text-xs font-semibold mb-2">
              <span className="text-gold-300">
                {currentStep < 4
                  ? isUrdu
                    ? `مرحلہ ${currentStep} از 3`
                    : `Step ${currentStep} of 3`
                  : isUrdu
                  ? "تجاویز تیار ہیں"
                  : "Recommended Options"}
              </span>
              <span className="text-cream-300">
                {currentStep === 1 && (isUrdu ? "مرحلہ 1: نگہداشت کے حقدار" : "Recipient Profile")}
                {currentStep === 2 && (isUrdu ? "مرحلہ 2: مطلوبہ معاونت" : "Assistance Needs")}
                {currentStep === 3 && (isUrdu ? "مرحلہ 3: ترجیحی دورانیہ" : "Schedule Preference")}
                {currentStep === 4 && (isUrdu ? "نتائج کا خلاصہ" : "Personalized Matches")}
              </span>
            </div>

            {/* Visual Step Bar */}
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map((stepIdx) => (
                <div
                  key={stepIdx}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    currentStep >= stepIdx ? "bg-gold-400" : "bg-navy-800"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Wizard Content Body */}
          <div className="p-6 sm:p-10">
            {/* STEP 1: Who needs care? */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-navy-900 mb-1">
                    {isUrdu ? "دیکھ بھال کس کے لیے درکار ہے؟" : "Who needs in-home care?"}
                  </h3>
                  <p className="text-xs sm:text-sm text-navy-600">
                    {isUrdu
                      ? "برائے مہربانی اس معزز فرد کا انتخاب کریں جس کی رفاقت یا خدمت درکار ہے۔"
                      : "Please select the person who will be receiving care in the home."}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {recipientOptions.map((opt) => {
                    const Icon = opt.icon;
                    const isSelected = recipient === opt.id;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setRecipient(opt.id)}
                        className={`p-5 rounded-2xl border text-left rtl:text-right transition-all flex items-start gap-4 ${
                          isSelected
                            ? "bg-gold-50/70 border-gold-400 ring-2 ring-gold-400/30 shadow-soft-sm"
                            : "bg-cream-50/50 border-gray-200 hover:border-gold-300 hover:bg-white"
                        }`}
                      >
                        <div
                          className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${
                            isSelected
                              ? "bg-navy-900 text-gold-400"
                              : "bg-navy-100 text-navy-700"
                          }`}
                        >
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="space-y-1">
                          <h4 className="text-sm font-bold text-navy-900">
                            {isUrdu ? opt.labelUr : opt.labelEn}
                          </h4>
                          <p className="text-xs text-navy-600 leading-relaxed">
                            {isUrdu ? opt.descUr : opt.descEn}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(2)}
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-navy-900 text-white font-bold text-sm hover:bg-navy-800 transition-colors shadow-soft-sm"
                  >
                    <span>{isUrdu ? "اگلا مرحلہ: مطلوبہ معاونت" : "Continue to Assistance Needs"}</span>
                    <ArrowIcon className="w-4 h-4 text-gold-400" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: What kind of assistance? */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-navy-900 mb-1">
                    {isUrdu ? "کس نوعیت کی مدد درکار ہے؟" : "What kind of assistance is primary?"}
                  </h3>
                  <p className="text-xs sm:text-sm text-navy-600">
                    {isUrdu
                      ? "وہ اہم پہلو منتخب کریں جس میں بزرگ کو روزمرہ آسانی درکار ہے۔"
                      : "Choose the main focus of daily living or clinical support."}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {needOptions.map((opt) => {
                    const Icon = opt.icon;
                    const isSelected = assistanceNeed === opt.id;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setAssistanceNeed(opt.id)}
                        className={`p-5 rounded-2xl border text-left rtl:text-right transition-all flex flex-col justify-between ${
                          isSelected
                            ? "bg-gold-50/70 border-gold-400 ring-2 ring-gold-400/30 shadow-soft-sm"
                            : "bg-cream-50/50 border-gray-200 hover:border-gold-300 hover:bg-white"
                        }`}
                      >
                        <div className="space-y-2">
                          <div
                            className={`w-10 h-10 rounded-xl flex items-center justify-center mb-2 ${
                              isSelected
                                ? "bg-navy-900 text-gold-400"
                                : "bg-navy-100 text-navy-700"
                            }`}
                          >
                            <Icon className="w-5 h-5" />
                          </div>
                          <h4 className="text-sm font-bold text-navy-900">
                            {isUrdu ? opt.labelUr : opt.labelEn}
                          </h4>
                          <p className="text-xs text-navy-600 leading-relaxed">
                            {isUrdu ? opt.descUr : opt.descEn}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>

                <div className="pt-4 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(1)}
                    className="inline-flex items-center gap-1.5 px-6 py-3 rounded-full border border-gray-300 text-navy-800 font-semibold text-xs sm:text-sm hover:bg-gray-50 transition-colors"
                  >
                    <BackArrowIcon className="w-4 h-4" />
                    <span>{isUrdu ? "پچھلا مرحلہ" : "Back"}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setCurrentStep(3)}
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-navy-900 text-white font-bold text-sm hover:bg-navy-800 transition-colors shadow-soft-sm"
                  >
                    <span>{isUrdu ? "اگلا مرحلہ: اوقات کار" : "Continue to Schedule"}</span>
                    <ArrowIcon className="w-4 h-4 text-gold-400" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: Duration preference */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-navy-900 mb-1">
                    {isUrdu ? "دیکھ بھال کا ترجیحی دورانیہ کیا ہے؟" : "What care duration is preferred?"}
                  </h3>
                  <p className="text-xs sm:text-sm text-navy-600">
                    {isUrdu
                      ? "وہ وقت منتخب کریں جو آپ کے بزرگ اور خاندان کے شیڈول کے مطابق ہو۔"
                      : "Select the typical hours per visit that best suit your senior."}
                  </p>
                </div>

                <div className="space-y-3">
                  {durationOptions.map((opt) => {
                    const isSelected = preferredDuration === opt.id;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setPreferredDuration(opt.id)}
                        className={`w-full p-4 sm:p-5 rounded-2xl border text-left rtl:text-right transition-all flex items-center justify-between gap-4 ${
                          isSelected
                            ? "bg-gold-50/70 border-gold-400 ring-2 ring-gold-400/30 shadow-soft-sm"
                            : "bg-cream-50/50 border-gray-200 hover:border-gold-300 hover:bg-white"
                        }`}
                      >
                        <div>
                          <h4 className="text-sm sm:text-base font-bold text-navy-900">
                            {isUrdu ? opt.labelUr : opt.labelEn}
                          </h4>
                          <p className="text-xs text-navy-600 mt-0.5">
                            {isUrdu ? opt.descUr : opt.descEn}
                          </p>
                        </div>
                        <div
                          className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                            isSelected
                              ? "border-navy-900 bg-navy-900 text-gold-400"
                              : "border-gray-300 bg-white"
                          }`}
                        >
                          {isSelected && <CheckCircle2 className="w-4 h-4" />}
                        </div>
                      </button>
                    );
                  })}
                </div>

                <div className="pt-4 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(2)}
                    className="inline-flex items-center gap-1.5 px-6 py-3 rounded-full border border-gray-300 text-navy-800 font-semibold text-xs sm:text-sm hover:bg-gray-50 transition-colors"
                  >
                    <BackArrowIcon className="w-4 h-4" />
                    <span>{isUrdu ? "پچھلا مرحلہ" : "Back"}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setCurrentStep(4)}
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gold-400 text-navy-900 font-extrabold text-sm hover:bg-gold-500 transition-colors shadow-soft-md"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>{isUrdu ? "تجاویز دیکھیں" : "View Recommended Services"}</span>
                  </button>
                </div>
              </div>
            )}

            {/* STEP 4: Results & Discovery Options */}
            {currentStep === 4 && (
              <div className="space-y-8 animate-fadeIn">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-gold-600">
                      {isUrdu ? "آپ کے جوابات پر مبنی تجاویز" : "Based On Your Preferences"}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-navy-900 mt-0.5">
                      {isUrdu ? "موزوں گھریلو نگہداشت کی خدمات" : "Suitable In-Home Care Services"}
                    </h3>
                  </div>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-navy-600 hover:text-navy-900 transition-colors self-start sm:self-auto"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>{isUrdu ? "دوبارہ تلاش کریں" : "Start Over"}</span>
                  </button>
                </div>

                {/* Explicit Non-Medical Informational Disclaimer */}
                <div className="p-4 rounded-2xl bg-gold-50/80 border border-gold-300/70 flex items-start gap-3 text-xs sm:text-sm text-navy-800">
                  <AlertCircle className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
                  <div className="leading-relaxed">
                    <span className="font-bold mr-1">
                      {isUrdu ? "اہم معلوماتی وضاحت:" : "Informational Guide Notice:"}
                    </span>
                    <span>
                      {isUrdu
                        ? "یہ گائیڈ محض مناسب سروس کے انتخاب میں رہنمائی کے لیے ہے اور کسی طبی تشخیص یا حتمی علاج کا متبادل نہیں۔ اصل نگہداشت کا تعین خاندانی مشاورت اور پیشہ ورانہ جائزے کے بعد ہی کیا جاتا ہے۔"
                        : "This service discovery interface is an informational navigation guide and does not constitute a medical diagnosis or guaranteed care prescription. All care arrangements are confirmed following an in-person or video family consultation."}
                    </span>
                  </div>
                </div>

                {/* Recommended Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {recommended.map((service) => {
                    const title = isUrdu ? service.categoryNameUr : service.categoryNameEn;
                    return (
                      <div
                        key={service.id}
                        className="rounded-2xl bg-cream-50/70 border border-navy-900/10 p-6 flex flex-col justify-between hover:border-gold-400 hover:bg-white hover:shadow-soft-md transition-all space-y-4"
                      >
                        <div className="space-y-3">
                          <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-navy-900 text-gold-300 uppercase tracking-wider inline-block">
                            {isUrdu ? service.categoryNameUr : service.categoryNameEn}
                          </span>
                          <h4 className="text-base sm:text-lg font-bold text-navy-900">
                            {t(service.titleKey as any)}
                          </h4>
                          <p className="text-xs text-navy-600 line-clamp-3 leading-relaxed">
                            {isUrdu ? service.fullDescUr : service.fullDescEn}
                          </p>
                        </div>

                        <div className="pt-3 border-t border-gray-200/60 space-y-2">
                          <Link
                            href={`/services/${service.slug}`}
                            className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-white text-navy-900 font-bold text-xs border border-navy-900/10 hover:bg-gold-50 hover:border-gold-400 transition-colors"
                          >
                            <span>{isUrdu ? "مکمل تفصیلات دیکھیں" : "View Service Details"}</span>
                            <ArrowIcon className="w-3.5 h-3.5" />
                          </Link>

                          <Link
                            href={`/book-care?service=${service.slug}`}
                            className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-navy-900 text-white font-bold text-xs hover:bg-navy-800 transition-colors shadow-soft-xs"
                          >
                            <CalendarCheck className="w-3.5 h-3.5 text-gold-400" />
                            <span>{isUrdu ? "اس خدمت کے لیے مشاورت لیں" : "Inquire for This Care"}</span>
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Final Consultation Prompt CTA Banner */}
                <div className="p-6 rounded-2xl bg-navy-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="space-y-1 text-center sm:text-left rtl:sm:text-right">
                    <h4 className="text-base font-bold text-white">
                      {isUrdu ? "مکمل انفرادی جائزہ درکار ہے؟" : "Need a Personalized Family Assessment?"}
                    </h4>
                    <p className="text-xs text-cream-200">
                      {isUrdu
                        ? "ہمارے نگہداشت مشیر سے رابطہ کر کے تفصیلی کیئر پلان پر بات چیت فرمائیں۔"
                        : "Speak with our compassionate care advisors to explore flexible daytime or live-in arrangements."}
                    </p>
                  </div>

                  <Link
                    href="/book-care"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold-400 text-navy-900 font-extrabold text-xs sm:text-sm hover:bg-gold-500 transition-colors shadow-soft-sm flex-shrink-0"
                  >
                    <span>{isUrdu ? "نگہداشت مشاورت بک کریں" : "Request a Care Consultation"}</span>
                    <ArrowIcon className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
