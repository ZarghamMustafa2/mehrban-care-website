import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions About Elderly Home Care",
  description:
    "Find transparent answers regarding caregiver vetting, male and female staff matching, cities covered, care speed, and family update reporting.",
  openGraph: {
    title: "Eldercare FAQ & Knowledge Base | Mehrban Care",
    description:
      "Honest answers on vetting, scheduling, clinical boundaries, and service availability across Pakistani cities.",
  },
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
