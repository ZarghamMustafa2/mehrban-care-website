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
        ? "ہم بزرگ کے لیے نگہداشت کی سروس کیسے بک کر سکتے ہیں؟"
        : "How do we request and start care for an elderly parent?",
      answer: isUrdu
        ? "طریقہ کار نہایت آسان ہے۔ آپ ہماری ویب سائٹ کے ذریعے یا فون پر رابطہ کر کے اپنی ضروریات بتائیں۔ ہمارا کیئر کوآرڈینیٹر آپ سے بات چیت کر کے انفرادی کیئر پلان مرتب کرے گا، اور مناسب و تصدیق شدہ کیئر گیور کا انتخاب عمل میں لایا جائے گا۔"
        : "Getting started is straightforward. You submit an inquiry online or speak with our care advisor. We discuss your parent's daily routine, medical instructions, and living arrangement to design a personalized care roadmap before assigning a thoroughly vetted caregiver.",
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
        ? "بیرون ملک مقیم بچوں کو والدین کی خیریت سے کیسے آگاہ رکھا جاتا ہے؟"
        : "How are overseas children kept updated on their parents' daily care?",
      answer: isUrdu
        ? "ہم اوورسیز فیملیز کو ہر وزٹ کے بعد تفصیلی واٹس ایپ سمری، بلڈ پریشر اور شوگر کا ریکارڈ، اور ادویات کی رپورٹس فراہم کرتے ہیں۔ اس کے علاوہ ہمارا کیئر مینیجر بچوں سے براہِ راست رابطے میں رہتا ہے۔"
        : "We bridge distance through proactive communication. Overseas sons and daughters receive regular structured WhatsApp updates after key visits, detailing vital sign logs, dietary intake, and mood. You also have a direct line to our Care Coordinator.",
    },
    {
      id: "faq-4",
      question: isUrdu
        ? "کیا مہربان کیئر کا عملہ دوائیاں تجویز کر سکتا ہے؟"
        : "Can Mehrban Care caregivers prescribe medicines or change dosages?",
      answer: isUrdu
        ? "ہرگز نہیں۔ مہربان کیئر غیر طبی معاونت اور رجسٹرڈ نرسنگ نگہداشت فراہم کرتی ہے۔ ادویات ہمیشہ آپ کے معالج ڈاکٹر کے نسخے کے مطابق دی جاتی ہیں، ہمارا عملہ خود کوئی دوا تجویز یا تبدیل نہیں کرتا۔"
        : "No. Mehrban Care delivers non-medical assistance and supervised nursing support strictly adhering to orders written by the patient's licensed physician. Our caregivers never diagnose conditions or prescribe medications independently.",
    },
    {
      id: "faq-5",
      question: isUrdu
        ? "ہنگامی طبی صورتحال میں آپ کا کیا لائحہ عمل ہوتا ہے؟"
        : "What is your protocol in sudden medical emergencies?",
      answer: isUrdu
        ? "نگہداشت کے آغاز پر ہی فیملی کے ساتھ ہنگامی رابطہ نمبرز اور قریبی ہسپتال کا اندراج کیا جاتا ہے۔ کسی بھی ہنگامی کیفیت میں عملہ فوری طور پر اہل خانہ کو مطلع کرتا ہے اور ہنگامی ایمبولینس سروس کو الرٹ کر کے ابتدائی تحفظ فراہم کرتا ہے۔"
        : "Every care plan includes a documented Emergency Protocol with designated family contacts, chosen hospital, and treating physician. If an acute episode occurs, the caregiver immediately calls family and activates emergency medical response.",
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
