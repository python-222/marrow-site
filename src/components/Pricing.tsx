"use client";

import Link from "next/link";

const freeFeatures = [
  "Up to 50 items",
  "All 13 media types",
  "Barcode scanning",
];

const paidFeatures = [
  "Unlimited items",
  "Live eBay valuation",
  "Backup & restore",
  "Lending tracker",
  "CSV import/export",
  "Activity log",
  "All 13 media types",
  "Barcode scanning",
];

export default function Pricing() {
  return (
    <div id="pricing" className="py-32 relative overflow-hidden" style={{ background: "var(--bg)" }}>
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 60% at 50% 0%, rgba(91,82,240,0.09) 0%, transparent 70%)" }} />

      <div className="max-w-5xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#f59e0b" }}>Pricing</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-3 leading-tight tracking-tight">
            Simple pricing.{" "}
            <span style={{ background: "linear-gradient(135deg, #a5b4fc, #7c74f5)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              No surprises.
            </span>
          </h2>
          <p className="text-base" style={{ color: "var(--text-2)" }}>Try free. Buy once. Yours forever.</p>
        </div>

        {/* How it works strip */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="rounded-2xl p-6 border flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left"
            style={{ background: "rgba(91,82,240,0.05)", borderColor: "rgba(91,82,240,0.2)" }}>
            <div className="flex-1">
              <div className="text-3xl mb-1">🎁</div>
              <div className="text-sm font-bold text-white mb-1">3 months free</div>
              <div className="text-xs" style={{ color: "var(--text-2)" }}>Use the full app free for 3 months. No card needed.</div>
            </div>
            <div className="hidden sm:block w-px h-12 self-center" style={{ background: "var(--border)" }} />
            <div className="flex-1">
              <div className="text-3xl mb-1">💳</div>
              <div className="text-sm font-bold text-white mb-1">Then $20 — once</div>
              <div className="text-xs" style={{ color: "var(--text-2)" }}>One-time payment. Own it forever. No subscription.</div>
            </div>
            <div className="hidden sm:block w-px h-12 self-center" style={{ background: "var(--border)" }} />
            <div className="flex-1">
              <div className="text-3xl mb-1">♾️</div>
              <div className="text-sm font-bold text-white mb-1">Yours forever</div>
              <div className="text-xs" style={{ color: "var(--text-2)" }}>Pay once and it's yours. Updates included.</div>
            </div>
          </div>
        </div>

        {/* Two cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">

          {/* Free */}
          <div className="rounded-2xl p-8 border flex flex-col gap-6"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "var(--text-3)" }}>Free tier</p>
              <div className="flex items-end gap-1 mb-1">
                <span className="text-5xl font-black text-white">$0</span>
              </div>
              <p className="text-sm" style={{ color: "var(--text-3)" }}>forever, no card needed</p>
            </div>

            <Link href="/download"
              className="w-full py-3.5 rounded-xl text-sm font-semibold text-center border transition-all hover:border-indigo-500/40 block"
              style={{ background: "var(--bg)", color: "#c0c0d8", borderColor: "var(--border-2)" }}>
              Download Free
            </Link>

            <div className="border-t" style={{ borderColor: "var(--border)" }} />

            <ul className="flex flex-col gap-3">
              {freeFeatures.map(f => (
                <li key={f} className="flex items-center gap-3 text-sm" style={{ color: "#e0e0f0" }}>
                  <span className="w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0"
                    style={{ background: "rgba(91,82,240,0.2)", color: "#a5b4fc" }}>✓</span>
                  {f}
                </li>
              ))}
              <li className="flex items-center gap-3 text-sm" style={{ color: "var(--text-3)" }}>
                <span className="w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0"
                  style={{ background: "var(--surface-2)", color: "var(--text-3)" }}>–</span>
                Premium features
              </li>
            </ul>
          </div>

          {/* Paid */}
          <div className="rounded-2xl p-8 border flex flex-col gap-6 relative"
            style={{
              background: "linear-gradient(160deg, #0d0d22 0%, #0a0a1a 100%)",
              borderColor: "#5b52f0",
              boxShadow: "0 0 70px rgba(91,82,240,0.15), 0 0 0 1px rgba(91,82,240,0.2)",
            }}>

            {/* Floating badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap">
              <span className="px-4 py-1.5 rounded-full text-xs font-bold"
                style={{ background: "linear-gradient(135deg, #f59e0b, #fbbf24)", color: "#1a0800" }}>
                🔥 3 Months Free · Then $20 Once
              </span>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#a5b4fc" }}>Full Access</p>
              <div className="flex items-end gap-3 mb-1">
                <div className="flex flex-col">
                  <span className="text-xs line-through" style={{ color: "var(--text-3)" }}>Normally paid</span>
                  <span className="text-5xl font-black" style={{ color: "#4ade80" }}>Free</span>
                </div>
                <div className="pb-2 flex flex-col gap-0.5">
                  <span className="text-xs font-bold" style={{ color: "#a5b4fc" }}>for 3 months</span>
                  <span className="text-xs" style={{ color: "var(--text-3)" }}>then $20 one-time</span>
                </div>
              </div>
              <p className="text-xs mt-1" style={{ color: "var(--text-3)" }}>No card needed for the free trial</p>
            </div>

            <Link href="/download"
              className="w-full py-3.5 rounded-xl text-base font-bold text-white text-center transition-all hover:scale-105 block"
              style={{
                background: "linear-gradient(135deg, #5b52f0, #7c74f5)",
                boxShadow: "0 0 30px rgba(91,82,240,0.4)",
              }}>
              Start Free — 3 Months on Us →
            </Link>

            <div className="border-t" style={{ borderColor: "rgba(91,82,240,0.2)" }} />

            <ul className="flex flex-col gap-3">
              {paidFeatures.map(f => (
                <li key={f} className="flex items-center gap-3 text-sm" style={{ color: "#e0e0f0" }}>
                  <span className="w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0"
                    style={{ background: "rgba(91,82,240,0.2)", color: "#a5b4fc" }}>✓</span>
                  {f}
                </li>
              ))}
            </ul>

            <p className="text-xs text-center pt-1" style={{ color: "var(--text-3)" }}>
              After 3 months: $20 once · No subscription · No auto-charge
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
