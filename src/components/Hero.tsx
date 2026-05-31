import Link from "next/link";

const mediaTypes = ["Books", "Vinyl", "Games", "Movies", "Board Games", "Cards", "Comics", "Spirits", "Coins", "Stamps", "Plants", "Clothing", "Housewares"];

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "var(--bg)" }}
    >
      {/* Grid background */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(91,82,240,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(91,82,240,0.05) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Top glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 40% at 50% -5%, rgba(91,82,240,0.18) 0%, transparent 70%)" }}
      />

      {/* Center radial */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: "600px", height: "600px",
          background: "radial-gradient(circle, rgba(91,82,240,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center gap-8 pt-16 pb-20">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border"
          style={{ background: "rgba(245,158,11,0.08)", borderColor: "rgba(245,158,11,0.2)", color: "#f59e0b" }}>
          <span className="w-1.5 h-1.5 rounded-full glow-pulse inline-block" style={{ background: "#f59e0b" }} />
          3 months free · then $20 once
        </div>

        {/* Headline */}
        <h1 className="font-black text-white leading-none tracking-tighter"
          style={{ fontSize: "clamp(2.8rem, 9vw, 5.5rem)", letterSpacing: "-0.03em" }}>
          The library app
          <br />
          <span style={{ background: "linear-gradient(135deg, #a5b4fc, #7c74f5, #5b52f0)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            for serious collectors.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl max-w-lg leading-relaxed" style={{ color: "#9090b0" }}>
          Scan barcodes. Track live market value. Own your data — no cloud, no subscriptions, no compromises.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <Link
            href="/download"
            className="group px-8 py-4 rounded-xl text-base font-semibold text-white transition-all hover:scale-105 hover:shadow-2xl"
            style={{ background: "linear-gradient(135deg, #5b52f0, #7c74f5)", boxShadow: "0 0 40px rgba(91,82,240,0.35)" }}
          >
            Download Free
            <span className="ml-2 group-hover:translate-x-0.5 inline-block transition-transform">→</span>
          </Link>
          <a
            href="#pricing"
            className="px-8 py-4 rounded-xl text-base font-semibold border transition-all hover:border-indigo-500/40"
            style={{ borderColor: "var(--border-2)", color: "#9090b0" }}
          >
            View Pricing
          </a>
        </div>

        {/* Platform chips */}
        <div className="flex items-center gap-3 text-sm flex-wrap justify-center" style={{ color: "#505070" }}>
          {[["", "macOS"], ["🪟", "Windows"], ["🤖", "Android"], ["🍎", "iOS"]].map(([icon, label]) => (
            <span key={label} className="flex items-center gap-1.5">
              {icon} {label}
            </span>
          )).reduce((acc: React.ReactNode[], el, i, arr) => {
            acc.push(el);
            if (i < arr.length - 1) acc.push(<span key={`dot-${i}`} style={{ color: "#252540" }}>·</span>);
            return acc;
          }, [])}
        </div>

        {/* Social proof strip */}
        <div className="flex items-center gap-4 mt-2 px-6 py-3 rounded-2xl border"
          style={{ background: "rgba(13,13,32,0.6)", borderColor: "var(--border)" }}>
          <div className="flex -space-x-2">
            {["M","S","J","P","D"].map((letter, i) => (
              <div key={letter} className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border-2 border-[#02020a]"
                style={{ background: `hsl(${230 + i * 15}, 60%, 35%)`, color: "#c7d2fe" }}>
                {letter}
              </div>
            ))}
          </div>
          <div className="flex gap-0.5">
            {[1,2,3,4,5].map(i => <span key={i} style={{ color: "#f59e0b", fontSize: "13px" }}>★</span>)}
          </div>
          <span className="text-sm font-medium" style={{ color: "#9090b0" }}>
            <span style={{ color: "#f0f0ff" }}>4.9</span> from 127 collectors
          </span>
        </div>

        {/* Media type marquee */}
        <div className="w-full mt-4 overflow-hidden" style={{ maskImage: "linear-gradient(90deg, transparent, black 15%, black 85%, transparent)" }}>
          <div className="flex gap-3 animate-[marquee_25s_linear_infinite]"
            style={{ width: "max-content" }}>
            {[...mediaTypes, ...mediaTypes].map((type, i) => (
              <span key={i} className="px-3 py-1 rounded-full text-xs font-medium border whitespace-nowrap"
                style={{ background: "rgba(91,82,240,0.06)", borderColor: "var(--border)", color: "#7070a0" }}>
                {type}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
