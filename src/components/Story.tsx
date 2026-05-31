const stats = [
  { value: "13", label: "Media types", sub: "Books, vinyl, games & more" },
  { value: "100%", label: "Local-first", sub: "Your data, your device" },
  { value: "Live", label: "eBay data", sub: "Real sold prices, daily" },
];

export default function Story() {
  return (
    <section id="story" className="py-32 relative overflow-hidden" style={{ background: "var(--surface)" }}>
      {/* Decorative glow */}
      <div className="absolute top-0 right-0 w-96 h-96 pointer-events-none"
        style={{ background: "radial-gradient(circle at top right, rgba(91,82,240,0.06), transparent 70%)" }} />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: copy */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: "#f59e0b" }}>
              The Story
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight tracking-tight">
              Built for the{" "}
              <span style={{ background: "linear-gradient(135deg, #a5b4fc, #7c74f5)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                obsessive collector.
              </span>
            </h2>
            <div className="space-y-5 text-base leading-relaxed" style={{ color: "#9090b0" }}>
              <p>
                Marrow Library started because spreadsheets don&apos;t cut it. When you own thousands of books, hundreds of records, and a growing shelf of games — you need a tool built for the obsessive, not the casual.
              </p>
              <p>
                So we built it. A local-first desktop app paired with a lightning-fast barcode scanner on your phone. No subscriptions to a cloud database. No company holding your catalog hostage. Your data lives on your machine, exportable any time.
              </p>
              <p>
                Live eBay sold-listing data means you always know what your collection is actually worth today — not some stale database price from three years ago.
              </p>
            </div>
          </div>

          {/* Right: stats */}
          <div className="grid grid-cols-1 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.value}
                className="rounded-2xl p-6 border flex items-center gap-6 group transition-all hover:border-indigo-500/30"
                style={{ background: "var(--surface-2)", borderColor: "var(--border)" }}
              >
                <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "var(--indigo-subtle)", border: "1px solid rgba(91,82,240,0.2)" }}>
                  <span className="text-2xl font-black" style={{ color: "#7c74f5" }}>{stat.value}</span>
                </div>
                <div>
                  <div className="text-base font-bold text-white mb-0.5">{stat.label}</div>
                  <div className="text-sm" style={{ color: "var(--text-3)" }}>{stat.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
