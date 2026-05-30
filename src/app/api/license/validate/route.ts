import { NextRequest, NextResponse } from "next/server";
import { validateLicenseKey } from "@/lib/license";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest): Promise<NextResponse> {
  const { searchParams } = new URL(req.url);
  const key = searchParams.get("key");

  if (!key) {
    return NextResponse.json(
      { valid: false, error: "Missing key parameter" },
      { status: 400 }
    );
  }

  const secret = process.env.MARROW_LICENSE_SECRET ?? "dev-secret-placeholder";
  const result = validateLicenseKey(key, secret);

  if (!result.valid) {
    return NextResponse.json(
      { valid: false, error: result.error },
      { status: 200 }
    );
  }

  return NextResponse.json({
    valid: true,
    tier: result.payload?.tier,
    email: result.payload?.email,
    expiresAt: result.payload?.expiresAt,
  });
}
