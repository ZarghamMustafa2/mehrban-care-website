"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

export interface AccordionItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
  className?: string;
}

export function Accordion({ items, allowMultiple = false, className = "" }: AccordionProps) {
  const [openIds, setOpenIds] = useState<string[]>([items[0]?.id || ""]);
  const shouldReduceMotion = useReducedMotion();

  const toggle = (id: string) => {
    if (allowMultiple) {
      setOpenIds((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    } else {
      setOpenIds((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className={`space-y-3 ${className}`}>
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);
        return (
          <div
            key={item.id}
            className={`rounded-2xl transition-all duration-200 border overflow-hidden ${
              isOpen
                ? "bg-white border-gold-400/40 shadow-soft-md"
                : "bg-white/80 border-navy-900/5 hover:border-gold-400/20 hover:bg-white"
            }`}
          >
            <button
              type="button"
              onClick={() => toggle(item.id)}
              className="w-full text-left rtl:text-right px-6 py-4.5 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 rounded-2xl"
              aria-expanded={isOpen}
            >
              <span className="font-bold text-navy-900 text-base md:text-lg">
                {item.question}
              </span>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                  isOpen ? "bg-navy-900 text-gold-400 rotate-180" : "bg-navy-50 text-navy-700"
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={
                    shouldReduceMotion
                      ? { opacity: 0 }
                      : { height: 0, opacity: 0 }
                  }
                  animate={
                    shouldReduceMotion
                      ? { opacity: 1 }
                      : { height: "auto", opacity: 1 }
                  }
                  exit={
                    shouldReduceMotion
                      ? { opacity: 0 }
                      : { height: 0, opacity: 0 }
                  }
                  transition={{
                    duration: shouldReduceMotion ? 0.05 : 0.28,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-5 pt-1 text-navy-700 text-sm md:text-base leading-relaxed border-t border-gray-100/80 mt-1">
                    <p>{item.answer}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
