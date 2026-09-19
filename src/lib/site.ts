import type { Metadata } from "next";

export const siteUrl = "https://www.orpheion.com";
export const siteDescription = "Practical AI consulting for independent insurance agencies: an AI-use policy, two workflows and staff training. Based in Middle Tennessee, serving US agencies.";
export const contentUpdated = "2026-09-19";

export function pageMetadata(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title, description, url: `${siteUrl}${path}`, siteName: "Orpheion",
      type: "website", locale: "en_US",
      images: [{ url: "/social-card.png", width: 1200, height: 630, alt: "Orpheion — practical AI consulting for independent insurance agencies" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/social-card.png"] },
  };
}
