import Link from "next/link";

const mediaTypes = ["Books","Vinyl","Games","Movies","Board Games","Cards","Comics","Spirits","Coins","Stamps","Plants","Clothing","Housewares"];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "#03030f" }}>

      {/* Grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(91,82,240,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(91,82,240,0.04) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
        }}
      />

      {/* Glow orbs */}
      <div className="absolute pointer-events-none"
        style={{ top: "-10%", left: "50%", transform: "translateX(-50%)", width: "700px", height: "500px",
          background: "radial-gradient(ellipse at center, rgba(91,82,240,0.18) 0%, transparent 65%)" }} />
      <div className="absolute pointer-events-none"
        style={{ bottom: "10%", right: "-5%", width: "400px", height: "400px",
          background: "radial-gradient(ellipse at center, rgba(124,116,245,0.08) 0%, transparent 65%)" }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center gap-10 pt-12 pb-24">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border"
          style={{ background: "rgba(245,158,11,0.07)", borderColor: "rgba(245,158,11,0.18)", color: "#f59e0b" }}>
          <span className="w-1.5 h-1.5 rounded-full inline-block animate-pulse" style={{ background: "#f59e0b" }} />
          Launch Price · $20 once · No subscription
        </div>

        {/* Headline */}
        <div className="flex flex-col gap-3">
          <h1 className="font-black text-white tracking-tighter leading-[0.95]"
            style={{ fontSize: "clamp(3rem, 9vw, 5.8rem)", letterSpacing: "-0.035em" }}>
            Your collection,
            <br />
            <span style={{
              background: "linear-gradient(135deg, #c7d2fe 0%, #818cf8 40%, #5b52f0 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text"
            }}>
              finally organised.
            </span>
          </h1>
          <p className="text-xl max-w-lg mx-auto leading-relaxed" style={{ color: "#7070a0" }}>
            Scan barcodes, fetch metadata, track live market value.
            <br />
            <span style={{ color: "#9090c0" }}>Local-first. No cloud. No subscription. Ever.</span>
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <Link
            href="/api/checkout?tier=COLLECTOR&billing=launch"
            className="group flex items-center gap-2 px-8 py-3.5 rounded-xl text-base font-bold text-white transition-all hover:brightness-110 hover:shadow-2xl active:scale-95"
            style={{ background: "linear-gradient(135deg, #5b52f0, #7c74f5)", boxShadow: "0 0 40px rgba(91,82,240,0.4)" }}
          >
            Get Marrow Library — $20
            <span className="group-hover:translate-x-0.5 inline-block transition-transform">→</span>
          </Link>
          <a href="/download"
            className="flex items-center gap-1.5 px-6 py-3.5 rounded-xl text-sm font-semibold border transition-all hover:border-indigo-500/30"
            style={{ borderColor: "rgba(255,255,255,0.08)", color: "#8080a0" }}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download Free Trial
          </a>
        </div>

        {/* Trust row */}
        <div className="flex items-center gap-6 flex-wrap justify-center text-sm" style={{ color: "#40405a" }}>
          {["macOS","Windows","Android","iOS"].map((p, i, a) => (
            <span key={p} className="flex items-center gap-4">
              <span style={{ color: "#60607a" }}>{p}</span>
              {i < a.length - 1 && <span>·</span>}
            </span>
          ))}
        </div>

        {/* Social proof pill */}
        <div className="flex items-center gap-4 px-6 py-3.5 rounded-2xl border"
          style={{ background: "rgba(6,6,24,0.7)", borderColor: "rgba(255,255,255,0.06)" }}>
          <div className="flex -space-x-2.5">
            {["M","S","J","P","D"].map((l, i) => (
              <div key={l} className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border-2"
                style={{ background: `hsl(${228 + i * 14},55%,30%)`, color: "#c7d2fe", borderColor: "#03030f" }}>
                {l}
              </div>
            ))}
          </div>
          <div className="flex gap-0.5">
            {[1,2,3,4,5].map(i => <span key={i} style={{ color: "#f59e0b", fontSize: "13px" }}>★</span>)}
          </div>
          <span className="text-sm" style={{ color: "#6060a0" }}>
            <strong style={{ color: "#e0e0f0" }}>4.9</strong> from 127 collectors
          </span>
        </div>

        {/* Marquee */}
        <div className="w-full overflow-hidden"
          style={{ maskImage: "linear-gradient(90deg, transparent, black 12%, black 88%, transparent)" }}>
          <div className="flex gap-3 animate-[marquee_28s_linear_infinite]" style={{ width: "max-content" }}>
            {[...mediaTypes, ...mediaTypes].map((t, i) => (
              <span key={i} className="px-3 py-1 rounded-full text-xs font-medium border whitespace-nowrap"
                style={{ background: "rgba(91,82,240,0.05)", borderColor: "rgba(255,255,255,0.06)", color: "#5050a0" }}>
                {t}
              </span>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
