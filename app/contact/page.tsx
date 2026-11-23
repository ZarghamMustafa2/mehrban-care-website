"use client";

import React, { Suspense } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { CareBookingForm } from "@/components/forms/CareBookingForm";
import { businessConfig, getWhatsAppInquiryUrl } from "@/lib/config/business";
import { FadeIn } from "@/components/motion/MotionWrapper";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Sparkles,
  MessageCircle,
  ShieldCheck,
  Building2,
  CheckCircle2,
} from "lucide-react";

export default function ContactPage() {
  const { isUrdu } = useLanguage();

  return (
    <div className="bg-cream-100 min-h-screen">
      {/* Header */}
      <section className="py-16 lg:py-20 bg-white border-b border-navy-900/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-50 border border-gold-200 text-gold-700 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-gold-600" />
              <span>{isUrdu ? "رابطہ اور رہنمائی" : "Contact & Consultations"}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy-900 tracking-tight leading-tight">
              {isUrdu
                ? "ہمارے مشیرِ نگہداشت سے گفتگو فرمائیں"
                : "Speak with Our Dedicated Eldercare Advisors"}
            </h1>
            <p className="text-base sm:text-lg text-navy-700 leading-relaxed">
              {isUrdu
                ? "چاہے آپ پاکستان میں ہوں یا بیرون ملک، ہم آپ کے بزرگ کے لیے بہترین نگہداشت کے انتخاب میں رہنمائی کے لیے حاضر ہیں۔"
                : "Whether you reside in Pakistan or coordinate care from abroad, our advisory team is here to listen to your family's needs."}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Main Content: Info & Form */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Details & Operational Notice (Col 1 to 5) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="rounded-3xl bg-white p-8 border border-navy-900/10 shadow-soft-sm space-y-6">
              <h3 className="text-xl font-bold text-navy-900 border-b border-gray-100 pb-4">
                {isUrdu ? "رابطے کی تفصیلات" : "Advisory & Support Channels"}
              </h3>

              <div className="space-y-5 text-sm">
                {/* Phone Channel */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gold-100 text-gold-700 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-navy-400 block">
                      {isUrdu ? "نگہداشت ہیلپ لائن" : "Advisory Inquiry Hotline"}
                    </span>
                    {businessConfig.contact.phone.isVerified && businessConfig.contact.phone.raw ? (
                      <a
                        href={`tel:${businessConfig.contact.phone.raw}`}
                        className="font-bold text-navy-900 text-base mt-0.5 block hover:text-gold-600 transition-colors"
                      >
                        {businessConfig.contact.phone.display}
                      </a>
                    ) : (
                      <span className="font-semibold text-navy-900 text-sm mt-0.5 block">
                        {isUrdu ? "آن لائن استفسار و مشاورت فعال ہے" : "Online Consultation & Intake Active"}
                      </span>
                    )}
                    <span className="text-xs text-navy-600 block mt-0.5">
                      {isUrdu
                        ? `${businessConfig.contact.businessHours.hoursUr} (${businessConfig.contact.businessHours.daysUr})`
                        : `${businessConfig.contact.businessHours.hoursEn} (${businessConfig.contact.businessHours.daysEn})`}
                    </span>
                  </div>
                </div>

                {/* WhatsApp Channel */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-sage-100 text-sage-700 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-navy-400 block">
                      {isUrdu ? "واٹس ایپ برائے اوورسیز فیملیز" : "WhatsApp for Overseas Families"}
                    </span>
                    {businessConfig.contact.whatsapp.isVerified && businessConfig.contact.whatsapp.number ? (
                      <a
                        href={getWhatsAppInquiryUrl("general", isUrdu ? "ur" : "en") || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-sage-700 text-sm mt-0.5 block hover:underline"
                      >
                        {businessConfig.contact.whatsapp.display} (Direct Chat)
                      </a>
                    ) : (
                      <span className="font-semibold text-navy-900 text-sm mt-0.5 block">
                        {isUrdu ? "برطانیہ، خلیج و نارتھ امریکہ سے رابطہ" : "UK, Gulf, US & Worldwide Inquiries"}
                      </span>
                    )}
                    <span className="text-xs text-navy-600 block mt-0.5">
                      {isUrdu ? "فارم جمع کروانے پر فوری رابطہ" : "Quick response on submitted requests"}
                    </span>
                  </div>
                </div>

                {/* Email Channel */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-cream-200 text-navy-800 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-navy-400 block">
                      {isUrdu ? "سرکاری ای میل ایڈریس" : "Corporate Email Address"}
                    </span>
                    {businessConfig.contact.email.isVerified && businessConfig.contact.email.address ? (
                      <a
                        href={`mailto:${businessConfig.contact.email.address}`}
                        className="font-semibold text-navy-900 text-sm mt-0.5 block hover:text-gold-600 transition-colors"
                      >
                        {businessConfig.contact.email.address}
                      </a>
                    ) : (
                      <span className="text-xs text-navy-600 block mt-0.5 italic">
                        {isUrdu ? businessConfig.contact.email.statusNoticeUr : businessConfig.contact.email.statusNoticeEn}
                      </span>
                    )}
                  </div>
                </div>

                {/* Service Availability */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-navy-100 text-navy-800 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-navy-400 block">
                      {isUrdu ? "سروس کی دستیابی" : "Service Availability"}
                    </span>
                    <span className="font-semibold text-navy-900 text-sm mt-0.5 block">
                      {isUrdu ? "لاہور، اسلام آباد / راولپنڈی اور ملتان" : "Lahore, Islamabad / Rawalpindi & Multan"}
                    </span>
                    <span className="text-xs text-navy-600 block mt-0.5">
                      {isUrdu ? businessConfig.coverage.availabilityNoticeUr : businessConfig.coverage.availabilityNoticeEn}
                    </span>
                  </div>
                </div>

                {/* Honest Physical Location Protocol Notice */}
                <div className="flex items-start gap-4 pt-2 border-t border-gray-100">
                  <div className="w-10 h-10 rounded-xl bg-gold-50 text-gold-700 flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-navy-400 block">
                      {isUrdu ? "گھریلو وزٹ کا طریقہ کار" : "In-Home Assessment Protocol"}
                    </span>
                    <p className="text-xs text-navy-600 mt-0.5 leading-relaxed">
                      {isUrdu
                        ? businessConfig.contact.officeAddress.displayNoticeUr
                        : businessConfig.contact.officeAddress.displayNoticeEn}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Privacy Assurance Box */}
            <div className="rounded-3xl bg-navy-900 text-white p-8 border border-gold-400/30 shadow-soft-md space-y-3">
              <div className="flex items-center gap-2 text-gold-400 font-bold text-sm">
                <ShieldCheck className="w-5 h-5" />
                <span>{isUrdu ? "رازداری کی مکمل ضمانت" : "Strict Family Privacy"}</span>
              </div>
              <p className="text-xs text-cream-200 leading-relaxed">
                {isUrdu
                  ? "آپ کے خاندان اور بزرگ کی فراہم کردہ تمام تفصیلات مکمل طور پر صیغہ راز میں رکھی جاتی ہیں اور صرف کیئر پلان کی تیاری کے لیے استعمال ہوتی ہیں۔"
                  : "All medical information, addresses, and family details shared with Mehrban Care are treated with strict professional confidentiality."}
              </p>
            </div>
          </div>

          {/* Booking Form (Col 6 to 12) */}
          <div className="lg:col-span-7">
            <Suspense fallback={<div className="p-8 text-center bg-white rounded-3xl">Loading form...</div>}>
              <CareBookingForm
                title={isUrdu ? "نگہداشت استفسار فارم" : "Inquire About Home Care Services"}
                subtitle={
                  isUrdu
                    ? "فرم مکمل کریں، ہمارا کیئر ایڈوائزر آپ سے جلد رابطہ کرے گا۔"
                    : "Complete this brief assessment form and our care advisory team will reach out promptly."
                }
              />
            </Suspense>
          </div>
        </div>
      </section>
    </div>
  );
}
