"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { ServiceCard } from "@/components/services/ServiceCard";
import { servicesData } from "@/lib/servicesData";
import { ArrowRight, ArrowLeft, Sparkles } from "lucide-react";

export function ServicesSection() {
  const { isUrdu, t } = useLanguage();
  const ArrowIcon = isUrdu ? ArrowLeft : ArrowRight;

  return (
    <section id="services" className="py-20 lg:py-28 bg-cream-100 border-b border-navy-900/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage-100 text-sage-800 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-sage-600" />
              <span>{t("services_eyebrow")}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight">
              {t("services_heading")}
            </h2>
            <p className="text-base text-navy-700 leading-relaxed">
              {t("services_subheading")}
            </p>
          </div>

          <div className="flex-shrink-0">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-navy-900 font-bold text-sm border border-navy-900/10 shadow-soft-sm hover:bg-gold-400 hover:text-navy-900 transition-colors"
            >
              <span>{isUrdu ? "تمام خدمات کی تفصیلات دیکھیں" : "View All Services"}</span>
              <ArrowIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* 8 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
