import Link from "next/link";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-identity">
          <div className="brand-mark footer-brand">
            <span className="brand-monogram">JJ</span>
            <span className="brand-copy"><strong>Joseph Jilovec</strong><small>Venture Studio</small></span>
          </div>
          <p className="footer-note">Founder-led venture architecture, capital alignment, and operator partnerships across commerce, civic initiatives, behavioral design, technology, and creative work.</p>
        </div>
        <div className="footer-connect">
          <span className="footer-label">Connect</span>
          <div className="footer-connect-links">
            <Link href="/contact">Contact</Link>
            <a href={site.booking} target="_blank" rel="noreferrer">Book a founder call ↗</a>
            <a href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a href={site.medium} target="_blank" rel="noreferrer">Medium ↗</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Joseph Jilovec Venture Studio</span>
        <span>Concept stages and plans may change. No investment solicitation or financial advice.</span>
      </div>
    </footer>
  );
}
