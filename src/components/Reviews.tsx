const reviews = [
  { name: "Marcus T.", role: "Book & vinyl collector", sub: "2,000+ items", avatar: "M", hue: 240,
    text: "Finally replaced the spreadsheet I'd been maintaining for 8 years. Scanning barcodes and having everything auto-fill is a game changer. The valuation showed my collection is worth 3× what I thought." },
  { name: "Sarah K.", role: "Vinyl collector", sub: "Insurance claim survivor", avatar: "S", hue: 255,
    text: "The eBay valuation alone is worth every penny. I had no idea my records were worth that much. Got my collection properly insured within a week of using Marrow." },
  { name: "James L.", role: "Retro game collector", sub: "800+ titles", avatar: "J", hue: 220,
    text: "Local-first, no subscription, blazing fast barcode scanner. Exactly what I wanted. Scanned my entire SNES and N64 library in under an hour." },
  { name: "Priya M.", role: "Book club organizer", sub: "Lending tracker user", avatar: "P", hue: 270,
    text: "The lending tracker has saved so many friendships. I know exactly who has what and when it's due. It used to be stressful. Now it's one tap." },
  { name: "Daniel R.", role: "Board game enthusiast", sub: "300+ games", avatar: "D", hue: 200,
    text: "I've tried every cataloging app. Marrow is the only one that handles board games properly — player count, genre, condition, value. The others just shoehorn it in." },
  { name: "Claire W.", role: "Rare book dealer", sub: "Power user", avatar: "C", hue: 230,
    text: "As someone who buys and sells, the live valuation is indispensable. It pulls real sold data, not wishful asking prices. Marrow pays for itself on the first deal." },
];

const faqs = [
  { q: "What types of collections does Marrow support?", a: "Books, vinyl records, video games, movies, board games, trading cards, comic books, spirits, housewares, clothing, coins, stamps, and plants — 13 media types." },
  { q: "Is my data stored in the cloud?", a: "Never. Marrow is local-first — everything lives on your device. No account required, no subscription for your data, no servers we control." },
  { q: "How does the barcode scanner work?", a: "The Marrow Scanner app uses your phone camera to read any barcode or ISBN. Metadata syncs instantly to your desktop over local Wi-Fi — no internet needed." },
  { q: "How accurate are the valuations?", a: "Very. We pull live sold-listing data from eBay, not asking prices. You see what items actually sold for, filtered by condition and format." },
  { q: "Do I need a subscription after 3 months?", a: "No. Marrow Library is $20 once for 3 months of full access. After that, a free tier covers basic cataloging. No auto-renewal, no recurring charges." },
  { q: "Which platforms are supported?", a: "Marrow Library runs on macOS and Windows. The Marrow Scanner companion app is available on Android and iOS." },
];

function Stars({ size = 13 }: { size?: number }) {
  return (
    <div className="flex gap-0.5">
      {[1,2,3,4,5].map(i => <span key={i} style={{ color: "#f59e0b", fontSize: size }}>{"★"}</span>)}
    </div>
  );
}

export default function Reviews() {
  return (
    <section className="py-32 relative" style={{ background: "#060614" }}>

      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 50% 50% at 50% 0%, rgba(91,82,240,0.06) 0%, transparent 70%)" }} />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#f59e0b" }}>Reviews</p>
          <h2 className="font-black text-white leading-tight tracking-tight mb-6"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", letterSpacing: "-0.03em" }}>
            Loved by collectors{" "}
            <span style={{ background: "linear-gradient(135deg, #a5b4fc, #7c74f5)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              worldwide.
            </span>
          </h2>
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border"
            style={{ background: "rgba(255,255,255,0.02)", borderColor: "rgba(255,255,255,0.07)" }}>
            <Stars size={15} />
            <strong className="text-white">4.9</strong>
            <span className="text-sm" style={{ color: "#60608a" }}>from 127 reviews</span>
          </div>
        </div>

        {/* Review grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reviews.map(r => (
            <div key={r.name} className="rounded-2xl p-6 border flex flex-col gap-4 transition-all hover:-translate-y-0.5 hover:border-indigo-500/20"
              style={{ background: "rgba(255,255,255,0.02)", borderColor: "rgba(255,255,255,0.05)" }}>
              <Stars />
              <p className="text-sm leading-relaxed flex-1" style={{ color: "#8080a0" }}>
                &ldquo;{r.text}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-3 border-t" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                  style={{ background: `hsl(${r.hue},45%,28%)`, color: "#c7d2fe" }}>
                  {r.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{r.name}</p>
                  <p className="text-xs" style={{ color: "#404060" }}>{r.role} · {r.sub}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div className="mt-28">
          <h2 className="text-3xl font-black text-white text-center mb-3 tracking-tight" style={{ letterSpacing: "-0.025em" }}>
            Frequently asked questions
          </h2>
          <p className="text-center text-sm mb-12" style={{ color: "#50507a" }}>
            Everything you need to know before downloading.
          </p>
          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
            {faqs.map(faq => (
              <div key={faq.q} className="rounded-xl p-6 border transition-all hover:border-indigo-500/20"
                style={{ background: "rgba(255,255,255,0.02)", borderColor: "rgba(255,255,255,0.05)" }}>
                <h3 className="text-sm font-bold text-white mb-2">{faq.q}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#50507a" }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
