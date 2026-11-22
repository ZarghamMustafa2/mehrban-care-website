"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

interface LogoProps {
  variant?: "navy" | "white" | "auto";
  showTagline?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
  linkToHome?: boolean;
}

export function Logo({
  variant = "auto",
  showTagline = true,
  size = "md",
  className = "",
  linkToHome = true,
}: LogoProps) {
  const { lang, isUrdu } = useLanguage();

  const isWhite = variant === "white";

  // Sizing definitions
  const iconSizes = {
    sm: "w-8 h-8",
    md: "w-11 h-11",
    lg: "w-14 h-14",
  };

  const titleSizes = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-3xl",
  };

  const taglineSizes = {
    sm: "text-[9px] tracking-[0.18em]",
    md: "text-[10.5px] tracking-[0.22em]",
    lg: "text-xs tracking-[0.25em]",
  };

  const content = (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Caring Hands & Lotus Blossom Brand Symbol */}
      <div className={`relative flex-shrink-0 ${iconSizes[size]}`}>
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-sm transition-transform duration-300 hover:scale-105"
        >
          {/* Central Lotus Center (Gold) */}
          <path
            d="M50 16 C46 34 48 52 50 64 C52 52 54 34 50 16 Z"
            fill="#CDA05F"
          />

          {/* Inner Lotus Petals (Sage Green) */}
          <path
            d="M50 26 C41 38 36 50 40 64 C45 63 48 61 50 64 C49 52 47 38 50 26 Z"
            fill="#7FA58B"
          />
          <path
            d="M50 26 C59 38 64 50 60 64 C55 63 52 61 50 64 C51 52 53 38 50 26 Z"
            fill="#7FA58B"
          />

          {/* Outer Lotus Wings (Gold) */}
          <path
            d="M48 37 C34 44 24 58 28 71 C34 69 41 67 45 64 C41 57 43 46 48 37 Z"
            fill="#CDA05F"
            opacity="0.9"
          />
          <path
            d="M52 37 C66 44 76 58 72 71 C66 69 59 67 55 64 C59 57 57 46 52 37 Z"
            fill="#CDA05F"
            opacity="0.9"
          />

          {/* Protective Caring Hands Base (Primary Navy or Crisp White) */}
          <path
            d="M14 67 C18 60 28 64 38 69 C44 72 48 75 50 78 C46 80 40 81 33 79 C24 77 16 73 14 67 Z"
            fill={isWhite ? "#FFFFFF" : "#17324D"}
          />
          <path
            d="M18 72 C25 81 36 89 50 91 C50 87 48 82 42 78 C35 75 25 73 18 72 Z"
            fill={isWhite ? "#E5ECE7" : "#17324D"}
            opacity={isWhite ? "0.9" : "0.95"}
          />

          <path
            d="M86 67 C82 60 72 64 62 69 C56 72 52 75 50 78 C54 80 60 81 67 79 C76 77 84 73 86 67 Z"
            fill={isWhite ? "#FFFFFF" : "#17324D"}
          />
          <path
            d="M82 72 C75 81 64 89 50 91 C50 87 52 82 58 78 C65 75 75 73 82 72 Z"
            fill={isWhite ? "#E5ECE7" : "#17324D"}
            opacity={isWhite ? "0.9" : "0.95"}
          />

          {/* Lotus Core / Center Seed */}
          <circle cx="50" cy="67" r="4" fill="#CDA05F" />
          <circle cx="50" cy="67" r="1.8" fill="#FFFFFF" />
        </svg>
      </div>

      {/* Typography Brand Mark */}
      <div className="flex flex-col leading-none">
        <div className={`font-extrabold tracking-tight ${titleSizes[size]} flex items-baseline gap-1`}>
          <span className={isWhite ? "text-white" : "text-navy-900"}>
            {isUrdu ? "مہربان" : "Mehrban"}
          </span>
          <span className="text-gold-400 font-normal">
            {isUrdu ? "کیئر" : "Care"}
          </span>
        </div>

        {showTagline && (
          <div className="mt-1 flex items-center gap-1.5">
            <span
              className={`font-semibold uppercase ${taglineSizes[size]} ${
                isWhite ? "text-sage-200" : "text-sage-500"
              }`}
            >
              {isUrdu ? "بزرگوں کی گھریلو دیکھ بھال" : "Elderly Home Care"}
            </span>
          </div>
        )}
      </div>
    </div>
  );

  if (!linkToHome) {
    return content;
  }

  return (
    <Link
      href="/"
      className="focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 rounded-lg transition-opacity hover:opacity-95"
      aria-label="Mehrban Care Home"
    >
      {content}
    </Link>
  );
}
