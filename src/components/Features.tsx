"use client";

const features = [
  {
    icon: "⚡",
    label: "Barcode Scanner",
    tagline: "Point. Scan. Done.",
    body: "The Marrow Scanner app reads any barcode or ISBN in milliseconds. Metadata auto-fills: title, creator, cover art, format, release year. No typing required.",
    accent: "#5b52f0",
    accentBg: "rgba(91,82,240,0.08)",
  },
  {
    icon: "📈",
    label: "Live Valuation",
    tagline: "Know what your collection is worth today.",
    body: "We pull live sold-listing data from eBay and calculate a realistic market value for each item. Filter by condition, format, or edition for the most accurate estimate.",
    accent: "#10b981",
    accentBg: "rgba(16,185,129,0.08)",
  },
  {
    icon: "🔒",
    label: "Local-First",
    tagline: "Your data never leaves your device.",
    body: "No accounts, no cloud sync, no company holding your catalog hostage. Marrow runs entirely on your machine with optional backup to your own storage.",
    accent: "#f59e0b",
    accentBg: "rgba(245,158,11,0.08)",
  },
  {
    icon: "📱",
    label: "Desktop + Mobile Sync",
    tagline: "Scan on phone. Manage on desktop.",
    body: "The Scanner app connects to the desktop over your local network. Everything syncs in real time — no internet needed. Your phone becomes a scanning peripheral.",
    accent: "#ec4899",
    accentBg: "rgba(236,72,153,0.08)",
  },
  {
    icon: "🗂️",
    label: "13 Media Types",
    tagline: "Books, vinyl, games, and 10 more.",
    body: "Deep media-specific metadata for every type: ISBNs for books, catalog numbers for vinyl, region codes for games. Not shoehorned in — built from scratch.",
    accent: "#06b6d4",
    accentBg: "rgba(6,182,212,0.08)",
  },
  {
    icon: "📋",
    label: "Lending Tracker",
    tagline: "Know who has your stuff.",
    body: "Log loans with due dates and get reminded before things go missing. The lending tracker has saved more friendships than we can count.",
    accent: "#a78bfa",
    accentBg: "rgba(167,139,250,0.08)",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-32 relative" style={{ background: "var(--bg)" }}>
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 30% at 50% 100%, rgba(91,82,240,0.05) 0%, transparent 70%)" }} />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#f59e0b" }}>
            Features
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tight">
            Everything you need.{" "}
            <span style={{ background: "linear-gradient(135deg, #a5b4fc, #7c74f5)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Nothing you don&apos;t.
            </span>
          </h2>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => (
            <div
              key={f.label}
              className="rounded-2xl p-7 border flex flex-col gap-5 transition-all duration-300 hover:-translate-y-1 group"
              style={{ background: "var(--surface)", borderColor: "var(--border)" }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = `${f.accent}40`)}
              onMouseLeave={e => (e.currentTarget.style.borderColor = "var(--border)")}
            >
              <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                style={{ background: f.accentBg, border: `1px solid ${f.accent}25` }}>
                {f.icon}
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-base font-bold text-white">{f.label}</h3>
                <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: f.accent }}>
                  {f.tagline}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-2)" }}>
                  {f.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
