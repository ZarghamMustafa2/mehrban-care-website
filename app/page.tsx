import React from "react";
import { Hero } from "@/components/home/Hero";
import { TrustIntro } from "@/components/home/TrustIntro";
import { ServicesSection } from "@/components/home/ServicesSection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { HowItWorksSteps } from "@/components/home/HowItWorksSteps";
import { OverseasHighlight } from "@/components/home/OverseasHighlight";
import { CarePlansPreview } from "@/components/home/CarePlansPreview";
import { FaqPreview } from "@/components/home/FaqPreview";
import { FinalCta } from "@/components/home/FinalCta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustIntro />
      <ServicesSection />
      <WhyChooseUs />
      <HowItWorksSteps />
      <OverseasHighlight />
      <CarePlansPreview />
      <FaqPreview />
      <FinalCta />
    </>
  );
}
