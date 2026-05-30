"use client";

import { useState } from "react";
import Link from "next/link";

type Billing = "annual" | "monthly";

interface FeatureLine {
  label: string;
  included: boolean;
}

interface PlanConfig {
  name: string;
  badge?: string;
  priceAnnual: string;
  priceMonthly: string;
  priceAnnualSub: string;
  cta: string;
  ctaHref: (billing: Billing) => string;
  featured: boolean;
  features: FeatureLine[];
}

const plans: PlanConfig[] = [
  {
    name: "Free",
    priceAnnual: "$0",
    priceMonthly: "$0",
    priceAnnualSub: "forever",
    cta: "Download Free",
    ctaHref: () => "/download",
    featured: false,
    features: [
      { label: "Up to 50 items", included: true },
      { label: "All 13 media types", included: true },
      { label: "Barcode scanning", included: true },
      { label: "Unlimited items", included: false },
      { label: "Live eBay valuation", included: false },
      { label: "Backup & restore", included: false },
      { label: "Lending tracker", included: false },
      { label: "Multi-user vaults", included: false },
      { label: "CSV import/export", included: false },
      { label: "Activity log", included: false },
    ],
  },
  {
    name: "Collector",
    badge: "Most Popular",
    priceAnnual: "$49",
    priceMonthly: "$5.99",
    priceAnnualSub: "per year (~$4.08/mo)",
    cta: "Get Collector",
    ctaHref: (billing) => `/api/checkout?tier=COLLECTOR&billing=${billing}`,
    featured: true,
    features: [
      { label: "Up to 50 items", included: true },
      { label: "All 13 media types", included: true },
      { label: "Barcode scanning", included: true },
      { label: "Unlimited items", included: true },
      { label: "Live eBay valuation", included: true },
      { label: "Backup & restore", included: true },
      { label: "Lending tracker", included: true },
      { label: "Multi-user vaults", included: false },
      { label: "CSV import/export", included: false },
      { label: "Activity log", included: false },
    ],
  },
  {
    name: "Curator",
    priceAnnual: "$99",
    priceMonthly: "$14.99",
    priceAnnualSub: "per year (~$8.25/mo)",
    cta: "Get Curator",
    ctaHref: (billing) => `/api/checkout?tier=CURATOR&billing=${billing}`,
    featured: false,
    features: [
      { label: "Up to 50 items", included: true },
      { label: "All 13 media types", included: true },
      { label: "Barcode scanning", included: true },
      { label: "Unlimited items", included: true },
      { label: "Live eBay valuation", included: true },
      { label: "Backup & restore", included: true },
      { label: "Lending tracker", included: true },
      { label: "Multi-user vaults", included: true },
      { label: "CSV import/export", included: true },
      { label: "Activity log", included: true },
    ],
  },
];

export default function Pricing() {
  const [billing, setBilling] = useState<Billing>("annual");

  return (
    <div className="py-28" style={{ background: "#07070f" }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p
            className="text-xs font-bold uppercase tracking-widest mb-4"
            style={{ color: "#f59e0b" }}
          >
            Pricing
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
            Own your catalog.<br />
            <span style={{ color: "#818cf8" }}>Pick your plan.</span>
          </h2>

          {/* Billing toggle */}
          <div
            className="inline-flex items-center rounded-xl p-1 gap-1"
            style={{ background: "#0f0f1a", border: "1px solid #27272a" }}
          >
            <button
              onClick={() => setBilling("annual")}
              className="px-5 py-2 rounded-lg text-sm font-semibold transition-all"
              style={
                billing === "annual"
                  ? { background: "#4f46e5", color: "#fff" }
                  : { color: "#71717a" }
              }
            >
              Annual
              <span
                className="ml-2 text-xs px-1.5 py-0.5 rounded-full font-bold"
                style={
                  billing === "annual"
                    ? { background: "rgba(255,255,255,0.15)", color: "#c7d2fe" }
                    : { background: "rgba(245,158,11,0.15)", color: "#fbbf24" }
                }
              >
                Save 30%
              </span>
            </button>
            <button
              onClick={() => setBilling("monthly")}
              className="px-5 py-2 rounded-lg text-sm font-semibold transition-all"
              style={
                billing === "monthly"
                  ? { background: "#4f46e5", color: "#fff" }
                  : { color: "#71717a" }
              }
            >
              Monthly
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="rounded-2xl p-8 border flex flex-col gap-6 transition-transform"
              style={
                plan.featured
                  ? {
                      background: "#0f0f1a",
                      borderColor: "#6366f1",
                      boxShadow: "0 0 40px rgba(99,102,241,0.15)",
                      transform: "scale(1.05)",
                      outline: "2px solid #6366f1",
                    }
                  : {
                      background: "#0a0a14",
                      borderColor: "#27272a",
                    }
              }
            >
              {/* Plan name + badge */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-lg font-bold text-white">{plan.name}</span>
                  {plan.badge && (
                    <span
                      className="text-xs font-bold px-2 py-0.5 rounded-full"
                      style={{ background: "rgba(99,102,241,0.2)", color: "#a5b4fc" }}
                    >
                      {plan.badge}
                    </span>
                  )}
                </div>

                {/* Price */}
                <div className="flex items-end gap-1">
                  <span className="text-4xl font-black text-white">
                    {billing === "annual" ? plan.priceAnnual : plan.priceMonthly}
                  </span>
                  {plan.priceAnnual !== "$0" && (
                    <span className="text-sm pb-1" style={{ color: "#71717a" }}>
                      /{billing === "annual" ? "yr" : "mo"}
                    </span>
                  )}
                </div>
                {billing === "annual" && (
                  <p className="text-xs mt-1" style={{ color: "#71717a" }}>
                    {plan.priceAnnualSub}
                  </p>
                )}
              </div>

              {/* CTA */}
              <Link
                href={plan.ctaHref(billing)}
                className="w-full py-3 rounded-xl text-sm font-semibold text-center transition-all block"
                style={
                  plan.featured
                    ? { background: "#4f46e5", color: "#fff" }
                    : { background: "#18181b", color: "#d4d4d8", border: "1px solid #3f3f46" }
                }
              >
                {plan.cta}
              </Link>

              {/* Divider */}
              <div className="border-t" style={{ borderColor: "#27272a" }} />

              {/* Feature list */}
              <ul className="flex flex-col gap-3">
                {plan.features.map((f) => (
                  <li
                    key={f.label}
                    className="flex items-center gap-3 text-sm"
                    style={f.included ? { color: "#e4e4e7" } : { color: "#52525b" }}
                  >
                    <span
                      className="flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-xs font-bold"
                      style={
                        f.included
                          ? { background: "rgba(99,102,241,0.2)", color: "#a5b4fc" }
                          : { background: "#18181b", color: "#52525b" }
                      }
                    >
                      {f.included ? "✓" : "–"}
                    </span>
                    {f.label}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Lifetime footnote */}
        <p className="text-center mt-10 text-sm" style={{ color: "#71717a" }}>
          Want to own it forever?{" "}
          <Link
            href="/api/checkout?tier=COLLECTOR&billing=lifetime"
            className="font-semibold underline underline-offset-2 transition-colors"
            style={{ color: "#a5b4fc" }}
          >
            Early adopter lifetime license — $79 →
          </Link>
        </p>
      </div>
    </div>
  );
}
