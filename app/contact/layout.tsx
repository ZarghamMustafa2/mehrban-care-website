import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Our Care Advisors & Book In-Home Assessment",
  description:
    "Connect with Mehrban Care's advisory team via phone, WhatsApp, or online consultation request. Serving Lahore, Islamabad/Rawalpindi, and Multan.",
  openGraph: {
    title: "Contact Mehrban Care Advisors | In-Home Care Inquiries",
    description:
      "Speak directly with our eldercare coordinators to arrange in-home support for your parents.",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
