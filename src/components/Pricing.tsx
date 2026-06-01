"use client";

import Link from "next/link";

const features = [
  "Unlimited items",
  "All 13 media types",
  "Barcode scanning",
  "Live eBay valuation",
  "Backup & restore",
  "Lending tracker",
  "CSV import/export",
  "Activity log",
];

export default function Pricing() {
  return (
    <div id="pricing" className="py-32 relative overflow-hidden" style={{ background: "var(--bg)" }}>
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 60% at 50% 0%, rgba(91,82,240,0.09) 0%, transparent 70%)" }} />

      <div className="max-w-4xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#f59e0b" }}>Pricing</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-3 leading-tight tracking-tight">
            One price.{" "}
            <span style={{ background: "linear-gradient(135deg, #a5b4fc, #7c74f5)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Everything included.
            </span>
          </h2>
          <p className="text-base" style={{ color: "var(--text-2)" }}>$20 once. 3 months full access. No subscription, ever.</p>
        </div>

        {/* Single card — centered */}
        <div className="max-w-md mx-auto">
          <div className="rounded-2xl p-10 border flex flex-col gap-6 relative"
            style={{
              background: "linear-gradient(160deg, #0d0d22 0%, #0a0a1a 100%)",
              borderColor: "#5b52f0",
              boxShadow: "0 0 80px rgba(91,82,240,0.2), 0 0 0 1px rgba(91,82,240,0.25)",
            }}>

            <div className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap">
              <span className="px-4 py-1.5 rounded-full text-xs font-bold"
                style={{ background: "linear-gradient(135deg, #f59e0b, #fbbf24)", color: "#1a0800" }}>
                🔥 Limited Launch Price
              </span>
            </div>

            {/* Price */}
            <div className="text-center">
              <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#a5b4fc" }}>Full Access · 3 Months</p>
              <div className="flex items-end justify-center gap-2 mb-2">
                <span className="text-7xl font-black text-white leading-none">$20</span>
                <span className="text-lg pb-3 font-semibold" style={{ color: "var(--text-2)" }}>one-time</span>
              </div>
              <p className="text-sm" style={{ color: "var(--text-3)" }}>Pay once · 3 months full access · no subscription ever</p>
            </div>

            {/* CTA */}
            <Link href="/api/checkout?tier=COLLECTOR&billing=launch"
              className="w-full py-4 rounded-xl text-base font-bold text-white text-center transition-all hover:scale-105 block"
              style={{
                background: "linear-gradient(135deg, #5b52f0, #7c74f5)",
                boxShadow: "0 0 30px rgba(91,82,240,0.4)",
              }}>
              Get Marrow Library — $20 →
            </Link>

            <div className="border-t" style={{ borderColor: "rgba(91,82,240,0.2)" }} />

            {/* Features */}
            <ul className="grid grid-cols-2 gap-3">
              {features.map(f => (
                <li key={f} className="flex items-center gap-2.5 text-sm" style={{ color: "#e0e0f0" }}>
                  <span className="w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0"
                    style={{ background: "rgba(91,82,240,0.2)", color: "#a5b4fc" }}>✓</span>
                  {f}
                </li>
              ))}
            </ul>

            <p className="text-xs text-center" style={{ color: "var(--text-3)" }}>
              No auto-renewal · No credit card stored · No surprises
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
