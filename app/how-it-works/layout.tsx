import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How In-Home Care Works — 4-Step Consultation Journey",
  description:
    "Understanding Mehrban Care's simple 4-step care arrangement: initial inquiry, in-home assessment, culturally aligned caregiver matching, and regular updates.",
  openGraph: {
    title: "How In-Home Care Works | Mehrban Care Pakistan",
    description:
      "A clear, dignified pathway to securing trusted home care for your elderly loved ones.",
  },
};

export default function HowItWorksLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
