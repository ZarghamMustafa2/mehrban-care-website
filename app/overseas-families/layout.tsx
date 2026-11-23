import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Far From Home. Close to Their Care — For Overseas Pakistanis",
  description:
    "Dedicated in-home care coordination for overseas Pakistanis in the UK, Gulf, US, and Canada. WhatsApp visit debriefs, vitals logs, and boots-on-the-ground support.",
  openGraph: {
    title: "Overseas Pakistani Family Eldercare Support | Mehrban Care",
    description:
      "Bridging thousands of miles with structured WhatsApp debriefs, medication tracking, and trusted caregiver presence for parents in Pakistan.",
  },
};

export default function OverseasFamiliesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
