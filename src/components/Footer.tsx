import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="border-t py-12"
      style={{ background: "#03030d", borderColor: "#18181b" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Left: logo + copyright */}
          <div className="flex flex-col gap-2">
            <span className="text-white font-bold text-lg">Marrow Library</span>
            <span className="text-xs" style={{ color: "#52525b" }}>
              © 2025 Marrow Library. All rights reserved.
            </span>
          </div>

          {/* Center: tagline */}
          <div className="text-center">
            <p className="text-sm font-medium italic" style={{ color: "#71717a" }}>
              Built for collectors who care.
            </p>
          </div>

          {/* Right: links */}
          <div className="flex items-center justify-end gap-6 flex-wrap">
            <Link href="/download" className="text-sm transition-colors hover:text-white" style={{ color: "#71717a" }}>
              Download
            </Link>
            <a href="#pricing" className="text-sm transition-colors hover:text-white" style={{ color: "#71717a" }}>
              Pricing
            </a>
            <Link href="/terms" className="text-sm transition-colors hover:text-white" style={{ color: "#71717a" }}>
              Terms
            </Link>
            <Link href="/privacy" className="text-sm transition-colors hover:text-white" style={{ color: "#71717a" }}>
              Privacy
            </Link>
            <a href="https://github.com/python-222/marrow-library" target="_blank" rel="noopener noreferrer" className="text-sm transition-colors hover:text-white" style={{ color: "#71717a" }}>
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
