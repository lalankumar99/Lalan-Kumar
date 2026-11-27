import type { Metadata } from "next";
import "@/css/theme.css";
import "@/css/globals.css";
import "@/css/layout.css";
import "@/css/components.css";
import "@/css/animations.css";
import "@/css/responsive.css";

import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { seoConfig, socials } from "@/data";

export const metadata: Metadata = {
  metadataBase: new URL(seoConfig.siteUrl),
  title: {
    default: seoConfig.title,
    template: `%s | ${seoConfig.siteName}`,
  },
  description: seoConfig.description,
  keywords: seoConfig.keywords,
  authors: [{ name: seoConfig.author, url: seoConfig.siteUrl }],
  creator: seoConfig.author,
  openGraph: {
    type: "website",
    url: seoConfig.siteUrl,
    title: seoConfig.title,
    description: seoConfig.description,
    siteName: seoConfig.siteName,
  },
  twitter: {
    card: "summary_large_image",
    title: seoConfig.title,
    description: seoConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Lalan Kumar",
    url: seoConfig.siteUrl,
    jobTitle: "Diploma in Electrical Engineering Student",
    affiliation: {
      "@type": "CollegeOrUniversity",
      name: "Government Polytechnic, Banka",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Banka",
      addressRegion: "Bihar",
      addressCountry: "IN",
    },
    sameAs: socials
      .filter((s) => s.url.startsWith("http"))
      .map((s) => s.url),
  };

  return (
    <html lang="en" data-theme="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <LanguageProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
