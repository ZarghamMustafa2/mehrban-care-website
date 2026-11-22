"use client";

import React, { Suspense } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { CareBookingForm } from "@/components/forms/CareBookingForm";
import {
  CalendarCheck,
  ShieldCheck,
  Heart,
  Clock,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

export default function BookCarePage() {
  const { isUrdu } = useLanguage();

  return (
    <div className="bg-cream-100 min-h-screen py-12 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Page Top Heading */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-50 border border-gold-200 text-gold-700 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            <span>{isUrdu ? "مفت نگہداشت مشاورت" : "Personalized Care Consultation"}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy-900 tracking-tight leading-tight">
            {isUrdu
              ? "اپنے بزرگ کے لیے نگہداشت کا جائزہ بک کریں"
              : "Book a Personalized Care Assessment"}
          </h1>

          <p className="text-base text-navy-700 leading-relaxed">
            {isUrdu
              ? "ہمارا مقصد آپ کے بزرگ کی انفرادی ضروریات کو سمجھ کر بہترین نگہداشت کار اور مناسب شیڈول تجویز کرنا ہے۔"
              : "Help us understand your loved one's daily routine, medical instructions, and living situation so we can craft an individually planned care roadmap."}
          </p>

          {/* 3 Reassurance Badges */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-6 text-xs font-bold text-navy-800">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-sage-600" />
              <span>{isUrdu ? "مفت ابتدائی مشاورت" : "No-Obligation Consultation"}</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-gold-600" />
              <span>{isUrdu ? "مکمل تصدیق شدہ عملہ" : "100% Vetted Caregivers"}</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-gold-600" />
              <span>{isUrdu ? "پردہ و وقار کی ضمانت" : "Modesty & Dignity Guaranteed"}</span>
            </div>
          </div>
        </div>

        {/* Form Container */}
        <div className="max-w-2xl mx-auto">
          <Suspense fallback={<div className="p-8 text-center bg-white rounded-3xl">Loading assessment form...</div>}>
            <CareBookingForm />
          </Suspense>
        </div>

        {/* What Happens Next Section */}
        <div className="rounded-3xl bg-white p-8 border border-navy-900/10 shadow-soft-sm max-w-2xl mx-auto">
          <h3 className="text-base font-bold text-navy-900 mb-4 text-center">
            {isUrdu ? "فارم جمع کروانے کے بعد کیا ہوگا؟" : "What Happens After You Inquire?"}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center text-xs text-navy-600">
            <div className="space-y-1.5">
              <span className="w-8 h-8 rounded-full bg-gold-100 text-gold-800 font-bold flex items-center justify-center mx-auto text-sm">
                1
              </span>
              <h4 className="font-bold text-navy-900 text-xs">
                {isUrdu ? "مشیر کا رابطہ" : "Coordinator Call"}
              </h4>
              <p>{isUrdu ? "24 گھنٹے میں تفصیلی گفتگو" : "We review requirements within 24 hours"}</p>
            </div>
            <div className="space-y-1.5">
              <span className="w-8 h-8 rounded-full bg-gold-100 text-gold-800 font-bold flex items-center justify-center mx-auto text-sm">
                2
              </span>
              <h4 className="font-bold text-navy-900 text-xs">
                {isUrdu ? "کیئر پلان و کوٹیشن" : "Custom Plan & Quote"}
              </h4>
              <p>{isUrdu ? "تحریری پلان اور فیس کی تفصیل" : "Itemized proposal without hidden costs"}</p>
            </div>
            <div className="space-y-1.5">
              <span className="w-8 h-8 rounded-full bg-gold-100 text-gold-800 font-bold flex items-center justify-center mx-auto text-sm">
                3
              </span>
              <h4 className="font-bold text-navy-900 text-xs">
                {isUrdu ? "دیکھ بھال کا آغاز" : "Care Begins"}
              </h4>
              <p>{isUrdu ? "تصدیق شدہ عملے کی تعیناتی" : "Vetted caregiver assignment with supervision"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
