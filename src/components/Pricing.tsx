"use client";

import { useState } from "react";

const features = [
  "Unlimited items",
  "All 13 media types",
  "Barcode scanning",
  "Live eBay market valuation",
  "Price alerts (value change notifications)",
  "Discogs full collection import",
  "Insurance PDF report with cover art",
  "Advanced search & filters",
  "Bulk edit & barcode labels",
  "Backup & restore",
  "Lending tracker with reminders",
  "Photo attachments",
  "CSV / Excel import & export",
  "Activity log & item timeline",
];

function ProfileCheckout() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle"|"loading"|"error">("idle");
  const [errorMsg, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading"); setError("");
    try {
      const res = await fetch("/api/checkout-with-profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name, tier: "COLLECTOR", billing: "launch" }),
      });
      const data = await res.json() as { url?: string; error?: string };
      if (!res.ok || !data.url) { setStatus("error"); setError(data.error ?? "Something went wrong."); return; }
      window.location.href = data.url;
    } catch {
      setStatus("error"); setError("Network error. Check your connection.");
    }
  }

  const inputCls = "w-full px-4 py-3 rounded-xl text-sm text-white placeholder-zinc-600 outline-none transition-colors focus:border-indigo-500/60";
  const inputStyle = { background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: "#40405a" }}>
          Your name
        </label>
        <input type="text" placeholder="Jane Smith" value={name} onChange={e => setName(e.target.value)}
          autoComplete="name" className={inputCls} style={inputStyle} />
      </div>
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: "#40405a" }}>
          Email address <span style={{ color: "#f87171" }}>*</span>
        </label>
        <input type="email" placeholder="you@example.com" value={email} onChange={e => setEmail(e.target.value)}
          required autoComplete="email" className={inputCls} style={inputStyle} />
        <p className="text-xs mt-1.5" style={{ color: "#30304a" }}>
          Your activation email will be sent here instantly after payment.
        </p>
      </div>
      {status === "error" && (
        <p className="text-sm rounded-xl px-4 py-3" style={{ background: "rgba(239,68,68,0.07)", color: "#f87171", border: "1px solid rgba(239,68,68,0.2)" }}>
          {errorMsg}
        </p>
      )}
      <button type="submit" disabled={!email.trim() || status === "loading"}
        className="w-full py-3.5 rounded-xl text-sm font-bold text-white transition-all hover:brightness-110 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:brightness-100"
        style={{ background: "linear-gradient(135deg, #5b52f0, #7c74f5)", boxShadow: "0 0 28px rgba(91,82,240,0.4)" }}>
        {status === "loading" ? "Preparing checkout…" : "Continue to Payment — $20 →"}
      </button>
    </form>
  );
}

function QuickCheckout() {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm text-center" style={{ color: "#40405a" }}>
        You&apos;ll enter your email on the Stripe checkout page.
      </p>
      <a href="/api/checkout?tier=COLLECTOR&billing=launch"
        className="w-full py-3.5 rounded-xl text-sm font-bold text-white text-center transition-all hover:brightness-110 active:scale-95 block"
        style={{ background: "linear-gradient(135deg, #5b52f0, #7c74f5)", boxShadow: "0 0 28px rgba(91,82,240,0.4)" }}>
        Get Marrow Library — $20 →
      </a>
    </div>
  );
}

type Tab = "profile"|"quick";

export default function Pricing() {
  const [tab, setTab] = useState<Tab>("profile");

  return (
    <div id="pricing" className="py-32 relative overflow-hidden" style={{ background: "#03030f" }}>

      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(91,82,240,0.10) 0%, transparent 70%)" }} />
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(91,82,240,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(91,82,240,0.03) 1px, transparent 1px)`,
          backgroundSize: "56px 56px",
        }}
      />

      <div className="max-w-4xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#f59e0b" }}>Pricing</p>
          <h2 className="font-black text-white leading-tight tracking-tight mb-3"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", letterSpacing: "-0.03em" }}>
            One price.{" "}
            <span style={{ background: "linear-gradient(135deg, #a5b4fc, #7c74f5)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Everything included.
            </span>
          </h2>
          <p className="text-base" style={{ color: "#50507a" }}>
            $20 once. 3 months full access. No subscription, ever.
          </p>
        </div>

        {/* Card */}
        <div className="max-w-md mx-auto">
          <div className="relative rounded-2xl border flex flex-col gap-6 p-8"
            style={{
              background: "linear-gradient(160deg, #0a0a20 0%, #060614 100%)",
              borderColor: "rgba(91,82,240,0.35)",
              boxShadow: "0 0 80px rgba(91,82,240,0.15), 0 0 0 1px rgba(91,82,240,0.2)",
            }}>

            {/* Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap">
              <span className="px-4 py-1.5 rounded-full text-xs font-bold"
                style={{ background: "linear-gradient(135deg, #f59e0b, #fbbf24)", color: "#1a0800" }}>
                Limited Launch Price
              </span>
            </div>

            {/* Price */}
            <div className="text-center pt-2">
              <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#7c74f5" }}>Full Access · 3 Months</p>
              <div className="flex items-end justify-center gap-2 mb-1">
                <span className="text-7xl font-black text-white leading-none">$20</span>
                <span className="text-base pb-3 font-semibold" style={{ color: "#40405a" }}>one-time</span>
              </div>
              <p className="text-xs" style={{ color: "#30304a" }}>Pay once · no subscription · no auto-renewal</p>
            </div>

            {/* Tabs */}
            <div className="flex gap-1 p-1 rounded-xl"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(91,82,240,0.12)" }}>
              {([["profile","✉ Enter Email First"],["quick","⚡ Quick Checkout"]] as [Tab,string][]).map(([t, label]) => (
                <button key={t} onClick={() => setTab(t)}
                  className="flex-1 py-2 rounded-lg text-xs font-semibold transition-all"
                  style={tab === t
                    ? { background: "#5b52f0", color: "#fff", boxShadow: "0 0 14px rgba(91,82,240,0.4)" }
                    : { background: "transparent", color: "#40405a" }}>
                  {label}
                </button>
              ))}
            </div>

            {/* Tab content */}
            {tab === "profile" ? <ProfileCheckout /> : <QuickCheckout />}

            {/* Divider */}
            <div className="border-t" style={{ borderColor: "rgba(91,82,240,0.12)" }} />

            {/* Features */}
            <ul className="grid grid-cols-2 gap-2.5">
              {features.map(f => (
                <li key={f} className="flex items-center gap-2 text-sm" style={{ color: "#c0c0e0" }}>
                  <span className="w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0"
                    style={{ background: "rgba(91,82,240,0.18)", color: "#818cf8" }}>✓</span>
                  {f}
                </li>
              ))}
            </ul>

            <p className="text-xs text-center" style={{ color: "#252540" }}>
              No auto-renewal · No card stored · No surprises
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
