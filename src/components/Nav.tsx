"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="sticky top-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(2,2,10,0.95)" : "rgba(2,2,10,0.7)",
        borderBottom: scrolled ? "1px solid #1a1a30" : "1px solid transparent",
        backdropFilter: "blur(16px)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 select-none group">
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center text-sm font-black"
            style={{ background: "linear-gradient(135deg, #5b52f0, #7c74f5)", boxShadow: "0 0 12px rgba(91,82,240,0.4)" }}
          >
            M
          </div>
          <span className="text-white font-bold text-lg tracking-tight">Marrow</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#story" className="text-sm font-medium transition-colors" style={{ color: "#9090b0" }}
            onMouseEnter={e => (e.currentTarget.style.color = "#f0f0ff")}
            onMouseLeave={e => (e.currentTarget.style.color = "#9090b0")}>
            About
          </a>
          <a href="#features" className="text-sm font-medium transition-colors" style={{ color: "#9090b0" }}
            onMouseEnter={e => (e.currentTarget.style.color = "#f0f0ff")}
            onMouseLeave={e => (e.currentTarget.style.color = "#9090b0")}>
            Features
          </a>
          <a href="#pricing" className="text-sm font-medium transition-colors" style={{ color: "#9090b0" }}
            onMouseEnter={e => (e.currentTarget.style.color = "#f0f0ff")}
            onMouseLeave={e => (e.currentTarget.style.color = "#9090b0")}>
            Pricing
          </a>
          <Link
            href="/download"
            className="px-4 py-2 rounded-lg text-sm font-semibold text-white transition-all hover:scale-105"
            style={{ background: "linear-gradient(135deg, #5b52f0, #7c74f5)", boxShadow: "0 0 16px rgba(91,82,240,0.3)" }}
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
          <span className="block w-5 h-0.5 bg-zinc-400 transition-all duration-200"
            style={menuOpen ? { transform: "translateY(8px) rotate(45deg)" } : {}} />
          <span className="block w-5 h-0.5 bg-zinc-400 transition-all duration-200"
            style={menuOpen ? { opacity: 0 } : {}} />
          <span className="block w-5 h-0.5 bg-zinc-400 transition-all duration-200"
            style={menuOpen ? { transform: "translateY(-8px) rotate(-45deg)" } : {}} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t px-6 py-4 flex flex-col gap-4" style={{ borderColor: "#1a1a30" }}>
          {["#story/About", "#features/Features", "#pricing/Pricing"].map((item) => {
            const [href, label] = item.split("/");
            return (
              <a key={label} href={href} className="text-sm font-medium transition-colors" style={{ color: "#9090b0" }}
                onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            );
          })}
          <Link href="/download" className="px-4 py-2.5 rounded-lg text-sm font-semibold text-white text-center mt-1"
            style={{ background: "linear-gradient(135deg, #5b52f0, #7c74f5)" }}
            onClick={() => setMenuOpen(false)}>
            Download Free
          </Link>
        </div>
      )}
    </nav>
  );
}
