"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import {
  Briefcase,
  UserCheck,
  Award,
  Sparkles,
  CheckCircle2,
  Send,
  FileCheck,
  Heart,
  ShieldCheck,
  Clock,
  MapPin,
  X,
} from "lucide-react";

interface JobOpening {
  id: string;
  titleEn: string;
  titleUr: string;
  typeEn: string;
  typeUr: string;
  cityEn: string;
  cityUr: string;
  descEn: string;
  descUr: string;
  reqsEn: string[];
  reqsUr: string[];
}

export default function CareersPage() {
  const { isUrdu } = useLanguage();
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);
  const [applicantName, setApplicantName] = useState("");
  const [applicantPhone, setApplicantPhone] = useState("");
  const [applicantExperience, setApplicantExperience] = useState("");
  const [applicantCity, setApplicantCity] = useState("Lahore");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const jobs: JobOpening[] = [
    {
      id: "job-1",
      titleEn: "Registered Nurse / Clinical Supervisor",
      titleUr: "رجسٹرڈ نرس / کلینیکل سپروائزر",
      typeEn: "Full-Time / Supervisory",
      typeUr: "مکمل وقت / سپروائزری",
      cityEn: "Lahore / Islamabad",
      cityUr: "لاہور / اسلام آباد",
      descEn:
        "Supervise home care protocols, conduct clinical assessments for newly onboarded senior clients, verify vital sign charting, and mentor visiting caregivers.",
      descUr:
        "گھریلو دیکھ بھال کے کلینیکل پروٹوکول کی نگرانی، نئے مریضوں کا طبی جائزہ لینا، میڈیکل چارٹنگ کی تصدیق اور نگہداشت کاروں کی تربیت و رہنمائی۔",
      reqsEn: [
        "Diploma in General Nursing (PNC Registered) or BSN Degree",
        "Minimum 2–3 years clinical or ICU / elderly care experience",
        "Strong interpersonal communication and empathetic demeanor",
        "Ability to supervise and guide visiting caregivers",
      ],
      reqsUr: [
        "پی این سی (PNC) سے منظور شدہ جنرل نرسنگ ڈپلومہ یا بی ایس این ڈگری",
        "کم از کم 2 سے 3 سال کا ہسپتال، آئی سی یو یا جیریاٹرک دیکھ بھال کا تجربہ",
        "بہترین اخلاق، صبر اور مریض کے اہل خانہ سے بات چیت کی صلاحیت",
        "نگہداشت کاروں کی فیلڈ میں رہنمائی اور نگرانی کی اہلیت",
      ],
    },
    {
      id: "job-2",
      titleEn: "Female Caregiver (بزرگ خواتین کی نگہداشت کار)",
      titleUr: "خاتون نگہداشت کار (بزرگ خواتین کی دیکھ بھال)",
      typeEn: "Day Shift / Full-Day / Live-In",
      typeUr: "ڈے شفٹ / فل ڈے / لائیو ان",
      cityEn: "Lahore / Islamabad / Rawalpindi",
      cityUr: "لاہور / اسلام آباد / راولپنڈی",
      descEn:
        "Provide compassionate, dignified personal care for elderly ladies: assistance with daily routine, bathing, dressing, meal companioning, prayer support, and mobility.",
      descUr:
        "بزرگ خواتین کے لیے باحجاب و باوقار ذاتی نگہداشت: روزمرہ معمولات میں مدد، شاور و غسل، لباس کی تبدیلی، کھانا کھلانا، نماز میں سہارا اور رفاقت۔",
      reqsEn: [
        "Prior experience caring for elderly relatives, patients, or nursing home clients",
        "Verified CNIC, police verification certificate, and verifiable character references",
        "Polite, respectful, patient, and culturally courteous temperament",
        "Basic training in elder mobility and fall prevention preferred",
      ],
      reqsUr: [
        "بزرگ مریضوں یا بزرگ رشتے داروں کی دیکھ بھال کا سابقہ تجربہ",
        "قومی شناختی کارڈ، متعلقہ تھانے کی پولیس کلیئرنس اور معتبر حوالہ جات",
        "انتہائی صابر، شائستہ اور مشرقی و اسلامی آداب سے آراستہ گفتگو",
        "بزرگوں کو سنبھالنے اور باتھ روم کے محفوظ استعمال کی بنیادی سمجھ",
      ],
    },
    {
      id: "job-3",
      titleEn: "Male Caregiver (بزرگ حضرات کے نگہداشت کار)",
      titleUr: "مرد نگہداشت کار (بزرگ حضرات کی دیکھ بھال)",
      typeEn: "Day Shift / Full-Day / Live-In",
      typeUr: "ڈے شفٹ / فل ڈے / لائیو ان",
      cityEn: "Lahore / Islamabad / Rawalpindi",
      cityUr: "لاہور / اسلام آباد / راولپنڈی",
      descEn:
        "Dedicated assistance for elderly gentlemen: mobility support, personal grooming, shaving, wheelchair transfer, walking assistance, and daytime companioning.",
      descUr:
        "معزز بزرگ حضرات کی ذاتی خدمت: سہارا دے کر چلانا، شیو اور ذاتی صفائی، وہیل چیئر پر منتقلی، چہل قدمی اور دن بھر کی ہمدردانہ رفاقت۔",
      reqsEn: [
        "Physical stamina and gentleness in assisting seniors with mobility",
        "Documented identity verification and clean background records",
        "Respectful demeanor and understanding of elder dignity",
        "Punctuality, trustworthiness, and dependable work ethic",
      ],
      reqsUr: [
        "بزرگ کو سہارا دینے اور وہیل چیئر چلانے کے لیے جسمانی تندرستی",
        "سرکاری شناختی دستاویزات اور مکمل تصدیق شدہ پولیس ریکارڈ",
        "شائستہ لب و لہجہ اور بزرگوں کے احترام کی گہری سمجھ",
        "وقت کی پابندی، ایمانداری اور غیر متزلزل دیانت داری",
      ],
    },
    {
      id: "job-4",
      titleEn: "Driver / Healthcare Attendant (Part-Time)",
      titleUr: "ڈرائیور و ہیلتھ کیئر اٹینڈنٹ (پارٹ ٹائم)",
      typeEn: "Flexible / Per-Visit Call",
      typeUr: "لچکدار اوقات / فی وزٹ",
      cityEn: "Lahore",
      cityUr: "لاہور",
      descEn:
        "Escort elderly clients to hospital appointments, diagnostic laboratories, and medical checkups with utmost safety, courtesy, and smooth driving.",
      descUr:
        "بزرگ مریضوں کو کلینک، ہسپتال اور لیبارٹری ٹیسٹس کے لیے باحفاظت لے جانا اور واپس لانا، وہیل چیئر سنبھالنا اور پرسکون ڈرائیونگ۔",
      reqsEn: [
        "Valid Pakistani driving license with clean traffic history",
        "Gentle driving habits suited for frail, elderly passengers",
        "Helpful attitude during clinic waiting and wheelchair assistance",
        "Local city route knowledge and hospital familiarity",
      ],
      reqsUr: [
        "مستند ڈرائیونگ لائسنس اور بے داغ ٹریفک ریکارڈ",
        "بزرگوں کی سہولت کے لیے پرسکون اور محتاط ڈرائیونگ کی عادت",
        "کلینک میں انتظار اور وہیل چیئر سنبھالنے میں مددگار رویہ",
        "شہر کے راستوں اور بڑے ہسپتالوں کے شعبہ جات سے مکمل واقفیت",
      ],
    },
  ];

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!applicantName || !applicantPhone) return;
    setFormSubmitted(true);
  };

  return (
    <div className="bg-cream-100 min-h-screen">
      {/* Header */}
      <section className="py-16 lg:py-20 bg-white border-b border-navy-900/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-50 border border-gold-200 text-gold-700 text-xs font-bold uppercase tracking-wider">
              <Briefcase className="w-3.5 h-3.5 text-gold-600" />
              <span>{isUrdu ? "مہربان کیئر کیریئرز" : "Join Our Compassionate Team"}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy-900 tracking-tight leading-tight">
              {isUrdu
                ? "بزرگوں کی خدمت کو اپنا باوقار پیشہ بنائیں"
                : "Build a Fulfilling Career Serving Elderly Seniors in Pakistan"}
            </h1>
            <p className="text-base sm:text-lg text-navy-700 leading-relaxed">
              {isUrdu
                ? "مہربان کیئر میں ہم ایسے مخلص، دیانت دار اور بااخلاق مرد و خواتین کی تلاش میں ہیں جو بزرگوں کی خدمت کو محض نوکری نہیں بلکہ ثواب اور عزت کا ذریعہ سمجھتے ہیں۔"
                : "At Mehrban Care, we offer respectful employment for certified nurses, trained caregivers, and supportive attendants who uphold senior dignity and exemplary work ethics."}
            </p>
          </div>
        </div>
      </section>

      {/* Recruitment Campaign Standards */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-navy-900/10 shadow-soft-sm flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-gold-100 text-gold-700 flex items-center justify-center flex-shrink-0">
              <Heart className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-navy-900">
                {isUrdu ? "احترام اور پروقار ماحول" : "Dignified Work Culture"}
              </h3>
              <p className="text-xs text-navy-600 mt-1">
                {isUrdu ? "ہمارے عملے کی عزتِ نفس اور حفاظت اولین ترجیح ہے۔" : "Fair, respectful treatment for every staff member."}
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-navy-900/10 shadow-soft-sm flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-sage-100 text-sage-700 flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-navy-900">
                {isUrdu ? "سخت ویریفکیشن و ٹریننگ" : "Comprehensive Training"}
              </h3>
              <p className="text-xs text-navy-600 mt-1">
                {isUrdu ? "گرنے سے بچاؤ اور جیریاٹرک پروٹوکولز کی مفت ٹریننگ۔" : "Orientation in elder psychology, hygiene and safety."}
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-navy-900/10 shadow-soft-sm flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-navy-100 text-navy-800 flex items-center justify-center flex-shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-navy-900">
                {isUrdu ? "شفاف معاوضہ و بروقت ادائیگی" : "Prompt Merit Compensation"}
              </h3>
              <p className="text-xs text-navy-600 mt-1">
                {isUrdu ? "تجربے اور کارکردگی کی بنیاد پر باقاعدہ ادائیگی۔" : "Transparent terms based on skill, verified shifts and merit."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Job Listings */}
      <section className="py-12 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex items-center justify-between border-b border-navy-900/10 pb-4">
          <h2 className="text-2xl font-extrabold text-navy-900">
            {isUrdu ? "موجودہ خالی اسامیاں (Open Opportunities)" : "Current Open Positions"}
          </h2>
          <span className="text-xs text-navy-500 font-semibold">
            {isUrdu ? "4 کیٹیگریز دستیاب ہیں" : "4 Active Roles"}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-3xl p-8 border border-navy-900/10 shadow-soft-sm hover:shadow-soft-md hover:border-gold-400/40 transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-gold-50 text-gold-800 border border-gold-200">
                    {isUrdu ? job.typeUr : job.typeEn}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-navy-500">
                    <MapPin className="w-3.5 h-3.5 text-gold-500" />
                    <span>{isUrdu ? job.cityUr : job.cityEn}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-navy-900">
                  {isUrdu ? job.titleUr : job.titleEn}
                </h3>

                <p className="text-sm text-navy-600 leading-relaxed">
                  {isUrdu ? job.descUr : job.descEn}
                </p>

                {/* Requirements */}
                <div className="pt-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-navy-900 block mb-2">
                    {isUrdu ? "بنیادی اہلیت اور شرائط:" : "Role Requirements:"}
                  </span>
                  <ul className="space-y-1.5 text-xs text-navy-600">
                    {(isUrdu ? job.reqsUr : job.reqsEn).map((req, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sage-600 flex-shrink-0 mt-0.5" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-100 mt-6">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedJob(job);
                    setFormSubmitted(false);
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-navy-900 text-white font-bold text-sm hover:bg-gold-400 hover:text-navy-900 transition-colors shadow-soft-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>{isUrdu ? "اس اسامی کے لیے درخواست دیں" : "Apply for This Position"}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Application Modal Component */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 bg-navy-950/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-gold-400/30 relative animate-fadeIn">
            <button
              onClick={() => setSelectedJob(null)}
              className="absolute top-5 right-5 rtl:right-auto rtl:left-5 text-gray-400 hover:text-navy-900 p-1 rounded-lg"
              aria-label="Close application modal"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="mb-6">
              <span className="text-xs font-bold text-gold-600 uppercase tracking-wider">
                {isUrdu ? "ملازمت کی درخواست" : "Job Application Form"}
              </span>
              <h3 className="text-xl font-extrabold text-navy-900 mt-1">
                {isUrdu ? selectedJob.titleUr : selectedJob.titleEn}
              </h3>
            </div>

            {formSubmitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-14 h-14 rounded-full bg-sage-100 text-sage-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-bold text-navy-900">
                  {isUrdu ? "درخواست موصول ہو گئی" : "Application Received (Phase 1 Preview)"}
                </h4>
                <p className="text-xs text-navy-600 leading-relaxed max-w-sm mx-auto">
                  {isUrdu
                    ? "آپ کے کوائف کامیابی سے جانچ لیے گئے ہیں۔ فیز 2 میں ڈیٹا بیس منسلک ہونے پر ہمارا ایچ آر مینیجر آپ سے رابطہ کرے گا۔"
                    : "Form validation verified successfully. In Phase 2, this will persist directly into our HR recruitment database."}
                </p>
                <button
                  type="button"
                  onClick={() => setSelectedJob(null)}
                  className="px-6 py-2.5 rounded-xl bg-navy-900 text-white font-bold text-xs hover:bg-navy-800 transition-colors"
                >
                  {isUrdu ? "بند کریں" : "Close Window"}
                </button>
              </div>
            ) : (
              <form onSubmit={handleApply} className="space-y-4 text-left rtl:text-right">
                <div>
                  <label className="block text-xs font-bold text-navy-900 mb-1">
                    {isUrdu ? "امیدوار کا مکمل نام *" : "Full Name *"}
                  </label>
                  <input
                    type="text"
                    required
                    value={applicantName}
                    onChange={(e) => setApplicantName(e.target.value)}
                    placeholder={isUrdu ? "اپنا پورا نام درج کریں" : "e.g. Fatima Zahra"}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-navy-900 mb-1">
                      {isUrdu ? "موبائل / واٹس ایپ نمبر *" : "Phone / WhatsApp *"}
                    </label>
                    <input
                      type="tel"
                      required
                      value={applicantPhone}
                      onChange={(e) => setApplicantPhone(e.target.value)}
                      placeholder="0300-1234567"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-navy-900 mb-1">
                      {isUrdu ? "رہائش کا شہر *" : "City in Pakistan *"}
                    </label>
                    <select
                      value={applicantCity}
                      onChange={(e) => setApplicantCity(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 bg-white"
                    >
                      <option value="Lahore">Lahore (لاہور)</option>
                      <option value="Islamabad">Islamabad (اسلام آباد)</option>
                      <option value="Rawalpindi">Rawalpindi (راولپنڈی)</option>
                      <option value="Faisalabad">Faisalabad (فیصل آباد)</option>
                      <option value="Multan">Multan (ملتان)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-navy-900 mb-1">
                    {isUrdu ? "سابقہ تجربہ یا تعلیمی کوائف" : "Relevant Eldercare Experience / Qualifications"}
                  </label>
                  <textarea
                    rows={3}
                    value={applicantExperience}
                    onChange={(e) => setApplicantExperience(e.target.value)}
                    placeholder={
                      isUrdu
                        ? "کتنے سال کا تجربہ ہے اور کس قسم کے مریضوں کی دیکھ بھال کی ہے؟"
                        : "Describe relevant hospital, home care, or nursing experience..."
                    }
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400"
                  />
                </div>

                {/* Form Notice */}
                <p className="text-[11px] text-navy-500 italic">
                  {isUrdu
                    ? "* فیز 1 نوٹ: فارم کی درستگی فعال ہے۔ حتمی بھرتی کے لیے نادرا شناختی کارڈ اور پولیس سرٹیفکیٹ لازمی ہوگا۔"
                    : "* Notice: All candidates must present a valid CNIC, police verification, and clear references during interview."}
                </p>

                <div className="pt-2 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedJob(null)}
                    className="px-5 py-2.5 rounded-xl border border-gray-200 text-navy-700 font-semibold text-xs hover:bg-gray-50"
                  >
                    {isUrdu ? "منسوخ کریں" : "Cancel"}
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-xl bg-gold-400 text-navy-900 font-bold text-xs hover:bg-gold-500 shadow-soft-sm"
                  >
                    {isUrdu ? "درخواست جمع کروائیں" : "Submit Application"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
