import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://mehrbancare.pk";

  const routes = [
    "",
    "/about",
    "/services",
    "/services/daily-care",
    "/services/hygiene-care",
    "/services/home-nursing",
    "/services/monitoring",
    "/services/doctor-visits",
    "/services/physiotherapy",
    "/services/live-in-care",
    "/services/overseas-support",
    "/care-plans",
    "/overseas-families",
    "/how-it-works",
    "/careers",
    "/faq",
    "/contact",
    "/book-care",
    "/privacy",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));
}
