import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Marrow Library — your data stays on your device.",
};

const EMAIL = "fullstackdeveloper829@gmail.com";
const LAST_UPDATED = "30 May 2025";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen px-6 py-20" style={{ background: "#050510" }}>
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-sm hover:text-white transition-colors mb-10 inline-block" style={{ color: "#71717a" }}>
          ← Back to home
        </Link>

        <h1 className="text-4xl font-black text-white mb-2">Privacy Policy</h1>
        <p className="text-sm mb-4" style={{ color: "#52525b" }}>Last updated: {LAST_UPDATED}</p>
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-12"
          style={{ background: "rgba(74,222,128,0.08)", border: "1px solid rgba(74,222,128,0.2)", color: "#4ade80" }}
        >
          ✓ Local-first — your collection data never leaves your device
        </div>

        <div className="space-y-10 text-sm leading-relaxed" style={{ color: "#a1a1aa" }}>

          <section>
            <h2 className="text-lg font-bold text-white mb-3">1. Overview</h2>
            <p>Marrow Library is designed with privacy by default. Your collection data — every item you catalog, every note you write, every valuation you track — is stored locally on your device. We cannot access it. We do not want it.</p>
            <p className="mt-3">This policy describes the limited data we do collect and how we use it.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3">2. Data We Collect</h2>

            <h3 className="font-semibold text-white mt-4 mb-2">2a. Purchase data (via Stripe)</h3>
            <p>When you purchase a paid plan, Stripe processes your payment. We receive from Stripe:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Your email address (to send your license key)</li>
              <li>Order ID and plan type</li>
            </ul>
            <p className="mt-3">We do not receive or store your credit card number, billing address, or any other financial information. All payment data is handled by Stripe under their <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">Privacy Policy</a>.</p>

            <h3 className="font-semibold text-white mt-4 mb-2">2b. License key data</h3>
            <p>Your license key contains your email address, plan type, and purchase date — encoded and signed cryptographically. This is stored only on your device after activation.</p>

            <h3 className="font-semibold text-white mt-4 mb-2">2c. Metadata lookups</h3>
            <p>When you scan a barcode, the App queries third-party APIs (Open Library, TMDB, Discogs, eBay) to fetch metadata. These requests include the barcode or ISBN — no personal information is sent.</p>

            <h3 className="font-semibold text-white mt-4 mb-2">2d. What we do NOT collect</h3>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Your collection data (books, records, games, etc.)</li>
              <li>Analytics or usage tracking</li>
              <li>Crash reports (no telemetry)</li>
              <li>Location data</li>
              <li>Device identifiers</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3">3. How We Use Your Data</h2>
            <p>We use your email address solely to:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Send your license key after purchase</li>
              <li>Respond to support requests you initiate</li>
            </ul>
            <p className="mt-3">We do not send marketing emails. We do not sell your data. We do not share your data with any third party except as required by law.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3">4. Data Retention</h2>
            <p>We retain your email address and order record for accounting purposes for up to 7 years as required by law. You may request deletion of your data by emailing us — we will delete what we can outside of legal obligations.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3">5. Third-Party Services</h2>
            <ul className="list-disc list-inside space-y-2">
              <li><strong className="text-white">Stripe</strong> — payment processing. <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">Privacy Policy</a></li>
              <li><strong className="text-white">Resend</strong> — transactional email. <a href="https://resend.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">Privacy Policy</a></li>
              <li><strong className="text-white">eBay</strong> — market valuation data. <a href="https://www.ebay.com/help/policies/member-behaviour-policies/user-privacy-notice-privacy-policy" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">Privacy Policy</a></li>
              <li><strong className="text-white">Vercel</strong> — website hosting. Standard access logs (IP, browser) are retained per Vercel&apos;s policy.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3">6. Your Rights</h2>
            <p>Depending on your location, you may have rights under GDPR, CCPA, or similar laws to access, correct, or delete your personal data. To exercise any of these rights, contact us at <a href={`mailto:${EMAIL}`} className="underline hover:text-white">{EMAIL}</a>.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3">7. Children&apos;s Privacy</h2>
            <p>Marrow Library is not directed at children under 13. We do not knowingly collect personal information from children under 13. If you believe a child has provided us with personal information, contact us and we will delete it.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3">8. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will post the updated policy on this page with a new "Last updated" date. Continued use of the App after changes constitutes acceptance.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3">9. Contact</h2>
            <p>Privacy questions? Email us at <a href={`mailto:${EMAIL}`} className="underline hover:text-white">{EMAIL}</a></p>
          </section>

        </div>

        <div className="mt-16 pt-8 border-t flex gap-6 text-sm" style={{ borderColor: "#27272a", color: "#52525b" }}>
          <Link href="/terms" className="hover:text-zinc-400 transition-colors">Terms of Service</Link>
          <Link href="/" className="hover:text-zinc-400 transition-colors">Home</Link>
        </div>
      </div>
    </main>
  );
}
