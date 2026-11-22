"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { Accordion, AccordionItem } from "@/components/ui/Accordion";
import {
  HelpCircle,
  Sparkles,
  Phone,
  CalendarCheck,
  ArrowRight,
  ArrowLeft,
  Search,
} from "lucide-react";

export default function FaqPage() {
  const { isUrdu, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const ArrowIcon = isUrdu ? ArrowLeft : ArrowRight;

  const categories = [
    { id: "all", labelEn: "All Questions", labelUr: "تمام سوالات" },
    { id: "request", labelEn: "Requesting Care", labelUr: "نگہداشت کی درخواست" },
    { id: "cities", labelEn: "Cities & Availability", labelUr: "شہر اور دستیابی" },
    { id: "caregivers", labelEn: "Male & Female Staff", labelUr: "مرد و خواتین عملہ" },
    { id: "schedules", labelEn: "Plans & Shifts", labelUr: "پلانز اور اوقات کار" },
    { id: "monitoring", labelEn: "Health Monitoring", labelUr: "صحت کی مانیٹرنگ" },
    { id: "overseas", labelEn: "Overseas Families", labelUr: "بیرون ملک خاندان" },
    { id: "payments", labelEn: "Payments & Quoting", labelUr: "ادائیگیاں اور کوٹیشن" },
    { id: "emergencies", labelEn: "Emergency Protocols", labelUr: "ہنگامی پروٹوکول" },
  ];

  const allFaqs: AccordionItem[] = [
    // 1. Requesting care
    {
      id: "req-1",
      category: "request",
      question: isUrdu
        ? "نگہداشت شروع کرنے کے لیے پہلا قدم کیا ہے؟"
        : "What is the very first step to request elderly home care?",
      answer: isUrdu
        ? "سب سے پہلا قدم ہماری آن لائن بکنگ یا فون کے ذریعے رابطہ کرنا ہے۔ ہمارا کیئر کوآرڈینیٹر آپ سے بات چیت کر کے بزرگ کی روزمرہ ضروریات اور صحت کا جائزہ لے گا، جس کے بعد تحریری کیئر پلان تجویز کیا جائے گا۔"
        : "You begin by submitting an inquiry via our online booking form or reaching our advisory line. A Care Coordinator reviews your loved one's mobility, medical routines, and timing to craft an initial plan.",
    },
    {
      id: "req-2",
      category: "request",
      question: isUrdu
        ? "درخواست جمع کروانے کے بعد کیئر گیور کتنی جلدی فراہم کیا جا سکتا ہے؟"
        : "How quickly can a caregiver be assigned after we reach out?",
      answer: isUrdu
        ? "عام طور پر مکمل خاندانی مشاورت، ضروریات کے تجزیے اور مناسب کیئر گیور کے انتخاب کے بعد 24 سے 48 گھنٹوں میں سروس کا باقاعدہ آغاز ہو جاتا ہے۔ ہنگامی صورتحال میں ترجیحی بنیادوں پر جلد انتظام کی کوشش کی جاتی ہے۔"
        : "Typically, care can commence within 24 to 48 hours following family consultation, assessment, and appropriate caregiver matching. Urgent post-hospital discharge situations are prioritized.",
    },

    // 2. Cities & Availability
    {
      id: "cit-1",
      category: "cities",
      question: isUrdu
        ? "مہربان کیئر اس وقت پاکستان کے کن شہروں میں خدمات فراہم کر رہی ہے؟"
        : "Which cities in Pakistan are currently covered by Mehrban Care?",
      answer: isUrdu
        ? "فی الوقت ہم لاہور، اسلام آباد اور راولپنڈی میں پائلٹ سروسز فراہم کر رہے ہیں۔ بتدریج سروس کا دائرہ کار فیصل آباد، ملتان اور کراچی تک وسیع کرنے کی منصوبہ بندی جاری ہے۔"
        : "We are currently operating dedicated pilot services in Lahore, Islamabad, and Rawalpindi. Expansion into Faisalabad, Multan, and Karachi is scheduled in upcoming operational phases.",
    },

    // 3. Male & Female Caregivers
    {
      id: "cg-1",
      category: "caregivers",
      question: isUrdu
        ? "کیا بزرگ خواتین کے لیے صرف خواتین اور بزرگ مردوں کے لیے مرد کیئر گیورز ہی فراہم کیے جاتے ہیں؟"
        : "Do you strictly assign female caregivers to elderly women and male caregivers to men?",
      answer: isUrdu
        ? "جی ہاں، بالکل۔ ہم اسلامی اقدار، حیا اور پردے کے اصولوں پر سختی سے عمل کرتے ہیں۔ بزرگ خواتین کی ذاتی نگہداشت (غسل، لباس، واش روم) کے لیے صرف باحجاب و تربیت یافتہ خواتین، اور بزرگ حضرات کے لیے مرد کیئر گیورز ہی مامور کیے جاتے ہیں۔"
        : "Yes, without exception. Cultural modesty and domestic comfort are strictly respected. Female caregivers are designated for elderly mothers and ladies, while male caregivers assist elderly gentlemen.",
    },
    {
      id: "cg-2",
      category: "caregivers",
      question: isUrdu
        ? "آپ کے نگہداشت کاروں کی تصدیق اور اسکریننگ کا کیا طریقہ کار ہے؟"
        : "How do you screen and verify your caregivers?",
      answer: isUrdu
        ? "ہمارا 4 مرحلہ وار کڑا تصدیقی نظام ہے: نادرا شناختی کارڈ تصدیق، متعلقہ تھانے کی پولیس کلیئرنس، سابقہ مریضوں اور ڈاکٹرز کے حوالہ جات کی تصدیق، اور بزرگوں کی نفسیات و سیفٹی پروٹوکولز کی جامع ٹریننگ۔"
        : "We execute a rigorous 4-stage protocol: biometric government identity checks, local police clearance certificates, past employer and physician reference audits, and specialized eldercare safety training.",
    },

    // 4. Schedules & Plans
    {
      id: "sch-1",
      category: "schedules",
      question: isUrdu
        ? "کیا ہم اپنی مرضی کے اوقات یا پارٹ ٹائم شفٹس کا انتخاب کر سکتے ہیں؟"
        : "Can we customize visit durations and choose part-time shifts?",
      answer: isUrdu
        ? "جی ہاں۔ ہم 2 سے 4 گھنٹے کے وزٹس، 6 سے 8 گھنٹے کی ڈے شفٹس، 12 گھنٹے کی نائٹ شفٹس، اور 24 گھنٹے لائیو ان کیئر کے لچکدار منصوبے پیش کرتے ہیں جنہیں آپ کے معمول کے مطابق ڈھالا جا سکتا ہے۔"
        : "Yes. We offer fully adaptable arrangements ranging from 2–4 hour check-in visits, 6–8 hour daytime shifts, 12-hour overnight watches, to 24/7 dedicated live-in companionship.",
    },

    // 5. Health Monitoring
    {
      id: "hm-1",
      category: "monitoring",
      question: isUrdu
        ? "کیا آپ کا عملہ روزانہ بلڈ پریشر اور شوگر چیک کر کے ریکارڈ رکھتا ہے؟"
        : "Do your caregivers record daily blood pressure and blood glucose?",
      answer: isUrdu
        ? "جی ہاں۔ ہمارا تربیت یافتہ عملہ روزانہ نہار منہ اور کھانے کے بعد ڈیجیٹل آلات کے ذریعے بلڈ پریشر اور شوگر چیک کر کے باقاعدہ لاگ بک میں درج کرتا ہے تاکہ ڈاکٹر کے معائنے کے وقت مکمل چارٹ دستیاب ہو۔"
        : "Yes. Trained caregivers log resting blood pressure, fasting/postprandial glucose, and SpO2 using verified digital monitors, maintaining clear logs for treating physicians and families.",
    },
    {
      id: "hm-2",
      category: "monitoring",
      question: isUrdu
        ? "کیا نگہداشت کار دوائیاں تجویز کر سکتا ہے یا نسخہ بدل سکتا ہے؟"
        : "Can your staff prescribe new medicines or alter dosages?",
      answer: isUrdu
        ? "ہرگز نہیں۔ مہربان کیئر غیر طبی ذاتی معاونت اور نرسنگ نگہداشت فراہم کرتی ہے۔ ادویات ہمیشہ مریض کے اپنے مستند ڈاکٹر کی تحریری ہدایت کے عین مطابق دی جاتی ہیں، ہمارا عملہ خود کوئی دوا تجویز یا تبدیل نہیں کرتا۔"
        : "Strictly no. Caregivers and home nurses administer medications solely according to instructions provided by the patient's registered physician. We never prescribe or modify treatments independently.",
    },

    // 6. Overseas Families
    {
      id: "os-1",
      category: "overseas",
      question: isUrdu
        ? "پردیس میں مقیم بچوں کو والدین کی دیکھ بھال کی رپورٹس کیسے ملتی ہیں؟"
        : "How do overseas family members receive updates on their parents?",
      answer: isUrdu
        ? "اوورسیز فیملیز کو ہر وزٹ کے بعد تفصیلی واٹس ایپ سمری، شوگر اور بی پی کے اعداد و شمار، اور بزرگ کے دن بھر کے احوال سے آگاہ کیا جاتا ہے۔ اس کے علاوہ کیئر ایڈوائزر سے براہِ راست رابطہ رہتا ہے۔"
        : "We send structured WhatsApp briefs after key visits detailing vitals logs, nutritional intake, and senior mood. Overseas children also have direct access to their assigned Care Manager.",
    },

    // 7. Payments & Quoting
    {
      id: "pay-1",
      category: "payments",
      question: isUrdu
        ? "نگہداشت کی فیس کا تعین کیسے کیا جاتا ہے؟"
        : "How are care fees calculated and quoted?",
      answer: isUrdu
        ? "فیس کا تعین بزرگ کی حالت (خود مختار، جزوی مدد، یا مکمل بستر پر)، شفٹ کے دورانیے، اور رہائش کے شہر کے مطابق کیا جاتا ہے۔ ابتدائی مشاورت کے بعد بغیر کسی پوشیدہ چارجز کے واضح تحریری کوٹیشن دی جاتی ہے۔"
        : "Fees are custom-calculated based on senior acuity (independent, mobility-assisted, or bedbound), daily shift duration, and city. You receive a fully transparent written quote following consultation.",
    },

    // 8. Emergencies
    {
      id: "em-1",
      category: "emergencies",
      question: isUrdu
        ? "ہنگامی طبی ضرورت پیش آنے پر عملہ کیا کرتا ہے؟"
        : "What is your emergency medical protocol?",
      answer: isUrdu
        ? "نگہداشت کے آغاز پر ہی فیملی کے نامزد کردہ ہسپتال اور معالج کے نمبرز لاگ کیے جاتے ہیں۔ کسی بھی اچانک خرابی پر عملہ فوری طور پر فیملی کو الرٹ کرتا ہے اور ایمبولینس سروس کو ہنگامی بنیادوں پر طلب کرتا ہے۔"
        : "Each senior has a customized Emergency Profile on file naming designated family contacts and preferred hospitals. In an acute crisis, the caregiver immediately alerts the family and summons emergency medical transport.",
    },
  ];

  const filteredFaqs =
    selectedCategory === "all"
      ? allFaqs
      : allFaqs.filter((item) => item.category === selectedCategory);

  return (
    <div className="bg-cream-100 min-h-screen">
      {/* Header */}
      <section className="py-16 lg:py-20 bg-white border-b border-navy-900/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-50 border border-gold-200 text-gold-700 text-xs font-bold uppercase tracking-wider">
              <HelpCircle className="w-3.5 h-3.5 text-gold-600" />
              <span>{isUrdu ? "عمومی سوالات" : "Knowledge & Questions"}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy-900 tracking-tight leading-tight">
              {isUrdu
                ? "خاندانوں کے عمومی سوالات اور جامع جوابات"
                : "Frequently Asked Questions About Our Home Care"}
            </h1>
            <p className="text-base sm:text-lg text-navy-700 leading-relaxed">
              {isUrdu
                ? "ہم اپنے طریقہ کار، حفاظت اور خدمات کے تمام پہلوؤں میں مکمل شفافیت پر یقین رکھتے ہیں۔"
                : "Find transparent answers regarding care requests, male and female caregiver vetting, scheduling, health logging, and overseas family communications."}
            </p>
          </div>
        </div>
      </section>

      {/* Category Pills Filter */}
      <section className="py-8 bg-white/70 border-b border-navy-900/5 sticky top-[73px] z-30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-auto">
          <div className="flex items-center gap-2 min-w-max pb-1">
            {categories.map((cat) => (
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

      {/* FAQ Accordion List */}
      <section className="py-16 lg:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Accordion items={filteredFaqs} allowMultiple />

        {/* Still Have Questions Box */}
        <div className="mt-16 rounded-3xl bg-white p-8 sm:p-10 border border-gold-400/30 shadow-soft-sm text-center space-y-4">
          <h3 className="text-xl font-bold text-navy-900">
            {isUrdu ? "کیا آپ کے ذہن میں کوئی مخصوص سوال باقی ہے؟" : "Have a Specific Question About Your Loved One?"}
          </h3>
          <p className="text-sm text-navy-600 max-w-md mx-auto">
            {isUrdu
              ? "ہمارے مشیرِ نگہداشت آپ سے بات کر کے ہر تفصیل پر رہنمائی کے لیے تیار ہیں۔"
              : "Our Care Advisors are always pleased to speak with family members and provide personalized clarification."}
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-navy-900 text-white font-bold text-sm hover:bg-navy-800 transition-colors"
            >
              <Phone className="w-4 h-4 text-gold-400" />
              <span>{isUrdu ? "ہم سے رابطہ فرمائیں" : "Contact Our Advisory Team"}</span>
            </Link>
            <Link
              href="/book-care"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gold-400 text-navy-900 font-bold text-sm hover:bg-gold-500 transition-colors"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>{t("hero_cta_primary")}</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
