import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Features from "@/components/Features";
import Reviews from "@/components/Reviews";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const SITE_URL = "https://marrow-site.vercel.app";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Marrow Library",
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "macOS, Windows, Android, iOS",
      offers: [
        { "@type": "Offer", price: "0", priceCurrency: "USD", name: "Free" },
        { "@type": "Offer", price: "20", priceCurrency: "USD", name: "Full Access (3 months free, then $20 once)" },
      ],
      description:
        "Marrow Library is a collection cataloging app for books, vinyl records, video games, movies, board games, and more. Scan barcodes, track live eBay market values, and manage your entire collection on Mac, Windows, Android and iOS.",
      url: SITE_URL,
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "127",
        bestRating: "5",
        worstRating: "1",
      },
      review: [
        {
          "@type": "Review",
          author: { "@type": "Person", name: "Marcus T." },
          reviewRating: { "@type": "Rating", ratingValue: "5" },
          reviewBody:
            "Finally replaced a spreadsheet I'd been maintaining for 8 years. Scanning barcodes and having everything auto-fill is a game changer. My 2,000-item collection is fully cataloged.",
        },
        {
          "@type": "Review",
          author: { "@type": "Person", name: "Sarah K." },
          reviewRating: { "@type": "Rating", ratingValue: "5" },
          reviewBody:
            "The eBay valuation feature alone is worth it. I had no idea my vinyl collection was worth that much. Now I have it properly insured.",
        },
        {
          "@type": "Review",
          author: { "@type": "Person", name: "James L." },
          reviewRating: { "@type": "Rating", ratingValue: "5" },
          reviewBody:
            "Local-first, no subscription for the core stuff, clean UI. Exactly what I wanted. The barcode scanner is insanely fast.",
        },
      ],
    },
    {
      "@type": "Organization",
      name: "Marrow Library",
      url: SITE_URL,
      description: "Makers of Marrow Library, the collection cataloging app for serious collectors.",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What types of collections can Marrow Library catalog?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Marrow Library supports books, vinyl records, video games, movies/DVDs, board games, trading cards, comic books, alcohol/spirits, housewares, clothing, coins, stamps, and plants — 13 media types in total.",
          },
        },
        {
          "@type": "Question",
          name: "Does Marrow Library store my data in the cloud?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Marrow Library is local-first — your data lives entirely on your device. There is no cloud sync and no account required. Your collection is yours.",
          },
        },
        {
          "@type": "Question",
          name: "How does the barcode scanner work?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Marrow Scanner companion app uses your phone's camera to read any barcode or ISBN. It instantly pulls metadata — title, creator, cover art, format, release year — and syncs it to the desktop app over your local Wi-Fi network.",
          },
        },
        {
          "@type": "Question",
          name: "How are item valuations calculated?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Marrow Library pulls live sold-listing data from eBay's API and calculates a realistic market value based on recent sales for items matching your condition, format, and edition.",
          },
        },
      ],
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <Nav />
        <Hero />
        <Story />
        <Features />
        <Reviews />
        <section id="pricing">
          <Pricing />
        </section>
        <CTA />
        <Footer />
      </main>
    </>
  );
}
