"use client";

import { useState } from "react";
import Link from "next/link";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 z-50 border-b border-zinc-800"
      style={{ background: "rgba(5,5,16,0.90)", backdropFilter: "blur(12px)" }}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="text-white font-bold text-xl tracking-tight select-none">
          Marrow Library
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#pricing"
            className="text-zinc-400 hover:text-white text-sm font-medium transition-colors"
          >
            Pricing
          </a>
          <a
            href="#story"
            className="text-zinc-400 hover:text-white text-sm font-medium transition-colors"
          >
            About
          </a>
          <Link
            href="/download"
            className="px-4 py-2 rounded-lg text-sm font-semibold text-white transition-colors"
            style={{ background: "#4f46e5" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "#4338ca";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "#4f46e5";
            }}
          >
            Download Free
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span
            className="block w-6 h-0.5 bg-zinc-400 transition-transform duration-200"
            style={menuOpen ? { transform: "translateY(8px) rotate(45deg)" } : {}}
          />
          <span
            className="block w-6 h-0.5 bg-zinc-400 transition-opacity duration-200"
            style={menuOpen ? { opacity: 0 } : {}}
          />
          <span
            className="block w-6 h-0.5 bg-zinc-400 transition-transform duration-200"
            style={menuOpen ? { transform: "translateY(-8px) rotate(-45deg)" } : {}}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-zinc-800 px-6 py-4 flex flex-col gap-4">
          <a
            href="#pricing"
            className="text-zinc-400 hover:text-white text-sm font-medium transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Pricing
          </a>
          <a
            href="#story"
            className="text-zinc-400 hover:text-white text-sm font-medium transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            About
          </a>
          <Link
            href="/download"
            className="px-4 py-2 rounded-lg text-sm font-semibold text-white text-center"
            style={{ background: "#4f46e5" }}
            onClick={() => setMenuOpen(false)}
          >
            Download Free
          </Link>
        </div>
      )}
    </nav>
  );
}
