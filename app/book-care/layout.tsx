import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request a Personalized Eldercare Consultation",
  description:
    "Step-by-step in-home care assessment request. Select services, duration, and care preferences for elderly parents in Pakistan.",
  openGraph: {
    title: "Book In-Home Care Consultation | Mehrban Care",
    description:
      "Guided 4-step assessment intake to personalize care for your aging loved ones.",
  },
};

export default function BookCareLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
