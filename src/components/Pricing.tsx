"use client";

import { useState } from "react";

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

type Tab = "quick" | "profile";

function QuickCheckout() {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm text-center" style={{ color: "#71717a" }}>
        You&apos;ll enter your email on the Stripe checkout page.
      </p>
      <a
        href="/api/checkout?tier=COLLECTOR&billing=launch"
        className="w-full py-4 rounded-xl text-base font-bold text-white text-center transition-all hover:scale-105 block"
        style={{
          background: "linear-gradient(135deg, #5b52f0, #7c74f5)",
          boxShadow: "0 0 30px rgba(91,82,240,0.4)",
        }}
      >
        Get Marrow Library — $20 →
      </a>
    </div>
  );
}

function ProfileCheckout() {
  const [name,    setName]    = useState("");
  const [email,   setEmail]   = useState("");
  const [status,  setStatus]  = useState<"idle" | "loading" | "error">("idle");
  const [errorMsg, setError]  = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setError("");

    try {
      const res = await fetch("/api/checkout-with-profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name, tier: "COLLECTOR", billing: "launch" }),
      });

      const data = await res.json() as { url?: string; error?: string };

      if (!res.ok || !data.url) {
        setStatus("error");
        setError(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      // Redirect to Stripe checkout
      window.location.href = data.url;
    } catch {
      setStatus("error");
      setError("Network error. Please check your connection and try again.");
    }
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px 14px",
    borderRadius: 10,
    border: "1px solid #2a2a45",
    background: "#06061a",
    color: "#f4f4f5",
    fontSize: 14,
    outline: "none",
    boxSizing: "border-box",
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: "#52525b" }}>
          Your name
        </label>
        <input
          type="text"
          placeholder="Jane Smith"
          value={name}
          onChange={e => setName(e.target.value)}
          autoComplete="name"
          style={inputStyle}
        />
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: "#52525b" }}>
          Email address <span style={{ color: "#f87171" }}>*</span>
        </label>
        <input
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          autoComplete="email"
          style={inputStyle}
        />
        <p className="text-xs mt-1.5" style={{ color: "#52525b" }}>
          Your license key will be sent here instantly after payment.
        </p>
      </div>

      {status === "error" && (
        <p className="text-sm rounded-lg px-3 py-2" style={{ background: "#1a0505", color: "#f87171", border: "1px solid #7f1d1d" }}>
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={!email.trim() || status === "loading"}
        className="w-full py-4 rounded-xl text-base font-bold text-white transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        style={{
          background: "linear-gradient(135deg, #5b52f0, #7c74f5)",
          boxShadow: "0 0 30px rgba(91,82,240,0.4)",
        }}
      >
        {status === "loading" ? "Preparing checkout…" : "Continue to Payment — $20 →"}
      </button>
    </form>
  );
}

export default function Pricing() {
  const [tab, setTab] = useState<Tab>("profile");

  const tabBase: React.CSSProperties = {
    flex: 1,
    padding: "8px 0",
    borderRadius: 8,
    fontSize: 13,
    fontWeight: 600,
    border: "none",
    cursor: "pointer",
    transition: "all 0.15s",
  };

  const tabActive: React.CSSProperties = {
    ...tabBase,
    background: "#5b52f0",
    color: "#fff",
    boxShadow: "0 0 16px rgba(91,82,240,0.4)",
  };

  const tabInactive: React.CSSProperties = {
    ...tabBase,
    background: "transparent",
    color: "#71717a",
  };

  return (
    <div id="pricing" className="py-32 relative overflow-hidden" style={{ background: "var(--bg)" }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 60% at 50% 0%, rgba(91,82,240,0.09) 0%, transparent 70%)" }}
      />

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

        {/* Single card */}
        <div className="max-w-md mx-auto">
          <div
            className="rounded-2xl p-10 border flex flex-col gap-6 relative"
            style={{
              background: "linear-gradient(160deg, #0d0d22 0%, #0a0a1a 100%)",
              borderColor: "#5b52f0",
              boxShadow: "0 0 80px rgba(91,82,240,0.2), 0 0 0 1px rgba(91,82,240,0.25)",
            }}
          >
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

            {/* Tabs */}
            <div
              className="flex gap-1 p-1 rounded-xl"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(91,82,240,0.15)" }}
            >
              <button style={tab === "profile" ? tabActive : tabInactive} onClick={() => setTab("profile")}>
                ✉️ Enter Email First
              </button>
              <button style={tab === "quick" ? tabActive : tabInactive} onClick={() => setTab("quick")}>
                ⚡ Quick Checkout
              </button>
            </div>

            {/* Tab content */}
            {tab === "profile" ? <ProfileCheckout /> : <QuickCheckout />}

            <div className="border-t" style={{ borderColor: "rgba(91,82,240,0.2)" }} />

            {/* Features */}
            <ul className="grid grid-cols-2 gap-3">
              {features.map(f => (
                <li key={f} className="flex items-center gap-2.5 text-sm" style={{ color: "#e0e0f0" }}>
                  <span
                    className="w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0"
                    style={{ background: "rgba(91,82,240,0.2)", color: "#a5b4fc" }}
                  >✓</span>
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
