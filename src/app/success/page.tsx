import Link from "next/link";
import { stripe } from "@/lib/stripe";

interface SuccessPageProps {
  searchParams: { session_id?: string; key?: string };
}

const PLATFORMS = [
  { key: "macos",   icon: "", label: "macOS",          badge: ".dmg" },
  { key: "windows", icon: "🪟", label: "Windows",       badge: ".exe" },
  { key: "android", icon: "🤖", label: "Android Scanner", badge: ".apk" },
  { key: "ios",     icon: "🍎", label: "iOS Simulator",  badge: ".tar.gz" },
] as const;

export default async function SuccessPage({ searchParams }: SuccessPageProps) {
  const sessionId = searchParams.session_id;

  // Try to retrieve tier from Stripe session for display purposes
  let tierLabel = "Premium";
  let customerEmail: string | null = null;
  if (sessionId) {
    try {
      const session = await stripe.checkout.sessions.retrieve(sessionId);
      const tier = session.metadata?.["tier"];
      if (tier === "CURATOR") tierLabel = "Curator";
      else if (tier === "COLLECTOR") tierLabel = "Collector";
      customerEmail =
        session.customer_details?.email ?? session.customer_email ?? null;
    } catch {
      // Non-critical — session retrieval failure doesn't break the page
    }
  }

  // The license key may be pre-populated via query string (set by webhook email link)
  // or the user can copy it from their email. Either way, the /api/download/premium
  // route validates it before serving any download URL.
  const licenseKey = searchParams.key ?? null;

  return (
    <main
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-20"
      style={{
        background: "#050510",
        backgroundImage: `
          linear-gradient(rgba(79,70,229,0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(79,70,229,0.05) 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
      }}
    >
      <div className="max-w-xl w-full space-y-6">

        {/* Confirmation card */}
        <div
          className="rounded-2xl border p-10 text-center"
          style={{ background: "#0f0f1a", borderColor: "#27272a" }}
        >
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center text-3xl mx-auto mb-6"
            style={{ background: "rgba(99,102,241,0.15)" }}
          >
            🎉
          </div>
          <h1 className="text-3xl font-black text-white mb-2">Order Confirmed!</h1>
          {customerEmail && (
            <p className="text-sm mb-4" style={{ color: "#71717a" }}>
              Receipt sent to <span style={{ color: "#a1a1aa" }}>{customerEmail}</span>
            </p>
          )}
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6"
            style={{ background: "rgba(99,102,241,0.12)", border: "1px solid rgba(99,102,241,0.3)" }}
          >
            <span className="text-xs font-bold" style={{ color: "#a5b4fc" }}>★ {tierLabel} Tier Unlocked</span>
          </div>
          <p style={{ color: "#a1a1aa", lineHeight: "1.7", fontSize: "0.875rem" }}>
            Your license key and personal download links have been sent to your email.
            Check your inbox (and spam folder).
          </p>
        </div>

        {/* Premium download card */}
        <div
          className="rounded-2xl border overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #0d0d1f 0%, #0f0a1e 100%)",
            borderColor: "#3730a3",
            boxShadow: "0 0 40px rgba(99,102,241,0.1)",
          }}
        >
          <div className="px-8 py-6 border-b" style={{ borderColor: "#1f1f35" }}>
            <h2 className="text-lg font-bold text-white mb-1">
              Download Your Premium Version
            </h2>
            <p className="text-sm" style={{ color: "#71717a" }}>
              {licenseKey
                ? "Your license key is pre-filled in each link below."
                : "Paste your license key from the email into the link to unlock the download."}
            </p>
          </div>

          <div className="px-8 py-6 space-y-3">
            {PLATFORMS.map((p) => {
              const href = licenseKey
                ? `/api/download/premium?key=${encodeURIComponent(licenseKey)}&platform=${p.key}`
                : `/api/download/premium?platform=${p.key}&key=PASTE_YOUR_LICENSE_KEY`;

              return (
                <a
                  key={p.key}
                  href={href}
                  className="flex items-center justify-between w-full px-4 py-3.5 rounded-xl text-sm font-semibold transition-all hover:opacity-85"
                  style={{
                    background: licenseKey ? "rgba(79,70,229,0.15)" : "#18181b",
                    border: `1px solid ${licenseKey ? "rgba(99,102,241,0.4)" : "#27272a"}`,
                    color: "#d4d4d8",
                  }}
                >
                  <span className="flex items-center gap-2">
                    <span>{p.icon}</span>
                    <span>Download for {p.label}</span>
                  </span>
                  <span
                    className="text-xs font-mono px-2 py-0.5 rounded"
                    style={{ background: "rgba(0,0,0,0.3)", color: "#71717a" }}
                  >
                    {p.badge}
                  </span>
                </a>
              );
            })}
          </div>

          {!licenseKey && (
            <div className="px-8 pb-6">
              <p className="text-xs text-center" style={{ color: "#52525b" }}>
                💡 Replace <code style={{ color: "#71717a" }}>PASTE_YOUR_LICENSE_KEY</code> in the URL with
                your actual key, or use the link from your email which has it pre-filled.
              </p>
            </div>
          )}
        </div>

        {/* Activation instructions */}
        <div
          className="rounded-2xl border p-6"
          style={{ background: "#0a0a14", borderColor: "#27272a" }}
        >
          <p
            className="text-xs font-bold uppercase tracking-widest mb-4"
            style={{ color: "#52525b" }}
          >
            Activate your license in the app
          </p>
          <ol className="space-y-3 text-sm" style={{ color: "#a1a1aa" }}>
            {[
              "Download and open Marrow Library on your Mac or PC",
              <>Navigate to <strong className="text-white">Settings → License</strong></>,
              <>Paste your license key and click <strong className="text-white">Activate</strong></>,
              "Your Premium features unlock immediately",
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-3">
                <span
                  className="flex-shrink-0 w-5 h-5 rounded-full text-xs font-bold flex items-center justify-center mt-0.5"
                  style={{ background: "rgba(99,102,241,0.2)", color: "#a5b4fc" }}
                >
                  {i + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Footer nav */}
        <div className="flex items-center justify-center gap-6 text-sm" style={{ color: "#52525b" }}>
          <Link href="/" className="hover:text-zinc-400 transition-colors">← Home</Link>
          <Link href="/download" className="hover:text-zinc-400 transition-colors">Download page</Link>
          <Link href="/#pricing" className="hover:text-zinc-400 transition-colors">Pricing</Link>
        </div>

      </div>
    </main>
  );
}
