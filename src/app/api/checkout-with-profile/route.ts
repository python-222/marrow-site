/**
 * POST /api/checkout-with-profile
 *
 * Collects the buyer's name + email BEFORE creating the Stripe session.
 * This guarantees session.customer.email is always populated, making
 * webhook-based license email delivery 100% reliable regardless of
 * how Stripe's checkout page populates customer_details.
 *
 * Flow:
 *   1. Upsert a Stripe Customer with the provided email + name
 *   2. Create a Checkout Session linked to that Customer
 *   3. Return the Stripe checkout URL — client redirects the browser
 */

import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

export const dynamic = "force-dynamic";

type BillingCycle = "monthly" | "annual" | "lifetime" | "launch";
type CheckoutTier = "COLLECTOR" | "CURATOR" | "COLLECTOR_LIFETIME";

const VALID_TIERS: CheckoutTier[]   = ["COLLECTOR", "CURATOR", "COLLECTOR_LIFETIME"];
const VALID_BILLING: BillingCycle[] = ["monthly", "annual", "lifetime", "launch"];

interface PriceConfig {
  unitAmount: number;
  currency: string;
  recurring: { interval: "month" | "year" } | null;
  productName: string;
  mode: "subscription" | "payment";
}

function getPriceConfig(tier: CheckoutTier, billing: BillingCycle): PriceConfig | null {
  if (billing === "launch") return { unitAmount: 2000, currency: "usd", recurring: null, productName: "Marrow Library — Full Access (3 Months)", mode: "payment" };
  if (billing === "lifetime" || tier === "COLLECTOR_LIFETIME") return { unitAmount: 7900, currency: "usd", recurring: null, productName: "Marrow Library Collector — Lifetime", mode: "payment" };
  if (tier === "COLLECTOR" && billing === "monthly") return { unitAmount: 599,  currency: "usd", recurring: { interval: "month" }, productName: "Marrow Library Collector — Monthly",  mode: "subscription" };
  if (tier === "COLLECTOR" && billing === "annual")  return { unitAmount: 4900, currency: "usd", recurring: { interval: "year"  }, productName: "Marrow Library Collector — Annual",   mode: "subscription" };
  if (tier === "CURATOR"   && billing === "monthly") return { unitAmount: 1499, currency: "usd", recurring: { interval: "month" }, productName: "Marrow Library Curator — Monthly",    mode: "subscription" };
  if (tier === "CURATOR"   && billing === "annual")  return { unitAmount: 9900, currency: "usd", recurring: { interval: "year"  }, productName: "Marrow Library Curator — Annual",     mode: "subscription" };
  return null;
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  let body: unknown;
  try { body = await req.json(); }
  catch { return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 }); }

  const { email: rawEmail, name: rawName, tier: rawTier, billing: rawBilling } = body as Record<string, string>;

  // ── Validate inputs ─────────────────────────────────────────────────────────
  const email = rawEmail?.trim().toLowerCase();
  const name  = rawName?.trim() || "";

  if (!email || !email.includes("@") || !email.includes(".")) {
    return NextResponse.json({ error: "A valid email address is required." }, { status: 400 });
  }
  if (!rawTier || !VALID_TIERS.includes(rawTier as CheckoutTier)) {
    return NextResponse.json({ error: "Invalid tier." }, { status: 400 });
  }
  if (rawBilling && !VALID_BILLING.includes(rawBilling as BillingCycle)) {
    return NextResponse.json({ error: "Invalid billing cycle." }, { status: 400 });
  }

  const tier    = rawTier    as CheckoutTier;
  const billing = (rawBilling as BillingCycle) ?? "launch";

  const priceConfig = getPriceConfig(tier, billing);
  if (!priceConfig) {
    return NextResponse.json({ error: "No price found for this combination." }, { status: 400 });
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://marrow-site.vercel.app";

  // ── Upsert Stripe Customer ───────────────────────────────────────────────────
  // Search for an existing customer with this email to avoid duplicates.
  // If found, reuse it. If not, create a new one with the provided name.
  let customerId: string;
  try {
    const existing = await stripe.customers.list({ email, limit: 1 });
    if (existing.data.length > 0) {
      customerId = existing.data[0]!.id;
      // Update name if it's missing or different
      if (name && existing.data[0]!.name !== name) {
        await stripe.customers.update(customerId, { name });
      }
    } else {
      const customer = await stripe.customers.create({ email, name: name || undefined });
      customerId = customer.id;
    }
  } catch (err) {
    console.error("[checkout-with-profile] Stripe customer upsert failed:", err);
    return NextResponse.json({ error: "Could not create customer record. Please try again." }, { status: 502 });
  }

  // ── Create Checkout Session linked to the Customer ───────────────────────────
  // By attaching customer: customerId, Stripe guarantees session.customer
  // is always populated in the webhook — email retrieval is 100% reliable.
  try {
    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      mode: priceConfig.mode,
      line_items: [
        {
          price_data: {
            currency: priceConfig.currency,
            unit_amount: priceConfig.unitAmount,
            product_data: { name: priceConfig.productName },
            ...(priceConfig.recurring ? { recurring: priceConfig.recurring } : {}),
          },
          quantity: 1,
        },
      ],
      metadata: { tier, billing },
      customer_update: { name: "auto" },   // sync any name changes back to the customer
      success_url: `${siteUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url:  `${siteUrl}/#pricing`,
    });

    if (!session.url) {
      return NextResponse.json({ error: "Stripe did not return a checkout URL." }, { status: 502 });
    }

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("[checkout-with-profile] Stripe session creation failed:", err);
    return NextResponse.json({ error: "Could not start checkout. Please try again." }, { status: 502 });
  }
}
