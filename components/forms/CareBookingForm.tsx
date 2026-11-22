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

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [city, setCity] = useState("Lahore");
  const [service, setService] = useState(defaultService || "daily-care");
  const [duration, setDuration] = useState(defaultPlan || "daily");
  const [startDate, setStartDate] = useState("");
  const [notes, setNotes] = useState("");
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

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!fullName.trim()) {
      newErrors.fullName = isUrdu ? "براہ کرم مکمل نام درج کریں" : "Please provide your full name";
    }
    if (!phone.trim()) {
      newErrors.phone = isUrdu ? "فون نمبر درج کرنا ضروری ہے" : "Contact phone is required";
    } else if (phone.trim().length < 8) {
      newErrors.phone = isUrdu ? "درست فون نمبر درج کریں" : "Please enter a valid phone number";
    }
    if (!consent) {
      newErrors.consent = isUrdu
        ? "براہ کرم رابطہ کرنے کی اجازت پر ٹک کریں"
        : "Please confirm consent to be contacted";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate frontend validation & processing without pretending backend DB exists
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({
        fullName,
        phone,
        whatsapp: whatsapp || phone,
        city,
        service,
        duration,
        startDate: startDate || (isUrdu ? "فوری / جلد از جلد" : "As soon as possible"),
        notes,
      });
    }, 400);
  };

  if (submittedData) {
    return (
      <div className="rounded-3xl bg-white p-8 sm:p-12 border border-gold-400/40 shadow-soft-xl text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-sage-100 text-sage-600 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <div className="space-y-2">
          <h3 className="text-2xl font-extrabold text-navy-900">
            {isUrdu ? "نگہداشت کی درخواست تیار ہے" : "Care Inquiry Verified (Phase 1)"}
          </h3>
          <p className="text-sm text-navy-600 max-w-md mx-auto leading-relaxed">
            {isUrdu
              ? "آپ کے کوائف کی فرنٹ اینڈ جانچ پڑتال کامیابی سے مکمل ہو گئی ہے۔ فیز 2 میں ڈیٹا بیس منسلک ہونے پر یہ براہ راست کیئر کوآرڈینیٹر کو موصول ہوگی۔"
              : "Your request details passed client-side validation. In Phase 2, this payload connects directly into the Firestore booking database."}
          </p>
        </div>

        {/* Payload Summary Receipt */}
        <div className="bg-cream-50 rounded-2xl p-6 text-left rtl:text-right border border-navy-900/5 max-w-lg mx-auto text-xs sm:text-sm space-y-2 text-navy-800">
          <div className="flex justify-between border-b border-gray-200/60 pb-2">
            <span className="font-semibold text-navy-500">{isUrdu ? "نام:" : "Name:"}</span>
            <span className="font-bold">{submittedData.fullName}</span>
          </div>
          <div className="flex justify-between border-b border-gray-200/60 pb-2">
            <span className="font-semibold text-navy-500">{isUrdu ? "فون:" : "Phone:"}</span>
            <span className="font-bold">{submittedData.phone}</span>
          </div>
          <div className="flex justify-between border-b border-gray-200/60 pb-2">
            <span className="font-semibold text-navy-500">{isUrdu ? "شہر:" : "City:"}</span>
            <span className="font-bold">{submittedData.city}</span>
          </div>
          <div className="flex justify-between border-b border-gray-200/60 pb-2">
            <span className="font-semibold text-navy-500">{isUrdu ? "سروس:" : "Service:"}</span>
            <span className="font-bold">{submittedData.service}</span>
          </div>
          <div className="flex justify-between border-b border-gray-200/60 pb-2">
            <span className="font-semibold text-navy-500">{isUrdu ? "دورانیہ:" : "Duration:"}</span>
            <span className="font-bold">{submittedData.duration}</span>
          </div>
          <div className="flex justify-between pt-1">
            <span className="font-semibold text-navy-500">{isUrdu ? "تاریخ آغاز:" : "Target Start:"}</span>
            <span className="font-bold">{submittedData.startDate}</span>
          </div>
        </div>

        <div className="pt-2">
          <button
            type="button"
            onClick={() => setSubmittedData(null)}
            className="px-8 py-3 rounded-full bg-navy-900 text-white font-bold text-xs hover:bg-navy-800 transition-colors"
          >
            {isUrdu ? "ایک اور استفسار فارم جمع کریں" : "Submit Another Inquiry"}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-3xl bg-white p-8 sm:p-12 border border-navy-900/10 shadow-soft-lg">
      <div className="mb-8 space-y-2">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-900">
          {title || (isUrdu ? "نگہداشت کا جائزہ بک کریں" : "Book a Confidential Care Assessment")}
        </h3>
        <p className="text-sm text-navy-600 leading-relaxed">
          {subtitle ||
            (isUrdu
              ? "اپنے بزرگ کے معمولات اور ضروریات سے آگاہ کریں۔ ہمارا نگہداشت مشیر 24 گھنٹے میں رابطہ کرے گا۔"
              : "Share your family's care requirements. Our compassionate Care Advisor will review and connect with you.")}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5 text-left rtl:text-right">
        {/* Full Name */}
        <div>
          <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1.5">
            {t("form_full_name")} *
          </label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder={isUrdu ? "جیسے: محمد طارق / زہرا احمد" : "e.g. Tariq Mehmood or Aisha Khan"}
            className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-gold-400 ${
              errors.fullName ? "border-red-400 bg-red-50/30" : "border-gray-200"
            }`}
          />
          {errors.fullName && (
            <span className="text-xs text-red-500 mt-1 block">{errors.fullName}</span>
          )}
        </div>

        {/* Phone & WhatsApp */}
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
                errors.phone ? "border-red-400 bg-red-50/30" : "border-gray-200"
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

        {/* City Selection */}
        <div>
          <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1.5">
            {t("form_city")} *
          </label>
          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm transition-all focus:outline-none focus:ring-2 focus:ring-gold-400 bg-white"
          >
            <option value="Lahore">Lahore (لاہور) — Pilot Active</option>
            <option value="Islamabad">Islamabad (اسلام آباد) — Pilot Active</option>
            <option value="Rawalpindi">Rawalpindi (راولپنڈی) — Pilot Active</option>
            <option value="Faisalabad">Faisalabad (فیصل آباد) — Pre-Registration</option>
            <option value="Multan">Multan (ملتان) — Pre-Registration</option>
            <option value="Karachi">Karachi (کراچی) — Upcoming</option>
            <option value="Other">Other Pakistani City (دیگر شہر)</option>
          </select>
          <p className="text-[11px] text-navy-500 mt-1">
            {isUrdu
              ? "لاہور، اسلام آباد اور راولپنڈی میں سروس فعال ہے۔ دیگر شہروں کے لیے رجسٹریشن کھلی ہے۔"
              : "Dedicated pilot services active in Lahore, Islamabad & Rawalpindi."}
          </p>
        </div>

        {/* Required Service & Duration */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1.5">
              {t("form_service_needed")}
            </label>
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm transition-all focus:outline-none focus:ring-2 focus:ring-gold-400 bg-white"
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

          <div>
            <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1.5">
              {t("form_duration")}
            </label>
            <select
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm transition-all focus:outline-none focus:ring-2 focus:ring-gold-400 bg-white"
            >
              <option value="essential">Essential Visit (2–4 Hours)</option>
              <option value="daily">Daily Care (6–8 Hours Day Shift)</option>
              <option value="night">Night Watch (12 Hours Overnight)</option>
              <option value="live-in">24/7 Dedicated Live-In Care</option>
              <option value="custom">Custom Schedule Discussion</option>
            </select>
          </div>
        </div>

        {/* Preferred Start Date */}
        <div>
          <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1.5">
            {t("form_start_date")}
          </label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm transition-all focus:outline-none focus:ring-2 focus:ring-gold-400 bg-white"
          />
        </div>

        {/* Additional Notes */}
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
                ? "بزرگ کی صحت، فالج، شوگر یا چلنے پھرنے کی حالت کے متعلق کوئی اہم تفصیل..."
                : "Mention senior mobility, chronic conditions, preferred male/female caregiver, or timing..."
            }
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm transition-all focus:outline-none focus:ring-2 focus:ring-gold-400"
          />
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

        {/* Phase 1 Notice Box */}
        <div className="p-3.5 rounded-xl bg-gold-50 border border-gold-200 text-xs text-navy-800 leading-snug">
          <span className="font-bold mr-1">
            {isUrdu ? "فیز 1 ٹیسٹنگ وضاحت:" : "Phase 1 Notice:"}
          </span>
          <span>{t("form_phase1_notice")}</span>
        </div>

        {/* Submit Button */}
        <div className="pt-3">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gold-400 text-navy-900 font-extrabold text-base shadow-soft-md hover:bg-gold-500 transition-all duration-200 disabled:opacity-70"
          >
            <CalendarCheck className="w-5 h-5" />
            <span>{isSubmitting ? t("form_submitting") : t("form_submit")}</span>
          </button>
        </div>
      </form>
    </div>
  );
}
