"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import {
  Heart,
  ShieldCheck,
  Target,
  Eye,
  CheckCircle2,
  Users,
  Award,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  CalendarCheck,
  Phone,
  Lock,
} from "lucide-react";

export default function AboutPage() {
  const { isUrdu, t } = useLanguage();
  const ArrowIcon = isUrdu ? ArrowLeft : ArrowRight;

  const coreValues = [
    {
      title: isUrdu ? "عزت و وقار کا تقدس" : "Elderly Dignity & Reverence",
      desc: isUrdu
        ? "ہماری نگہداشت کا پہلا اصول بزرگوں کے وقار، رازداری اور خود اعتمادی کا تحفظ ہے۔"
        : "Every action is anchored in honoring our elders' independence, domestic privacy, and personal choices.",
      icon: Heart,
    },
    {
      title: isUrdu ? "مکمل امانت اور حفاظت" : "Uncompromising Safety",
      desc: isUrdu
        ? "سخت ترین تصدیقی عمل، پولیس ویریفکیشن اور مسلسل نگرانی کے ذریعے مکمل ذہنی سکون۔"
        : "Rigorous identity verification, police background screening, and strict home protocol guidelines.",
    },
    {
      title: isUrdu ? "ہمدردانہ خلوص" : "Compassion Above All",
      desc: isUrdu
        ? "ہم محض ڈیوٹی انجام نہیں دیتے بلکہ اپنے پن اور خلوص کے ساتھ خاندان جیسا تعلق نبھاتے ہیں۔"
        : "We deliver care that feels genuine, patient, and warm—the standard you would expect from devoted family.",
    },
    {
      title: isUrdu ? "شفاف احتساب" : "Transparent Accountability",
      desc: isUrdu
        ? "ہر وزٹ کی شفاف رپورٹنگ تاکہ اہل خانہ اور خصوصاً بیرون ملک مقیم بچے ہمیشہ مطمئن رہیں۔"
        : "Systematic visit reporting and honest feedback keeping families directly involved and fully informed.",
      icon: ShieldCheck,
    },
  ];

  const safetySteps = [
    {
      num: "01",
      title: isUrdu ? "شناختی کوائف اور نادرا تصدیق" : "CNIC & Identity Verification",
      desc: isUrdu
        ? "ہر امیدوار کے قومی شناختی کارڈ اور خاندانی پس منظر کی سرکاری ریکارڈ کے مطابق تصدیق۔"
        : "Biometric and government identity document auditing for all applying male and female caregivers.",
    },
    {
      num: "02",
      title: isUrdu ? "پولیس کلیئرنس اور کرمنل بیک گراؤنڈ چیک" : "Police Clearance & Character Audit",
      desc: isUrdu
        ? "متعلقہ تھانے سے باقاعدہ کریکٹر سرٹیفکیٹ اور سابقہ ریکارڈ کی جامع تفتیش۔"
        : "Formal police character certification and local community background checks before onboarding.",
    },
    {
      num: "03",
      title: isUrdu ? "سابقہ مالکان اور ڈاکٹرز کے حوالہ جات کی جانچ" : "Reference & Past Employment Verification",
      desc: isUrdu
        ? "سابقہ مریضوں کے اہل خانہ اور زیرِ علاج ڈاکٹرز سے براہِ راست رابطہ کر کے فیڈ بیک کا حصول۔"
        : "Direct contact with past senior families and clinical supervisors to confirm integrity and gentleness.",
    },
    {
      num: "04",
      title: isUrdu ? "بزرگ نگہداشت اور حفظانِ صحت کی جامع ٹریننگ" : "Eldercare Protocols & Safety Training",
      desc: isUrdu
        ? "گرنے سے بچاؤ، باتھ روم سیفٹی، ذاتی طہارت میں پردے کے آداب اور بزرگوں کی نفسیات کی تربیت۔"
        : "Training in fall prevention, bathroom assistance, dignified hygiene, dementia empathy, and CPR readiness.",
    },
  ];

  return (
    <div className="bg-cream-100 min-h-screen">
      {/* Editorial Page Header */}
      <section className="relative py-16 lg:py-24 bg-white border-b border-navy-900/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-50 border border-gold-200 text-gold-700 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-gold-600" />
              <span>{isUrdu ? "ہمارے بارے میں" : "About Mehrban Care"}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy-900 tracking-tight leading-tight">
              {isUrdu
                ? "بزرگوں کی خدمت، وقار اور محبت کا پختہ عزم"
                : "Dedicated to Compassion, Dignity, and Peace of Mind."}
            </h1>
            <p className="text-base sm:text-lg text-navy-700 leading-relaxed">
              {isUrdu
                ? "مہربان کیئر کا قیام اس احساس کے ساتھ عمل میں لایا گیا کہ ہمارے بزرگ اپنے ہی گھر کے سکون میں باوقار، محفوظ اور بااعتماد نگہداشت کے مستحق ہیں۔"
                : "Mehrban Care was established to ensure Pakistani seniors receive the highest international standard of compassionate, respectful in-home support while keeping families connected."}
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Mission */}
          <div className="rounded-3xl bg-navy-900 text-white p-8 sm:p-12 border border-navy-800 shadow-soft-lg flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-gold-400/20 border border-gold-400 text-gold-400 flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                {isUrdu ? "ہمارا مشن (Our Mission)" : "Our Mission"}
              </h2>
              <p className="text-cream-200 text-sm sm:text-base leading-relaxed">
                {isUrdu
                  ? "ہمارا مشن بزرگوں کو ان کے اپنے مانوس گھر کے آرام میں محفوظ، ہمدردانہ اور باوقار نگہداشت فراہم کرنا ہے۔ ہم خاندانوں اور خصوصاً پردیس میں مقیم بیٹوں اور بیٹیوں کو مکمل ذہنی اطمینان بخشتے ہیں کہ ان کے والدین کے روزمرہ معمولات اور صحت کا خیال ایک سچے خاندان کی طرح رکھا جا رہا ہے۔"
                  : "To provide compassionate, safe, dignified, and dependable elderly care services in the comfort of the client's own home, relieving families from worry and empowering seniors to thrive with autonomy."}
              </p>
            </div>
            <div className="pt-6 border-t border-navy-800 flex items-center gap-2 text-xs text-gold-300">
              <CheckCircle2 className="w-4 h-4 text-gold-400" />
              <span>{isUrdu ? "ہر عمل میں بزرگ کا احترام اولیت" : "Senior dignity above all"}</span>
            </div>
          </div>

          {/* Vision */}
          <div className="rounded-3xl bg-white p-8 sm:p-12 border border-navy-900/10 shadow-soft-sm flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-sage-100 text-sage-700 flex items-center justify-center">
                <Eye className="w-6 h-6" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900">
                {isUrdu ? "ہمارا وژن (Our Vision)" : "Our Vision"}
              </h2>
              <p className="text-navy-700 text-sm sm:text-base leading-relaxed">
                {isUrdu
                  ? "پاکستان میں بزرگوں کی گھریلو دیکھ بھال کا سب سے معتبر اور قابل فخر ادارہ بننا، جو اخلاقیات، شفافیت اور پیشہ ورانہ مہارت کے بین الاقوامی معیار قائم کرے اور بزرگ شہریوں کی خدمت کو ایک مقدس فریضہ سمجھے۔"
                  : "To become Pakistan's most trusted elderly home care organization—recognized internationally for excellence in caregiver ethics, empathetic family communication, and senior advocacy."}
              </p>
            </div>
            <div className="pt-6 border-t border-gray-100 flex items-center gap-2 text-xs text-sage-700 font-semibold">
              <CheckCircle2 className="w-4 h-4 text-sage-600" />
              <span>{isUrdu ? "بین الاقوامی معیار پر مبنی گھریلو سروس" : "Setting benchmark care standards in Pakistan"}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Cultural Reverence & Visual Storytelling Section */}
      <section className="py-16 lg:py-24 bg-white border-y border-navy-900/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Visual Photographic Frame (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="absolute -inset-3 rounded-[2.5rem] bg-gradient-to-tr from-gold-300 via-sage-300 to-navy-200 opacity-50 blur-lg transform -rotate-1 pointer-events-none" />
                <div className="relative rounded-[2.2rem] overflow-hidden bg-navy-950 shadow-soft-xl border-4 border-white aspect-[4/5]">
                  <Image
                    src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=85"
                    alt="Elderly Pakistani parent and dedicated caregiver sharing a warm, respectful conversation at home"
                    fill
                    sizes="(max-width: 1024px) 100vw, 480px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/20 to-transparent" />
                  
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/50 text-navy-900 shadow-soft-md">
                    <p className="text-xs font-bold text-navy-900 flex items-center gap-1.5 mb-1">
                      <Heart className="w-4 h-4 text-gold-600 fill-gold-400" />
                      <span>{isUrdu ? "بزرگوں کی خدمت، ایک مقدس فریضہ" : "Elder Care as a Sacred Honor"}</span>
                    </p>
                    <p className="text-[11px] text-navy-600 leading-snug">
                      {isUrdu
                        ? "ہمارے بزرگ ہمارے گھروں کی برکت اور پہچان ہیں۔ ان کا احترام ہر خدمت کی بنیاد ہے۔"
                        : "Preserving comfort, prayer routines, and family honor within the senior's own domestic sanctuary."}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Editorial Storytelling (7 cols) */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left rtl:lg:text-right">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-50 border border-gold-200 text-gold-700 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-gold-600" />
                <span>{isUrdu ? "ہماری سوچ اور فلسفہ" : "Our Care Philosophy"}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight leading-tight">
                {isUrdu
                  ? "گھر کا مانوس ماحول اور باوقار زندگی کا تحفظ"
                  : "Preserving Independence in the Familiar Comfort of Home"}
              </h2>

              <p className="text-base text-navy-700 leading-relaxed">
                {isUrdu
                  ? "پاکستانی معاشرے میں والدین اور بزرگ گھرانوں کی رونق اور سر کا تاج ہوتے ہیں۔ بڑھتی ہوئی عمر یا بیماری کے باعث جب روزمرہ کاموں میں مدد کی ضرورت پیش آتی ہے تو انہیں کسی پر بوجھ محسوس نہیں ہونا چاہیے۔"
                  : "In Pakistani culture, our parents and elders are the anchor of our families. When age or mobility challenges arise, they deserve compassionate support that celebrates their wisdom rather than limiting their dignity."}
              </p>

              <div className="space-y-4 pt-2 text-left rtl:text-right">
                <div className="p-4 rounded-2xl bg-cream-50 border border-navy-900/5 space-y-1">
                  <h3 className="text-sm font-bold text-navy-900 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-gold-600 flex-shrink-0" />
                    <span>{isUrdu ? "گھریلو رازداری اور اسلامی پردے کا تقدس" : "Privacy & Cultural Reverence"}</span>
                  </h3>
                  <p className="text-xs text-navy-600 leading-relaxed pl-6 rtl:pl-0 rtl:pr-6">
                    {isUrdu
                      ? "ہماری نگہداشت کار خواتین اور مرد مکمل طور پر گھریلو اقدار، پردے کے آداب اور دینی معمولات کا احترام کرتے ہیں۔"
                      : "Strict segregation of male and female staffing ensures senior mothers and fathers feel utterly at ease in their private space."}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-cream-50 border border-navy-900/5 space-y-1">
                  <h3 className="text-sm font-bold text-navy-900 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sage-600 flex-shrink-0" />
                    <span>{isUrdu ? "روزمرہ نماز اور خوراک کا باقاعدہ اہتمام" : "Prayer Times & Daily Rhythms"}</span>
                  </h3>
                  <p className="text-xs text-navy-600 leading-relaxed pl-6 rtl:pl-0 rtl:pr-6">
                    {isUrdu
                      ? "وضو میں احتیاط سے مدد، باجماعت نماز کی تیاری، اور وقت پر تازہ غذا و پانی کا تسلسل۔"
                      : "Assisting with gentle ablution, accompanying indoor prayer routines, and ensuring nutritious, timely meals."}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-cream-50 border border-navy-900/5 space-y-1">
                  <h3 className="text-sm font-bold text-navy-900 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-navy-700 flex-shrink-0" />
                    <span>{isUrdu ? "پردیس میں مقیم بچوں کے لیے شفاف رابطہ" : "Connecting Overseas Sons & Daughters"}</span>
                  </h3>
                  <p className="text-xs text-navy-600 leading-relaxed pl-6 rtl:pl-0 rtl:pr-6">
                    {isUrdu
                      ? "ہر وزٹ پر واٹس ایپ رپورٹنگ تاکہ سات سمندر پار بیٹھے بچے ہر لمحہ مطمئن رہ سکیں۔"
                      : "Comprehensive visit briefings that bridge miles and bring immense relief to children living across the world."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 lg:py-24 bg-cream-100 border-b border-navy-900/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-600">
              {isUrdu ? "ہماری اقدار" : "Foundational Principles"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900">
              {isUrdu ? "جن اصولوں پر ہمارا ادارہ قائم ہے" : "Our Core Values"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((val, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-cream-50/80 border border-navy-900/5 hover:border-gold-400/40 hover:bg-white hover:shadow-soft-md transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-navy-900 text-gold-400 flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-navy-900 mb-2.5">
                  {val.title}
                </h3>
                <p className="text-sm text-navy-600 leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Caregiver Selection & Safety Approach */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-100 text-gold-800 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-gold-600" />
              <span>{isUrdu ? "حفاظت اور اعتماد" : "Rigorous Vetting"}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight leading-tight">
              {isUrdu
                ? "نگہداشت کاروں کے انتخاب کا 4 سطحی تصدیقی طریقہ کار"
                : "Our 4-Stage Caregiver Screening & Safety Approach"}
            </h2>
            <p className="text-sm sm:text-base text-navy-700 leading-relaxed">
              {isUrdu
                ? "آپ کے گھر کی دہلیز پر کسی بھی نگہداشت کار کو بھیجنے سے پہلے ہم تصدیق اور جانچ پڑتال کے کڑے مراحل طے کرتے ہیں تاکہ آپ کے بزرگ اور آپ کا گھر مکمل طور پر محفوظ ہاتھوں میں ہو۔"
                : "We understand that inviting a caregiver into your private home requires absolute trust. Our multi-step vetting protocol ensures only the most dependable, respectful, and vetted individuals represent Mehrban Care."}
            </p>

            <div className="pt-2">
              <Link
                href="/book-care"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-navy-900 text-white font-bold text-sm shadow-soft-sm hover:bg-navy-800 transition-colors"
              >
                <span>{isUrdu ? "کیئر اسسمنٹ بک کریں" : "Book a Care Consultation"}</span>
                <ArrowIcon className="w-4 h-4 text-gold-400" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            {safetySteps.map((step, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-navy-900/5 shadow-soft-sm flex items-start gap-5 hover:border-gold-400/30 transition-all"
              >
                <span className="text-xl font-black text-gold-500 font-serif flex-shrink-0 pt-0.5">
                  {step.num}
                </span>
                <div>
                  <h3 className="text-base font-bold text-navy-900 mb-1">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-navy-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ethical Medical Notice */}
      <section className="pb-20 max-w-4xl mx-auto px-4 sm:px-6">
        <div className="rounded-3xl bg-white p-8 border border-gold-400/30 shadow-soft-md text-center space-y-3">
          <h3 className="text-lg font-bold text-navy-900">
            {isUrdu ? "خدمت کے اخلاقی اور قانونی ضوابط" : "Our Operational & Ethical Commitments"}
          </h3>
          <p className="text-xs sm:text-sm text-navy-600 leading-relaxed">
            {isUrdu
              ? "مہربان کیئر غیر طبی معاونت، گھریلو نرسنگ سپورٹ اور روزمرہ رفاقت فراہم کرتی ہے۔ ہمارا عملہ رجسٹرڈ ڈاکٹرز کے علاج کے منصوبوں میں معاونت کرتا ہے اور خود امراض کی تشخیص یا ادویات تجویز نہیں کرتا۔"
              : "Mehrban Care strictly provides non-medical personal assistance, companion care, and coordinated health support under the supervision of the family's licensed medical doctors. We never fabricate certifications or make unauthorized clinical claims."}
          </p>
        </div>
      </section>
    </div>
  );
}
