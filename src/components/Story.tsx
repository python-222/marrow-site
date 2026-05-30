const stats = [
  { value: "13", label: "Media types supported" },
  { value: "100%", label: "Local-first — no cloud required" },
  { value: "Live", label: "eBay valuation data" },
];

export default function Story() {
  return (
    <section
      id="story"
      className="py-28"
      style={{ background: "#07070f" }}
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* Section label */}
        <p
          className="text-xs font-bold uppercase tracking-widest mb-4"
          style={{ color: "#f59e0b" }}
        >
          The Story
        </p>

        {/* Title */}
        <h2
          className="text-4xl md:text-5xl font-black text-white mb-10 leading-tight"
        >
          Built for the obsessive collector.
        </h2>

        {/* Body copy */}
        <div className="space-y-5 max-w-2xl mb-16" style={{ color: "#a1a1aa", lineHeight: "1.8", fontSize: "1.05rem" }}>
          <p>
            Marrow Library started because spreadsheets don&apos;t cut it. When you own thousands of books, hundreds of records, and a growing shelf of games — you need a tool built for the obsessive, not the casual. One that understands media deeply: ISBNs, UPC codes, catalog numbers, disc matrices.
          </p>
          <p>
            So we built it. A local-first desktop app paired with a fast barcode scanner on your phone. No subscriptions to a cloud database. No company holding your catalog hostage. Your data lives on your machine, in a format you can export any time.
          </p>
          <p>
            Marrow Library connects to live eBay sold-listing data so you always know what your collection is actually worth on the market today — not some stale database price from three years ago. It&apos;s the app we wanted as collectors. We think you&apos;ll feel the same way.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.value}
              className="rounded-xl p-6 border"
              style={{ background: "#0f0f1a", borderColor: "#27272a" }}
            >
              <div
                className="text-3xl font-black mb-1"
                style={{ color: "#fff" }}
              >
                {stat.value}
              </div>
              <div className="text-sm" style={{ color: "#71717a" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
