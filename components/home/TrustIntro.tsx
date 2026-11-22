"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import {
  Heart,
  ShieldCheck,
  FileHeart,
  Globe2,
  CheckCircle2,
} from "lucide-react";

export function TrustIntro() {
  const { isUrdu, t } = useLanguage();

  const pillars = [
    {
      icon: Heart,
      title: t("pillar_1_title"),
      desc: t("pillar_1_desc"),
      color: "bg-gold-50 text-gold-600 border-gold-200",
    },
    {
      icon: ShieldCheck,
      title: t("pillar_2_title"),
      desc: t("pillar_2_desc"),
      color: "bg-sage-50 text-sage-600 border-sage-200",
    },
    {
      icon: FileHeart,
      title: t("pillar_3_title"),
      desc: t("pillar_3_desc"),
      color: "bg-navy-50 text-navy-700 border-navy-200",
    },
    {
      icon: Globe2,
      title: t("pillar_4_title"),
      desc: t("pillar_4_desc"),
      color: "bg-gold-50/80 text-gold-700 border-gold-200",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-navy-900/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="text-xs md:text-sm font-bold tracking-widest uppercase text-gold-600">
            {t("trust_eyebrow")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight">
            {t("trust_heading")}
          </h2>
          <div className="w-16 h-1 bg-gold-400 mx-auto rounded-full mt-2 mb-4" />
          <p className="text-base sm:text-lg text-navy-700 leading-relaxed">
            {t("trust_body_1")}
          </p>
          <p className="text-sm sm:text-base text-navy-600 leading-relaxed">
            {t("trust_body_2")}
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="group relative p-8 rounded-3xl bg-cream-50/70 border border-navy-900/5 hover:border-gold-400/40 hover:bg-white hover:shadow-soft-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border transition-transform duration-300 group-hover:scale-110 ${pillar.color}`}
                  >
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-navy-900 mb-3 group-hover:text-gold-600 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-navy-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
