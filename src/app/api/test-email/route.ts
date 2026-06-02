import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/lib/mailer";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const to = req.nextUrl.searchParams.get("to") ?? process.env.GMAIL_USER!;
  try {
    await sendEmail({
      to,
      subject: "Marrow Library — SMTP test from Vercel",
      html: "<p>This email was sent from the live Vercel deployment. SMTP is working correctly.</p>",
    });
    return NextResponse.json({ ok: true, sentTo: to });
  } catch (err) {
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 });
  }
}
