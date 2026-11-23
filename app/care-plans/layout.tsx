import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Transparent In-Home Elderly Care Plans & Pricing",
  description:
    "Flexible elderly care packages tailored to your loved one: Essential Check-in visits, Daily Extended Care, and 24/7 dedicated live-in support in Pakistan.",
  openGraph: {
    title: "Care Plans & Honest Quoting | Mehrban Care",
    description:
      "Bespoke elder care packages adapted to senior health acuity, schedule, and city with no hidden surcharges.",
  },
};

export default function CarePlansLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
