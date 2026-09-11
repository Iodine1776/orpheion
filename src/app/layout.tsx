import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";

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

const siteUrl = "https://www.orpheion.com";
const title = "Orpheion | AI Risk Reviews for Insurance Agencies";
const description =
  "Practical help with your agency’s AI use: client information, staff rules and human oversight. An action plan plus five client reports. $1,500 for 60 days.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Orpheion",
    type: "website",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Sunlit limestone amphitheater — Orpheion",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.jpg"],
  },
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
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Orpheion",
      url: siteUrl,
      email: "hello@orpheion.com",
      description,
      logo: `${siteUrl}/orpheion-favicon.png`,
      sameAs: [],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#service`,
      name: "Orpheion",
      url: siteUrl,
      image: `${siteUrl}/og.jpg`,
      description,
      provider: { "@id": `${siteUrl}/#organization` },
      areaServed: "US",
      serviceType: "AI-use documentation and client exposure review support for insurance agencies",
      email: "hello@orpheion.com",
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
