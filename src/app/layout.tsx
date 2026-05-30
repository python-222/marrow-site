import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://marrow-library-marketing-site.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Marrow Library — Collection Cataloging App for Serious Collectors",
    template: "%s | Marrow Library",
  },
  description:
    "Marrow Library is the ultimate app for cataloging books, vinyl records, video games, movies, and more. Scan barcodes, track live eBay market values, and manage your entire physical collection on Mac, Windows, Android & iOS.",
  keywords: [
    "library cataloging app",
    "book collection tracker",
    "vinyl record cataloger",
    "video game collection manager",
    "movie collection app",
    "barcode scanner library",
    "personal library management",
    "collection tracking software",
    "book inventory app",
    "physical media cataloger",
    "collection valuation app",
    "eBay price tracker collection",
  ],
  authors: [{ name: "Marrow Library", url: SITE_URL }],
  creator: "Marrow Library",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Marrow Library",
    title: "Marrow Library — Collection Cataloging App for Serious Collectors",
    description:
      "Scan barcodes. Track live values. Own your data. Catalog books, vinyl, games, movies and more — on Mac, Windows, Android & iOS.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Marrow Library — Collection Cataloging App" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marrow Library — Collection Cataloging App",
    description: "Scan barcodes. Track live eBay values. Catalog books, vinyl, games & more. Mac · Windows · Android · iOS.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  alternates: { canonical: SITE_URL },
  verification: { google: "ucvQARZ4fEmfMp2ZPlNlRS9Is64DsNcfC4ybeaT7Yb4" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" style={{ background: "#050510", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      <head>
        <meta name="theme-color" content="#050510" />
      </head>
      <body>{children}</body>
    </html>
  );
}
