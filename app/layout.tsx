import type { Metadata } from "next";
import "./globals.css";
import { businessConfig } from "@/lib/config/business";
import { LanguageProvider } from "@/context/LanguageContext";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileBottomBar } from "@/components/ui/MobileBottomBar";
import { BackToTop } from "@/components/ui/BackToTop";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";

export const metadata: Metadata = {
  title: {
    template: "%s | Mehrban Care — Elderly Home Care Pakistan",
    default: "Mehrban Care | Compassionate In-Home Elderly Care for Pakistani Seniors",
  },
  description:
    "Mehrban Care delivers dignified, compassionate in-home elderly care, personal hygiene assistance, health monitoring, and peace of mind for families and overseas Pakistanis.",
  keywords: [
    "Elderly home care Pakistan",
    "senior care Lahore",
    "elderly care Islamabad",
    "home nursing Pakistan",
    "caregiver for elderly parents Pakistan",
    "overseas Pakistani elderly care",
    "female caregiver Pakistan",
    "male caregiver Pakistan",
    "post hospital home care",
    "Mehrban Care",
    "مہربان کیئر",
    "بزرگوں کی گھریلو دیکھ بھال",
  ],
  authors: [{ name: "Mehrban Care" }],
  creator: "Mehrban Care",
  publisher: "Mehrban Care",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(businessConfig.domain.productionUrl),
  openGraph: {
    title: "Mehrban Care | Dignified In-Home Elderly Care in Pakistan",
    description:
      "Compassionate elderly care, personalized assistance, and peace of mind for families who want the very best for their loved ones.",
    url: businessConfig.domain.productionUrl,
    siteName: "Mehrban Care",
    locale: "en_PK",
    type: "website",
    images: [
      {
        url: `${businessConfig.domain.productionUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Mehrban Care — Compassionate In-Home Elderly Care in Pakistan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mehrban Care | In-Home Elderly Care in Pakistan",
    description:
      "Compassionate elderly care, personal hygiene assistance, and transparent family updates for Pakistani seniors.",
    images: [`${businessConfig.domain.productionUrl}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "name": "Mehrban Care",
  "alternateName": "مہربان کیئر",
  "url": businessConfig.domain.productionUrl,
  "logo": `${businessConfig.domain.productionUrl}/images/brand/logo.svg`,
  "description":
    "Compassionate, dignified in-home elderly care and caregiver support for families across Pakistan and overseas Pakistanis.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Lahore",
    "addressRegion": "Punjab",
    "addressCountry": "PK"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Lahore"
    },
    {
      "@type": "City",
      "name": "Islamabad"
    },
    {
      "@type": "City",
      "name": "Rawalpindi"
    },
    {
      "@type": "City",
      "name": "Multan"
    }
  ],
  "medicalSpecialty": "Geriatric",
  "serviceType": [
    "Elderly In-Home Care",
    "Personal Hygiene Assistance",
    "Health Monitoring Support",
    "Companionship for Seniors",
    "Overseas Family Care Coordination"
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-cream-100 text-navy-900 selection:bg-gold-400 selection:text-white antialiased">
        <LanguageProvider>
          <Navbar />
          <main className="flex-1 pb-16 md:pb-0">{children}</main>
          <Footer />
          <MobileBottomBar />
          <FloatingWhatsApp />
          <BackToTop />
        </LanguageProvider>
      </body>
    </html>
  );
}
