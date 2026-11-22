"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import {
  CalendarCheck,
  CheckCircle2,
  AlertCircle,
  Clock,
  MapPin,
  Heart,
  Send,
  ShieldCheck,
  User,
  Phone,
  Mail,
  ChevronRight,
  ChevronLeft,
  Check,
  Activity,
  Calendar,
  Sparkles,
  FileCheck,
} from "lucide-react";

interface CareBookingFormProps {
  title?: string;
  subtitle?: string;
  defaultPlan?: string;
  defaultService?: string;
}

export function CareBookingForm({
  title,
  subtitle,
  defaultPlan,
  defaultService,
}: CareBookingFormProps) {
  const { isUrdu, t } = useLanguage();
  const searchParams = useSearchParams();
  const ArrowIcon = isUrdu ? ChevronLeft : ChevronRight;
  const BackArrowIcon = isUrdu ? ChevronRight : ChevronLeft;

  // Step state: 1, 2, 3, 4
  const [currentStep, setCurrentStep] = useState<number>(1);

  // Step 1: Personal Details
  const [fullName, setFullName] = useState("");
  const [relationship, setRelationship] = useState("son-daughter");
  const [phone, setPhone] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [email, setEmail] = useState("");

  // Step 2: Care Service & Senior Profile
  const [service, setService] = useState(defaultService || "daily-care");
  const [seniorGender, setSeniorGender] = useState("female");
  const [seniorAgeGroup, setSeniorAgeGroup] = useState("70-79");
  const [mobility, setMobility] = useState("semi");
  const [caregiverPref, setCaregiverPref] = useState("female");

  // Step 3: Location and Schedule
  const [city, setCity] = useState("Lahore");
  const [area, setArea] = useState("");
  const [duration, setDuration] = useState(defaultPlan || "daily");
  const [startDate, setStartDate] = useState("");
  const [shiftTime, setShiftTime] = useState("morning");
  const [notes, setNotes] = useState("");

  // Step 4: Consent & Submission
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedData, setSubmittedData] = useState<any | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const planParam = searchParams.get("plan");
    const serviceParam = searchParams.get("service");
    if (planParam) setDuration(planParam);
    if (serviceParam) setService(serviceParam);
  }, [searchParams]);

  // Validation per step
  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};

    if (step === 1) {
      if (!fullName.trim()) {
        newErrors.fullName = isUrdu ? "براہ کرم مکمل نام درج کریں" : "Please provide your full name";
      }
      if (!phone.trim()) {
        newErrors.phone = isUrdu ? "رابطہ فون نمبر درج کرنا لازمی ہے" : "Contact phone number is required";
      } else if (phone.trim().length < 8) {
        newErrors.phone = isUrdu ? "درست فون نمبر درج کریں" : "Please enter a valid phone number";
      }
    }

    if (step === 2) {
      if (!service) {
        newErrors.service = isUrdu ? "براہ کرم سروس منتخب کریں" : "Please select a required service";
      }
    }

    if (step === 3) {
      if (!city) {
        newErrors.city = isUrdu ? "براہ کرم شہر منتخب کریں" : "Please select your city";
      }
      if (!startDate) {
        newErrors.startDate = isUrdu ? "تاریخ آغاز منتخب کریں" : "Please choose an estimated start date";
      }
    }

    if (step === 4) {
      if (!consent) {
        newErrors.consent = isUrdu
          ? "براہ کرم رابطہ کرنے کی اجازت پر ٹک کریں"
          : "Please confirm consent to be contacted";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 4));
    }
  };

  const prevStep = () => {
    setErrors({});
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(4)) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({
        fullName,
        relationship,
        phone,
        whatsapp: whatsapp || phone,
        email: email || "Not provided",
        service,
        seniorGender,
        seniorAgeGroup,
        mobility,
        caregiverPref,
        city,
        area: area || (isUrdu ? "مرکزی شہر" : "Central City"),
        duration,
        startDate,
        shiftTime,
        notes: notes || (isUrdu ? "کوئی اضافی نوٹ نہیں" : "None provided"),
      });
    }, 500);
  };

  const stepsList = [
    { num: 1, title: t("wizard_step_1") },
    { num: 2, title: t("wizard_step_2") },
    { num: 3, title: t("wizard_step_3") },
    { num: 4, title: t("wizard_step_4") },
  ];

  if (submittedData) {
    return (
      <div className="rounded-3xl bg-white p-8 sm:p-12 border border-gold-400/40 shadow-soft-xl text-center space-y-6 animate-fadeIn">
        <div className="w-16 h-16 rounded-full bg-sage-100 text-sage-600 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-600 bg-gold-50 px-3 py-1 rounded-full border border-gold-200">
            {isUrdu ? "فیز 1 فرنٹ اینڈ تصدیق شدہ" : "Phase 1 Client Validation Complete"}
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-900 mt-2">
            {isUrdu ? "نگہداشت کی درخواست کا خاکہ تیار ہے" : "Care Assessment Request Verified"}
          </h3>
          <p className="text-sm text-navy-600 max-w-lg mx-auto leading-relaxed">
            {isUrdu
              ? "آپ کے تمام 4 مراحل کے کوائف کامیابی سے ویلیڈیٹ کر لیے گئے ہیں۔ فیز 2 میں بیک اینڈ منسلک ہونے پر یہ براہِ راست فائر اسٹور ڈیٹا بیس میں محفوظ ہوگی۔"
              : "All 4 steps have been validated client-side. In Phase 2, this structured payload connects directly into the cloud intake pipeline without mock data."}
          </p>
        </div>

        {/* Structured 4-Step Summary Table */}
        <div className="bg-cream-50 rounded-2xl p-6 text-left rtl:text-right border border-navy-900/5 max-w-xl mx-auto text-xs sm:text-sm space-y-3 text-navy-800">
          <div className="font-bold text-gold-700 uppercase tracking-wider text-[11px] pb-1 border-b border-gray-200">
            {isUrdu ? "1. ذاتی کوائف" : "1. Client Information"}
          </div>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div><span className="text-navy-500">{isUrdu ? "نام:" : "Name:"}</span> <strong className="block">{submittedData.fullName}</strong></div>
            <div><span className="text-navy-500">{isUrdu ? "رشتہ:" : "Relationship:"}</span> <strong className="block">{submittedData.relationship}</strong></div>
            <div><span className="text-navy-500">{isUrdu ? "فون:" : "Phone:"}</span> <strong className="block">{submittedData.phone}</strong></div>
            <div><span className="text-navy-500">{isUrdu ? "واٹس ایپ:" : "WhatsApp:"}</span> <strong className="block">{submittedData.whatsapp}</strong></div>
          </div>

          <div className="font-bold text-gold-700 uppercase tracking-wider text-[11px] pt-2 pb-1 border-b border-gray-200">
            {isUrdu ? "2. بزرگ کا پروفائل و مطلوبہ سروس" : "2. Senior Profile & Care Needs"}
          </div>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div><span className="text-navy-500">{isUrdu ? "سروس:" : "Service:"}</span> <strong className="block">{submittedData.service}</strong></div>
            <div><span className="text-navy-500">{isUrdu ? "بزرگ کی جنس:" : "Senior:"}</span> <strong className="block">{submittedData.seniorGender} ({submittedData.seniorAgeGroup} yrs)</strong></div>
            <div><span className="text-navy-500">{isUrdu ? "حرکت کی حالت:" : "Mobility:"}</span> <strong className="block">{submittedData.mobility}</strong></div>
            <div><span className="text-navy-500">{isUrdu ? "کیئر گیور کی جنس:" : "Caregiver:"}</span> <strong className="block">{submittedData.caregiverPref}</strong></div>
          </div>

          <div className="font-bold text-gold-700 uppercase tracking-wider text-[11px] pt-2 pb-1 border-b border-gray-200">
            {isUrdu ? "3. شیڈول اور مقام" : "3. Location & Schedule"}
          </div>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div><span className="text-navy-500">{isUrdu ? "شہر:" : "City:"}</span> <strong className="block">{submittedData.city} ({submittedData.area})</strong></div>
            <div><span className="text-navy-500">{isUrdu ? "پلان دورانیہ:" : "Duration:"}</span> <strong className="block">{submittedData.duration}</strong></div>
            <div><span className="text-navy-500">{isUrdu ? "تاریخ آغاز:" : "Start Date:"}</span> <strong className="block">{submittedData.startDate}</strong></div>
            <div><span className="text-navy-500">{isUrdu ? "اوقات کار:" : "Shift:"}</span> <strong className="block">{submittedData.shiftTime}</strong></div>
          </div>
        </div>

        <div className="pt-2">
          <button
            type="button"
            onClick={() => {
              setSubmittedData(null);
              setCurrentStep(1);
            }}
            className="px-8 py-3.5 rounded-full bg-navy-900 text-white font-bold text-xs hover:bg-navy-800 transition-colors shadow-soft-sm"
          >
            {isUrdu ? "ایک اور استفسار فارم شروع کریں" : "Start New Assessment Form"}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-3xl bg-white p-6 sm:p-10 lg:p-12 border border-navy-900/10 shadow-soft-lg">
      {/* Title Header */}
      <div className="mb-8 space-y-2">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-900">
          {title || (isUrdu ? "نگہداشت کا تفصیلی جائزہ اور کوٹیشن فارم" : "Book a Care Assessment & Quote")}
        </h3>
        <p className="text-sm text-navy-600 leading-relaxed">
          {subtitle ||
            (isUrdu
              ? "مرحلہ وار تفصیلات فراہم کریں تاکہ ہمارا نگہداشت مشیر مکمل تیاری کے ساتھ رہنمائی کر سکے۔"
              : "Step-by-step assessment form tailored to your elderly parent's unique domestic routine.")}
        </p>
      </div>

      {/* Progress Indicator Bar */}
      <div className="mb-10">
        <div className="grid grid-cols-4 gap-2 sm:gap-4 relative">
          {stepsList.map((s) => {
            const isCompleted = currentStep > s.num;
            const isCurrent = currentStep === s.num;

            return (
              <div key={s.num} className="flex flex-col items-center text-center">
                <div
                  className={`w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm transition-all duration-300 ${
                    isCompleted
                      ? "bg-sage-600 text-white"
                      : isCurrent
                      ? "bg-navy-900 text-gold-400 ring-4 ring-gold-400/30"
                      : "bg-gray-100 text-gray-400"
                  }`}
                >
                  {isCompleted ? <Check className="w-5 h-5" /> : s.num}
                </div>
                <span
                  className={`mt-2 text-[10.5px] sm:text-xs font-semibold hidden sm:block ${
                    isCurrent ? "text-navy-900 font-bold" : "text-navy-500"
                  }`}
                >
                  {s.title}
                </span>
              </div>
            );
          })}
        </div>

        {/* Visual Progress Line */}
        <div className="w-full bg-gray-100 h-1.5 rounded-full mt-4 overflow-hidden">
          <div
            className="bg-gold-400 h-full transition-all duration-300"
            style={{ width: `${((currentStep - 1) / 3) * 100}%` }}
          />
        </div>
      </div>

      {/* The 4-Step Form Wizard */}
      <form onSubmit={handleSubmit} className="space-y-6 text-left rtl:text-right">
        {/* STEP 1: Personal Details */}
        {currentStep === 1 && (
          <div className="space-y-5 animate-fadeIn">
            <div className="border-b border-gray-100 pb-3">
              <h4 className="text-base font-bold text-navy-900 flex items-center gap-2">
                <User className="w-4 h-4 text-gold-600" />
                <span>{isUrdu ? "مرحلہ 1: آپ کے ذاتی و خاندانی کوائف" : "Step 1: Your Contact Information"}</span>
              </h4>
            </div>

            <div>
              <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1.5">
                {t("form_full_name")} *
              </label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder={isUrdu ? "اپنا مکمل نام درج کریں" : "e.g. Tariq Mehmood / Aisha Farooq"}
                className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-gold-400 ${
                  errors.fullName ? "border-red-400 bg-red-50/20" : "border-gray-200"
                }`}
              />
              {errors.fullName && (
                <span className="text-xs text-red-500 mt-1 block">{errors.fullName}</span>
              )}
            </div>

            <div>
              <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1.5">
                {t("wizard_relationship")} *
              </label>
              <select
                value={relationship}
                onChange={(e) => setRelationship(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 bg-white"
              >
                <option value="son-daughter">{isUrdu ? "بیٹا / بیٹی (Son / Daughter)" : "Son / Daughter"}</option>
                <option value="spouse">{isUrdu ? "شریکِ حیات (Spouse)" : "Spouse"}</option>
                <option value="grandchild">{isUrdu ? "پوتا / پوتی / نواسا / نواسی" : "Grandchild"}</option>
                <option value="self">{isUrdu ? "خود اپنے لیے (Self - Senior)" : "Self (I am the senior)"}</option>
                <option value="relative">{isUrdu ? "دیگر عزیز / رشتے دار" : "Other Relative or Guardian"}</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1.5">
                  {t("form_phone")} *
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="0300-1234567"
                  className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-gold-400 ${
                    errors.phone ? "border-red-400 bg-red-50/20" : "border-gray-200"
                  }`}
                />
                {errors.phone && (
                  <span className="text-xs text-red-500 mt-1 block">{errors.phone}</span>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1.5">
                  {t("form_whatsapp")}
                </label>
                <input
                  type="tel"
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  placeholder="+44 7... / +971 5... / 0300..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm transition-all focus:outline-none focus:ring-2 focus:ring-gold-400"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1.5">
                {isUrdu ? "ای میل ایڈریس (اختیاری)" : "Email Address (Optional)"}
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm transition-all focus:outline-none focus:ring-2 focus:ring-gold-400"
              />
            </div>
          </div>
        )}

        {/* STEP 2: Required Care Service & Senior Profile */}
        {currentStep === 2 && (
          <div className="space-y-5 animate-fadeIn">
            <div className="border-b border-gray-100 pb-3">
              <h4 className="text-base font-bold text-navy-900 flex items-center gap-2">
                <Activity className="w-4 h-4 text-gold-600" />
                <span>{isUrdu ? "مرحلہ 2: مطلوبہ نگہداشت اور بزرگ کی حالت" : "Step 2: Service Selection & Senior Needs"}</span>
              </h4>
            </div>

            <div>
              <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1.5">
                {t("form_service_needed")} *
              </label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 bg-white"
              >
                <option value="daily-care">{t("service_1_title")}</option>
                <option value="hygiene-care">{t("service_2_title")}</option>
                <option value="home-nursing">{t("service_3_title")}</option>
                <option value="monitoring">{t("service_4_title")}</option>
                <option value="doctor-visit">{t("service_5_title")}</option>
                <option value="physiotherapy">{t("service_6_title")}</option>
                <option value="live-in-care">{t("service_7_title")}</option>
                <option value="overseas-support">{t("service_8_title")}</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1.5">
                  {isUrdu ? "بزرگ کی جنس (Senior Gender)" : "Senior's Gender"}
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setSeniorGender("female")}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold border transition-all ${
                      seniorGender === "female"
                        ? "bg-navy-900 text-gold-300 border-navy-900"
                        : "bg-white text-navy-700 border-gray-200 hover:bg-gray-50"
                    }`}
                  >
                    {isUrdu ? "والدہ / خاتون (Female)" : "Mother / Female"}
                  </button>
                  <button
                    type="button"
                    onClick={() => setSeniorGender("male")}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold border transition-all ${
                      seniorGender === "male"
                        ? "bg-navy-900 text-gold-300 border-navy-900"
                        : "bg-white text-navy-700 border-gray-200 hover:bg-gray-50"
                    }`}
                  >
                    {isUrdu ? "والد / مرد (Male)" : "Father / Male"}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1.5">
                  {isUrdu ? "عمر کی حد (Age Bracket)" : "Senior's Approximate Age"}
                </label>
                <select
                  value={seniorAgeGroup}
                  onChange={(e) => setSeniorAgeGroup(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 bg-white"
                >
                  <option value="60-69">60 – 69 Years</option>
                  <option value="70-79">70 – 79 Years</option>
                  <option value="80-89">80 – 89 Years</option>
                  <option value="90+">90+ Years</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1.5">
                  {t("wizard_mobility_level")}
                </label>
                <select
                  value={mobility}
                  onChange={(e) => setMobility(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 bg-white"
                >
                  <option value="independent">{isUrdu ? "خود چل سکتے ہیں (Independent)" : "Walks Independently"}</option>
                  <option value="semi">{isUrdu ? "لاٹھی یا واکر کی مدد درکار ہے" : "Uses Cane / Walker Assistance"}</option>
                  <option value="wheelchair">{isUrdu ? "وہیل چیئر کا استعمال" : "Wheelchair Dependent"}</option>
                  <option value="bedbound">{isUrdu ? "مکمل طور پر بستر پر (Bedbound)" : "Bedbound / Full Assistance"}</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1.5">
                  {t("wizard_caregiver_pref")}
                </label>
                <select
                  value={caregiverPref}
                  onChange={(e) => setCaregiverPref(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 bg-white"
                >
                  <option value="female">{isUrdu ? "خاتون نگہداشت کار (Female Caregiver)" : "Female Caregiver"}</option>
                  <option value="male">{isUrdu ? "مرد نگہداشت کار (Male Caregiver)" : "Male Caregiver"}</option>
                  <option value="either">{isUrdu ? "کوئی بھی مناسب تجربہ کار" : "Either / Experience Based"}</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* STEP 3: Location and Schedule */}
        {currentStep === 3 && (
          <div className="space-y-5 animate-fadeIn">
            <div className="border-b border-gray-100 pb-3">
              <h4 className="text-base font-bold text-navy-900 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gold-600" />
                <span>{isUrdu ? "مرحلہ 3: مقام اور شیڈول کی تفصیلات" : "Step 3: Location & Timing Preferences"}</span>
              </h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1.5">
                  {t("form_city")} *
                </label>
                <select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 bg-white"
                >
                  <option value="Lahore">Lahore (لاہور) — Pilot Active</option>
                  <option value="Islamabad">Islamabad (اسلام آباد) — Pilot Active</option>
                  <option value="Rawalpindi">Rawalpindi (راولپنڈی) — Pilot Active</option>
                  <option value="Faisalabad">Faisalabad (فیصل آباد) — Pre-Registration</option>
                  <option value="Multan">Multan (ملتان) — Pre-Registration</option>
                  <option value="Karachi">Karachi (کراچی) — Upcoming</option>
                  <option value="Other">Other Pakistani City</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1.5">
                  {t("wizard_address_area")}
                </label>
                <input
                  type="text"
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  placeholder={isUrdu ? "جیسے: ماڈل ٹاؤن، گلبرگ، ڈی ایچ اے، F-7" : "e.g. DHA, Model Town, Bahria, F-7"}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1.5">
                  {t("form_duration")}
                </label>
                <select
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 bg-white"
                >
                  <option value="essential">Essential Visit (2–4 Hours)</option>
                  <option value="daily">Daily Care (6–8 Hours Day Shift)</option>
                  <option value="night">Night Watch (12 Hours Overnight)</option>
                  <option value="live-in">24/7 Dedicated Live-In Care</option>
                  <option value="custom">Custom Discussion</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1.5">
                  {t("form_start_date")} *
                </label>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 bg-white ${
                    errors.startDate ? "border-red-400 bg-red-50/20" : "border-gray-200"
                  }`}
                />
                {errors.startDate && (
                  <span className="text-xs text-red-500 mt-1 block">{errors.startDate}</span>
                )}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1.5">
                {t("form_notes")}
              </label>
              <textarea
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder={
                  isUrdu
                    ? "بزرگ کی دوائیوں، معمولات یا کسی خاص بیماری (جیسے فالج، الزائمر) کے بارے میں بتائیں..."
                    : "Add any health notes, doctor instructions, or specific family expectations..."
                }
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400"
              />
            </div>
          </div>
        )}

        {/* STEP 4: Review Information & Confirmation */}
        {currentStep === 4 && (
          <div className="space-y-5 animate-fadeIn">
            <div className="border-b border-gray-100 pb-3">
              <h4 className="text-base font-bold text-navy-900 flex items-center gap-2">
                <FileCheck className="w-4 h-4 text-gold-600" />
                <span>{isUrdu ? "مرحلہ 4: معلومات کا حتمی جائزہ اور توثیق" : "Step 4: Review Your Details Before Submitting"}</span>
              </h4>
              <p className="text-xs text-navy-600 mt-1">
                {t("wizard_review_notice")}
              </p>
            </div>

            {/* Structured Review Card */}
            <div className="rounded-2xl bg-cream-50/90 p-5 border border-navy-900/10 text-xs sm:text-sm space-y-3">
              <div className="flex justify-between border-b border-gray-200/60 pb-2">
                <span className="text-navy-500">{isUrdu ? "نام:" : "Client Name:"}</span>
                <span className="font-bold text-navy-900">{fullName} ({relationship})</span>
              </div>
              <div className="flex justify-between border-b border-gray-200/60 pb-2">
                <span className="text-navy-500">{isUrdu ? "فون و واٹس ایپ:" : "Phone / WhatsApp:"}</span>
                <span className="font-bold text-navy-900">{phone} {whatsapp ? `(${whatsapp})` : ""}</span>
              </div>
              <div className="flex justify-between border-b border-gray-200/60 pb-2">
                <span className="text-navy-500">{isUrdu ? "مطلوبہ سروس:" : "Selected Service:"}</span>
                <span className="font-bold text-navy-900">{service}</span>
              </div>
              <div className="flex justify-between border-b border-gray-200/60 pb-2">
                <span className="text-navy-500">{isUrdu ? "بزرگ کی تفصیل:" : "Senior Acuity:"}</span>
                <span className="font-bold text-navy-900">{seniorGender}, {seniorAgeGroup} yrs, {mobility}</span>
              </div>
              <div className="flex justify-between border-b border-gray-200/60 pb-2">
                <span className="text-navy-500">{isUrdu ? "مقام و دورانیہ:" : "City & Duration:"}</span>
                <span className="font-bold text-navy-900">{city} ({area || "Central"}) • {duration}</span>
              </div>
              <div className="flex justify-between pb-1">
                <span className="text-navy-500">{isUrdu ? "متوقع تاریخ آغاز:" : "Target Start Date:"}</span>
                <span className="font-bold text-gold-700">{startDate || "Earliest available"}</span>
              </div>
            </div>

            {/* Consent Checkbox */}
            <div className="pt-2">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-1 w-4 h-4 rounded text-gold-500 focus:ring-gold-400 border-gray-300"
                />
                <span className="text-xs text-navy-700 leading-normal">
                  {t("form_consent")}
                </span>
              </label>
              {errors.consent && (
                <span className="text-xs text-red-500 mt-1 block">{errors.consent}</span>
              )}
            </div>

            {/* Phase 1 Explanatory Badge */}
            <div className="p-3.5 rounded-xl bg-gold-50 border border-gold-200 text-xs text-navy-800 leading-snug">
              <span className="font-bold mr-1">
                {isUrdu ? "فیز 1 ٹیسٹنگ وضاحت:" : "Phase 1 UI Architecture Notice:"}
              </span>
              <span>{t("form_phase1_notice")}</span>
            </div>
          </div>
        )}

        {/* Wizard Navigation Action Controls */}
        <div className="pt-4 border-t border-gray-100 flex items-center justify-between gap-4">
          {currentStep > 1 ? (
            <button
              type="button"
              onClick={prevStep}
              className="inline-flex items-center gap-1.5 px-6 py-3 rounded-xl border border-gray-200 text-navy-700 font-bold text-xs sm:text-sm hover:bg-gray-50 transition-colors"
            >
              <BackArrowIcon className="w-4 h-4" />
              <span>{t("wizard_btn_back")}</span>
            </button>
          ) : (
            <div />
          )}

          {currentStep < 4 ? (
            <button
              type="button"
              onClick={nextStep}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-navy-900 text-white font-bold text-xs sm:text-sm shadow-soft-sm hover:bg-navy-800 transition-colors"
            >
              <span>{t("wizard_btn_next")}</span>
              <ArrowIcon className="w-4 h-4 text-gold-400" />
            </button>
          ) : (
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gold-400 text-navy-900 font-extrabold text-sm sm:text-base shadow-soft-md hover:bg-gold-500 transition-colors disabled:opacity-70"
            >
              <CalendarCheck className="w-5 h-5" />
              <span>{isSubmitting ? t("form_submitting") : t("wizard_btn_confirm")}</span>
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
