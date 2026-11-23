"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { businessConfig, getWhatsAppInquiryUrl } from "@/lib/config/business";
import { MessageCircle, X, CalendarCheck, ShieldAlert, ArrowRight, ArrowLeft } from "lucide-react";

export function FloatingWhatsApp() {
  const { isUrdu, lang } = useLanguage();
  const pathname = usePathname();
  const [modalOpen, setModalOpen] = useState(false);
  const ArrowIcon = isUrdu ? ArrowLeft : ArrowRight;

  // Determine context-specific inquiry topic from current route
  let topic: "general" | "elderly_care" | "care_plans" | "overseas" | "careers" = "general";
  if (pathname.includes("/services")) topic = "elderly_care";
  else if (pathname.includes("/care-plans")) topic = "care_plans";
  else if (pathname.includes("/overseas-families")) topic = "overseas";
  else if (pathname.includes("/careers")) topic = "careers";

  const whatsappUrl = getWhatsAppInquiryUrl(topic, lang as "en" | "ur");
  const isConfigured = Boolean(businessConfig.contact.whatsapp.number && businessConfig.contact.whatsapp.isVerified);

  return (
    <>
      {/* Floating Action Button - Positioned on corner clear of hero content & mobile bottom bar */}
      <aside
        aria-label={isUrdu ? "فوری رابطہ و رہنمائی" : "Quick In-Home Care Inquiries"}
        className="fixed bottom-24 md:bottom-8 right-5 md:right-8 rtl:right-auto rtl:left-5 rtl:md:left-8 z-40 flex items-center print:hidden"
      >
        {isConfigured && whatsappUrl ? (
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={isUrdu ? "واٹس ایپ پر فوری مشاورت کریں" : "Inquire via WhatsApp"}
            className="group flex items-center gap-3 px-4 py-3 rounded-full bg-[#25D366] text-white shadow-soft-xl hover:bg-[#1EBE5D] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
          >
            <MessageCircle className="w-6 h-6 fill-white text-[#25D366] flex-shrink-0" />
            <span className="hidden sm:inline-block text-xs font-bold tracking-wide">
              {isUrdu ? "واٹس ایپ مشاورت" : "WhatsApp Inquiries"}
            </span>
          </a>
        ) : (
          <button
            type="button"
            onClick={() => setModalOpen(true)}
            aria-label={isUrdu ? "نگہداشت استفسار اور مشاورت" : "Request Care Assistance"}
            className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-navy-900 text-gold-400 border border-gold-400/40 shadow-soft-xl hover:bg-navy-850 hover:text-gold-300 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-gold-400/30"
          >
            <MessageCircle className="w-5 h-5 text-gold-400 group-hover:scale-110 transition-transform flex-shrink-0" />
            <span className="hidden sm:inline-block text-xs font-bold text-white tracking-wide">
              {isUrdu ? "نگہداشت استفسار" : "Care Inquiries"}
            </span>
          </button>
        )}
      </aside>

      {/* Honest Status Modal when official WhatsApp line is unassigned */}
      {modalOpen && !isConfigured && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="whatsapp-dialog-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/70 backdrop-blur-sm animate-fade-in"
        >
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-soft-2xl border border-navy-900/10 space-y-5 relative">
            <button
              type="button"
              onClick={() => setModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full text-navy-400 hover:text-navy-900 hover:bg-cream-100 transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-12 h-12 rounded-2xl bg-gold-50 border border-gold-200 text-gold-700 flex items-center justify-center">
              <ShieldAlert className="w-6 h-6 text-gold-600" />
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-gold-600">
                {isUrdu ? "باضابطہ رابطہ چینل" : "Official Contact Notice"}
              </span>
              <h3 id="whatsapp-dialog-title" className="text-xl font-bold text-navy-900 mt-1">
                {isUrdu ? "واٹس ایپ ہیلپ لائن کی تصدیق" : "WhatsApp Advisory Channel"}
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-navy-700 leading-relaxed">
              {isUrdu
                ? businessConfig.contact.whatsapp.statusNoticeUr
                : businessConfig.contact.whatsapp.statusNoticeEn}
            </p>

            <div className="p-4 rounded-2xl bg-cream-50 border border-navy-900/5 text-xs text-navy-800 space-y-1">
              <strong className="block text-navy-900 font-bold">
                {isUrdu ? "فوری استفسار کا متبادل راستہ:" : "Immediate Consultation Channel:"}
              </strong>
              <span>
                {isUrdu
                  ? "آپ ہمارا آن لائن استفسار فارم پر کر سکتے ہیں، ہمارے مشیرِ نگہداشت آپ سے ترجیحی بنیادوں پر رابطہ کریں گے۔"
                  : "Please complete our brief assessment form or visit the contact page. Our Care Advisors will respond promptly."}
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link
                href="/book-care"
                onClick={() => setModalOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-gold-400 text-navy-900 font-bold text-xs sm:text-sm hover:bg-gold-500 transition-colors"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>{isUrdu ? "آن لائن مشاورت فارم" : "Online Consultation Form"}</span>
                <ArrowIcon className="w-4 h-4" />
              </Link>
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="w-full inline-flex items-center justify-center px-4 py-3 rounded-full border border-gray-200 text-navy-700 font-semibold text-xs sm:text-sm hover:bg-gray-50 transition-colors"
              >
                {isUrdu ? "بند کریں" : "Dismiss"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
