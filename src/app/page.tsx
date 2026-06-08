import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Features from "@/components/Features";
import Reviews from "@/components/Reviews";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export const revalidate = 3600;

const SITE_URL = "https://marrow-site.vercel.app";

async function getLatestVersion(): Promise<string> {
  try {
    const res = await fetch(
      "https://api.github.com/repos/fullstackdeveloper829-creator/marrow-library/releases/latest",
      { headers: { "User-Agent": "MarrowSite/1.0" }, next: { revalidate: 3600 } }
    );
    if (!res.ok) return "v1.2.1";
    const data = await res.json() as { tag_name: string };
    return data.tag_name ?? "v1.2.1";
  } catch {
    return "v1.2.1";
  }
}

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
            text: "Marrow Library supports books, vinyl records, CDs, video games, movies/DVDs/Blu-rays, board games, trading cards, comic books, alcohol/spirits, housewares, clothing, coins, stamps, and plants — 13 media types in one app.",
          },
        },
        {
          "@type": "Question",
          name: "Does Marrow Library store my data in the cloud?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Marrow Library is local-first — your data lives entirely on your device. There is no cloud sync, no account required, and no internet connection needed to use the app. Your collection is yours.",
          },
        },
        {
          "@type": "Question",
          name: "How does the barcode scanner work?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Marrow Scanner companion app uses your phone's camera to read any barcode, ISBN, or UPC. It instantly pulls metadata — title, creator, cover art, format, release year — and syncs it to the desktop app over your local Wi-Fi network. No internet required after the initial metadata fetch.",
          },
        },
        {
          "@type": "Question",
          name: "How are item valuations calculated?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Marrow Library pulls live sold-listing data from eBay's API and calculates a realistic market value based on recent sales for items matching your condition, format, and edition. This is ideal for insurance, resale, or simply knowing what your collection is worth.",
          },
        },
        {
          "@type": "Question",
          name: "Is Marrow Library available in the UK?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Marrow Library is available worldwide including the UK. Download it for Mac, Windows, or Android. It works completely offline and supports all currencies for collection valuation.",
          },
        },
        {
          "@type": "Question",
          name: "Is there a subscription fee?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Marrow Library is a one-time purchase of $20 USD with no recurring fees, no subscription, and no price hikes. You pay once and own it forever on every device you own. A free tier (up to 50 items) is available with no time limit.",
          },
        },
        {
          "@type": "Question",
          name: "How is Marrow Library different from CLZ or Libib?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Unlike CLZ (which charges per media type per year) or Libib (which requires a monthly subscription and cloud storage), Marrow Library covers all 13 media types in a single one-time $20 purchase. Your data is stored locally — no account, no cloud, no recurring fees.",
          },
        },
        {
          "@type": "Question",
          name: "Can I use Marrow Library to track finds from car boot sales, thrift stores, or charity shops?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. Just scan the barcode with your phone and Marrow Library instantly adds the item with full metadata and a live eBay market value — perfect for tracking what you paid versus what it's worth.",
          },
        },
      ],
    },
  ],
};

export default async function Home() {
  const version = await getLatestVersion();
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <Nav />
        <Hero version={version} />
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
