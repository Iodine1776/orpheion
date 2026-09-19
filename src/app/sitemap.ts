import type { MetadataRoute } from "next";
import { siteUrl, contentUpdated } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl;
  return [
    { url: `${base}/`, lastModified: contentUpdated, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/sample`, lastModified: contentUpdated, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/terms`, lastModified: contentUpdated, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/privacy`, lastModified: contentUpdated, changeFrequency: "yearly", priority: 0.3 },
  ];
}
