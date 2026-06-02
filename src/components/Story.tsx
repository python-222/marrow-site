const stats = [
  { value: "13", label: "Media types", sub: "Books, vinyl, games, movies & 9 more", accent: "#5b52f0" },
  { value: "100%", label: "Local-first", sub: "Your data lives on your device only", accent: "#10b981" },
  { value: "Live", label: "eBay pricing", sub: "Real sold listings, updated daily", accent: "#f59e0b" },
];

export default function Story() {
  return (
    <section id="story" className="py-32 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #03030f 0%, #060614 100%)" }}>

      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 50% 60% at 0% 50%, rgba(91,82,240,0.06) 0%, transparent 70%)" }} />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Left: copy */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: "#f59e0b" }}>
              Why Marrow
            </p>
            <h2 className="font-black text-white mb-8 leading-tight tracking-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.03em" }}>
              Built for collectors who{" "}
              <span style={{ background: "linear-gradient(135deg, #a5b4fc, #7c74f5)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                actually care.
              </span>
            </h2>
            <div className="space-y-5 leading-relaxed text-base" style={{ color: "#606080" }}>
              <p>
                Spreadsheets break when you own thousands of items. Other apps lock your data in the cloud and charge monthly forever. Marrow does neither.
              </p>
              <p>
                Everything runs locally on your machine. Scan with your phone, manage on your desktop, and export any time. No account. No subscription. No company holding your catalog hostage.
              </p>
              <p style={{ color: "#808090" }}>
                Live eBay sold-listing data means you always know the real value of your collection — not wishful asking prices.
              </p>
            </div>
          </div>

          {/* Right: stat cards */}
          <div className="flex flex-col gap-4">
            {stats.map(stat => (
              <div key={stat.value}
                className="flex items-center gap-5 rounded-2xl p-5 border transition-all hover:-translate-y-0.5"
                style={{ background: "rgba(255,255,255,0.02)", borderColor: "rgba(255,255,255,0.06)" }}>
                <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${stat.accent}14`, border: `1px solid ${stat.accent}22` }}>
                  <span className="text-2xl font-black" style={{ color: stat.accent }}>{stat.value}</span>
                </div>
                <div>
                  <div className="text-base font-bold text-white mb-0.5">{stat.label}</div>
                  <div className="text-sm" style={{ color: "#505070" }}>{stat.sub}</div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
