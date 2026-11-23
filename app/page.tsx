import React from "react";
import { Hero } from "@/components/home/Hero";
import { TrustIntro } from "@/components/home/TrustIntro";
import { ServicesSection } from "@/components/home/ServicesSection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { HowItWorksSteps } from "@/components/home/HowItWorksSteps";
import { OverseasHighlight } from "@/components/home/OverseasHighlight";
import { FinalCta } from "@/components/home/FinalCta";

export default function HomePage() {
  return (
    <>
      {/* SECTION 1 — Premium Hero with authentic photography & motion */}
      <Hero />

      {/* SECTION 2 — Care That Feels Like Family with compelling photograph */}
      <TrustIntro />

      {/* SECTION 3 — Featured Services (Top 4 cards + Explore All button) */}
      <ServicesSection />

      {/* SECTION 4 — Why Choose Mehrban Care (Split layout with real photo) */}
      <WhyChooseUs />

      {/* SECTION 5 — How Care Works (Visual timeline process) */}
      <HowItWorksSteps />

      {/* SECTION 6 — Overseas Families Preview (Family video call scenario) */}
      <OverseasHighlight />

      {/* SECTION 7 — Final CTA (Minimal & impressive closing CTA) */}
      <FinalCta />
    </>
  );
}
