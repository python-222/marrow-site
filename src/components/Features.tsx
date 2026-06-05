const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 16.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-1.5z" />
      </svg>
    ),
    label: "Barcode Scanner",
    tagline: "Point. Scan. Done.",
    body: "The Marrow Scanner app reads any barcode or ISBN in milliseconds. Metadata auto-fills — title, creator, cover art, format, release year. No typing required.",
    accent: "#818cf8",
    accentBg: "rgba(129,140,248,0.08)",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
    label: "Live Valuation",
    tagline: "Know your collection's worth today.",
    body: "We pull live sold-listing data from eBay and calculate a realistic market value. Filter by condition and format for the most accurate estimate.",
    accent: "#34d399",
    accentBg: "rgba(52,211,153,0.08)",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    label: "Local-First",
    tagline: "Your data never leaves your device.",
    body: "No accounts, no cloud sync, no company holding your catalog hostage. Marrow runs entirely on your machine with optional export to your own storage.",
    accent: "#f59e0b",
    accentBg: "rgba(245,158,11,0.08)",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
    label: "Phone + Desktop Sync",
    tagline: "Scan on phone. Manage on desktop.",
    body: "The Scanner app connects over local Wi-Fi — no internet required. Your phone becomes a scanning peripheral. Scans appear on your desktop instantly.",
    accent: "#f472b6",
    accentBg: "rgba(244,114,182,0.08)",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
      </svg>
    ),
    label: "13 Media Types",
    tagline: "Books, vinyl, games, and 10 more.",
    body: "Deep media-specific metadata for every type: ISBNs for books, catalog numbers for vinyl, region codes for games. Built from scratch, not shoehorned in.",
    accent: "#22d3ee",
    accentBg: "rgba(34,211,238,0.08)",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    label: "Lending Tracker",
    tagline: "Know who has your stuff.",
    body: "Log loans with due dates and get reminded before things go missing. The lending tracker has saved more friendships than we can count.",
    accent: "#a78bfa",
    accentBg: "rgba(167,139,250,0.08)",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
    label: "Price Alerts",
    tagline: "Know when value moves.",
    body: "Get notified via system tray when any item's market value changes by more than your threshold. Set it to 10%, 20%, whatever matters to you.",
    accent: "#10b981",
    accentBg: "rgba(16,185,129,0.08)",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25" />
      </svg>
    ),
    label: "Advanced Search",
    tagline: "Find anything, instantly.",
    body: "Filter by price range, date added, condition, loan status, whether an item has a photo, and more. Save filter presets. ⌘K opens search anywhere.",
    accent: "#f59e0b",
    accentBg: "rgba(245,158,11,0.08)",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
      </svg>
    ),
    label: "Discogs Import",
    tagline: "Your vinyl library in one click.",
    body: "Enter your Discogs username and import your entire collection automatically — pressings, labels, catalog numbers, cover art, and genres, all via the API.",
    accent: "#ec4899",
    accentBg: "rgba(236,72,153,0.08)",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
    label: "Insurance Report",
    tagline: "PDF-ready in seconds.",
    body: "Generate a professional report with cover art, condition notes, per-item market values, ROI, and a portfolio summary. One click to print or save as PDF.",
    accent: "#3b82f6",
    accentBg: "rgba(59,130,246,0.08)",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
      </svg>
    ),
    label: "Bulk Edit & Labels",
    tagline: "Manage at scale.",
    body: "Select multiple items and batch-edit condition, tags, or loanability in one action. Print barcode labels for your storage boxes with a single click.",
    accent: "#14b8a6",
    accentBg: "rgba(20,184,166,0.08)",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-32 relative"
      style={{ background: "linear-gradient(180deg, #060614 0%, #03030f 100%)" }}>

      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 40% at 50% 100%, rgba(91,82,240,0.05) 0%, transparent 70%)" }} />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        <div className="text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#f59e0b" }}>Features</p>
          <h2 className="font-black text-white leading-tight tracking-tight mb-4"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", letterSpacing: "-0.03em" }}>
            Everything you need.{" "}
            <span style={{ background: "linear-gradient(135deg, #a5b4fc, #7c74f5)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Nothing you don&apos;t.
            </span>
          </h2>
          <p className="text-base max-w-lg mx-auto" style={{ color: "#505070" }}>
            Purpose-built for collectors. Every feature earns its place.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map(f => (
            <div key={f.label}
              className="group rounded-2xl p-6 border flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1 cursor-default"
              style={{ background: "rgba(255,255,255,0.02)", borderColor: "rgba(255,255,255,0.05)" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = `${f.accent}30`; e.currentTarget.style.background = `${f.accentBg}`; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)"; e.currentTarget.style.background = "rgba(255,255,255,0.02)"; }}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors"
                style={{ background: f.accentBg, color: f.accent, border: `1px solid ${f.accent}22` }}>
                {f.icon}
              </div>
              <div className="flex flex-col gap-1.5">
                <h3 className="text-sm font-bold text-white">{f.label}</h3>
                <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: f.accent }}>{f.tagline}</p>
                <p className="text-sm leading-relaxed" style={{ color: "#505070" }}>{f.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
