import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/mailer";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    await sendEmail({
      to: process.env.GMAIL_USER!,
      subject: "Marrow Library — SMTP test",
      html: "<p>SMTP is working from Vercel.</p>",
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 });
  }
}
