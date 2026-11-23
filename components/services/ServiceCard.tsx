"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";

export interface ServiceItemData {
  id: string;
  slug: string;
  titleKey: string;
  descKey: string;
  imageUrl: string;
  features?: string[];
  featuresUr?: string[];
  limitations?: string;
  limitationsUr?: string;
  suitableFor?: string[];
  suitableForUr?: string[];
}

interface ServiceCardProps {
  service: ServiceItemData;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const { t, isUrdu } = useLanguage();
  const ArrowIcon = isUrdu ? ArrowLeft : ArrowRight;

  return (
    <div className="group relative bg-white rounded-3xl overflow-hidden border border-navy-900/5 shadow-soft-sm hover:shadow-soft-xl hover:border-gold-400/50 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between">
      <div>
        {/* Image Container with Soft Gradient Overlay */}
        <div className="relative h-52 w-full overflow-hidden bg-navy-900/10">
          <Image
            src={service.imageUrl}
            alt={t(service.titleKey as any)}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent opacity-80" />
          
          <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-navy-900/80 backdrop-blur-md border border-white/10 text-gold-300">
              {isUrdu ? "گھریلو نگہداشت" : "In-Home Care"}
            </span>
          </div>
        </div>

        {/* Card Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-navy-900 mb-3 group-hover:text-gold-600 transition-colors">
            {t(service.titleKey as any)}
          </h3>

          <p className="text-sm text-navy-700/80 leading-relaxed mb-5">
            {t(service.descKey as any)}
          </p>

          {/* Quick highlights if available */}
          {service.features && (
            <ul className="space-y-2 mb-6 border-t border-gray-100 pt-4">
              {(isUrdu && service.featuresUr ? service.featuresUr : service.features)
                .slice(0, 3)
                .map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs text-navy-800">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sage-500 flex-shrink-0" />
                    <span className="truncate">{feature}</span>
                  </li>
                ))}
            </ul>
          )}
        </div>
      </div>

      {/* Card Footer with Details link */}
      <div className="px-6 pb-6 pt-2">
        <Link
          href={`/services/${service.slug}`}
          className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl bg-navy-50 text-navy-900 font-semibold text-xs hover:bg-gold-400 hover:text-navy-900 transition-colors group/btn"
        >
          <span>{isUrdu ? "مکمل تفصیلات ملاحظہ کریں" : "View Full Service Details"}</span>
          <ArrowIcon className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" />
        </Link>
      </div>
    </div>
  );
}
