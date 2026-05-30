const features = [
  {
    icon: "📱",
    title: "Barcode Scanner",
    tagline: "Point. Scan. Done.",
    body: "The Marrow Scanner app reads any barcode or ISBN — books, vinyl, games, movies. Metadata appears instantly. No typing required. Cover art, release year, format details: all populated automatically so you can focus on cataloging, not data entry.",
  },
  {
    icon: "📈",
    title: "Live Valuation",
    tagline: "Know what your collection is worth — today.",
    body: "Marrow pulls live sold-listing data from eBay and calculates a realistic market value for each item. Watch your portfolio grow. Filter by condition, format, or edition to get the most accurate estimate for what you actually own.",
  },
  {
    icon: "🔄",
    title: "Desktop + Mobile Sync",
    tagline: "Scan on your phone. Manage on your Mac or PC.",
    body: "The Scanner app connects to the desktop app over your local network. Everything syncs in real time — no accounts, no cloud, no nonsense. Your phone becomes a scanning peripheral; your desktop stays the source of truth.",
  },
];

export default function Features() {
  return (
    <section
      className="py-28"
      style={{ background: "#050510" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-xs font-bold uppercase tracking-widest mb-4"
            style={{ color: "#f59e0b" }}
          >
            Features
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
            Everything you need.<br />
            <span style={{ color: "#818cf8" }}>Nothing you don&apos;t.</span>
          </h2>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl p-8 border flex flex-col gap-4 transition-colors hover:border-zinc-600"
              style={{ background: "#0f0f1a", borderColor: "#27272a" }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                style={{ background: "rgba(79,70,229,0.12)" }}
              >
                {f.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">{f.title}</h3>
                <p
                  className="text-sm font-semibold mb-3"
                  style={{ color: "#818cf8" }}
                >
                  {f.tagline}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "#a1a1aa" }}>
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
