import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { servicesData, DetailedService } from "@/lib/servicesData";
import { ServiceDetailClient } from "./ServiceDetailClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return servicesData.map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) return { title: "Service Not Found | Mehrban Care" };

  return {
    title: `${service.categoryNameEn}: In-Home Care Pakistan | Mehrban Care`,
    description: service.fullDescEn.slice(0, 160),
    openGraph: {
      title: `${service.categoryNameEn} | Mehrban Care`,
      description: service.fullDescEn.slice(0, 160),
      images: [{ url: service.imageUrl, width: 1200, height: 630 }],
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const relatedServices = servicesData.filter((s) =>
    service.relatedSlugs?.includes(s.slug)
  );

  return (
    <ServiceDetailClient
      service={service}
      relatedServices={relatedServices}
    />
  );
}
