"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { ServiceCard } from "@/components/services/ServiceCard";
import { servicesData } from "@/lib/servicesData";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/MotionWrapper";
import { ArrowRight, ArrowLeft, Sparkles, LayoutGrid } from "lucide-react";

export function ServicesSection() {
  const { isUrdu, t } = useLanguage();
  const ArrowIcon = isUrdu ? ArrowLeft : ArrowRight;

  // Selected 4 primary featured services for the focused homepage
  const featuredSlugs = ["daily-care", "hygiene-care", "home-nursing", "live-in-care"];
  const featuredServices = servicesData.filter((s) => featuredSlugs.includes(s.slug));

  return (
    <section id="services" className="py-20 lg:py-28 bg-cream-100 border-b border-navy-900/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 text-left rtl:text-right">
          <div className="max-w-2xl space-y-3">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage-100 text-sage-800 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-sage-600" />
                <span>{isUrdu ? "نمایاں گھریلو خدمات" : "Featured Care Disciplines"}</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight">
                {t("services_heading")}
              </h2>
            </FadeIn>

            <FadeIn delay={0.15}>
              <p className="text-base text-navy-700 leading-relaxed">
                {isUrdu
                  ? "ہم بزرگوں کی منفرد ضروریات کے مطابق ذاتی، طبی اور ہمہ وقتی نگہداشت کے تصدیق شدہ حل فراہم کرتے ہیں۔"
                  : "Personalized assistance, clinical nursing support, and continuous companionship in your cherished home."}
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.2} className="flex-shrink-0">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-navy-900 font-bold text-sm border border-navy-900/10 shadow-soft-sm hover:bg-gold-400 hover:text-navy-900 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <LayoutGrid className="w-4 h-4 text-gold-600" />
              <span>{isUrdu ? "تمام 8 خدمات ملاحظہ کریں" : "Explore All 8 Services"}</span>
              <ArrowIcon className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>

        {/* 4 Featured Services Staggered Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {featuredServices.map((service) => (
            <StaggerItem key={service.id}>
              <ServiceCard service={service} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Bottom Prominent CTA to explore all services directory */}
        <FadeIn delay={0.3} className="mt-14 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-4 sm:p-2 sm:px-6 rounded-3xl bg-white border border-navy-900/10 shadow-soft-sm">
            <p className="text-sm font-medium text-navy-800">
              {isUrdu
                ? "کیا آپ ڈاکٹر وزٹ ہمراہی، فزیو تھراپی یا اوورسیز فیملی سپورٹ تلاش کر رہے ہیں؟"
                : "Looking for doctor accompaniment, physiotherapy, or expat coordination?"}
            </p>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-navy-900 text-cream-100 font-bold text-xs shadow-soft-sm hover:bg-navy-800 transition-colors group"
            >
              <span>{isUrdu ? "مکمل سروس ڈائریکٹری کھولیں" : "View Complete Service Directory"}</span>
              <ArrowIcon className="w-3.5 h-3.5 text-gold-400 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
