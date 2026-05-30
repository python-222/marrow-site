/**
 * GET /api/download/premium?key=<license_key>&platform=macos|windows|android
 *
 * Validates the license key and redirects to the platform-specific download URL.
 * Returns 403 if the key is missing, invalid, or FREE tier.
 * This is the only place the premium download URLs are resolved — they are never
 * exposed in client-side code.
 */
import { NextRequest, NextResponse } from "next/server";
import { validateLicenseKey, PAID_TIERS, type LicenseTier } from "@/lib/license";

export const dynamic = "force-dynamic";

// ── Asset URLs ────────────────────────────────────────────────────────────────
// Update RELEASE_VERSION when cutting a new release.
const RELEASE_VERSION = "v1.0.0";
const RELEASE_BASE = `https://github.com/python-222/marrow-library/releases/download/${RELEASE_VERSION}`;

const ASSET_URLS: Record<string, string> = {
  macos:   `${RELEASE_BASE}/MarrowLibrary-${RELEASE_VERSION}-macos-universal.dmg`,
  windows: `${RELEASE_BASE}/MarrowLibrary-${RELEASE_VERSION}-windows-setup.exe`,
  android: `${RELEASE_BASE}/MarrowScanner-${RELEASE_VERSION}-android.apk`,
  ios:     `${RELEASE_BASE}/MarrowScanner-${RELEASE_VERSION}-ios-simulator.tar.gz`,
};

const PLATFORM_LABELS: Record<string, string> = {
  macos:   "macOS",
  windows: "Windows",
  android: "Android",
  ios:     "iOS Simulator",
};

export async function GET(req: NextRequest): Promise<NextResponse> {
  const { searchParams } = new URL(req.url);
  const key = searchParams.get("key");
  const platform = searchParams.get("platform");
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3001";

  // ── Validate platform ────────────────────────────────────────────────────────
  if (!platform || !(platform in ASSET_URLS)) {
    return NextResponse.json(
      { error: `Invalid platform. Valid options: ${Object.keys(ASSET_URLS).join(", ")}` },
      { status: 400 }
    );
  }

  // ── Validate license key ─────────────────────────────────────────────────────
  if (!key) {
    return NextResponse.redirect(`${siteUrl}/#pricing?error=key_required`);
  }

  const secret = process.env.MARROW_LICENSE_SECRET;
  if (!secret) {
    console.error("[download/premium] MARROW_LICENSE_SECRET is not set");
    return NextResponse.json({ error: "Server misconfiguration" }, { status: 500 });
  }

  const result = validateLicenseKey(key, secret);

  if (!result.valid) {
    // Key is invalid or expired — send to pricing page
    return NextResponse.redirect(
      `${siteUrl}/#pricing?error=${encodeURIComponent(result.error ?? "invalid_key")}`
    );
  }

  const tier = result.payload!.tier as LicenseTier;
  if (!PAID_TIERS.includes(tier)) {
    // FREE tier tried to use a premium download link
    return NextResponse.redirect(`${siteUrl}/#pricing?error=upgrade_required`);
  }

  // ── Log and redirect ─────────────────────────────────────────────────────────
  const email = result.payload!.email;
  console.log(`[download/premium] ${email} (${tier}) downloading ${PLATFORM_LABELS[platform]}`);

  return NextResponse.redirect(ASSET_URLS[platform]!);
}
