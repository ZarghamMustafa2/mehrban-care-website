"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { Accordion, AccordionItem } from "@/components/ui/Accordion";
import { ArrowRight, ArrowLeft, HelpCircle } from "lucide-react";

export function FaqPreview() {
  const { isUrdu, t } = useLanguage();
  const ArrowIcon = isUrdu ? ArrowLeft : ArrowRight;

  const faqItems: AccordionItem[] = [
    {
      id: "faq-1",
      question: isUrdu
        ? "آپ نگہداشت کاروں کی جانچ پڑتال اور تصدیق کیسے کرتے ہیں؟"
        : "How do you select and vet caregivers?",
      answer: isUrdu
        ? "ہمارا 4 مرحلہ وار کڑا تصدیقی نظام ہے: نادرا بائیو میٹرک شناختی کارڈ تصدیق، مقامی تھانے کی پولیس کلیئرنس، سابقہ مریضوں اور ڈاکٹرز کے حوالہ جات کی تصدیق، اور بزرگوں کی نفسیات، گرنے سے بچاؤ اور حفظانِ صحت کی جامع ٹریننگ۔"
        : "Every caregiver undergoes a rigorous 4-stage vetting protocol: biometric government identity checks, local police clearance certificates, past employer and physician reference audits, and specialized eldercare safety training.",
    },
    {
      id: "faq-2",
      question: isUrdu
        ? "کیا آپ کے پاس مرد اور خواتین دونوں نگہداشت کار موجود ہیں؟"
        : "Are both male and female caregivers available?",
      answer: isUrdu
        ? "جی بالکل۔ ہم اپنے ثقافتی اور اسلامی اقدار کا مکمل احترام کرتے ہیں۔ بزرگ خواتین کی ذاتی نگہداشت کے لیے صرف باحجاب و تربیت یافتہ خواتین کیئر گیورز، اور بزرگ حضرات کے لیے مرد کیئر گیورز تعینات کیے جاتے ہیں۔"
        : "Yes, absolutely. We strictly honor cultural modesty and personal preferences. Female caregivers are assigned to elderly mothers and ladies, while male caregivers assist elderly fathers and gentlemen.",
    },
    {
      id: "faq-3",
      question: isUrdu
        ? "ایک نگہداشت کار (کیئر گیور) اور نرس میں کیا فرق ہے؟"
        : "What is the difference between a caregiver and a nurse?",
      answer: isUrdu
        ? "کیئر گیور روزمرہ زندگی کے غیر طبی معمولات میں مدد دیتا ہے—جیسے کھانا پیش کرنا، ذاتی صفائی، غسل، چہل قدمی، ادویات کے وقت کی یاد دہانی اور مخلص رفاقت۔ جبکہ مستند نرس ڈاکٹر کے نسخے کے مطابق کلینیکل کام انجام دیتی ہے—جیسے زخموں کی پٹی اور طبی ہدایات پر عمل۔"
        : "A caregiver assists with non-medical daily living activities (meals, hygiene, mobility, medication reminders, companionship). A home nurse provides clinical nursing interventions (wound dressing, catheter care, IV monitoring) strictly prescribed by a physician.",
    },
    {
      id: "faq-4",
      question: isUrdu
        ? "مہربان کیئر اس وقت کن شہروں میں خدمات فراہم کر رہی ہے؟"
        : "In which cities does Mehrban Care operate?",
      answer: isUrdu
        ? "ہم فی الوقت لاہور، اسلام آباد / راولپنڈی، اور ملتان میں خدمات کے لیے رابطے قبول کرتے ہیں۔ سروس کی فراہمی کا انحصار متعلقہ علاقے اور عملے کی دستیابی پر ہوتا ہے۔ اپنے والدین کے علاقے میں دستیابی کی تصدیق کے لیے برائے مہربانی ہم سے رابطہ فرمائیں۔"
        : "We currently review care inquiries and provide services in Lahore, Islamabad/Rawalpindi, and Multan. Service availability depends on exact neighborhood location and caregiver allocation. Please contact us to confirm service availability in your parents' locality.",
    },
    {
      id: "faq-5",
      question: isUrdu
        ? "بیرون ملک مقیم بچوں کو والدین کی خیریت سے کیسے آگاہ رکھا جاتا ہے؟"
        : "How are overseas children kept updated on their parents' daily care?",
      answer: isUrdu
        ? "ہم اوورسیز فیملیز کو ہر وزٹ کے بعد تفصیلی واٹس ایپ سمری، بلڈ پریشر اور شوگر کا ریکارڈ، اور ادویات کی رپورٹس فراہم کرتے ہیں۔ اس کے علاوہ ہمارا کیئر مینیجر بچوں سے براہِ راست رابطے میں رہتا ہے۔"
        : "We bridge distance through proactive communication. Overseas sons and daughters receive regular structured WhatsApp updates after key visits, detailing vital sign logs, dietary intake, and mood. You also have a direct line to our Care Coordinator.",
    },
    {
      id: "faq-6",
      question: isUrdu
        ? "ابتدائی مشاورت کے بعد نگہداشت کا آغاز کتنی جلدی ہو سکتا ہے؟"
        : "How quickly can care be arranged after the initial consultation?",
      answer: isUrdu
        ? "تفصیلی خاندانی مشاورت اور مناسب نگہداشت کار کے انتخاب کے بعد عام طور پر 24 سے 48 گھنٹوں میں نگہداشت کا باقاعدہ آغاز ہو جاتا ہے۔ ہسپتال سے اچانک ڈسچارج جیسی فوری ضرورت کی صورت میں ہم ترجیحی بنیادوں پر تیز ترین انتظام کرتے ہیں۔"
        : "Care arrangements are typically established within 24 to 48 hours following family consultation and caregiver matching. Urgent post-hospital discharge situations are prioritized.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-cream-100 border-b border-navy-900/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-14">
          <span className="text-xs md:text-sm font-bold tracking-widest uppercase text-gold-600">
            {t("faq_eyebrow")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight">
            {t("faq_heading")}
          </h2>
          <div className="w-16 h-1 bg-gold-400 mx-auto rounded-full mt-2" />
        </div>

        {/* Accordion */}
        <Accordion items={faqItems} />

        {/* View All FAQ link */}
        <div className="mt-12 text-center">
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 text-sm font-bold text-navy-900 hover:text-gold-600 transition-colors"
          >
            <span>{isUrdu ? "تمام عمومی سوالات کے تفصیلی جوابات پڑھیں" : "View Comprehensive FAQ Knowledge Base"}</span>
            <ArrowIcon className="w-4 h-4 text-gold-500" />
          </Link>
        </div>
      </div>
    </section>
  );
}
