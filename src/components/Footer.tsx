import Link from "next/link";

const links = [
  { label: "Download", href: "/download" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#story" },
  { label: "Terms", href: "/terms" },
  { label: "Privacy", href: "/privacy" },
  { label: "GitHub", href: "https://github.com/python-222/marrow-library", external: true },
];

export default function Footer() {
  return (
    <footer className="border-t" style={{ background: "var(--bg)", borderColor: "var(--border)" }}>
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Logo + tagline */}
          <div className="flex flex-col items-center md:items-start gap-1.5">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md flex items-center justify-center text-xs font-black"
                style={{ background: "linear-gradient(135deg, #5b52f0, #7c74f5)" }}>
                M
              </div>
              <span className="text-white font-bold">Marrow Library</span>
            </div>
            <span className="text-xs italic" style={{ color: "var(--text-3)" }}>Built for collectors who care.</span>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-5 flex-wrap justify-center">
            {links.map(({ label, href, external }) => (
              external ? (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  className="text-sm transition-colors hover:text-white" style={{ color: "var(--text-2)" }}>
                  {label}
                </a>
              ) : (
                <Link key={label} href={href}
                  className="text-sm transition-colors hover:text-white" style={{ color: "var(--text-2)" }}>
                  {label}
                </Link>
              )
            ))}
          </nav>

          {/* Copyright */}
          <span className="text-xs" style={{ color: "var(--text-3)" }}>
            © 2025 Marrow Library
          </span>
        </div>
      </div>
    </footer>
  );
}
