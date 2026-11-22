"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { Logo } from "@/components/brand/Logo";
import {
  Menu,
  X,
  Phone,
  Globe,
  ChevronDown,
  HeartHandshake,
  CalendarCheck,
  ShieldCheck,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";

export function Navbar() {
  const { lang, setLanguage, isUrdu, t } = useLanguage();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: "/", label: t("nav_home") },
    { href: "/about", label: t("nav_about") },
    { href: "/services", label: t("nav_services") },
    { href: "/care-plans", label: t("nav_care_plans") },
    { href: "/overseas-families", label: t("nav_overseas") },
    { href: "/how-it-works", label: t("nav_how_it_works") },
    { href: "/careers", label: t("nav_careers") },
    { href: "/faq", label: t("nav_faq") },
    { href: "/contact", label: t("nav_contact") },
  ];

  const ArrowIcon = isUrdu ? ArrowLeft : ArrowRight;

  return (
    <>
      {/* Top Utility Announcement Bar */}
      <div className="bg-navy-900 text-cream-100 text-xs py-2 px-4 sm:px-8 border-b border-navy-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
            <span className="font-medium text-cream-200">
              {isUrdu
                ? "پاکستان میں بزرگوں کی باوقار گھریلو دیکھ بھال • لاہور اور اسلام آباد پائلٹ سروس"
                : "Compassionate Elderly Care at Home • Pilot Services Active"}
            </span>
          </div>

          <div className="flex items-center gap-5">
            {/* Direct Inquiry hotline info */}
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center gap-1.5 text-cream-200 hover:text-gold-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-gold-400" />
              <span>{isUrdu ? "نگہداشت مشیر سے رابطہ" : "Inquiry Line: Contact Advisors"}</span>
            </Link>

            {/* Language Switcher */}
            <div className="flex items-center gap-1 bg-navy-950/70 px-2 py-0.5 rounded-full border border-navy-700/60">
              <Globe className="w-3.5 h-3.5 text-gold-400 mr-1" />
              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={`px-2 py-0.5 rounded text-[11px] font-semibold transition-all ${
                  lang === "en"
                    ? "bg-gold-400 text-navy-900 shadow-sm"
                    : "text-cream-300 hover:text-white"
                }`}
                aria-label="Switch to English"
              >
                English
              </button>
              <span className="text-navy-700 text-xs">|</span>
              <button
                type="button"
                onClick={() => setLanguage("ur")}
                className={`px-2 py-0.5 rounded text-[11px] font-semibold transition-all ${
                  lang === "ur"
                    ? "bg-gold-400 text-navy-900 shadow-sm"
                    : "text-cream-300 hover:text-white font-urdu"
                }`}
                aria-label="Switch to Urdu"
              >
                اردو
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "glass-header shadow-soft-md py-3"
            : "bg-cream-100/95 py-4 border-b border-navy-900/5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Logo size="md" />
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-1 2xl:gap-2" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors duration-200 ${
                      isActive
                        ? "text-navy-900 bg-navy-900/5 font-bold"
                        : "text-navy-700 hover:text-navy-900 hover:bg-gold-400/10"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Action Buttons & Mobile Hamburger */}
            <div className="flex items-center gap-3">
              {/* Primary CTA */}
              <Link
                href="/book-care"
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-navy-900 text-cream-100 font-semibold text-sm shadow-soft-sm hover:bg-navy-800 hover:shadow-soft-md transition-all duration-200 group border border-navy-700/30"
              >
                <span>{t("nav_book_care")}</span>
                <ArrowIcon className="w-4 h-4 text-gold-400 transition-transform group-hover:translate-x-0.5" />
              </Link>

              {/* Mobile menu button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="xl:hidden p-2.5 rounded-xl text-navy-900 hover:bg-navy-900/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden fixed inset-x-0 top-[calc(100%+1px)] bottom-0 bg-white/95 backdrop-blur-xl border-t border-navy-900/10 z-40 overflow-y-auto px-6 py-6 shadow-2xl flex flex-col justify-between">
            <div className="space-y-1">
              <div className="pb-3 mb-3 border-b border-gray-100 flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider font-bold text-navy-400">
                  {isUrdu ? "مینیو روابط" : "Navigation"}
                </span>
                {/* Language Switcher in Mobile Drawer */}
                <div className="flex items-center gap-1 bg-gray-100 p-1 rounded-lg">
                  <button
                    onClick={() => setLanguage("en")}
                    className={`px-3 py-1 rounded text-xs font-semibold ${
                      lang === "en" ? "bg-navy-900 text-white" : "text-navy-700"
                    }`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => setLanguage("ur")}
                    className={`px-3 py-1 rounded text-xs font-semibold font-urdu ${
                      lang === "ur" ? "bg-navy-900 text-white" : "text-navy-700"
                    }`}
                  >
                    اردو
                  </button>
                </div>
              </div>

              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                      isActive
                        ? "bg-navy-900 text-white shadow-sm"
                        : "text-navy-900 hover:bg-gold-50"
                    }`}
                  >
                    <span>{link.label}</span>
                    <ArrowIcon className="w-4 h-4 opacity-70" />
                  </Link>
                );
              })}
            </div>

            {/* Bottom Mobile Drawer CTA */}
            <div className="pt-6 mt-6 border-t border-gray-100 space-y-3">
              <Link
                href="/book-care"
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gold-400 text-navy-900 font-bold text-center shadow-soft-md hover:bg-gold-500 transition-colors"
              >
                <CalendarCheck className="w-5 h-5" />
                <span>{t("nav_book_care")}</span>
              </Link>
              <Link
                href="/contact"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-navy-900/15 text-navy-900 font-semibold text-center hover:bg-navy-50 transition-colors text-sm"
              >
                <Phone className="w-4 h-4 text-navy-700" />
                <span>{isUrdu ? "کیئر ایڈوائزر سے رابطہ" : "Contact Care Advisors"}</span>
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
