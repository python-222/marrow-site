import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { resend } from "@/lib/resend";
import { generateLicenseKey, PAID_TIERS, type LicenseTier, type LicensePayload } from "@/lib/license";
import type Stripe from "stripe";

export const dynamic = "force-dynamic";

function computeExpiresAt(billing: string): number | null {
  const now = Date.now();
  const DAY_MS = 24 * 60 * 60 * 1000;
  if (billing === "lifetime") return null;
  if (billing === "launch")   return now + 90  * DAY_MS; // 3-month one-time deal
  if (billing === "monthly")  return now + 31  * DAY_MS;
  // annual (default)
  return now + 365 * DAY_MS;
}

function licenseEmailHtml(key: string, tier: LicenseTier, email: string, siteUrl: string): string {
  const encodedKey = encodeURIComponent(key);
  const dlBase = `${siteUrl}/api/download/premium?key=${encodedKey}&platform=`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Your Marrow Library License Key &amp; Download</title>
  <style>
    body { margin: 0; padding: 0; background: #050510; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; color: #f4f4f5; }
    .wrapper { max-width: 560px; margin: 40px auto; padding: 0 20px; }
    .card { background: #0f0f1a; border: 1px solid #27272a; border-radius: 12px; padding: 40px; }
    .logo { font-size: 20px; font-weight: 800; color: #fff; margin-bottom: 32px; }
    h1 { font-size: 24px; font-weight: 700; margin: 0 0 8px; color: #fff; }
    .tier-badge { display: inline-block; background: #3730a3; color: #a5b4fc; font-size: 12px; font-weight: 700; padding: 4px 10px; border-radius: 99px; margin-bottom: 24px; text-transform: uppercase; letter-spacing: 0.05em; }
    p { font-size: 15px; line-height: 1.6; color: #a1a1aa; margin: 0 0 16px; }
    .key-box { background: #18181b; border: 1px solid #3f3f46; border-radius: 8px; padding: 16px 20px; font-family: 'Courier New', Courier, monospace; font-size: 12px; color: #e4e4e7; word-break: break-all; margin: 24px 0; }
    .section-title { font-size: 11px; font-weight: 700; color: #52525b; text-transform: uppercase; letter-spacing: 0.1em; margin: 28px 0 12px; }
    .dl-btn { display: block; background: rgba(79,70,229,0.15); border: 1px solid rgba(99,102,241,0.35); border-radius: 10px; padding: 14px 18px; text-decoration: none; color: #d4d4d8; font-size: 14px; font-weight: 600; margin-bottom: 8px; }
    .dl-btn:hover { background: rgba(79,70,229,0.25); }
    .instructions { background: #0a0a14; border: 1px solid #27272a; border-radius: 8px; padding: 20px; margin-top: 24px; }
    .instructions h2 { font-size: 11px; font-weight: 700; color: #52525b; margin: 0 0 12px; text-transform: uppercase; letter-spacing: 0.1em; }
    .instructions ol { margin: 0; padding-left: 20px; color: #a1a1aa; font-size: 14px; line-height: 1.8; }
    .footer { margin-top: 32px; font-size: 13px; color: #52525b; text-align: center; }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="card">
      <div class="logo">Marrow Library</div>
      <h1>You're all set!</h1>
      <div class="tier-badge">★ ${tier} Tier</div>
      <p>Thanks for your purchase, ${email}. Your license key and personal download links are below.</p>

      <div class="section-title">Your License Key</div>
      <div class="key-box">${key}</div>
      <p style="font-size:13px;">Keep this safe — you'll need it to activate on each device.</p>

      <div class="section-title">Download Your Premium Version</div>
      <a class="dl-btn" href="${dlBase}macos"> Download for macOS (.dmg)</a>
      <a class="dl-btn" href="${dlBase}windows">🪟 Download for Windows (.exe)</a>
      <a class="dl-btn" href="${dlBase}android">🤖 Download Android Scanner (.apk)</a>
      <a class="dl-btn" href="${dlBase}ios">🍎 Download iOS Simulator Build (.tar.gz)</a>
      <p style="font-size:12px;margin-top:12px;">These links are personal to your account. Each one validates your license before serving the download.</p>

      <div class="instructions">
        <h2>Activate inside the app</h2>
        <ol>
          <li>Download and open Marrow Library on your Mac or PC</li>
          <li>Navigate to <strong style="color:#fff;">Settings → License</strong></li>
          <li>Paste your license key and click <strong style="color:#fff;">Activate</strong></li>
          <li>Your ${tier} features unlock immediately</li>
        </ol>
      </div>
    </div>
    <div class="footer">
      Marrow Library · Questions? Reply to this email.<br />
      © 2025 Marrow Library. All rights reserved.
    </div>
  </div>
</body>
</html>`;
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  const body = await req.text();
  const sig = req.headers.get("stripe-signature");
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  const licenseSecret = process.env.MARROW_LICENSE_SECRET;

  if (!sig || !webhookSecret) {
    return NextResponse.json({ error: "Missing signature or webhook secret" }, { status: 400 });
  }

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: `Webhook verification failed: ${message}` }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    // Guard: refuse to generate keys if secret is absent (prevents accidental key forgery)
    if (!licenseSecret) {
      console.error("[webhook] MARROW_LICENSE_SECRET is not set — cannot issue license key");
      return NextResponse.json({ error: "Server misconfiguration: license secret missing" }, { status: 500 });
    }

    const session = event.data.object as Stripe.Checkout.Session;

    const rawTier = session.metadata?.["tier"] ?? "COLLECTOR";
    const billing = session.metadata?.["billing"] ?? "annual";

    // Use the shared PAID_TIERS list — never issue a FREE tier from a checkout
    const tier: LicenseTier = PAID_TIERS.includes(rawTier as LicenseTier)
      ? (rawTier as LicenseTier)
      : "COLLECTOR";

    const email =
      session.customer_details?.email ??
      session.customer_email ??
      "unknown@example.com";

    const issuedAt = Date.now();
    const expiresAt = computeExpiresAt(billing);

    const payload: LicensePayload = {
      tier,
      email,
      orderId: session.id,
      issuedAt,
      expiresAt,
    };

    const licenseKey = generateLicenseKey(payload, licenseSecret);
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://marrowlibrary.app";

    try {
      const emailResult = await resend.emails.send({
        from: "Marrow Library <onboarding@resend.dev>",
        to: email,
        subject: "Your Marrow Library License Key & Download Links",
        html: licenseEmailHtml(licenseKey, tier, email, siteUrl),
      });
      console.log(`[webhook] Email sent to ${email} — Resend ID: ${JSON.stringify(emailResult)}`);
    } catch (emailErr) {
      // Non-fatal: log full error so Vercel logs capture it, but don't fail the webhook
      // (Stripe would retry on 5xx, causing duplicate emails)
      console.error(`[webhook] FAILED to send license email to ${email}:`, emailErr);
    }
  }

  return NextResponse.json({ received: true });
}
