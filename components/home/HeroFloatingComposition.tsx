"use client";

import React, { useRef, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import {
  HeartHandshake,
  ShieldCheck,
  Users,
  Home,
  Sparkles,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { FloatingCareCard } from "@/components/motion/FloatingCareCard";

export function HeroFloatingComposition() {
  const { isUrdu } = useLanguage();
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse coordinate motion values for desktop parallax
  const rawMouseX = useMotionValue(0);
  const rawMouseY = useMotionValue(0);

  // Smooth springs to eliminate abruptness (damping: 25, stiffness: 120)
  const springConfig = { damping: 25, stiffness: 120, mass: 0.5 };
  const smoothX = useSpring(rawMouseX, springConfig);
  const smoothY = useSpring(rawMouseY, springConfig);

  // Depth transforms for each card (range: 8px to 18px)
  const card1X = useTransform(smoothX, [-1, 1], [-12, 12]);
  const card1Y = useTransform(smoothY, [-1, 1], [-12, 12]);

  const card2X = useTransform(smoothX, [-1, 1], [16, -16]);
  const card2Y = useTransform(smoothY, [-1, 1], [14, -14]);

  const card3X = useTransform(smoothX, [-1, 1], [-18, 18]);
  const card3Y = useTransform(smoothY, [-1, 1], [16, -16]);

  const card4X = useTransform(smoothX, [-1, 1], [10, -10]);
  const card4Y = useTransform(smoothY, [-1, 1], [-10, 10]);

  useEffect(() => {
    // Only track mouse if device has fine pointer and motion is not reduced
    if (shouldReduceMotion || typeof window === "undefined") return;
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!isFinePointer) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const normX = Math.max(-1, Math.min(1, (e.clientX - centerX) / (window.innerWidth / 2)));
      const normY = Math.max(-1, Math.min(1, (e.clientY - centerY) / (window.innerHeight / 2)));
      rawMouseX.set(normX);
      rawMouseY.set(normY);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [shouldReduceMotion, rawMouseX, rawMouseY]);

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden sm:overflow-visible"
    >
      {/* 1. Subtle Animated Ambient Glows */}
      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : {
                scale: [1, 1.08, 1],
                opacity: [0.35, 0.5, 0.35],
              }
        }
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[460px] h-[320px] sm:h-[460px] rounded-full bg-gradient-to-tr from-sage-200/40 via-gold-200/30 to-cream-200/50 blur-3xl pointer-events-none"
      />

      {/* ================================================================ */}
      {/* DESKTOP & TABLET: ASYMMETRICAL FLOATING CONSTELLATION WITH PARALLAX */}
      {/* ================================================================ */}
      <div className="hidden sm:flex relative w-full min-h-[500px] lg:min-h-[560px] items-center justify-center p-4">
        {/* Delicate Connecting Orbit Rings */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
          viewBox="0 0 600 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="300"
            cy="300"
            r="190"
            stroke="url(#ringGradient)"
            strokeWidth="1.5"
            strokeDasharray="4 6"
            animate={shouldReduceMotion ? {} : { rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          />
          <motion.circle
            cx="300"
            cy="300"
            r="260"
            stroke="url(#ringGradient2)"
            strokeWidth="1"
            strokeDasharray="6 8"
            animate={shouldReduceMotion ? {} : { rotate: -360 }}
            transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
          />
          <path
            d="M 120 180 Q 300 240 480 160"
            stroke="rgba(205, 160, 95, 0.3)"
            strokeWidth="1.5"
            strokeDasharray="3 5"
          />
          <path
            d="M 140 420 Q 300 360 460 440"
            stroke="rgba(127, 165, 139, 0.3)"
            strokeWidth="1.5"
            strokeDasharray="3 5"
          />
          <defs>
            <linearGradient id="ringGradient" x1="0" y1="0" x2="600" y2="600" gradientUnits="userSpaceOnUse">
              <stop stopColor="#CDA05F" stopOpacity="0.4" />
              <stop offset="0.5" stopColor="#7FA58B" stopOpacity="0.3" />
              <stop offset="1" stopColor="#17324D" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="ringGradient2" x1="600" y1="0" x2="0" y2="600" gradientUnits="userSpaceOnUse">
              <stop stopColor="#7FA58B" stopOpacity="0.3" />
              <stop offset="1" stopColor="#CDA05F" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>

        {/* Central Brand Anchor Node */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute z-0 w-24 h-24 rounded-full bg-white/85 backdrop-blur-md border border-gold-400/30 shadow-soft-lg flex flex-col items-center justify-center text-center p-2 pointer-events-none"
        >
          <Sparkles className="w-5 h-5 text-gold-500 mb-0.5" />
          <span className="text-[10px] font-extrabold text-navy-900 leading-tight">
            {isUrdu ? "مہربان کیئر" : "Mehrban Care"}
          </span>
          <span className="text-[8px] font-medium text-navy-600">
            {isUrdu ? "گھریلو خدمت" : "In-Home Care"}
          </span>
        </motion.div>

        {/* CARD 1 — Top Left: Compassionate Care */}
        <motion.div
          style={shouldReduceMotion ? {} : { x: card1X, y: card1Y }}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="absolute top-6 left-2 sm:left-4 lg:left-0 w-[240px] lg:w-[265px] z-20"
        >
          <FloatingCareCard
            title={isUrdu ? "ہمدردانہ دیکھ بھال" : "Compassionate Care"}
            subtitle={
              isUrdu
                ? "محبت اور احترام کے ساتھ روزمرہ خدمت"
                : "Gentle assistance grounded in personal dignity"
            }
            icon={HeartHandshake}
            badge={isUrdu ? "بنیادی اصول" : "Core Ethos"}
            theme="gold"
            floatDuration={6.5}
            floatY={10}
          />
        </motion.div>

        {/* CARD 2 — Top Right: Personalized Support */}
        <motion.div
          style={shouldReduceMotion ? {} : { x: card2X, y: card2Y }}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="absolute top-12 right-2 sm:right-4 lg:right-0 w-[240px] lg:w-[270px] z-20"
        >
          <FloatingCareCard
            title={isUrdu ? "انفرادی معاونت" : "Personalized Support"}
            subtitle={
              isUrdu
                ? "ہر بزرگ کے معمولات کے مطابق پلان"
                : "Care schedules matched to family pace"
            }
            icon={ShieldCheck}
            badge={isUrdu ? "جانچ شدہ" : "Tailored"}
            theme="sage"
            floatDuration={7.2}
            floatY={8}
            floatX={6}
          />
        </motion.div>

        {/* CARD 3 — Bottom Left: Family Connection */}
        <motion.div
          style={shouldReduceMotion ? {} : { x: card3X, y: card3Y }}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="absolute bottom-10 left-3 sm:left-6 lg:left-2 w-[240px] lg:w-[275px] z-30"
        >
          <FloatingCareCard
            title={isUrdu ? "خاندانی رابطہ" : "Family Connection"}
            subtitle={
              isUrdu
                ? "مسلسل آگاہی اور ذہنی اطمینان"
                : "Transparent updates for families near & far"
            }
            icon={Users}
            badge={isUrdu ? "شفافیت" : "Reassurance"}
            theme="navy"
            floatDuration={8.0}
            floatY={12}
          />
        </motion.div>

        {/* CARD 4 — Bottom Right: Comfort at Home */}
        <motion.div
          style={shouldReduceMotion ? {} : { x: card4X, y: card4Y }}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="absolute bottom-4 right-2 sm:right-6 lg:right-2 w-[240px] lg:w-[265px] z-20"
        >
          <FloatingCareCard
            title={isUrdu ? "گھر میں سکون و راحت" : "Comfort at Home"}
            subtitle={
              isUrdu
                ? "اپنے گھر کے پرسکون ماحول میں دیکھ بھال"
                : "Familiar surroundings, routines & peace"
            }
            icon={Home}
            badge={isUrdu ? "گھریلو ماحول" : "Home Peace"}
            theme="cream"
            floatDuration={5.8}
            floatY={9}
            floatX={-5}
          />
        </motion.div>
      </div>

      {/* ================================================================ */}
      {/* MOBILE COMPACT COMPOSITION (Fits widths 320px to 639px seamlessly) */}
      {/* ================================================================ */}
      <div className="sm:hidden grid grid-cols-1 gap-3 pt-4 pb-2">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <FloatingCareCard
            title={isUrdu ? "ہمدردانہ دیکھ بھال" : "Compassionate Care"}
            subtitle={
              isUrdu
                ? "محبت اور احترام کے ساتھ روزمرہ خدمت"
                : "Gentle assistance grounded in personal dignity"
            }
            icon={HeartHandshake}
            badge={isUrdu ? "بنیادی اصول" : "Core Ethos"}
            theme="gold"
            floatDuration={6}
            floatY={6}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <FloatingCareCard
            title={isUrdu ? "انفرادی معاونت" : "Personalized Support"}
            subtitle={
              isUrdu
                ? "ہر بزرگ کے معمولات کے مطابق پلان"
                : "Care schedules matched to family pace"
            }
            icon={ShieldCheck}
            badge={isUrdu ? "جانچ شدہ" : "Tailored"}
            theme="sage"
            floatDuration={6.8}
            floatY={6}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <FloatingCareCard
            title={isUrdu ? "خاندانی رابطہ" : "Family Connection"}
            subtitle={
              isUrdu
                ? "مسلسل آگاہی اور ذہنی اطمینان"
                : "Transparent updates for families near & far"
            }
            icon={Users}
            badge={isUrdu ? "شفافیت" : "Reassurance"}
            theme="navy"
            floatDuration={7.4}
            floatY={7}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <FloatingCareCard
            title={isUrdu ? "گھر میں سکون و راحت" : "Comfort at Home"}
            subtitle={
              isUrdu
                ? "اپنے گھر کے پرسکون ماحول میں دیکھ بھال"
                : "Familiar surroundings, routines & peace"
            }
            icon={Home}
            badge={isUrdu ? "گھریلو ماحول" : "Home Peace"}
            theme="cream"
            floatDuration={5.5}
            floatY={6}
          />
        </motion.div>
      </div>
    </div>
  );
}
