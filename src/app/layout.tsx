import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";
import { pageMetadata, siteUrl, siteDescription } from "@/lib/site";

const brand = Cormorant_Garamond({
  variable: "--font-brand",
  subsets: ["latin"],
  weight: ["400"],
});

const body = Outfit({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  ...pageMetadata("AI Consulting for Insurance Agencies | Orpheion", siteDescription, "/"),
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#231e19" },
    { media: "(prefers-color-scheme: dark)", color: "#364335" },
  ],
  colorScheme: "light",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization", "@id": `${siteUrl}/#organization`,
      name: "Orpheion", url: siteUrl, email: "hello@orpheion.com",
      description: siteDescription, logo: `${siteUrl}/orpheion-favicon.png`,
      founder: { "@id": `${siteUrl}/#sam-bolton` },
    },
    {
      "@type": "Person", "@id": `${siteUrl}/#sam-bolton`, name: "Sam Bolton",
      jobTitle: "Founder", description: "Tennessee-licensed property and casualty insurance producer and ISC2 Certified in Cybersecurity (CC) credential holder with commercial account management, insurance sales and hands-on AI experience.", url: `${siteUrl}/#meet-sam`,
      worksFor: { "@id": `${siteUrl}/#organization` },
    },
    {
      "@type": "WebSite", "@id": `${siteUrl}/#website`, url: siteUrl,
      name: "Orpheion", inLanguage: "en-US",
      publisher: { "@id": `${siteUrl}/#organization` },
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${brand.variable} ${body.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
        {children}
      </body>
    </html>
  );
}
