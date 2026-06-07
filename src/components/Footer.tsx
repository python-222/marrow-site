import Link from "next/link";

// Feature #20 — Marketing Site: Expanded footer with more navigation links

const columns = [
  {
    heading: "Product",
    links: [
      { label: "Download", href: "/download" },
      { label: "Pricing", href: "/#pricing" },
      { label: "Changelog", href: "/changelog" },
      { label: "Roadmap", href: "/roadmap" },
      { label: "System requirements", href: "/system-requirements" },
    ],
  },
  {
    heading: "Collections",
    links: [
      { label: "Books", href: "/#collections" },
      { label: "Vinyl & Music", href: "/#collections" },
      { label: "Video Games", href: "/#collections" },
      { label: "Board Games", href: "/#collections" },
      { label: "All 13 types", href: "/#collections" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Contact", href: "/contact" },
      { label: "Privacy policy", href: "/privacy" },
      { label: "Terms of service", href: "/terms" },
      { label: "Refund policy", href: "/refund" },
      { label: "GitHub", href: "https://github.com/python-222/marrow-library" },
    ],
  },
];

export default function Footer() {
  return (
    <footer style={{ background: "#03030d", borderTop: "1px solid #18181b" }}>
      {/* Main columns */}
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
              <div style={{ width: 28, height: 28, background: "#4f46e5", borderRadius: 7, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 12, color: "white" }}>
                ◆
              </div>
              <span className="text-white font-bold">Marrow Library</span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "#52525b" }}>
              The collection cataloging app for serious collectors.
            </p>
            <p className="text-xs mt-3" style={{ color: "#3f3f55" }}>
              © 2026 Marrow Library
            </p>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.heading}>
              <div className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#52525b" }}>
                {col.heading}
              </div>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm hover:text-white transition-colors"
                      style={{ color: "#71717a", textDecoration: "none" }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid #18181b" }}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs" style={{ color: "#3f3f55" }}>
            Made with ♥ for collectors. Local-first. No tracking. No subscriptions.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: "rgba(16,185,129,.1)", color: "#34d399", border: "1px solid rgba(16,185,129,.2)", fontSize: 11 }}>
              🔒 No tracking
            </span>
            <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: "rgba(99,102,241,.1)", color: "#818cf8", border: "1px solid rgba(99,102,241,.2)", fontSize: 11 }}>
              🗄️ Local-first
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
