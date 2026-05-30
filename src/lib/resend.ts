import { Resend } from "resend";

// Fallback to empty string so the module loads at build time without throwing.
// The actual key is required at runtime (webhook handler checks for it).
export const resend = new Resend(process.env.RESEND_API_KEY ?? "re_placeholder");
