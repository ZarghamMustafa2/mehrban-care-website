"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { DetailedService } from "@/lib/servicesData";
import { FadeIn, ImageReveal } from "@/components/motion/MotionWrapper";
import {
  ChevronRight,
  ChevronLeft,
  CheckCircle2,
  AlertCircle,
  Users,
  ShieldCheck,
  CalendarCheck,
  Phone,
  Clock,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Heart,
  FileCheck,
} from "lucide-react";

interface ServiceDetailClientProps {
  service: DetailedService;
  relatedServices: DetailedService[];
}

export function ServiceDetailClient({
  service,
  relatedServices,
}: ServiceDetailClientProps) {
  const { isUrdu, t } = useLanguage();
  const ArrowIcon = isUrdu ? ArrowLeft : ArrowRight;
  const ChevronIcon = isUrdu ? ChevronLeft : ChevronRight;

  const title = t(service.titleKey as any);
  const fullDesc = isUrdu ? service.fullDescUr : service.fullDescEn;
  const includedList = isUrdu ? service.includedUr : service.includedEn;
  const suitableList = isUrdu ? service.suitableForUr : service.suitableForEn;
  const benefitsList = isUrdu ? service.benefitsUr : service.benefitsEn;
  const processSteps = isUrdu ? service.processUr : service.processEn;
  const limitations = isUrdu ? service.limitationsUr : service.limitationsEn;
  const categoryName = isUrdu ? service.categoryNameUr : service.categoryNameEn;

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
          <Link href="/services" className="hover:text-gold-600 transition-colors">
            {t("nav_services")}
          </Link>
          <ChevronIcon className="w-3.5 h-3.5 text-navy-400" />
          <span className="font-bold text-navy-900 truncate">{title}</span>
        </div>
      </nav>

      {/* Editorial Hero Section */}
      <section className="py-12 lg:py-20 bg-white border-b border-navy-900/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Hero Left Content */}
            <FadeIn className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-50 border border-gold-200 text-gold-700 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-gold-600" />
                <span>{categoryName}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy-900 tracking-tight leading-tight">
                {title}
              </h1>

              <p className="text-base sm:text-lg text-navy-700 leading-relaxed max-w-2xl">
                {fullDesc}
              </p>

              {/* Direct Booking & Phone CTAs */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href={`/book-care?service=${service.slug}`}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-navy-900 text-white font-bold text-sm shadow-soft-md hover:bg-navy-800 transition-colors group"
                >
                  <CalendarCheck className="w-4 h-4 text-gold-400" />
                  <span>{isUrdu ? "اس خدمت کے لیے جائزہ بک کریں" : "Book This Care Service"}</span>
                  <ArrowIcon className="w-4 h-4 text-gold-400 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-navy-900/15 text-navy-900 font-semibold text-sm hover:bg-gold-50 hover:border-gold-400 transition-colors"
                >
                  <Phone className="w-4 h-4 text-navy-700" />
                  <span>{isUrdu ? "مشیر سے گفتگو کریں" : "Speak to Care Advisor"}</span>
                </Link>
              </div>

              {/* Operational Guarantee Badge */}
              <div className="pt-4 flex items-center gap-6 text-xs text-navy-600">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-sage-600" />
                  <span>{isUrdu ? "مکمل تصدیق شدہ کیئر گیورز" : "Vetted & Screened Staff"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-gold-600" />
                  <span>{isUrdu ? "ہم جنس کیئر گیور کی دستیابی" : "Same-Gender Matching"}</span>
                </div>
              </div>
            </FadeIn>

            {/* Hero Right Visual */}
            <div className="lg:col-span-5 relative">
              <ImageReveal>
                <div className="relative rounded-3xl overflow-hidden shadow-soft-xl border-4 border-white aspect-[4/3] bg-navy-900 group">
                  <Image
                    src={service.imageUrl}
                    alt={title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 500px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-navy-900/90 text-gold-300 border border-white/10 backdrop-blur-sm">
                      {isUrdu ? "مہربان کیئر پروٹوکول" : "Mehrban Care In-Home Protocol"}
                    </span>
                  </div>
                </div>
              </ImageReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Main Details Body */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section 1: What's Included & Suitability */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* What's Included Grid (7 cols) */}
          <div className="lg:col-span-7 rounded-3xl bg-white p-8 sm:p-10 border border-navy-900/10 shadow-soft-sm space-y-6">
            <h2 className="text-2xl font-extrabold text-navy-900 flex items-center gap-2.5">
              <CheckCircle2 className="w-6 h-6 text-sage-600" />
              <span>{isUrdu ? "اس خدمت میں کیا شامل ہے؟" : "What Is Included in This Care Service"}</span>
            </h2>

            <div className="space-y-3">
              {includedList.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3.5 rounded-2xl bg-cream-50/80 border border-navy-900/5"
                >
                  <span className="w-2 h-2 rounded-full bg-gold-500 mt-2 flex-shrink-0" />
                  <span className="text-sm text-navy-800 leading-relaxed font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Ethical Scope Box */}
            <div className="mt-8 p-4 rounded-2xl bg-gold-50/70 border border-gold-300/60 flex items-start gap-3 text-xs sm:text-sm text-navy-800">
              <AlertCircle className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-bold mr-1">
                  {isUrdu ? "طبی حدود کا نوٹس:" : "Clinical Boundaries Notice:"}
                </span>
                <span>{limitations}</span>
              </div>
            </div>
          </div>

          {/* Suitable For & Caregiver Profile (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Who It Is Suitable For */}
            <div className="rounded-3xl bg-white p-8 border border-navy-900/10 shadow-soft-sm space-y-4">
              <h3 className="text-lg font-bold text-navy-900 flex items-center gap-2">
                <Users className="w-5 h-5 text-navy-700" />
                <span>{isUrdu ? "یہ خدمت کس کے لیے موزوں ہے؟" : "Who This Service Is Designed For"}</span>
              </h3>
              <ul className="space-y-3 text-sm text-navy-600">
                {suitableList.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-gold-500 font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Benefits */}
            <div className="rounded-3xl bg-navy-900 text-white p-8 border border-gold-400/30 shadow-soft-sm space-y-4">
              <h3 className="text-lg font-bold text-gold-300 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-gold-400" />
                <span>{isUrdu ? "اہم فوائد اور مثبت نتائج" : "Proven Outcomes for Your Family"}</span>
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-cream-200">
                {benefitsList.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Section 2: Step-by-Step Onboarding for this Service */}
        <div className="rounded-3xl bg-white p-8 sm:p-12 border border-navy-900/10 shadow-soft-sm space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-600">
              {isUrdu ? "سروس کا آغاز" : "How We Begin"}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-900">
              {isUrdu ? "اس خدمت کے آغاز کا 4 مرحلہ وار نظام" : "Our 4-Step Onboarding Protocol"}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-cream-50/70 border border-navy-900/5 space-y-3 hover:bg-gold-50/40 transition-colors"
              >
                <span className="text-xl font-black text-gold-500 font-serif">
                  0{step.step}
                </span>
                <h4 className="text-base font-bold text-navy-900">
                  {step.title}
                </h4>
                <p className="text-xs text-navy-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Related Services Carousel / Cards */}
        {relatedServices.length > 0 && (
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-navy-900/10 pb-4">
              <h3 className="text-2xl font-extrabold text-navy-900">
                {isUrdu ? "متعلقہ گھریلو خدمات" : "Related In-Home Services"}
              </h3>
              <Link
                href="/services"
                className="text-xs font-bold text-gold-600 hover:text-navy-900 transition-colors"
              >
                {isUrdu ? "تمام خدمات دیکھیں ←" : "View All Services →"}
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedServices.map((rel) => (
                <div
                  key={rel.id}
                  className="rounded-3xl bg-white p-6 border border-navy-900/10 shadow-soft-sm hover:shadow-soft-md hover:border-gold-400/40 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-navy-50 text-navy-700 uppercase tracking-wider">
                      {isUrdu ? rel.categoryNameUr : rel.categoryNameEn}
                    </span>
                    <h4 className="text-lg font-bold text-navy-900">
                      {t(rel.titleKey as any)}
                    </h4>
                    <p className="text-xs text-navy-600 line-clamp-3 leading-relaxed">
                      {t(rel.descKey as any)}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-gray-100 mt-4">
                    <Link
                      href={`/services/${rel.slug}`}
                      className="inline-flex items-center justify-between w-full text-xs font-bold text-navy-900 hover:text-gold-600 transition-colors"
                    >
                      <span>{isUrdu ? "تفصیلات پڑھیں" : "Read Details"}</span>
                      <ArrowIcon className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom Booking Banner */}
        <div className="rounded-3xl bg-navy-900 text-white p-8 sm:p-12 text-center max-w-3xl mx-auto space-y-6 shadow-soft-xl border border-gold-400/30">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            {isUrdu ? `کیا آپ ${title} بک کرنا چاہتے ہیں؟` : `Ready to Inquire About ${title}?`}
          </h3>
          <p className="text-sm text-cream-200 max-w-xl mx-auto leading-relaxed">
            {isUrdu
              ? "ہمارے مشیرِ نگہداشت سے بات چیت کر کے اپنے بزرگ کے لیے شفاف منصوبہ بندی اور کوٹیشن حاصل کریں۔"
              : "Speak with our compassionate care advisors. We will discuss your senior's daily habits and tailor the exact level of support needed."}
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              href={`/book-care?service=${service.slug}`}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gold-400 text-navy-900 font-extrabold text-sm shadow-soft-md hover:bg-gold-500 transition-colors"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>{isUrdu ? "نگہداشت جائزہ شروع کریں" : "Start Care Assessment"}</span>
              <ArrowIcon className="w-4 h-4" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-cream-200/30 text-white font-semibold text-sm hover:bg-white/10 transition-colors"
            >
              <Phone className="w-4 h-4 text-gold-400" />
              <span>{isUrdu ? "ہم سے رابطہ کریں" : "Call Care Advisors"}</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
