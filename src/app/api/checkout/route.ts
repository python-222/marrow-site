import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

export const dynamic = "force-dynamic";

type BillingCycle = "monthly" | "annual" | "lifetime" | "launch";
type CheckoutTier = "COLLECTOR" | "CURATOR" | "COLLECTOR_LIFETIME";

interface PriceConfig {
  unitAmount: number;
  currency: string;
  recurring: { interval: "month" | "year" } | null;
  productName: string;
  mode: "subscription" | "payment";
}

function getPriceConfig(tier: CheckoutTier, billing: BillingCycle): PriceConfig | null {
  // Launch deal: $20 one-time payment, unlocks 3-month Collector access
  if (billing === "launch") {
    return {
      unitAmount: 2000,
      currency: "usd",
      recurring: null,
      productName: "Marrow Library — Full Access (3 Months)",
      mode: "payment",
    };
  }

  if (billing === "lifetime" || tier === "COLLECTOR_LIFETIME") {
    return {
      unitAmount: 7900,
      currency: "usd",
      recurring: null,
      productName: "Marrow Library Collector — Lifetime",
      mode: "payment",
    };
  }

  if (tier === "COLLECTOR" && billing === "monthly") {
    return {
      unitAmount: 599,
      currency: "usd",
      recurring: { interval: "month" },
      productName: "Marrow Library Collector — Monthly",
      mode: "subscription",
    };
  }

  if (tier === "COLLECTOR" && billing === "annual") {
    return {
      unitAmount: 4900,
      currency: "usd",
      recurring: { interval: "year" },
      productName: "Marrow Library Collector — Annual",
      mode: "subscription",
    };
  }

  if (tier === "CURATOR" && billing === "monthly") {
    return {
      unitAmount: 1499,
      currency: "usd",
      recurring: { interval: "month" },
      productName: "Marrow Library Curator — Monthly",
      mode: "subscription",
    };
  }

  if (tier === "CURATOR" && billing === "annual") {
    return {
      unitAmount: 9900,
      currency: "usd",
      recurring: { interval: "year" },
      productName: "Marrow Library Curator — Annual",
      mode: "subscription",
    };
  }

  return null;
}

export async function GET(req: NextRequest): Promise<NextResponse> {
  const { searchParams } = new URL(req.url);
  const rawTier = searchParams.get("tier");
  const rawBilling = searchParams.get("billing") ?? "annual";

  const validTiers: CheckoutTier[] = ["COLLECTOR", "CURATOR", "COLLECTOR_LIFETIME"];
  const validBilling: BillingCycle[] = ["monthly", "annual", "lifetime", "launch"];

  if (!rawTier || !validTiers.includes(rawTier as CheckoutTier)) {
    return NextResponse.json(
      { error: "Invalid or missing tier parameter" },
      { status: 400 }
    );
  }

  if (!validBilling.includes(rawBilling as BillingCycle)) {
    return NextResponse.json(
      { error: "Invalid billing parameter" },
      { status: 400 }
    );
  }

  const tier = rawTier as CheckoutTier;
  const billing = rawBilling as BillingCycle;

  const priceConfig = getPriceConfig(tier, billing);

  if (!priceConfig) {
    return NextResponse.json(
      { error: "No price found for this tier/billing combination" },
      { status: 400 }
    );
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://marrow-site.vercel.app";

  const session = await stripe.checkout.sessions.create({
    mode: priceConfig.mode,
    line_items: [
      {
        price_data: {
          currency: priceConfig.currency,
          unit_amount: priceConfig.unitAmount,
          product_data: { name: priceConfig.productName },
          ...(priceConfig.recurring !== null
            ? { recurring: priceConfig.recurring }
            : {}),
        },
        quantity: 1,
      },
    ],
    metadata: { tier, billing },
    success_url: `${siteUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${siteUrl}/#pricing`,
  });

  if (!session.url) {
    return NextResponse.json({ error: "Stripe did not return a checkout URL. Please try again." }, { status: 502 });
  }

  return NextResponse.redirect(session.url);
}
