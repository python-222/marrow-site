import Link from "next/link";

const FEATURES = [
  "Unlimited items",
  "All 13 media types",
  "Barcode scanning",
  "Live eBay valuation",
  "Backup & restore",
  "Lending tracker",
  "CSV import/export",
  "Activity log",
];

const PLATFORMS = [
  { key: "macos",   icon: "",   label: "macOS",   badge: ".dmg" },
  { key: "windows", icon: "🪟", label: "Windows", badge: ".exe" },
  { key: "android", icon: "🤖", label: "Android Scanner", badge: ".apk" },
  { key: "ios",     icon: "🍎", label: "iOS Scanner", badge: "TestFlight" },
] as const;

export default function DownloadPage() {
  return (
    <main className="min-h-screen px-4 sm:px-6 py-20" style={{ background: "var(--bg)" }}>
      <div className="max-w-2xl mx-auto">

        <div className="text-center mb-12">
          <Link href="/" className="text-sm font-medium mb-8 inline-block transition-colors hover:text-white"
            style={{ color: "var(--text-2)" }}>
            ← Back to home
          </Link>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight tracking-tight">
            Download Marrow Library
          </h1>
          <p className="text-base" style={{ color: "var(--text-2)" }}>
            $20 once · 3 months full access · no subscription
          </p>
        </div>

        {/* Single purchase card */}
        <div className="rounded-2xl border overflow-hidden relative"
          style={{
            background: "linear-gradient(160deg, #0d0d22 0%, #0a0a1a 100%)",
            borderColor: "#5b52f0",
            boxShadow: "0 0 60px rgba(91,82,240,0.15)",
          }}>

          {/* Header */}
          <div className="px-8 pt-10 pb-6 border-b" style={{ borderColor: "rgba(91,82,240,0.2)" }}>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                style={{ background: "rgba(91,82,240,0.2)", color: "#a5b4fc", border: "1px solid rgba(91,82,240,0.4)" }}>
                Full Access
              </span>
              <div className="text-right">
                <div className="text-3xl font-black text-white">$20</div>
                <div className="text-xs" style={{ color: "var(--text-3)" }}>one-time</div>
              </div>
            </div>
            <h2 className="text-xl font-bold text-white mb-1">Marrow Library</h2>
            <p className="text-sm" style={{ color: "var(--text-2)" }}>
              3 months of everything. Pay once and it&apos;s yours.
            </p>
          </div>

          {/* Features */}
          <div className="px-8 py-6">
            <ul className="grid grid-cols-2 gap-3">
              {FEATURES.map(f => (
                <li key={f} className="flex items-center gap-2.5 text-sm" style={{ color: "#e0e0f0" }}>
                  <span className="w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0"
                    style={{ background: "rgba(91,82,240,0.2)", color: "#a5b4fc" }}>✓</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Purchase & download */}
          <div className="px-8 pb-8 space-y-4">
            <Link href="/api/checkout?tier=COLLECTOR&billing=launch"
              className="flex items-center justify-center w-full px-6 py-4 rounded-xl text-base font-bold text-white text-center transition-all hover:scale-105"
              style={{ background: "linear-gradient(135deg, #5b52f0, #7c74f5)", boxShadow: "0 0 30px rgba(91,82,240,0.35)" }}>
              Buy Now — $20 →
            </Link>

            <div className="rounded-xl p-5 border"
              style={{ background: "rgba(91,82,240,0.05)", borderColor: "rgba(91,82,240,0.15)" }}>
              <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "var(--text-3)" }}>
                Available on
              </p>
              <div className="grid grid-cols-2 gap-2">
                {PLATFORMS.map(p => (
                  <div key={p.key} className="flex items-center gap-2 text-sm" style={{ color: "var(--text-2)" }}>
                    <span>{p.icon}</span>
                    <span>{p.label}</span>
                    <span className="text-xs font-mono px-1.5 py-0.5 rounded ml-auto"
                      style={{ background: "var(--surface-2)", color: "var(--text-3)" }}>
                      {p.badge}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-xs mt-3" style={{ color: "var(--text-3)" }}>
                Download links sent to your email after purchase.
              </p>
            </div>

            <p className="text-xs text-center" style={{ color: "var(--text-3)" }}>
              No auto-renewal · No credit card stored · Secure checkout via Stripe
            </p>
          </div>
        </div>

        {/* Already purchased */}
        <div className="rounded-2xl p-6 border text-center mt-4"
          style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
          <p className="text-sm font-semibold mb-1" style={{ color: "#e4e4e7" }}>
            Already purchased?
          </p>
          <p className="text-sm" style={{ color: "var(--text-2)" }}>
            Your download link and license key are in your email. Open the app and go to{" "}
            <span className="font-mono text-xs px-1.5 py-0.5 rounded"
              style={{ background: "var(--surface-2)", color: "#a1a1aa" }}>
              Settings → License
            </span>{" "}
            to activate.
          </p>
        </div>

      </div>
    </main>
  );
}
