import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Our Eldercare Mission & Vetting Standards",
  description:
    "Learn about Mehrban Care's philosophy of compassionate elderly care in Pakistan, our 4-stage caregiver vetting process, and our commitment to senior dignity.",
  openGraph: {
    title: "About Mehrban Care | Dedicated Eldercare in Pakistan",
    description:
      "Compassionate, dignified home care for aging parents. Multi-step vetting, cultural modesty, and complete family reassurance.",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
