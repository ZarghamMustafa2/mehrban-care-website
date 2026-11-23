import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Comprehensive Elderly Home Care Services in Pakistan",
  description:
    "Explore Mehrban Care's 8 specialized in-home care services: daily elderly assistance, personal hygiene, home nursing coordination, health monitoring, and doctor visits.",
  openGraph: {
    title: "Elderly Care Services in Pakistan | Mehrban Care",
    description:
      "Dignified in-home elder care, trained male and female caregivers, vital signs tracking, and overseas family coordination.",
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
