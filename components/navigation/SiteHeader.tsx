"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ReadabilityControls } from "@/components/navigation/ReadabilityControls";

const nav = [
  ["Ventures", "/ventures"],
  ["Founder", "/founder"],
  ["Studio", "/studio"],
  ["Technology", "/technology"],
  ["Creative", "/creative"],
  ["Writing", "/writing"],
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onResize = () => window.innerWidth > 880 && setOpen(false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="site-header">
      <div className="nav-shell">
        <Link href="/" className="brand-mark" aria-label="Joseph Jilovec home" onClick={() => setOpen(false)}>
          <span className="brand-monogram">JJ</span>
          <span className="brand-copy">
            <strong>Joseph Jilovec</strong>
            <small>Venture Studio</small>
          </span>
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {nav.map(([label, href]) => (
            <Link key={href} href={href}>{label}</Link>
          ))}
        </nav>
        <div className="nav-actions">
          <ReadabilityControls />
          <Link className="button button-small" href="/contact">Start a conversation</Link>
          <button
            className="menu-button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
      {open && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {nav.map(([label, href]) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>
          ))}
          <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </nav>
      )}
    </header>
  );
}
