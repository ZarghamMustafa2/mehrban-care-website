"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import {
  Clock,
  Check,
  ShieldCheck,
  FileText,
  Sparkles,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";

export function CarePlansPreview() {
  const { isUrdu, t } = useLanguage();
  const ArrowIcon = isUrdu ? ArrowLeft : ArrowRight;

  const plans = [
    {
      id: "essential",
      name: t("plan_1_name"),
      badge: isUrdu ? "معاونت و مانیٹرنگ" : "Support & Monitoring",
      duration: t("plan_1_duration"),
      desc: t("plan_1_desc"),
      featured: false,
      features: isUrdu
        ? [
            "2 سے 4 گھنٹے کا منظم وزٹ",
            "بلڈ پریشر اور شوگر مانیٹرنگ",
            "ادویات کے اوقات کی یاد دہانی",
            "مخلص رفاقت اور چہل قدمی میں مدد",
            "اہل خانہ کو وزٹ سمری کی ترسیل",
          ]
        : [
            "2 to 4 hours scheduled visit",
            "Blood pressure & glucose checks",
            "Medication schedule prompts",
            "Companionship & light indoor stroll",
            "Visit summary sent to family",
          ],
    },
    {
      id: "daily",
      name: t("plan_2_name"),
      badge: isUrdu ? "سب سے مقبول انتخاب" : "Most Requested",
      duration: t("plan_2_duration"),
      desc: t("plan_2_desc"),
      featured: true,
      features: isUrdu
        ? [
            "6 سے 8 گھنٹے دن بھر کی نگہداشت",
            "ذاتی صفائی، شاور اور کپڑے بدلنے میں مدد",
            "کھانا کھلانے اور دوا کے انتظام میں مکمل معاونت",
            "نماز کے اوقات اور بیٹھنے میں سہارا",
            "ڈاکٹر کے نسخے کے مطابق معمولات پر عمل",
            "ہر روز کی تفصیلی واٹس ایپ رپورٹ",
          ]
        : [
            "6 to 8 hours daily daytime assistance",
            "Personal hygiene, bathing & dressing support",
            "Meal serving & medication administration support",
            "Prayer routine & mobility accompaniment",
            "Adherence to physician daily guidelines",
            "Daily WhatsApp care briefing",
          ],
    },
    {
      id: "live-in",
      name: t("plan_3_name"),
      badge: isUrdu ? "ہمہ وقتی 24 گھنٹے تحفظ" : "24/7 Full Vigilance",
      duration: t("plan_3_duration"),
      desc: t("plan_3_desc"),
      featured: false,
      features: isUrdu
        ? [
            "12 گھنٹے شفٹ یا 24 گھنٹے مستقل رہائشی عملہ",
            "رات کے وقت بیداری اور واش روم کی حفاظت",
            "فالج، پارکنسن یا الزائمر مریضوں کی خصوصی نگہداشت",
            "بستر پر کروٹ بدلنا اور زخموں سے بچاؤ",
            "باقاعدہ چھٹی پر متبادل عملے کی فوری فراہمی",
            "ہفتہ وار کیئر سپروائزر کا جائزہ",
          ]
        : [
            "12-hour rotating shifts or 24/7 dedicated live-in",
            "Nighttime wakefulness & bathroom safety",
            "Specialized care for stroke, Parkinson's or dementia",
            "Repositioning & pressure sore prevention",
            "Guaranteed vetted caregiver relief coverage",
            "Weekly supervisory clinical check-in",
          ],
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-navy-900/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs md:text-sm font-bold tracking-widest uppercase text-gold-600">
            {t("plans_eyebrow")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight">
            {t("plans_heading")}
          </h2>
          <div className="w-16 h-1 bg-gold-400 mx-auto rounded-full mt-2" />
          <p className="text-base text-navy-600 leading-relaxed">
            {t("plans_subheading")}
          </p>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-3xl p-8 transition-all duration-300 flex flex-col justify-between relative ${
                plan.featured
                  ? "bg-navy-900 text-white shadow-soft-xl border-2 border-gold-400 lg:-translate-y-2"
                  : "bg-cream-50/70 text-navy-900 border border-navy-900/10 hover:border-gold-400/40 hover:bg-white hover:shadow-soft-md"
              }`}
            >
              {/* Featured Badge */}
              {plan.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gold-400 text-navy-900 text-xs font-black uppercase tracking-wider shadow-md">
                  {plan.badge}
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3
                    className={`text-2xl font-bold ${
                      plan.featured ? "text-white" : "text-navy-900"
                    }`}
                  >
                    {plan.name}
                  </h3>
                  {!plan.featured && (
                    <span className="text-xs px-2.5 py-1 rounded-full bg-navy-100 text-navy-800 font-semibold">
                      {plan.badge}
                    </span>
                  )}
                </div>

                <div
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold mb-5 ${
                    plan.featured
                      ? "bg-navy-800 text-gold-300 border border-navy-700"
                      : "bg-gold-50 text-gold-800 border border-gold-200"
                  }`}
                >
                  <Clock className="w-3.5 h-3.5" />
                  <span>{plan.duration}</span>
                </div>

                <p
                  className={`text-sm leading-relaxed mb-6 ${
                    plan.featured ? "text-cream-200" : "text-navy-600"
                  }`}
                >
                  {plan.desc}
                </p>

                {/* Features List */}
                <div className="border-t border-navy-900/10 pt-5 mb-8">
                  <span
                    className={`text-xs font-bold uppercase tracking-wider block mb-3 ${
                      plan.featured ? "text-gold-400" : "text-navy-900"
                    }`}
                  >
                    {isUrdu ? "پلان میں شامل سہولیات:" : "Package Scope & Support:"}
                  </span>
                  <ul className="space-y-3 text-xs sm:text-sm">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <Check
                          className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                            plan.featured ? "text-gold-400" : "text-sage-600"
                          }`}
                        />
                        <span
                          className={plan.featured ? "text-cream-100" : "text-navy-700"}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Action */}
              <div className="pt-2">
                <Link
                  href={`/contact?plan=${plan.id}`}
                  className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-bold text-sm transition-all duration-200 text-center ${
                    plan.featured
                      ? "bg-gold-400 text-navy-900 hover:bg-gold-500 shadow-soft-sm"
                      : "bg-navy-900 text-white hover:bg-navy-800"
                  }`}
                >
                  <span>{t("plan_cta")}</span>
                  <ArrowIcon className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Ethical Pricing Disclosure Note */}
        <div className="mt-12 text-center max-w-2xl mx-auto">
          <p className="text-xs text-navy-500 italic bg-cream-50 p-4 rounded-xl border border-navy-900/5">
            {t("plan_note")}
          </p>
        </div>
      </div>
    </section>
  );
}
