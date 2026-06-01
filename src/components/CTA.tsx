import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-28 relative overflow-hidden" style={{ background: "var(--surface)" }}>
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 70% at 50% 50%, rgba(91,82,240,0.1) 0%, transparent 70%)" }} />
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(91,82,240,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(91,82,240,0.04) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="max-w-3xl mx-auto px-6 text-center relative z-10 flex flex-col items-center gap-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border"
          style={{ background: "rgba(91,82,240,0.08)", borderColor: "rgba(91,82,240,0.2)", color: "#a5b4fc" }}>
          $20 · One-Time · 3 Months
        </div>

        <h2 className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tight">
          Your collection deserves{" "}
          <span style={{ background: "linear-gradient(135deg, #a5b4fc, #7c74f5)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            better than a spreadsheet.
          </span>
        </h2>

        <p className="text-lg" style={{ color: "var(--text-2)" }}>
          $20 once. 3 months of full access. No subscription, no auto-renewal, no surprises.
        </p>

        <Link href="/api/checkout?tier=COLLECTOR&billing=launch"
          className="px-10 py-4 rounded-xl text-base font-bold text-white transition-all hover:scale-105"
          style={{ background: "linear-gradient(135deg, #5b52f0, #7c74f5)", boxShadow: "0 0 40px rgba(91,82,240,0.4)" }}>
          Get Marrow Library — $20 →
        </Link>

        <p className="text-xs" style={{ color: "var(--text-3)" }}>
          No auto-renewal · No credit card stored · No surprises
        </p>
      </div>
    </section>
  );
}
