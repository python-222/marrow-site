import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://marrow-site.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Marrow Library — Collection Cataloging App for Serious Collectors",
    template: "%s | Marrow Library",
  },
  description:
    "Marrow Library is the best app for cataloguing books, vinyl records, video games, movies, board games and more. Scan barcodes, track live eBay market values, manage your entire physical collection offline. Mac, Windows, Android & iOS. One-time $20 — no subscription.",
  keywords: [
    // Core
    "collection cataloging app",
    "collection cataloguing app",
    "physical collection manager",
    "personal collection database",
    "barcode scanner collection app",
    "offline collection tracker",
    "local-first collection software",
    // Books
    "home library cataloging app",
    "book collection tracker app",
    "personal library software",
    "book inventory app",
    // Vinyl / Music
    "vinyl record collection app",
    "vinyl record cataloger",
    "CD collection cataloging software",
    "record collection tracker",
    // Games
    "video game collection tracker",
    "video game collection manager",
    "board game cataloging app",
    "retro game collection software",
    // Movies
    "DVD Blu-ray collection app",
    "physical media collection manager",
    "movie collection database",
    "movie collection app",
    // Value
    "collection valuation app",
    "eBay price tracker collection",
    "no subscription collection app",
    "buy once collection manager",
    "lifetime license collection software",
    "collection app no monthly fee",
    // Competitors
    "CLZ alternative",
    "Libib alternative",
    "iCollect Everything alternative",
    // UK spellings
    "collection cataloguing software",
    "physical media catalogue software",
    "organise your collection app",
    "car boot sale collection tracker",
    "charity shop finds tracker",
    // US
    "thrift store finds tracker",
    "garage sale collection app",
    "comic book collection software",
    "sports card collection tracker",
  ],
  authors: [{ name: "Marrow Library", url: SITE_URL }],
  creator: "Marrow Library",
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["en_GB"],
    url: SITE_URL,
    siteName: "Marrow Library",
    title: "Marrow Library — Collection Cataloging App for Serious Collectors",
    description:
      "Scan barcodes. Track live eBay values. Own your data. Catalog books, vinyl, games, movies and more — Mac, Windows, Android & iOS. Buy once, own forever.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Marrow Library — Collection Cataloging App" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marrow Library — Collection Cataloging App",
    description: "Scan barcodes. Track live eBay values. Catalog books, vinyl, games & more. No subscription. Mac · Windows · Android · iOS.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  alternates: { canonical: SITE_URL },
  verification: { google: "ucvQARZ4fEmfMp2ZPlNlRS9Is64DsNcfC4ybeaT7Yb4" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" style={{ background: "#02020a", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      <head>
        <meta name="theme-color" content="#02020a" />
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-EF1S0V31MJ" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-EF1S0V31MJ');
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
