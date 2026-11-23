import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy & Domestic Confidentiality",
  description:
    "Mehrban Care's strict privacy policy, domestic confidentiality standards, health records protection, and family communication protocols.",
  openGraph: {
    title: "Privacy & Domestic Sanctity Policy | Mehrban Care",
    description:
      "Our binding commitment to household privacy, medical confidentiality, and elder dignity in Pakistani homes.",
  },
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
