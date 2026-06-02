import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-32 relative overflow-hidden" style={{ background: "#060614" }}>

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 70% at 50% 60%, rgba(91,82,240,0.12) 0%, transparent 70%)" }} />
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(91,82,240,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(91,82,240,0.035) 1px, transparent 1px)`,
          backgroundSize: "52px 52px",
          maskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 100%)",
        }}
      />

      <div className="max-w-3xl mx-auto px-6 text-center relative z-10 flex flex-col items-center gap-7">

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border"
          style={{ background: "rgba(91,82,240,0.07)", borderColor: "rgba(91,82,240,0.18)", color: "#7c74f5" }}>
          $20 · One-Time · 3 Months Access
        </div>

        <h2 className="font-black text-white leading-tight tracking-tight"
          style={{ fontSize: "clamp(2rem, 5vw, 3.4rem)", letterSpacing: "-0.035em" }}>
          Your collection deserves{" "}
          <span style={{ background: "linear-gradient(135deg, #a5b4fc, #7c74f5)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            better than a spreadsheet.
          </span>
        </h2>

        <p className="text-lg max-w-md" style={{ color: "#50507a" }}>
          $20 once. 3 months of full access. No subscription, no auto-renewal, no surprises.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-3">
          <Link href="/api/checkout?tier=COLLECTOR&billing=launch"
            className="px-9 py-3.5 rounded-xl text-base font-bold text-white transition-all hover:brightness-110 active:scale-95"
            style={{ background: "linear-gradient(135deg, #5b52f0, #7c74f5)", boxShadow: "0 0 40px rgba(91,82,240,0.4)" }}>
            Get Marrow Library — $20 →
          </Link>
          <a href="/download"
            className="px-6 py-3.5 rounded-xl text-sm font-semibold border transition-all hover:border-indigo-500/30"
            style={{ borderColor: "rgba(255,255,255,0.07)", color: "#60607a" }}>
            Download Free Trial
          </a>
        </div>

        <p className="text-xs" style={{ color: "#252540" }}>
          3-month free trial included · No credit card required for trial
        </p>
      </div>
    </section>
  );
}
