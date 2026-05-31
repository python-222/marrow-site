import Link from "next/link";

// ── Asset URLs (free tier — public) ──────────────────────────────────────────
const RELEASE_VERSION = "v1.0.0";
const RELEASE_BASE = `https://github.com/python-222/marrow-library/releases/download/${RELEASE_VERSION}`;

const FREE_DOWNLOADS = {
  macos:   `${RELEASE_BASE}/MarrowLibrary-${RELEASE_VERSION}-macos-universal.dmg`,
  windows: `${RELEASE_BASE}/MarrowLibrary-${RELEASE_VERSION}-windows-setup.exe`,
  android: `${RELEASE_BASE}/MarrowScanner-${RELEASE_VERSION}-android.apk`,
  ios:     `${RELEASE_BASE}/MarrowScanner-${RELEASE_VERSION}-ios-simulator.tar.gz`,
};

// ── Feature lists ─────────────────────────────────────────────────────────────
const FREE_FEATURES = [
  { text: "Up to 50 items", included: true },
  { text: "Barcode scanning", included: true },
  { text: "Desktop app (macOS & Windows)", included: true },
  { text: "Mobile scanner app (Android)", included: true },
  { text: "Wishlist", included: true },
  { text: "Collections & smart filters", included: true },
  { text: "Unlimited items", included: false },
  { text: "Live eBay market valuations", included: false },
  { text: "Cloud backup & PDF export", included: false },
  { text: "Lending tracker", included: false },
];

const PREMIUM_FEATURES = [
  { text: "Everything in Free", included: true },
  { text: "Unlimited items", included: true },
  { text: "Live eBay market valuations", included: true },
  { text: "Cloud backup & PDF export", included: true },
  { text: "Lending tracker", included: true },
  { text: "Priority support", included: true },
];

const PLATFORMS = [
  { key: "macos",   icon: "", label: "macOS",   badge: ".dmg",    note: null },
  { key: "windows", icon: "🪟", label: "Windows", badge: ".exe",  note: null },
  { key: "android", icon: "🤖", label: "Android", badge: ".apk",  note: null },
  { key: "ios",     icon: "🍎", label: "iOS",     badge: ".tar.gz", note: "Simulator build — TestFlight coming soon" },
] as const;

