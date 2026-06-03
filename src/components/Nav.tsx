"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="sticky top-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(3,3,15,0.96)" : "transparent",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 select-none">
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center"
            style={{ background: "linear-gradient(145deg, #5b52f0, #7c74f5)", boxShadow: "0 0 14px rgba(91,82,240,0.45)" }}
          >
            <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4">
              <rect x="2"  y="2"  width="4" height="16" rx="1.2" fill="white" opacity="0.95"/>
              <rect x="7.5" y="4.5" width="4" height="13.5" rx="1.2" fill="white" opacity="0.72"/>
              <rect x="13" y="7" width="3.5" height="11" rx="1" fill="white" opacity="0.45"/>
            </svg>
          </div>
          <span className="text-white font-bold text-[15px] tracking-tight">Marrow</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7">
          {[["#story","About"],["#features","Features"],["#pricing","Pricing"]].map(([href, label]) => (
            <a key={label} href={href}
              className="text-sm font-medium transition-colors duration-150"
              style={{ color: "#8080a0" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#f0f0ff")}
              onMouseLeave={e => (e.currentTarget.style.color = "#8080a0")}
            >{label}</a>
          ))}
          <Link
            href="/download"
            className="text-sm font-medium transition-colors duration-150"
            style={{ color: "#8080a0" }}
            onMouseEnter={e => (e.currentTarget.style.color = "#f0f0ff")}
            onMouseLeave={e => (e.currentTarget.style.color = "#8080a0")}
          >Download</Link>
          <Link
            href="/api/checkout?tier=COLLECTOR&billing=launch"
            className="px-4 py-2 rounded-lg text-sm font-semibold text-white transition-all hover:brightness-110 active:scale-95"
            style={{ background: "linear-gradient(135deg, #5b52f0, #7c74f5)", boxShadow: "0 0 18px rgba(91,82,240,0.35)" }}
          >
            Get Marrow — $20
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {[0,1,2].map(i => (
            <span key={i} className="block w-5 h-0.5 transition-all duration-200"
              style={{
                background: "#a0a0c0",
                transform: i === 0 && menuOpen ? "translateY(8px) rotate(45deg)" :
                           i === 2 && menuOpen ? "translateY(-8px) rotate(-45deg)" : undefined,
                opacity: i === 1 && menuOpen ? 0 : 1,
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t px-6 py-5 flex flex-col gap-4"
          style={{ background: "rgba(3,3,15,0.98)", borderColor: "rgba(255,255,255,0.06)" }}>
          {[["#story","About"],["#features","Features"],["#pricing","Pricing"],["/download","Download"]].map(([href, label]) => (
            <a key={label} href={href} className="text-sm font-medium" style={{ color: "#9090b0" }}
              onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
          <Link href="/api/checkout?tier=COLLECTOR&billing=launch"
            className="mt-1 py-3 rounded-xl text-sm font-bold text-white text-center"
            style={{ background: "linear-gradient(135deg, #5b52f0, #7c74f5)" }}
            onClick={() => setMenuOpen(false)}>
            Get Marrow — $20
          </Link>
        </div>
      )}
    </nav>
  );
}
