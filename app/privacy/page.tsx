"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import {
  ShieldCheck,
  Lock,
  Eye,
  FileText,
  Heart,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  ChevronLeft,
  CheckCircle2,
  AlertCircle,
  Phone,
} from "lucide-react";

export default function PrivacyPolicyPage() {
  const { isUrdu, t } = useLanguage();
  const ArrowIcon = isUrdu ? ArrowLeft : ArrowRight;
  const ChevronIcon = isUrdu ? ChevronLeft : ChevronRight;

  const privacySections = [
    {
      id: "sanctuary",
      titleEn: "1. Domestic Privacy & Household Sanctity",
      titleUr: "1. گھریلو رازداری اور پردے کے آداب",
      contentEn:
        "At Mehrban Care, we understand that welcoming a caregiver into your residence is a matter of profound sacred trust. Our personnel are bound by strict non-disclosure obligations regarding the family's lifestyle, domestic environment, personal conversations, and belongings. Caregivers are strictly prohibited from filming, photographing, or discussing any aspect of the client's private home with unauthorized persons.",
      contentUr:
        "مہربان کیئر میں ہم سمجھتے ہیں کہ اپنے گھر میں کسی نگہداشت کار کو جگہ دینا مکمل اعتماد اور امانت کا تقاضا کرتا ہے۔ ہمارا عملہ خاندانی معمولات، گھریلو ماحول، نجی بات چیت اور اشیاء کے بارے میں مکمل رازداری کا پابند ہے۔ عملے کے لیے کلائنٹ کے نجی گھر میں بلا اجازت تصویر کشی، ویڈیو بنانا یا گھریلو باتوں کا کسی سے تذکرہ کرنا قطعاً ممنوع ہے۔",
    },
    {
      id: "medical",
      titleEn: "2. Senior Health Records & Medical Confidentiality",
      titleUr: "2. بزرگوں کے طبی ریکارڈ اور صحت کی معلومات کا تحفظ",
      contentEn:
        "Any health parameters recorded during home visits—such as resting blood pressure, blood glucose levels, medication administration schedules, and physician directives—are held in strict confidentiality. These details are shared exclusively with designated family members and authorized care supervisors. We do not sell, rent, or publicly disclose health observations to pharmaceutical companies or marketing entities.",
      contentUr:
        "گھریلو وزٹس کے دوران ریکارڈ کیے جانے والے تمام طبی اشاریے—جیسے بلڈ پریشر، شوگر لاگ، ادویات کا شیڈول اور معالج ڈاکٹر کی ہدایات—انتہائی رازداری میں رکھے جاتے ہیں۔ یہ معلومات صرف نامزد اہل خانہ اور بااختیار کیئر سپروائزر کے ساتھ شیئر کی جاتی ہیں۔ ہم بزرگوں کا ڈیٹا کسی تجارتی ادارے یا فارماسیوٹیکل کمپنی کو کبھی فراہم نہیں کرتے۔",
    },
    {
      id: "cameras",
      titleEn: "3. Home Security Cameras & Digital Surveillance",
      titleUr: "3. گھروں میں سیکیورٹی کیمروں سے متعلق ضوابط",
      contentEn:
        "Families have the complete legal right to install internal security cameras in common living areas (e.g., lounges, dining spaces, corridors) to observe care delivery. In alignment with Pakistani legal standards and Islamic dignity, surveillance in private restrooms and bathing facilities is strictly prohibited. Caregivers are fully briefed and consent to working in camera-monitored residences.",
      contentUr:
        "اہل خانہ کو اپنے گھر کے مشترکہ حصوں (لاؤنج، کوریڈور، بیٹھک) میں سیکیورٹی کیمرے لگانے کا مکمل قانونی حق حاصل ہے۔ اسلامی اخلاقیات اور رازداری کے مطابق باتھ رومز اور غسل خانے میں کیمرے لگانا سختی سے منع ہے۔ ہمارا عملہ کیمروں کی موجودگی میں خلوص اور ایمانداری سے ڈیوٹی انجام دینے پر مکمل آمادہ اور مطلع ہوتا ہے۔",
    },
    {
      id: "screening",
      titleEn: "4. Caregiver Background & Identity Verification Data",
      titleUr: "4. عملے کے تصدیقی کوائف کی قانونی حفاظت",
      contentEn:
        "For the protection of both clients and staff, Mehrban Care retains verified biometric CNIC records, local police clearance certifications, and past reference files in secure offline repositories. Client families are provided verification summaries upon caregiver assignment without exposing personal employee residential addresses.",
      contentUr:
        "کلائنٹس اور عملے دونوں کے تحفظ کے لیے، مہربان کیئر نادرا سے تصدیق شدہ شناختی کوائف، متعلقہ تھانے کے پولیس کریکٹر سرٹیفکیٹس اور حوالہ جات کا ریکارڈ محفوظ آف لائن ریکارڈ میں رکھتی ہے۔ فیملیز کو کیئر گیور کی تعیناتی کے وقت باقاعدہ تصدیقی سمری دکھائی جاتی ہے۔",
    },
    {
      id: "communication",
      titleEn: "5. Structured Family WhatsApp & Contact Communication",
      titleUr: "5. واٹس ایپ فیملی گروپس اور رابطہ کے قواعد",
      contentEn:
        "Communication regarding senior updates is conducted strictly through direct client-authorized channels or family WhatsApp conversations with our Care Coordinators. Contact details provided during inquiries are used solely to assess care needs and coordinate services, never sold or shared with third-party advertisers.",
      contentUr:
        "والدین کی خیریت کے بارے میں تمام اپ ڈیٹس صرف فیملی کے باضابطہ واٹس ایپ چینل یا کیئر کوآرڈینیٹر کے ذریعے دی جاتی ہیں۔ استفسار کے وقت فراہم کردہ رابطہ نمبرز صرف نگہداشت کے انتظامات کے لیے استعمال ہوتے ہیں اور کسی اشتہاری کمپنی کو نہیں دیے جاتے۔",
    },
    {
      id: "recruitment",
      titleEn: "6. Caregiver Recruitment & Applicant Data Protection",
      titleUr: "6. ملازمت کے امیدواروں کے کوائف کی حفاظت",
      contentEn:
        "Information submitted by job applicants (such as CNIC details, driving records, nursing diplomas, and contact numbers) is evaluated exclusively by our recruitment supervisors for character verification. Candidate records are never shared externally or repurposed for non-employment matters.",
      contentUr:
        "ملازمت کے امیدواروں کے فراہم کردہ کوائف (جیسے شناختی کارڈ، نرسنگ اسناد، رابطہ نمبر) صرف ہماری ریکروٹمنٹ ٹیم کے جائزے اور پولیس تصدیق کے لیے استعمال ہوتے ہیں۔ یہ معلومات ملازمت کے سوا کسی مقصد کے لیے استعمال نہیں کی جاتیں۔",
    },
    {
      id: "cookies",
      titleEn: "7. Cookies & Web Analytics Transparency",
      titleUr: "7. کوکیز اور ویب اینالیٹکس کی شفافیت",
      contentEn:
        "Mehrban Care does not deploy third-party advertising tracking cookies, cross-site profiling trackers, or invasive data brokers on this website. Standard session storage is utilized purely to preserve your selected language preference (English or Urdu) and local assessment form inputs during your active visit.",
      contentUr:
        "مہربان کیئر اس ویب سائٹ پر کسی قسم کی تجارتی ٹریکنگ کوکیز یا اشتہاری ٹریکرز استعمال نہیں کرتی۔ براؤزر کی عارضی میموری صرف زبان کی ترجیح (انگریزی یا اردو) اور فارم کے ڈیٹا کو محفوظ رکھنے کے لیے استعمال ہوتی ہے۔",
    },
    {
      id: "rights",
      titleEn: "8. Family Rights & Policy Inquiries",
      titleUr: "8. اہل خانہ کے حقوق اور رازداری سے متعلق رابطہ",
      contentEn:
        "Family guardians retain the right to review, update, or request the deletion of recorded home assessment intake notes at any time. If you have questions regarding our domestic confidentiality standards, please contact our administrative advisory office.",
      contentUr:
        "اہل خانہ کو یہ حق حاصل ہے کہ وہ کسی بھی وقت اپنے ریکارڈ شدہ کوائف کا جائزہ لے سکتے ہیں یا ان میں تبدیلی کی درخواست کر سکتے ہیں۔ رازداری کی پالیسی سے متعلق کسی بھی سوال کے لیے آپ ہمارے نگران دفتر سے رابطہ فرما سکتے ہیں۔",
    },
    {
      id: "legal_review",
      titleEn: "9. Regulatory Review & Legal Notice",
      titleUr: "9. قانونی و ریگولیٹری جائزے کی وضاحت",
      contentEn:
        "This domestic confidentiality policy reflects Mehrban Care's operational standards. Formal corporate governance, medical liability terms, and terms of service remain subject to final review by certified legal counsel in Pakistan prior to full commercial execution.",
      contentUr:
        "یہ پالیسی مہربان کیئر کے اخلاقی اور تنظیمی معیارات کی عکاسی کرتی ہے۔ تجارتی سروس کے باضابطہ آغاز سے قبل حتمی قانونی شقیں اور معاہداتی دستاویزات پاکستان کے مستند قانونی ماہرین کے زیرِ جائزہ ہیں۔",
    },
  ];

  return (
    <div className="bg-cream-100 min-h-screen">
      {/* Breadcrumb Navigation Bar */}
      <nav
        aria-label="Breadcrumb"
        className="bg-white/80 border-b border-navy-900/5 py-3.5 px-4 sm:px-6 lg:px-8 text-xs text-navy-600 sticky top-[73px] z-30 backdrop-blur-md"
      >
        <div className="max-w-7xl mx-auto flex items-center gap-2">
          <Link href="/" className="hover:text-gold-600 transition-colors">
            {t("nav_home")}
          </Link>
          <ChevronIcon className="w-3.5 h-3.5 text-navy-400" />
          <span className="font-bold text-navy-900">
            {isUrdu ? "رازداری کی پالیسی اور گھریلو تقدس" : "Privacy Policy"}
          </span>
        </div>
      </nav>

      {/* Header */}
      <section className="py-16 lg:py-20 bg-white border-b border-navy-900/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-50 border border-gold-200 text-gold-700 text-xs font-bold uppercase tracking-wider">
              <Lock className="w-3.5 h-3.5 text-gold-600" />
              <span>{isUrdu ? "قانونی و اخلاقی ضوابط" : "Domestic Confidentiality & Trust"}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy-900 tracking-tight leading-tight">
              {isUrdu
                ? "رازداری کی پالیسی اور گھریلو تقدس کے اصول"
                : "Privacy Policy & Domestic Confidentiality"}
            </h1>
            <p className="text-base sm:text-lg text-navy-700 leading-relaxed">
              {isUrdu
                ? "مہربان کیئر آپ کے گھر کی چار دیواری کے تقدس، بزرگوں کے وقار اور طبی رازداری کو اولین ترجیح سمجھتی ہے۔ جانیے ہم آپ کے خاندانی اعتماد کی حفاظت کیسے کرتے ہیں۔"
                : "Mehrban Care is built on the sacred reverence of your home, your parents' dignity, and uncompromising medical confidentiality. Learn how we safeguard your family's trust."}
            </p>
          </div>
        </div>
      </section>

      {/* Main Policy Content Sections */}
      <section className="py-16 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Core Trust Reassurance Card */}
        <div className="rounded-3xl bg-navy-900 text-white p-8 sm:p-10 border border-gold-400/30 shadow-soft-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <div className="flex items-center gap-2 text-gold-400 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>{isUrdu ? "مکمل رازداری کا معاہدہ" : "Absolute Non-Disclosure Standard"}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              {isUrdu ? "گھر کی بات، گھر کے اندر" : "Your Home Remains Your Private Sanctuary"}
            </h2>
            <p className="text-xs sm:text-sm text-cream-200 leading-relaxed">
              {isUrdu
                ? "ہمارا ہر کیئر گیور باقاعدہ قانونی رازداری کے معاہدے پر دستخط کرتا ہے جس کی خلاف ورزی پر فوری ملازمت ختم اور قانونی کارروائی عمل میں لائی جاتی ہے۔"
                : "Every caregiver signs a legally binding non-disclosure commitment before being placed in any client household."}
            </p>
          </div>
          <div className="flex-shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold-400 text-navy-900 font-bold text-xs hover:bg-gold-500 transition-colors shadow-soft-sm"
            >
              <span>{isUrdu ? "انتظامیہ سے رابطہ کریں" : "Speak to Admin"}</span>
              <ArrowIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* 6 Structured Clauses */}
        <div className="space-y-6">
          {privacySections.map((sec) => (
            <div
              key={sec.id}
              className="rounded-3xl bg-white p-8 border border-navy-900/10 shadow-soft-sm hover:border-gold-400/40 transition-all space-y-3"
            >
              <h3 className="text-lg sm:text-xl font-bold text-navy-900">
                {isUrdu ? sec.titleUr : sec.titleEn}
              </h3>
              <p className="text-sm sm:text-base text-navy-700 leading-relaxed">
                {isUrdu ? sec.contentUr : sec.contentEn}
              </p>
            </div>
          ))}
        </div>

        {/* Notice on Phase 1 Web Forms */}
        <div className="rounded-2xl bg-gold-50/80 border border-gold-300/70 p-6 flex items-start gap-4 text-xs sm:text-sm text-navy-800">
          <AlertCircle className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
          <div className="space-y-1">
            <strong className="block text-navy-900 font-bold">
              {isUrdu ? "آن لائن ویب فارمز کے حوالے سے وضاحت:" : "Website Intake Forms Notice (Phase 1 Status):"}
            </strong>
            <p className="leading-relaxed">
              {isUrdu
                ? "موجودہ مرحلے (فیز 1) میں ویب سائٹ کے بکنگ اور کیریئرز فارمز صرف فرنٹ اینڈ ویلیڈیشن کے لیے فعال ہیں۔ کوئی ڈیٹا انٹرنیٹ پر غیر محفوظ طریقے سے محفوظ یا منتقل نہیں کیا جا رہا۔ فیز 2 میں انکرپٹڈ کلاؤڈ ڈیٹا بیس فعال کیا جائے گا۔"
                : "In our current phase (Phase 1: Frontend Complete), all website assessment and application forms operate purely in client-side memory. No private medical or identification data is transmitted or stored on unverified external servers. Full end-to-end cloud encryption will activate in Phase 2."}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
