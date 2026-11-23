"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/MotionWrapper";
import {
  FileText,
  PhoneCall,
  ClipboardCheck,
  CheckCircle,
  UserCheck,
  CalendarCheck,
  MessageSquareShare,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  HeartHandshake,
} from "lucide-react";

export default function HowItWorksPage() {
  const { isUrdu, t } = useLanguage();
  const ArrowIcon = isUrdu ? ArrowLeft : ArrowRight;

  const journeySteps = [
    {
      num: "01",
      icon: FileText,
      title: isUrdu ? "ابتدائی استفسار اور رابطہ" : "1. Initial Inquiry",
      desc: isUrdu
        ? "آپ ہماری ویب سائٹ کے فارم، واٹس ایپ یا فون کے ذریعے ہم سے رابطہ کرتے ہیں۔ بزرگ کی عمومی صحت، شہر اور اوقات کے بارے میں بنیادی معلومات فراہم کی جاتی ہیں۔"
        : "You reach out through our online booking interface, direct telephone line, or WhatsApp. We collect basic details regarding your loved one's location, daily challenges, and preferred care arrangement.",
    },
    {
      num: "02",
      icon: PhoneCall,
      title: isUrdu ? "خاندانی مشاورت (Family Consultation)" : "2. Family Consultation",
      desc: isUrdu
        ? "ہمارا کیئر ایڈوائزر فیملی (یا بیرون ملک مقیم بچوں) کے ساتھ فون یا ویڈیو کال پر مفصل گفتگو کرتا ہے تاکہ بزرگ کے مزاج، نماز کے اوقات، پسندیدہ خوراک اور خاندان کے خدشات کو سمجھا جا سکے۔"
        : "A dedicated Care Coordinator conducts an in-depth consultation with family members (locally or over video call with overseas children) to explore personal routines, prayer schedules, mobility, and specific preferences.",
    },
    {
      num: "03",
      icon: ClipboardCheck,
      title: isUrdu ? "نگہداشت کا تفصیلی جائزہ (Care Assessment)" : "3. Care Needs Assessment",
      desc: isUrdu
        ? "اگر ضروری ہو تو گھر کا دورہ کر کے رہائش کی حفاظت (سیڑھیاں، باتھ روم، لائٹنگ) اور بزرگ کی جسمانی خود مختاری کا جائزہ لیا جاتا ہے تاکہ گرنے یا چوٹ لگنے کے خطرات کو ختم کیا جا سکے۔"
        : "Our clinical supervisor reviews any doctor directives, analyzes domestic fall risks (bathrooms, steps, grab rails), and evaluates senior mobility to establish an objective care baseline.",
    },
    {
      num: "04",
      icon: CheckCircle,
      title: isUrdu ? "انفرادی کیئر پلان کی توثیق" : "4. Care Plan Confirmation",
      desc: isUrdu
        ? "ہم ایک تحریری کیئر پلان دستاویز تیار کرتے ہیں جس میں روزمرہ کے فرائض، شفٹ کے اوقات، احتیاطی تدابیر اور شفاف کوٹیشن درج ہوتی ہے۔ فیملی کی منظوری کے بعد حتمی معاہدہ ہوتا ہے۔"
        : "We present a written Care Plan outlining explicit daily duties, shift hours, medication reminders, hygiene protocols, and an itemized quotation without unexpected surcharges.",
    },
    {
      num: "05",
      icon: UserCheck,
      title: isUrdu ? "موزوں نگہداشت کار کی تعیناتی" : "5. Caregiver Assignment & Matching",
      desc: isUrdu
        ? "بزرگ کی جنس (خواتین کے لیے خاتون اور مرد حضرات کے لیے مرد کیئر گیور)، زبان اور مخصوص تقاضوں کے مطابق مکمل تصدیق شدہ کیئر گیور کا انتخاب کیا جاتا ہے۔"
        : "We match a vetted, background-cleared caregiver whose temperament, cultural background, and gender align seamlessly with your parent's dignity and comfort.",
    },
    {
      num: "06",
      icon: CalendarCheck,
      title: isUrdu ? "منظم وزٹس کا باقاعدہ آغاز" : "6. Scheduled Visits Begin",
      desc: isUrdu
        ? "کیئر گیور اپنے طے شدہ وقت پر پہنچ کر دیکھ بھال کا آغاز کرتا ہے۔ پہلے روز سپروائزر رہنمائی کے لیے موجود رہتا ہے تاکہ بزرگ کے ساتھ مانوس تعلق قائم ہو سکے۔"
        : "Care commences punctually according to the agreed schedule. A supervisor supports the initial transition to ensure the senior feels comfortable, safe, and emotionally reassured.",
    },
    {
      num: "07",
      icon: MessageSquareShare,
      title: isUrdu ? "مسلسل فیملی اپ ڈیٹس اور فیڈ بیک" : "7. Family Updates & Ongoing Feedback",
      desc: isUrdu
        ? "ہر وزٹ کے بعد تفصیلی واٹس ایپ سمری، بلڈ پریشر اور شوگر لاگ، اور ماہانہ جائزے کے ذریعے خاندان کو مسلسل اعتماد میں رکھا جاتا ہے۔"
        : "Families receive regular structured WhatsApp updates with vitals recordings. Continuous supervision and periodic family feedback ensure the highest standard of ongoing care.",
    },
  ];

  return (
    <div className="bg-cream-100 min-h-screen">
      {/* Header */}
      <section className="py-16 lg:py-20 bg-white border-b border-navy-900/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-50 border border-gold-200 text-gold-700 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-gold-600" />
              <span>{isUrdu ? "طریقہ کار اور پروٹوکول" : "The Customer Journey"}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy-900 tracking-tight leading-tight">
              {isUrdu
                ? "درخواست سے لے کر باوقار نگہداشت تک کا 7 مرحلہ وار سفر"
                : "A Seamless, Transparent 7-Step Eldercare Journey"}
            </h1>
            <p className="text-base sm:text-lg text-navy-700 leading-relaxed">
              {isUrdu
                ? "ہمارا جامع پروٹوکول اس بات کو یقینی بناتا ہے کہ ہر قدم پر بزرگ کی حفاظت، خاندان کی مشاورت اور شفافیت کو اولیت دی جائے۔"
                : "From the moment you reach out to ongoing daily care visits, our structured roadmap ensures complete safety, transparency, and dignity for your elderly loved ones."}
            </p>
          </div>
        </div>
      </section>

      {/* Visual Timeline Section */}
      <section className="py-16 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-8 rtl:before:left-auto rtl:before:right-8 before:w-0.5 before:bg-gold-300 before:hidden md:before:block">
          {journeySteps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="relative flex flex-col md:flex-row items-start gap-6 md:gap-8 group"
              >
                {/* Number / Icon Node */}
                <div className="w-16 h-16 rounded-2xl bg-navy-900 text-gold-400 flex items-center justify-center flex-shrink-0 shadow-soft-md border-2 border-white relative z-10 group-hover:bg-gold-500 group-hover:text-navy-900 transition-colors">
                  <Icon className="w-7 h-7" />
                </div>

                {/* Content Box */}
                <div className="flex-1 bg-white p-8 rounded-3xl border border-navy-900/10 shadow-soft-sm hover:shadow-soft-md hover:border-gold-400/40 transition-all">
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <h2 className="text-xl sm:text-2xl font-bold text-navy-900">
                      {step.title}
                    </h2>
                    <span className="text-xl font-black text-gold-400/80 font-serif">
                      {step.num}
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-navy-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Journey Bottom CTA */}
        <div className="mt-20 text-center rounded-3xl bg-white p-10 border border-gold-400/30 shadow-soft-md space-y-5">
          <h3 className="text-2xl font-extrabold text-navy-900">
            {isUrdu ? "آئیے پہلے مرحلے کا آغاز کریں" : "Ready to Take the First Step?"}
          </h3>
          <p className="text-sm text-navy-600 max-w-xl mx-auto">
            {isUrdu
              ? "ہمارے کیئر کوآرڈینیٹر سے مفت مشاورت کے لیے آن لائن فارم پر اپنی ضروریات سے آگاہ فرمائیں۔"
              : "Our Care Coordinators are standing by to listen to your family's situation and outline a personalized care plan."}
          </p>
          <div className="pt-2">
            <Link
              href="/book-care"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-navy-900 text-white font-bold text-sm shadow-soft-sm hover:bg-navy-800 transition-colors"
            >
              <span>{t("hero_cta_primary")}</span>
              <ArrowIcon className="w-4 h-4 text-gold-400" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
