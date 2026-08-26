import type { MetadataRoute } from "next";
import { caseStudies } from "@/lib/content";
import { nav, siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    ...nav.map((item) => ({
      url: `${siteConfig.baseURL}${item.href === "/" ? "" : item.href}`,
      lastModified,
      priority: item.href === "/" ? 1 : 0.8,
    })),
    ...caseStudies.map((c) => ({
      url: `${siteConfig.baseURL}/case-studies/${c.slug}`,
      lastModified,
      priority: 0.7,
    })),
    { url: `${siteConfig.baseURL}/cv`, lastModified, priority: 0.6 },
  ];
}
