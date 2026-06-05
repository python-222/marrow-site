import Link from "next/link";

const mediaTypes = ["Books","Vinyl","Games","Movies","Board Games","Cards","Comics","Spirits","Coins","Stamps","Plants","Clothing","Housewares"];

function AppMockup() {
  const items = [
    { title: "Dune", creator: "Frank Herbert", type: "BOOK",  value: "$18",  color: "#3b82f6", emoji: "📚", cond: "MINT" },
    { title: "Kind of Blue", creator: "Miles Davis", type: "MUSIC", value: "$140", color: "#ec4899", emoji: "🎵", cond: "NM"   },
    { title: "Breath of Wild", creator: "Nintendo",  type: "GAME",  value: "$62",  color: "#10b981", emoji: "🎮", cond: "VG+"  },
    { title: "The Godfather",  creator: "Coppola",   type: "MOVIE", value: "$24",  color: "#8b5cf6", emoji: "🎬", cond: "MINT" },
    { title: "Wingspan",       creator: "Stonemaier",type: "BOARD", value: "$55",  color: "#f59e0b", emoji: "🎲", cond: "NM"   },
    { title: "Charizard Holo", creator: "Pokémon",   type: "CARD",  value: "$310", color: "#ef4444", emoji: "🃏", cond: "NM"   },
  ];
  return (
    <div className="relative w-full max-w-2xl mx-auto rounded-2xl overflow-hidden"
      style={{
        background: "#0a0a18", border: "1px solid #1e1e35",
        boxShadow: "0 40px 80px rgba(0,0,0,.8), 0 0 50px rgba(91,82,240,.12)",
        transform: "perspective(1200px) rotateX(3deg)",
      }}>
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-2.5 border-b" style={{ borderColor: "#1e1e35", background: "#060610" }}>
        <div className="flex gap-1.5">
          {["#ff5f57","#febc2e","#28c840"].map(c => <div key={c} className="w-2.5 h-2.5 rounded-full" style={{ background: c }} />)}
        </div>
        <div className="flex-1 flex justify-center">
          <div className="h-5 w-40 rounded flex items-center justify-center text-[10px] font-mono" style={{ background: "#1a1a2e", color: "#6366f1" }}>Marrow Library</div>
        </div>
        <div className="text-[10px] font-mono px-2 py-0.5 rounded" style={{ background: "#1a1a2e", color: "#34d399" }}>$2,841</div>
      </div>
      {/* Body */}
      <div className="flex" style={{ height: "260px" }}>
        {/* Sidebar */}
        <div className="w-36 flex-shrink-0 border-r py-2 flex flex-col gap-0.5" style={{ borderColor: "#1e1e35", background: "#060610" }}>
          {[["▦","Collection",true,"847"],["⊕","Add Items",false,""],["📊","Analytics",false,""],["📤","Loans",false,"2"]].map(([icon,label,active,badge]) => (
            <div key={String(label)} className="flex items-center justify-between px-2.5 py-1.5 mx-1.5 rounded-lg text-[9px]"
              style={{ background: active ? "rgba(91,82,240,.15)" : "transparent", color: active ? "#a5b4fc" : "#4b5563" }}>
              <span className="flex items-center gap-1.5"><span>{icon}</span><span className="font-medium">{label}</span></span>
              {badge && <span className="text-[8px] px-1 py-0.5 rounded-full" style={{ background: label === "Loans" ? "rgba(245,158,11,.2)" : "rgba(91,82,240,.2)", color: label === "Loans" ? "#fbbf24" : "#818cf8" }}>{badge}</span>}
            </div>
          ))}
          <div className="mt-2 mx-3 h-px" style={{ background: "#1e1e35" }} />
          <div className="px-2.5 pt-2">
            {[["Books",312,"#3b82f6"],["Vinyl",189,"#ec4899"],["Games",156,"#10b981"],["Movies",94,"#8b5cf6"]].map(([l,c,col]) => (
              <div key={String(l)} className="flex items-center justify-between py-0.5 text-[8px]" style={{ color: "#6b7280" }}>
                <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full" style={{ background: String(col) }} />{l}</span>
                <span>{c}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Grid */}
        <div className="flex-1 flex flex-col min-w-0">
          <div className="flex items-center gap-1.5 px-3 py-2 border-b flex-shrink-0" style={{ borderColor: "#1e1e35" }}>
            <div className="flex-1 h-5 rounded px-2 flex items-center text-[8px]" style={{ background: "#111124", color: "#4b5563", border: "1px solid #1e1e35" }}>🔍 Search or ⌘K…</div>
          </div>
          <div className="flex-1 overflow-hidden p-2">
            <div className="grid grid-cols-3 gap-1.5 h-full">
              {items.map(item => (
                <div key={item.title} className="rounded-lg flex flex-col overflow-hidden" style={{ background: "#0f0f1f", border: "1px solid #1e1e35" }}>
                  <div className="h-0.5" style={{ background: item.color }} />
                  <div className="flex-1 flex items-center justify-center text-lg" style={{ background: `${item.color}0d`, minHeight: "40px" }}>{item.emoji}</div>
                  <div className="p-1.5">
                    <div className="text-[8px] font-bold text-white truncate">{item.title}</div>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-[7px] px-1 py-0.5 rounded-full font-medium" style={{ background: `${item.color}20`, color: item.color }}>{item.cond}</span>
                      <span className="text-[8px] font-mono font-bold" style={{ color: "#34d399" }}>{item.value}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-10 pointer-events-none" style={{ background: "linear-gradient(to top, rgba(10,10,24,1), transparent)" }} />
    </div>
  );
}

export default function Hero({ version = "v1.3" }: { version?: string }) {
  return (
    <section className="relative overflow-hidden"
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

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center gap-10 pt-24 pb-12">

        {/* Badges row */}
        <div className="flex items-center gap-3 flex-wrap justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border"
            style={{ background: "rgba(245,158,11,0.07)", borderColor: "rgba(245,158,11,0.18)", color: "#f59e0b" }}>
            <span className="w-1.5 h-1.5 rounded-full inline-block animate-pulse" style={{ background: "#f59e0b" }} />
            Launch Price · $20 once · No subscription
          </div>
          <a href="/download"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono border transition-colors hover:border-indigo-500/40"
            style={{ background: "rgba(91,82,240,0.07)", borderColor: "rgba(91,82,240,0.2)", color: "#a5b4fc" }}>
            <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: "#10b981" }} />
            {version}
          </a>
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

      </div>

      {/* App mockup */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 pb-24">
        <AppMockup />
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
