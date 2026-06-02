import Link from "next/link";

const links = [
  { label: "Download", href: "/download" },
  { label: "Pricing",  href: "#pricing" },
  { label: "About",    href: "#story" },
  { label: "Terms",    href: "/terms" },
  { label: "Privacy",  href: "/privacy" },
  { label: "GitHub",   href: "https://github.com/fullstackdeveloper829-creator/marrow-library", external: true },
];

export default function Footer() {
  return (
    <footer className="border-t" style={{ background: "#03030f", borderColor: "rgba(255,255,255,0.05)" }}>
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-1.5">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #5b52f0, #7c74f5)" }}>
                <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5">
                  <rect x="1.5" y="1.5" width="3" height="13" rx="1" fill="white" opacity="0.95"/>
                  <rect x="6"   y="3.5" width="3" height="11" rx="1" fill="white" opacity="0.72"/>
                  <rect x="10.5" y="6" width="2.5" height="8.5" rx="0.8" fill="white" opacity="0.45"/>
                </svg>
              </div>
              <span className="text-white font-bold text-sm">Marrow Library</span>
            </div>
            <span className="text-xs" style={{ color: "#252545" }}>Built for collectors who care.</span>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-5 flex-wrap justify-center">
            {links.map(({ label, href, external }) => (
              external ? (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  className="text-sm transition-colors hover:text-white" style={{ color: "#30305a" }}>
                  {label}
                </a>
              ) : (
                <Link key={label} href={href}
                  className="text-sm transition-colors hover:text-white" style={{ color: "#30305a" }}>
                  {label}
                </Link>
              )
            ))}
          </nav>

          {/* Copyright */}
          <span className="text-xs" style={{ color: "#1e1e38" }}>
            © 2026 Marrow Library
          </span>
        </div>
      </div>
    </footer>
  );
}
