import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers & Caregiver Recruitment in Pakistan",
  description:
    "Join Mehrban Care's compassionate team. Opportunities for Registered Nurses, Female Caregivers, Male Caregivers, and Patient Attendants in Lahore and Islamabad.",
  openGraph: {
    title: "Join Mehrban Care | Eldercare Careers in Pakistan",
    description:
      "Dignified employment, fair compensation, and specialized training for geriatric caregivers and nurses.",
  },
};

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