// ── Page ─────────────────────────────────────────────────────────────────────
export default function DownloadPage() {
  return (
    <main className="min-h-screen px-4 sm:px-6 py-20" style={{ background: "#050510" }}>
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <Link
            href="/"
            className="text-sm font-medium mb-8 inline-block transition-colors hover:text-white"
            style={{ color: "#71717a" }}
          >
            ← Back to home
          </Link>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
            Download Marrow Library
          </h1>
          <p className="text-lg max-w-lg mx-auto" style={{ color: "#a1a1aa" }}>
            Start free — no account needed. Upgrade to unlock the full collection experience.
          </p>
        </div>

        {/* Two-version grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">

          {/* ── FREE VERSION ──────────────────────────────────────────────── */}
          <div
            className="rounded-2xl border flex flex-col overflow-hidden"
            style={{ background: "#0f0f1a", borderColor: "#27272a" }}
          >
            {/* Header */}
            <div className="px-8 pt-8 pb-6 border-b" style={{ borderColor: "#1a1a2e" }}>
              <div className="flex items-center justify-between mb-4">
                <span
                  className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                  style={{ background: "#18181b", color: "#71717a", border: "1px solid #27272a" }}
                >
                  Free
                </span>
                <span className="text-2xl font-black text-white">$0</span>
              </div>
              <h2 className="text-xl font-bold text-white mb-1">Marrow Library Free</h2>
              <p className="text-sm" style={{ color: "#71717a" }}>
                Scan and catalog your first 50 items. Full scanner + desktop app included.
              </p>
            </div>

            {/* Features */}
            <div className="px-8 py-6 flex-1">
              <ul className="space-y-3">
                {FREE_FEATURES.map((f) => (
                  <li key={f.text} className="flex items-center gap-3 text-sm">
                    {f.included ? (
                      <span style={{ color: "#4ade80" }}>✓</span>
                    ) : (
                      <span style={{ color: "#3f3f46" }}>✗</span>
                    )}
                    <span style={{ color: f.included ? "#d4d4d8" : "#52525b" }}>{f.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Download buttons */}
            <div className="px-8 pb-8 space-y-3">
              <p
                className="text-xs font-bold uppercase tracking-widest mb-4"
                style={{ color: "#52525b" }}
              >
                Choose your platform
              </p>
              {PLATFORMS.map((p) => (
                <div key={p.key}>
                  <a
                    href={FREE_DOWNLOADS[p.key]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between w-full px-4 py-3 rounded-xl text-sm font-semibold transition-all hover:opacity-85"
                    style={{ background: "#18181b", border: "1px solid #27272a", color: "#d4d4d8" }}
                  >
                    <span className="flex items-center gap-2">
                      <span>{p.icon}</span>
                      <span>Download for {p.label}</span>
                    </span>
                    <span
                      className="text-xs font-mono px-2 py-0.5 rounded"
                      style={{ background: "#0f0f1a", color: "#71717a" }}
                    >
                      {p.badge}
                    </span>
                  </a>
                  {p.note && (
                    <p className="text-xs mt-1 ml-1" style={{ color: "#52525b" }}>{p.note}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* ── PREMIUM VERSION ────────────────────────────────────────────── */}
          <div
            className="rounded-2xl border flex flex-col overflow-hidden relative"
            style={{
              background: "linear-gradient(135deg, #0d0d1f 0%, #0f0a1e 100%)",
              borderColor: "#3730a3",
              boxShadow: "0 0 40px rgba(99,102,241,0.08)",
            }}
          >
            {/* Glow ring */}
            <div
              className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{
                background: "radial-gradient(ellipse at top, rgba(99,102,241,0.08) 0%, transparent 70%)",
              }}
            />

            {/* Header */}
            <div className="px-8 pt-8 pb-6 border-b relative" style={{ borderColor: "#27272a" }}>
              <div className="flex items-center justify-between mb-4">
                <span
                  className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                  style={{ background: "rgba(99,102,241,0.2)", color: "#a5b4fc", border: "1px solid rgba(99,102,241,0.4)" }}
                >
                  🔥 Full Access
                </span>
                <div className="text-right">
                  <div className="text-xs font-semibold mb-0.5" style={{ color: "#4ade80" }}>3 months free</div>
                  <div>
                    <span className="text-2xl font-black text-white">$20</span>
                    <span className="text-sm ml-1" style={{ color: "#71717a" }}>once</span>
                  </div>
                </div>
              </div>
              <h2 className="text-xl font-bold text-white mb-1">Marrow Library Full</h2>
              <p className="text-sm" style={{ color: "#a1a1aa" }}>
                Try free for 3 months — no card needed. Then just $20 once to own it forever.
              </p>
            </div>

            {/* Features */}
            <div className="px-8 py-6 flex-1 relative">
              <ul className="space-y-3">
                {PREMIUM_FEATURES.map((f) => (
                  <li key={f.text} className="flex items-center gap-3 text-sm">
                    <span style={{ color: "#818cf8" }}>✓</span>
                    <span style={{ color: "#d4d4d8" }}>{f.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Locked download area */}
            <div className="px-8 pb-8 relative">
              <div
                className="rounded-xl p-5 mb-4 text-center"
                style={{ background: "rgba(99,102,241,0.06)", border: "1px solid rgba(99,102,241,0.2)" }}
              >
                <div className="text-3xl mb-3">🔒</div>
                <p className="text-sm font-semibold text-white mb-1">
                  Premium download unlocks after purchase
                </p>
                <p className="text-xs" style={{ color: "#71717a" }}>
                  You&apos;ll receive a personal download link and license key via email
                  the moment your payment is confirmed.
                </p>
              </div>
              <Link
                href="/#pricing"
                className="flex items-center justify-center gap-2 w-full px-4 py-3.5 rounded-xl text-sm font-bold text-white text-center transition-all hover:opacity-90"
                style={{ background: "linear-gradient(135deg, #5b52f0, #7c74f5)" }}
              >
                Start Free — 3 Months on Us →
              </Link>
              <p className="text-center text-xs mt-3" style={{ color: "#52525b" }}>
                No card for trial · $20 one-time after 3 months · no subscription
              </p>
            </div>
          </div>

        </div>

        {/* Already purchased */}
        <div
          className="rounded-2xl p-6 border text-center"
          style={{ background: "#0a0a14", borderColor: "#27272a" }}
        >
          <p className="text-sm mb-1 font-semibold" style={{ color: "#e4e4e7" }}>
            Already purchased? Your premium download link is in your email.
          </p>
          <p className="text-sm" style={{ color: "#71717a" }}>
            Also enter your license key in{" "}
            <span
              className="font-mono text-xs px-1.5 py-0.5 rounded"
              style={{ background: "#18181b", color: "#a1a1aa" }}
            >
              Settings → License
            </span>{" "}
            inside the app to activate your tier features.
          </p>
        </div>

      </div>
    </main>
  );
}
