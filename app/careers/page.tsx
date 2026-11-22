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
  FileText,
  Filter,
} from "lucide-react";

interface JobOpening {
  id: string;
  category: "nursing" | "female" | "male" | "transport";
  titleEn: string;
  titleUr: string;
  typeEn: string;
  typeUr: string;
  cityEn: string;
  cityUr: string;
  descEn: string;
  descUr: string;
  dutiesEn: string[];
  dutiesUr: string[];
  reqsEn: string[];
  reqsUr: string[];
  cultureEn: string;
  cultureUr: string;
}

export default function CareersPage() {
  const { isUrdu } = useLanguage();
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [viewingJob, setViewingJob] = useState<JobOpening | null>(null);
  const [applyingJob, setApplyingJob] = useState<JobOpening | null>(null);

  // Application form state
  const [applicantName, setApplicantName] = useState("");
  const [applicantPhone, setApplicantPhone] = useState("");
  const [applicantExperience, setApplicantExperience] = useState("");
  const [applicantCity, setApplicantCity] = useState("Lahore");
  const [applicantShift, setApplicantShift] = useState("day");
  const [ethicsConfirmed, setEthicsConfirmed] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const filters = [
    { id: "all", labelEn: "All Roles", labelUr: "تمام اسامیاں" },
    { id: "nursing", labelEn: "Clinical & Nursing", labelUr: "نرسنگ و سپروائزری" },
    { id: "female", labelEn: "Female Caregivers", labelUr: "خواتین نگہداشت کار" },
    { id: "male", labelEn: "Male Caregivers", labelUr: "مرد نگہداشت کار" },
    { id: "transport", labelEn: "Driver & Attendant", labelUr: "ڈرائیور و اٹینڈنٹ" },
  ];

  const jobs: JobOpening[] = [
    {
      id: "job-1",
      category: "nursing",
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
      dutiesEn: [
        "Conduct baseline in-home clinical assessments for new elderly clients",
        "Review physician prescriptions and verify daily medication charts",
        "Perform catheter care, aseptic wound dressings, and IV oversight",
        "Conduct weekly supervisory audits of assigned visiting caregivers",
      ],
      dutiesUr: [
        "نئے بزرگ مریضوں کے گھر جا کر ابتدائی طبی جائزہ مرتب کرنا",
        "معالج ڈاکٹر کے نسخے کا معائنہ اور روزانہ ادویات کے چارٹ کی تصدیق",
        "کی تھیٹر مانیٹرنگ، جراثیم کش ڈریسنگ اور آئی وی ڈرپ پروٹوکول",
        "نگہداشت کاروں کے کام کا باقاعدہ فیلڈ معائنہ اور رہنمائی",
      ],
      reqsEn: [
        "Diploma in General Nursing (PNC Registered) or BSN Degree",
        "Minimum 2–3 years clinical, ICU, or geriatric care experience",
        "Empathetic, polite demeanor with strong senior communication",
        "Ability to supervise field staff and prepare organized progress reports",
      ],
      reqsUr: [
        "پی این سی (PNC) سے منظور شدہ جنرل نرسنگ ڈپلومہ یا بی ایس این ڈگری",
        "کم از کم 2 سے 3 سال کا ہسپتال، آئی سی یو یا جیریاٹرک دیکھ بھال کا تجربہ",
        "انتہائی صابرانہ رویہ اور بزرگوں کے ساتھ باوقار گفتگو کی صلاحیت",
        "فیلڈ عملے کی رہنمائی اور کلینیکل رپورٹس تیار کرنے کی اہلیت",
      ],
      cultureEn: "Structured clinical environment with strict ethical standards and respect for nursing dignity.",
      cultureUr: "طبی اخلاقیات اور نرسنگ کے پیشے کے مکمل احترام پر مبنی باوقار ادارہ جاتی ماحول۔",
    },
    {
      id: "job-2",
      category: "female",
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
      dutiesEn: [
        "Respectful assistance with morning bathing, grooming, and wardrobe changes",
        "Serving timely meals, encouraging hydration, and prompt medication reminders",
        "Accompanying senior lady during prayer times, walking strolls, and conversation",
        "Supporting restroom safety and incontinence care with complete privacy",
      ],
      dutiesUr: [
        "صبح کے غسل، شاور، بال سنوارنے اور لباس کی تبدیلی میں باحجاب مدد",
        "کھانا پیش کرنا، پانی پلانا اور ڈاکٹر کی دوائیاں وقت پر یاد دلانا",
        "نماز کے لیے وضو کروانا، جائے نماز بچھانا اور گھر میں محفوظ چہل قدمی",
        "واش روم کے محفوظ استعمال اور ذاتی طہارت میں پردے کے ساتھ معاونت",
      ],
      reqsEn: [
        "Demonstrated prior experience caring for seniors or relatives",
        "Original CNIC, police character clearance, and verified family references",
        "Polite, soft-spoken, respectful, and culturally courteous temperament",
        "Commitment to elder privacy, honesty, and punctuality",
      ],
      reqsUr: [
        "بزرگ مریضوں یا بزرگ رشتے داروں کی خدمت کا سابقہ تجربہ",
        "اصل قومی شناختی کارڈ، متعلقہ تھانے کی پولیس کلیئرنس اور معتبر حوالہ جات",
        "شائستہ، بااخلاق، حیا دار اور مشرقی و اسلامی تہذیب کا احترام کرنے والی شخصیت",
        "بزرگوں کی رازداری، سچائی اور وقت کی کڑی پابندی کا پختہ عزم",
      ],
      cultureEn: "Safe, dignified domestic assignments matched with reputable host families in respectful homes.",
      cultureUr: "محفوظ اور باعزت گھریلو ماحول جہاں ملازمین کے حقوق اور عزت کا مکمل تحفظ کیا جاتا ہے۔",
    },
    {
      id: "job-3",
      category: "male",
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
      dutiesEn: [
        "Gentle assistance with mobility transfers between bed, armchair, and wheelchair",
        "Helping with shaving, grooming, personal hygiene, and comfortable dressing",
        "Accompanying senior gentlemen during neighborhood walks and mosque visits",
        "Providing active daytime companionship, conversation, and reading assistance",
      ],
      dutiesUr: [
        "بستر، صوفے اور وہیل چیئر کے درمیان محفوظ منتقلی میں سہارا دینا",
        "شیو بنانے، ذاتی صفائی، کپڑے بدلنے اور ناخن تراشنے میں مدد",
        "محلے کی مسجد میں نماز کے لیے لے جانا یا لان میں چہل قدمی کروانا",
        "بزرگ کے ساتھ مخلصانہ وقت گزارنا، اخبار و کتب پڑھ کر سنانا",
      ],
      reqsEn: [
        "Physical stamina and gentle technique in supporting senior mobility",
        "Verified CNIC, police verification certificate, and clean background",
        "Respectful, disciplined demeanor and understanding of elderly dignity",
        "Dependable work ethic without unexplained absences",
      ],
      reqsUr: [
        "بزرگ کو سہارا دینے اور وہیل چیئر چلانے کے لیے جسمانی تندرستی",
        "شناختی کارڈ، پولیس تصدیق اور بے داغ خاندانی و سابقہ ریکارڈ",
        "شائستہ انداز، بزرگوں کے تقدس کا احساس اور مکمل دیانت داری",
        "ڈیوٹی پر وقت کی پابندی اور غیر اعلانیہ چھٹیوں سے مکمل گریز",
      ],
      cultureEn: "Professional care team backed by dedicated field managers and timely compensation.",
      cultureUr: "پیشہ ورانہ نگہداشت ٹیم جہاں عملے کو باقاعدہ فیلڈ سپروائزر کی سپورٹ حاصل رہتی ہے۔",
    },
    {
      id: "job-4",
      category: "transport",
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
      dutiesEn: [
        "Smooth, defensive driving tailored for frail or post-surgery seniors",
        "Assisting senior passengers with car doors, steps, and wheelchair folding",
        "Escorting clients safely inside hospital reception and lab waiting areas",
        "Maintaining clean, sanitized vehicle interior at all times",
      ],
      dutiesUr: [
        "کمزور یا آپریشن شدہ بزرگوں کے لیے انتہائی پرسکون اور محفوظ ڈرائیونگ",
        "گاڑی کا دروازہ کھولنا، سیڑھی پر سہارا دینا اور وہیل چیئر فولڈ کرنا",
        "ہسپتال کے ریسیپشن اور لیبارٹری ویٹنگ ایریا تک بزرگ کے ہمراہ رہنا",
        "گاڑی کو ہمیشہ صاف ستھرا اور آرام دہ حالت میں رکھنا",
      ],
      reqsEn: [
        "Valid Pakistani driving license with clean traffic record",
        "Minimum 3 years driving experience with calm, patient temperament",
        "Respectful attitude toward elderly patients and hospital staff",
        "Familiarity with major clinics, hospitals, and diagnostic labs in Lahore",
      ],
      reqsUr: [
        "مستند پاکستانی ڈرائیونگ لائسنس اور بے داغ ٹریفک ریکارڈ",
        "کم از کم 3 سال کا پرسکون اور محتاط ڈرائیونگ کا تجربہ",
        "بزرگ سواروں اور ڈاکٹرز کے عملے کے ساتھ شائستہ برتاؤ",
        "لاہور کے بڑے ہسپتالوں، لیبز اور کلینکس کے راستوں سے مکمل واقفیت",
      ],
      cultureEn: "Flexible part-time schedule supporting elderly clinical mobility on scheduled appointment days.",
      cultureUr: "طے شدہ ہسپتال وزٹس کے دنوں میں بزرگوں کی خدمت کا لچکدار پارٹ ٹائم شیڈول۔",
    },
  ];

  const filteredJobs =
    selectedFilter === "all"
      ? jobs
      : jobs.filter((j) => j.category === selectedFilter);

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!applicantName || !applicantPhone || !ethicsConfirmed) return;
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

      {/* Category Filter Pills */}
      <section className="py-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 overflow-x-auto pb-2">
          <Filter className="w-4 h-4 text-navy-400 mr-1" />
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setSelectedFilter(f.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all min-w-max ${
                selectedFilter === f.id
                  ? "bg-navy-900 text-white shadow-soft-sm"
                  : "bg-white text-navy-700 border border-gray-200 hover:bg-gold-50"
              }`}
            >
              {isUrdu ? f.labelUr : f.labelEn}
            </button>
          ))}
        </div>
      </section>

      {/* Job Listings Grid */}
      <section className="py-8 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex items-center justify-between border-b border-navy-900/10 pb-4">
          <h2 className="text-2xl font-extrabold text-navy-900">
            {isUrdu ? "موجودہ خالی اسامیاں (Open Opportunities)" : "Available Job Openings"}
          </h2>
          <span className="text-xs text-navy-500 font-semibold">
            {filteredJobs.length} {isUrdu ? "اسامیاں دستیاب ہیں" : "Roles Active"}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredJobs.map((job) => (
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

                {/* Key Requirements Preview */}
                <div className="pt-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-navy-900 block mb-2">
                    {isUrdu ? "بنیادی اہلیت اور شرائط:" : "Role Requirements:"}
                  </span>
                  <ul className="space-y-1.5 text-xs text-navy-600">
                    {(isUrdu ? job.reqsUr : job.reqsEn).slice(0, 3).map((req, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sage-600 flex-shrink-0 mt-0.5" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons: View Details & Apply Now */}
              <div className="pt-6 border-t border-gray-100 mt-6 grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setViewingJob(job)}
                  className="py-3 px-4 rounded-xl border border-navy-900/15 text-navy-900 font-bold text-xs hover:bg-gold-50 transition-colors text-center"
                >
                  {isUrdu ? "تفصیلات پڑھیں" : "View Details"}
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setApplyingJob(job);
                    setFormSubmitted(false);
                  }}
                  className="py-3 px-4 rounded-xl bg-navy-900 text-white font-bold text-xs hover:bg-gold-400 hover:text-navy-900 transition-colors text-center shadow-soft-sm flex items-center justify-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isUrdu ? "درخواست دیں" : "Apply Now"}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* POSITION DETAILS MODAL / DRAWER */}
      {viewingJob && (
        <div className="fixed inset-0 z-50 bg-navy-950/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-10 shadow-2xl border border-gold-400/30 relative animate-fadeIn my-8 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setViewingJob(null)}
              className="absolute top-5 right-5 rtl:right-auto rtl:left-5 text-gray-400 hover:text-navy-900 p-1.5 rounded-lg"
              aria-label="Close details"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="space-y-6 text-left rtl:text-right">
              <div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-gold-50 text-gold-800 border border-gold-200">
                  {isUrdu ? viewingJob.typeUr : viewingJob.typeEn}
                </span>
                <h3 className="text-2xl font-extrabold text-navy-900 mt-2">
                  {isUrdu ? viewingJob.titleUr : viewingJob.titleEn}
                </h3>
                <p className="text-xs text-navy-500 mt-1 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-gold-500" />
                  <span>{isUrdu ? viewingJob.cityUr : viewingJob.cityEn}</span>
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-bold text-navy-900 uppercase tracking-wider">
                  {isUrdu ? "فرائضِ منصبی (Key Responsibilities)" : "Key Job Responsibilities"}
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-navy-700">
                  {(isUrdu ? viewingJob.dutiesUr : viewingJob.dutiesEn).map((d, i) => (
                    <li key={i} className="flex items-start gap-2.5 p-2 rounded-xl bg-cream-50/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-2 flex-shrink-0" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-bold text-navy-900 uppercase tracking-wider">
                  {isUrdu ? "اہلیت اور شرائط (Prerequisites)" : "Eligibility & Experience Requirements"}
                </h4>
                <ul className="space-y-1.5 text-xs sm:text-sm text-navy-700">
                  {(isUrdu ? viewingJob.reqsUr : viewingJob.reqsEn).map((r, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-sage-600 flex-shrink-0 mt-0.5" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-gold-50/80 border border-gold-200 text-xs text-navy-800">
                <span className="font-bold block mb-1">
                  {isUrdu ? "ادارہ جاتی ثقافت:" : "Workplace Culture Commitment:"}
                </span>
                <span>{isUrdu ? viewingJob.cultureUr : viewingJob.cultureEn}</span>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setViewingJob(null)}
                  className="px-5 py-2.5 rounded-xl border border-gray-200 text-navy-700 font-semibold text-xs hover:bg-gray-50"
                >
                  {isUrdu ? "بند کریں" : "Close"}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const target = viewingJob;
                    setViewingJob(null);
                    setApplyingJob(target);
                    setFormSubmitted(false);
                  }}
                  className="px-6 py-2.5 rounded-xl bg-gold-400 text-navy-900 font-bold text-xs hover:bg-gold-500 shadow-soft-sm"
                >
                  {isUrdu ? "اس اسامی کے لیے درخواست دیں" : "Proceed to Apply"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* APPLICATION FORM MODAL */}
      {applyingJob && (
        <div className="fixed inset-0 z-50 bg-navy-950/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-gold-400/30 relative animate-fadeIn my-6">
            <button
              onClick={() => setApplyingJob(null)}
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
                {isUrdu ? applyingJob.titleUr : applyingJob.titleEn}
              </h3>
            </div>

            {formSubmitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-14 h-14 rounded-full bg-sage-100 text-sage-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-bold text-navy-900">
                  {isUrdu ? "درخواست موصول ہو گئی (فیز 1)" : "Application Details Verified (Phase 1)"}
                </h4>
                <p className="text-xs text-navy-600 leading-relaxed max-w-sm mx-auto">
                  {isUrdu
                    ? "آپ کے کوائف کامیابی سے ویلیڈیٹ کر لیے گئے ہیں۔ فیز 2 میں بھرتی کا کلاؤڈ ڈیٹا بیس فعال ہونے پر یہ براہ راست ایچ آر مینیجر کو موصول ہو گی۔"
                    : "Form validation verified. In Phase 2, this candidate intake profile will persist directly into the HR recruitment pipeline."}
                </p>
                <button
                  type="button"
                  onClick={() => setApplyingJob(null)}
                  className="px-6 py-2.5 rounded-xl bg-navy-900 text-white font-bold text-xs hover:bg-navy-800 transition-colors"
                >
                  {isUrdu ? "ونڈو بند کریں" : "Close Window"}
                </button>
              </div>
            ) : (
              <form onSubmit={handleApply} className="space-y-4 text-left rtl:text-right">
                <div>
                  <label className="block text-xs font-bold text-navy-900 mb-1">
                    {isUrdu ? "امیدوار کا پورا نام *" : "Full Name *"}
                  </label>
                  <input
                    type="text"
                    required
                    value={applicantName}
                    onChange={(e) => setApplicantName(e.target.value)}
                    placeholder={isUrdu ? "جیسے: زہرا بی بی / محمد طاہر" : "e.g. Fatima Zahra / Tariq Mehmood"}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-navy-900 mb-1">
                      {isUrdu ? "موبائل / واٹس ایپ نمبر *" : "Contact Phone / WhatsApp *"}
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
                      {isUrdu ? "شہر *" : "City in Pakistan *"}
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
                    {isUrdu ? "ترجیحی شفٹ (Preferred Shift)" : "Preferred Shift"}
                  </label>
                  <select
                    value={applicantShift}
                    onChange={(e) => setApplicantShift(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 bg-white"
                  >
                    <option value="day">{isUrdu ? "دن کی شفٹ (6 تا 8 گھنٹے)" : "Day Shift (6–8 Hours)"}</option>
                    <option value="night">{isUrdu ? "رات کی شفٹ (12 گھنٹے)" : "Night Watch (12 Hours)"}</option>
                    <option value="live-in">{isUrdu ? "24 گھنٹے لائیو ان قیام" : "24/7 Dedicated Live-In"}</option>
                    <option value="visit">{isUrdu ? "فی وزٹ / پارٹ ٹائم" : "Per-Visit / Part-Time"}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-navy-900 mb-1">
                    {isUrdu ? "سابقہ تجربہ یا تعلیمی کوائف" : "Relevant Eldercare Experience / Qualifications"}
                  </label>
                  <textarea
                    rows={2}
                    value={applicantExperience}
                    onChange={(e) => setApplicantExperience(e.target.value)}
                    placeholder={
                      isUrdu
                        ? "کتنے سال کا تجربہ ہے اور کس قسم کے مریضوں کی دیکھ بھال کی ہے؟"
                        : "Describe hospital, home care, or nursing experience..."
                    }
                    className="w-full px-4 py-2 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400"
                  />
                </div>

                <div className="pt-1">
                  <label className="flex items-start gap-2.5 cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      checked={ethicsConfirmed}
                      onChange={(e) => setEthicsConfirmed(e.target.checked)}
                      className="mt-1 w-4 h-4 rounded text-gold-500 focus:ring-gold-400 border-gray-300"
                    />
                    <span className="text-[11px] text-navy-700 leading-normal">
                      {isUrdu
                        ? "میں تصدیق کرتا/کرتی ہوں کہ میرے پاس نادرا شناختی کارڈ اور پولیس سرٹیفکیٹ موجود ہے اور میں بزرگوں کے احترام کا حلف لیتا/لیتی ہوں۔"
                        : "I confirm possession of valid CNIC, clear police standing, and agree to uphold elder dignity and privacy."}
                    </span>
                  </label>
                </div>

                <div className="p-3 rounded-xl bg-gold-50 border border-gold-200 text-[11px] text-navy-700 italic">
                  {isUrdu
                    ? "* فیز 1 نوٹ: فارم کی درستگی فعال ہے۔ انٹرویو کے وقت اصل شناختی کارڈ اور حوالہ جات چیک کیے جائیں گے۔"
                    : "* Phase 1 Notice: Form validation is active. Physical credentials and police certificates verified during interview."}
                </div>

                <div className="pt-2 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setApplyingJob(null)}
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
