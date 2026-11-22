"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { Logo } from "@/components/brand/Logo";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Heart,
  Globe,
  ExternalLink,
} from "lucide-react";

export function Footer() {
  const { isUrdu, t, lang, setLanguage } = useLanguage();

  const servicesList = [
    { title: t("service_1_title"), href: "/services/daily-care" },
    { title: t("service_2_title"), href: "/services/hygiene-care" },
    { title: t("service_3_title"), href: "/services/home-nursing" },
    { title: t("service_4_title"), href: "/services/monitoring" },
    { title: t("service_5_title"), href: "/services/doctor-visits" },
    { title: t("service_6_title"), href: "/services/physiotherapy" },
    { title: t("service_7_title"), href: "/services/live-in-care" },
    { title: t("service_8_title"), href: "/services/overseas-support" },
  ];

  const quickLinks = [
    { title: t("nav_home"), href: "/" },
    { title: t("nav_about"), href: "/about" },
    { title: t("nav_care_plans"), href: "/care-plans" },
    { title: t("nav_overseas"), href: "/overseas-families" },
    { title: t("nav_how_it_works"), href: "/how-it-works" },
    { title: t("nav_careers"), href: "/careers" },
    { title: t("nav_faq"), href: "/faq" },
    { title: t("nav_contact"), href: "/contact" },
  ];

  return (
    <footer className="bg-navy-900 text-cream-100 border-t border-navy-800" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        {isUrdu ? "ویب سائٹ فوٹر" : "Footer"}
      </h2>

      {/* Main Footer Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Col 1: Brand & Mission (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <Logo variant="white" size="lg" />
            <p className="text-cream-200 text-sm leading-relaxed max-w-sm">
              {t("footer_desc")}
            </p>

            <div className="pt-2 flex flex-col gap-2.5 text-xs text-cream-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                <span>
                  {isUrdu
                    ? "لاہور اور اسلام آباد / راولپنڈی (پائلٹ خدمات) • پاکستان"
                    : "Serving Lahore & Islamabad / Rawalpindi (Pilot Phase), Pakistan"}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span>
                  {isUrdu
                    ? "نگہداشت کوآرڈینیشن: صبح 8 بجے تا شام 8 بجے (پیر تا ہفتہ)"
                    : "Care Inquiries: 8:00 AM – 8:00 PM (Mon – Sat)"}
                </span>
              </div>
            </div>
          </div>

          {/* Col 2: Services (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-gold-400 font-bold text-sm tracking-wider uppercase">
              {t("footer_services")}
            </h3>
            <ul className="space-y-2 text-sm">
              {servicesList.map((service, idx) => (
                <li key={idx}>
                  <Link
                    href={service.href}
                    className="text-cream-200 hover:text-gold-300 transition-colors inline-block py-0.5"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-gold-400 font-bold text-sm tracking-wider uppercase">
              {t("footer_quick_links")}
            </h3>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-cream-200 hover:text-gold-300 transition-colors inline-block py-0.5"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Action & Language (3 cols) */}
          <div className="lg:col-span-3 space-y-5">
            <h3 className="text-gold-400 font-bold text-sm tracking-wider uppercase">
              {isUrdu ? "فوری رابطہ اور بکنگ" : "Care Consultation"}
            </h3>
            <p className="text-xs text-cream-200 leading-relaxed">
              {isUrdu
                ? "اپنے بزرگ کے لیے مناسب کیئر پلان کے انتخاب میں مدد حاصل کریں۔ ہمارا نگہداشت مشیر رہنمائی کے لیے حاضر ہے۔"
                : "Need guidance choosing the right care plan? Our dedicated care advisors are ready to assess your family's needs."}
            </p>

            <div className="space-y-2.5">
              <Link
                href="/book-care"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gold-400 text-navy-900 font-bold text-sm shadow-soft-sm hover:bg-gold-500 transition-colors text-center"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>{t("nav_book_care")}</span>
              </Link>
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-cream-200/20 text-cream-100 font-semibold text-sm hover:bg-navy-800 transition-colors text-center"
              >
                <span>{isUrdu ? "پیغام یا رابطہ فارم" : "Contact Advisors"}</span>
              </Link>
            </div>

            {/* Language Selection in Footer */}
            <div className="pt-2">
              <span className="text-[11px] text-cream-300 uppercase tracking-wider block mb-1.5 font-semibold">
                {isUrdu ? "زبان منتخب کریں" : "Select Language"}
              </span>
              <div className="inline-flex items-center gap-1 bg-navy-950 p-1 rounded-lg border border-navy-800">
                <button
                  onClick={() => setLanguage("en")}
                  className={`px-3 py-1 rounded text-xs font-semibold ${
                    lang === "en" ? "bg-gold-400 text-navy-900" : "text-cream-300 hover:text-white"
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => setLanguage("ur")}
                  className={`px-3 py-1 rounded text-xs font-semibold font-urdu ${
                    lang === "ur" ? "bg-gold-400 text-navy-900" : "text-cream-300 hover:text-white"
                  }`}
                >
                  اردو
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Ethical Non-Medical Disclaimer Box */}
        <div className="mt-12 p-5 rounded-2xl bg-navy-950/80 border border-gold-400/20">
          <div className="flex items-start gap-3">
            <Heart className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
            <div className="text-xs text-cream-200 leading-relaxed">
              <span className="font-bold text-gold-400 block sm:inline mr-1">
                {t("footer_disclaimer_title")}
              </span>
              <span>{t("footer_disclaimer")}</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Standards */}
        <div className="mt-8 pt-8 border-t border-navy-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream-300">
          <p>{t("footer_copyright")}</p>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-gold-400 transition-colors">
              {isUrdu ? "خدمت کے ضوابط" : "Care Standards"}
            </Link>
            <Link href="/faq" className="hover:text-gold-400 transition-colors">
              {isUrdu ? "عمومی سوالات" : "FAQ"}
            </Link>
            <Link href="/contact" className="hover:text-gold-400 transition-colors">
              {isUrdu ? "رابطہ" : "Contact"}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
