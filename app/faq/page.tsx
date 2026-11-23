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
    // 1. Requesting care & Speed
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
        ? "ابتدائی مشاورت کے بعد نگہداشت کا آغاز کتنی جلدی ہو سکتا ہے؟"
        : "How quickly can care be arranged after the initial consultation?",
      answer: isUrdu
        ? "تفصیلی خاندانی مشاورت اور مناسب نگہداشت کار کے انتخاب کے بعد عام طور پر 24 سے 48 گھنٹوں میں نگہداشت کا باقاعدہ آغاز ہو جاتا ہے۔ ہسپتال سے اچانک ڈسچارج جیسی فوری ضرورت کی صورت میں ہم ترجیحی بنیادوں پر تیز ترین انتظام کرتے ہیں۔"
        : "Care arrangements are typically established within 24 to 48 hours following the comprehensive initial family consultation and caregiver matching. In urgent cases—such as sudden hospital discharges—our team strives to expedite the assessment and introduction.",
    },

    // 2. Cities & Availability
    {
      id: "cit-1",
      category: "cities",
      question: isUrdu
        ? "مہربان کیئر اس وقت کن شہروں میں خدمات فراہم کر رہی ہے؟"
        : "In which cities does Mehrban Care operate?",
      answer: isUrdu
        ? "ہم فی الوقت لاہور، اسلام آباد / راولپنڈی، اور ملتان میں خدمات کے لیے رابطے قبول کرتے ہیں۔ سروس کی فراہمی کا انحصار متعلقہ علاقے اور عملے کی دستیابی پر ہوتا ہے۔ اپنے والدین کے علاقے میں دستیابی کی تصدیق کے لیے برائے مہربانی ہم سے رابطہ فرمائیں۔"
        : "We currently review care inquiries and provide services in Lahore, Islamabad/Rawalpindi, and Multan. Service availability depends on exact neighborhood location and caregiver allocation. Please contact us to confirm service availability in your parents' locality.",
    },

    // 3. Caregivers, Vetting & Gender Matching
    {
      id: "cg-1",
      category: "caregivers",
      question: isUrdu
        ? "آپ نگہداشت کاروں کی جانچ پڑتال اور تصدیق کیسے کرتے ہیں؟"
        : "How do you select and vet caregivers?",
      answer: isUrdu
        ? "ہمارا 4 مرحلہ وار کڑا تصدیقی نظام ہے: نادرا بائیو میٹرک شناختی کارڈ تصدیق، متعلقہ تھانے کی پولیس کلیئرنس، سابقہ مریضوں اور ڈاکٹرز کے حوالہ جات کی تصدیق، اور بزرگوں کی نفسیات، گرنے سے بچاؤ اور حفظانِ صحت کی جامع ٹریننگ۔"
        : "Every caregiver undergoes a rigorous 4-stage vetting protocol: biometric Nadra CNIC verification, local police character clearance, verification of past family and medical references, and structured orientation in senior safety, hygiene, fall prevention, and respectful companionship.",
    },
    {
      id: "cg-2",
      category: "caregivers",
      question: isUrdu
        ? "کیا ہم مرد یا خاتون نگہداشت کار کی تخصیص کر سکتے ہیں؟"
        : "Can we request a male or female caregiver?",
      answer: isUrdu
        ? "جی بالکل۔ ہم اپنے ثقافتی اور اسلامی اقدار کا مکمل احترام کرتے ہیں۔ بزرگ خواتین کی ذاتی نگہداشت (غسل، لباس، واش روم) کے لیے صرف باحجاب و تربیت یافتہ خواتین، اور بزرگ حضرات کے لیے مرد کیئر گیورز ہی مامور کیے جاتے ہیں۔"
        : "Yes, absolutely. We strictly honor cultural modesty, domestic privacy, and personal preference. Female caregivers are designated for elderly mothers and ladies (for personal hygiene, bathing, dressing, and companionship), while male caregivers assist elderly fathers and gentlemen.",
    },
    {
      id: "cg-3",
      category: "caregivers",
      question: isUrdu
        ? "ایک نگہداشت کار (کیئر گیور) اور نرس میں کیا فرق ہے؟"
        : "What is the difference between a caregiver and a nurse?",
      answer: isUrdu
        ? "کیئر گیور روزمرہ زندگی کے غیر طبی معمولات میں مدد دیتا ہے—جیسے کھانا پیش کرنا، ذاتی صفائی، غسل، چہل قدمی، ادویات کے وقت کی یاد دہانی اور مخلص رفاقت۔ جبکہ مستند نرس ڈاکٹر کے نسخے کے مطابق کلینیکل کام انجام دیتی ہے—جیسے زخموں کی پٹی، کیتھیٹر کی دیکھ بھال اور طبی ہدایات پر عمل۔"
        : "A caregiver assists with non-medical activities of daily living (ADLs)—such as meal prep, eating, grooming, bathing, gentle mobility, medication schedule reminders, and warm companionship. A qualified home nurse provides supervised clinical support—such as aseptic wound dressing, catheter management, and administering treatments strictly prescribed by your treating physician.",
    },
    {
      id: "cg-4",
      category: "caregivers",
      question: isUrdu
        ? "اگر نگہداشت کار کسی دن دستیاب نہ ہو یا بیمار ہو جائے تو کیا ہوتا ہے؟"
        : "What happens if a caregiver is unavailable or unwell?",
      answer: isUrdu
        ? "نگہداشت میں تعطل سے بچنے کے لیے ہمارے پاس متبادل اسٹاف کا باقاعدہ نظام موجود ہے۔ اگر عملے کا کوئی فرد بیمار ہو یا چھٹی پر ہو، تو ہماری سپروائزری ٹیم بزرگ کے معمولات سے مکمل واقف تصدیق شدہ متبادل کیئر گیور فراہم کرتی ہے۔"
        : "We maintain backup relief protocols to prevent gaps in your loved one's care. If an assigned caregiver falls ill or requires scheduled off-days, our supervisory team coordinates a vetted backup caregiver who is thoroughly briefed on your parent's care routine and medical instructions.",
    },

    // 4. Schedules & Plans
    {
      id: "sch-1",
      category: "schedules",
      question: isUrdu
        ? "بستری مریضوں یا کمزور حرکت والے بزرگوں کے لیے دیکھ بھال کیسے ترتیب دی جاتی ہے؟"
        : "How is care customized for bedridden or mobility-impaired seniors?",
      answer: isUrdu
        ? "بستری مریضوں کے لیے ہم بیڈ سورز (زخموں) سے بچاؤ کے لیے ہر 2 سے 3 گھنٹے بعد کروٹ بدلنے، نرم اسفنج باتھ، جلد کی حفاظت، مکمل پردے کے ساتھ طہارت، اور فزیو تھراپسٹ کے مشورے سے ہلکی پھلکی بحالی کی مشقوں کا خصوصی اہتمام کرتے ہیں۔"
        : "For bedbound seniors, our care plans incorporate pressure sore prevention (scheduled repositioning every 2–3 hours), gentle bed-sponge baths, specialized skin hydration, incontinence care with dignity, and coordinated passive range-of-motion exercises in consultation with physical therapists.",
    },
    {
      id: "sch-2",
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
        ? "اہل خانہ کو اپنے والدین کی خیریت اور دیکھ بھال کی رپورٹس کیسے ملتی ہیں؟"
        : "How do families receive updates about their parents?",
      answer: isUrdu
        ? "اہل خانہ کو ہر وزٹ کے بعد واٹس ایپ پر تفصیلی اور شفاف سمری ملتی ہے، جس میں بلڈ پریشر، شوگر کا چارٹ، خوراک اور بزرگ کے مزاج کی رپورٹ شامل ہوتی ہے۔ پردیس میں مقیم بچوں کو کیئر کوآرڈینیٹر سے براہِ راست رابطے کی سہولت میسر رہتی ہے۔"
        : "Families receive structured, transparent updates after visits directly via WhatsApp. Summaries include resting vital sign logs (blood pressure, blood glucose where applicable), meal intake, routine observations, and family notes. Overseas family members also have direct phone access to their dedicated Care Coordinator.",
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
