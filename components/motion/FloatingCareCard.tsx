"use client";

import React from "react";
import { motion, useReducedMotion, type MotionValue } from "framer-motion";
import { type LucideIcon } from "lucide-react";

export interface FloatingCareCardProps {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  badge?: string;
  theme?: "gold" | "sage" | "navy" | "cream";
  floatDuration?: number;
  floatY?: number;
  floatX?: number;
  depth?: number; // Parallax intensity factor
  mouseX?: MotionValue<number>;
  mouseY?: MotionValue<number>;
  className?: string;
}

export function FloatingCareCard({
  title,
  subtitle,
  icon: Icon,
  badge,
  theme = "gold",
  floatDuration = 6,
  floatY = 10,
  floatX = 0,
  className = "",
}: FloatingCareCardProps) {
  const shouldReduceMotion = useReducedMotion();

  // Color theme configurations
  const themeStyles = {
    gold: {
      iconBg: "bg-gold-500/15 border-gold-400/30 text-gold-700",
      accent: "text-gold-600",
      badgeBg: "bg-gold-100 text-gold-800 border-gold-300/40",
      borderHover: "hover:border-gold-400/50",
      shadow: "shadow-[0_12px_36px_rgba(205,160,95,0.12)]",
    },
    sage: {
      iconBg: "bg-sage-500/15 border-sage-400/30 text-sage-700",
      accent: "text-sage-600",
      badgeBg: "bg-sage-100 text-sage-800 border-sage-300/40",
      borderHover: "hover:border-sage-400/50",
      shadow: "shadow-[0_12px_36px_rgba(127,165,139,0.14)]",
    },
    navy: {
      iconBg: "bg-navy-900/10 border-navy-700/20 text-navy-900",
      accent: "text-navy-700",
      badgeBg: "bg-navy-100 text-navy-900 border-navy-200",
      borderHover: "hover:border-navy-400/50",
      shadow: "shadow-[0_12px_36px_rgba(23,50,77,0.12)]",
    },
    cream: {
      iconBg: "bg-cream-200 border-navy-900/10 text-navy-800",
      accent: "text-gold-700",
      badgeBg: "bg-cream-100 text-navy-800 border-navy-900/10",
      borderHover: "hover:border-gold-300/60",
      shadow: "shadow-[0_12px_36px_rgba(23,50,77,0.08)]",
    },
  }[theme];

  return (
    <motion.div
      animate={
        shouldReduceMotion
          ? { x: 0, y: 0 }
          : {
              y: [-floatY / 2, floatY / 2, -floatY / 2],
              x: floatX ? [-floatX / 2, floatX / 2, -floatX / 2] : 0,
            }
      }
      transition={{
        duration: shouldReduceMotion ? 0.01 : floatDuration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      whileHover={shouldReduceMotion ? {} : { scale: 1.025, y: -4 }}
      className={`relative z-10 p-4 sm:p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-navy-900/10 ${themeStyles.shadow} ${themeStyles.borderHover} transition-colors duration-300 ${className}`}
    >
      <div className="flex items-start gap-3.5">
        <div
          className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 border ${themeStyles.iconBg}`}
        >
          <Icon className="w-5 h-5" />
        </div>

        <div className="space-y-1 min-w-0 flex-1">
          <div className="flex items-center justify-between gap-2">
            <h4 className="text-sm font-bold text-navy-900 leading-snug truncate">
              {title}
            </h4>
            {badge && (
              <span
                className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${themeStyles.badgeBg} flex-shrink-0`}
              >
                {badge}
              </span>
            )}
          </div>
          <p className="text-xs text-navy-600 leading-relaxed">
            {subtitle}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
