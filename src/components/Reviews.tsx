const reviews = [
  {
    name: "Marcus T.",
    role: "Book & vinyl collector",
    sub: "2,000+ items",
    avatar: "M",
    color: "hsl(240, 55%, 38%)",
    text: "Finally replaced the spreadsheet I'd been maintaining for 8 years. Scanning barcodes and having everything auto-fill is a game changer. The valuation feature showed me my collection is worth 3× what I thought.",
  },
  {
    name: "Sarah K.",
    role: "Vinyl collector",
    sub: "Insurance claim survivor",
    avatar: "S",
    color: "hsl(255, 55%, 38%)",
    text: "The eBay valuation alone is worth every penny. I had no idea my records were worth that much. Got my collection properly insured within a week of using Marrow.",
  },
  {
    name: "James L.",
    role: "Retro game collector",
    sub: "800+ titles",
    avatar: "J",
    color: "hsl(220, 55%, 38%)",
    text: "Local-first, no subscription for the basics, blazing fast barcode scanner. Exactly what I wanted. Scanned my entire SNES and N64 library in under an hour.",
  },
  {
    name: "Priya M.",
    role: "Book club organizer",
    sub: "Lending tracker user",
    avatar: "P",
    color: "hsl(270, 55%, 38%)",
    text: "The lending tracker has saved so many friendships. I know exactly who has what book and when it's due back. It used to be a constant source of stress. Now it's one tap.",
  },
  {
    name: "Daniel R.",
    role: "Board game enthusiast",
    sub: "300+ games",
    avatar: "D",
    color: "hsl(200, 55%, 38%)",
    text: "I've tried every cataloging app out there. Marrow is the only one that handles board games properly — player count, genre, condition, value. The others just shoehorn it in.",
  },
  {
    name: "Claire W.",
    role: "Rare book dealer",
    sub: "Collector plan",
    avatar: "C",
    color: "hsl(230, 55%, 38%)",
    text: "As someone who buys and sells, the live market valuation is indispensable. It pulls real sold data, not wishful asking prices. Marrow pays for itself on the first deal.",
  },
];

const faqs = [
  { q: "What types of collections does Marrow support?", a: "Books, vinyl records, video games, movies, board games, trading cards, comic books, spirits, housewares, clothing, coins, stamps, and plants — 13 media types and counting." },
  { q: "Is my data stored in the cloud?", a: "Never. Marrow is local-first — everything lives on your device. No account required, no subscription for your data, no servers we control." },
  { q: "How does the barcode scanner work?", a: "The Marrow Scanner app uses your phone camera to read any barcode or ISBN. Metadata syncs instantly to your desktop over local Wi-Fi — no internet needed." },
  { q: "How accurate are the valuations?", a: "Very. We pull live sold-listing data from eBay, not asking prices. You see what items actually sold for, filtered by condition and format." },
  { q: "Do I need a subscription?", a: "No subscription for the Free tier. Collector and Curator plans are available annually or as a one-time lifetime purchase." },
  { q: "Which platforms are supported?", a: "Marrow Library runs on macOS and Windows. The Marrow Scanner companion app is available on Android and iOS." },
];

function Stars() {
  return (
    <div className="flex gap-0.5">
      {[1,2,3,4,5].map(i => <span key={i} style={{ color: "#f59e0b", fontSize: "13px" }}>★</span>)}
    </div>
  );
}

export default function Reviews() {
  return (
    <section className="py-32 relative" style={{ background: "var(--surface)" }}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#f59e0b" }}>
            Reviews
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tight mb-6">
            Loved by collectors{" "}
            <span style={{ background: "linear-gradient(135deg, #a5b4fc, #7c74f5)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              worldwide.
            </span>
          </h2>
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border"
            style={{ background: "var(--surface-2)", borderColor: "var(--border)" }}>
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map(i => <span key={i} style={{ color: "#f59e0b", fontSize: "16px" }}>★</span>)}
            </div>
            <span className="font-bold text-white">4.9</span>
            <span className="text-sm" style={{ color: "var(--text-2)" }}>from 127 reviews</span>
          </div>
        </div>

        {/* Review grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((r) => (
            <div key={r.name} className="rounded-2xl p-6 border flex flex-col gap-4 transition-all hover:-translate-y-0.5 hover:border-indigo-500/20"
              style={{ background: "var(--surface-2)", borderColor: "var(--border)" }}>
              <Stars />
              <p className="text-sm leading-relaxed flex-1" style={{ color: "#c0c0d8" }}>
                &ldquo;{r.text}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-3 border-t" style={{ borderColor: "var(--border)" }}>
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                  style={{ background: r.color, color: "#e0e0ff" }}>
                  {r.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{r.name}</p>
                  <p className="text-xs" style={{ color: "var(--text-3)" }}>{r.role} · {r.sub}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div className="mt-28">
          <h2 className="text-3xl font-black text-white text-center mb-3 tracking-tight">
            Frequently asked questions
          </h2>
          <p className="text-center text-sm mb-12" style={{ color: "var(--text-2)" }}>
            Everything you need to know before downloading.
          </p>
          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-xl p-6 border transition-all hover:border-indigo-500/20"
                style={{ background: "var(--bg)", borderColor: "var(--border)" }}>
                <h3 className="text-sm font-bold text-white mb-2">{faq.q}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-2)" }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
