const reviews = [
  {
    name: "Marcus T.",
    role: "Book & vinyl collector · 2,000+ items",
    avatar: "M",
    stars: 5,
    text: "Finally replaced the spreadsheet I'd been maintaining for 8 years. Scanning barcodes and having everything auto-fill is a game changer. The valuation feature showed me my collection is worth 3× what I thought.",
  },
  {
    name: "Sarah K.",
    role: "Vinyl collector · insurance claim survivor",
    avatar: "S",
    stars: 5,
    text: "The eBay valuation alone is worth every penny. I had no idea my records were worth that much. Got my collection properly insured within a week of using Marrow. Can't recommend it enough.",
  },
  {
    name: "James L.",
    role: "Retro game collector · 800+ titles",
    avatar: "J",
    stars: 5,
    text: "Local-first, no subscription for the basics, blazing fast barcode scanner. Exactly what I wanted. Scanned my entire SNES and N64 library in under an hour. The desktop app is gorgeous.",
  },
  {
    name: "Priya M.",
    role: "Book club organizer · lending tracker user",
    avatar: "P",
    stars: 5,
    text: "The lending tracker has saved so many friendships. I know exactly who has what book and when it's due back. It used to be a constant source of stress. Now it's one tap.",
  },
  {
    name: "Daniel R.",
    role: "Board game enthusiast · 300+ games",
    avatar: "D",
    stars: 5,
    text: "I've tried every cataloging app out there. Marrow is the only one that handles board games properly — player count, genre, condition, value. The others just shoehorn it in.",
  },
  {
    name: "Claire W.",
    role: "Rare book dealer · Collector plan",
    avatar: "C",
    stars: 5,
    text: "As someone who buys and sells, the live market valuation is indispensable. It pulls real sold data, not wishful asking prices. Marrow pays for itself on the first deal.",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} style={{ color: "#f59e0b", fontSize: "14px" }}>★</span>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section className="py-28" style={{ background: "#03030d" }}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#f59e0b" }}>
            Reviews
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4">
            Loved by collectors
            <br />
            <span style={{ color: "#818cf8" }}>worldwide.</span>
          </h2>
          {/* Aggregate rating */}
          <div className="inline-flex items-center gap-3 mt-2">
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map(i => (
                <span key={i} style={{ color: "#f59e0b", fontSize: "20px" }}>★</span>
              ))}
            </div>
            <span className="text-white font-bold text-lg">4.9</span>
            <span style={{ color: "#71717a" }} className="text-sm">from 127 reviews</span>
          </div>
        </div>

        {/* Review grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="rounded-2xl p-6 border flex flex-col gap-4"
              style={{ background: "#0f0f1a", borderColor: "#27272a" }}
            >
              <Stars count={r.stars} />
              <p className="text-sm leading-relaxed flex-1" style={{ color: "#d4d4d8" }}>
                &ldquo;{r.text}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-2 border-t" style={{ borderColor: "#1f1f2e" }}>
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                  style={{ background: "rgba(79,70,229,0.2)", color: "#818cf8" }}
                >
                  {r.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{r.name}</p>
                  <p className="text-xs" style={{ color: "#52525b" }}>{r.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ section — good for SEO */}
        <div className="mt-24">
          <h2 className="text-3xl font-black text-white text-center mb-12">
            Frequently asked questions
          </h2>
          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                q: "What types of collections does Marrow support?",
                a: "Books, vinyl records, video games, movies, board games, trading cards, comic books, spirits, housewares, clothing, coins, stamps, and plants — 13 media types and counting.",
              },
              {
                q: "Is my data stored in the cloud?",
                a: "Never. Marrow is local-first — everything lives on your device. No account required, no subscription for your data, no servers we control.",
              },
              {
                q: "How does the barcode scanner work?",
                a: "The Marrow Scanner app uses your phone camera to read any barcode or ISBN. Metadata syncs instantly to your desktop over local Wi-Fi — no internet needed.",
              },
              {
                q: "How accurate are the valuations?",
                a: "Very. We pull live sold-listing data from eBay, not asking prices. You see what items actually sold for, filtered by condition and format.",
              },
              {
                q: "Do I need a subscription?",
                a: "No subscription for the Free tier. Collector and Curator plans are available annually or as a one-time lifetime purchase for serious collectors.",
              },
              {
                q: "Which platforms are supported?",
                a: "Marrow Library runs on macOS and Windows. The Marrow Scanner companion app is available on Android and iOS for barcode scanning.",
              },
            ].map((faq) => (
              <div
                key={faq.q}
                className="rounded-xl p-6 border"
                style={{ background: "#0a0a14", borderColor: "#27272a" }}
              >
                <h3 className="text-sm font-bold text-white mb-2">{faq.q}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#71717a" }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
