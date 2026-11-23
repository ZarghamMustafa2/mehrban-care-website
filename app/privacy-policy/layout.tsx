import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Mehrban Care — Patient Dignity & Legal Protocols",
  description:
    "Review Mehrban Care's privacy commitments, caregiver background check standards, domestic purdah protections, and zero third-party advertising cookie policy.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
