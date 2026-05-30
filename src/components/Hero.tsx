import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: "#050510",
        backgroundImage: `
          linear-gradient(rgba(79,70,229,0.07) 1px, transparent 1px),
          linear-gradient(90deg, rgba(79,70,229,0.07) 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
      }}
    >
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(79,70,229,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center gap-8">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium border"
          style={{
            background: "rgba(217,119,6,0.10)",
            borderColor: "rgba(217,119,6,0.25)",
            color: "#fbbf24",
          }}
        >
          <span
            className="inline-block w-1.5 h-1.5 rounded-full"
            style={{ background: "#f59e0b" }}
          />
          v1.0.0 — Now Available
        </div>

        {/* Headline */}
        <h1
          className="font-black text-white leading-none tracking-tighter"
          style={{ fontSize: "clamp(2.5rem, 8vw, 5rem)" }}
        >
          The library app for
          <br />
          <span style={{ color: "#818cf8" }}>serious collectors.</span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-xl max-w-xl leading-relaxed"
          style={{ color: "#a1a1aa" }}
        >
          Scan barcodes. Track value. Own your data.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link
            href="/download"
            className="px-8 py-3.5 rounded-xl text-base font-semibold text-white shadow-lg transition-all hover:scale-105"
            style={{ background: "#4f46e5", boxShadow: "0 0 30px rgba(79,70,229,0.35)" }}
          >
            Download Free →
          </Link>
          <a
            href="#pricing"
            className="px-8 py-3.5 rounded-xl text-base font-semibold border transition-all hover:border-zinc-500"
            style={{ borderColor: "#3f3f46", color: "#d4d4d8" }}
          >
            See Pricing
          </a>
        </div>

        {/* Platform chips */}
        <div className="flex items-center gap-3 text-sm flex-wrap justify-center" style={{ color: "#71717a" }}>
          <span className="flex items-center gap-1.5">
            <span></span> macOS
          </span>
          <span style={{ color: "#3f3f46" }}>·</span>
          <span className="flex items-center gap-1.5">
            <span>🪟</span> Windows
          </span>
          <span style={{ color: "#3f3f46" }}>·</span>
          <span className="flex items-center gap-1.5">
            <span>🤖</span> Android
          </span>
          <span style={{ color: "#3f3f46" }}>·</span>
          <span className="flex items-center gap-1.5">
            <span>🍎</span> iOS
          </span>
        </div>
      </div>
    </section>
  );
}
