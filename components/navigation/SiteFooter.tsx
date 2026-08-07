import Link from "next/link";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <div className="brand-mark footer-brand">
            <span className="brand-monogram">JJ</span>
            <span className="brand-copy"><strong>Joseph Jilovec</strong><small>Venture Studio</small></span>
          </div>
          <p className="footer-note">Founder-led venture development across commerce, behavioral design, technology, and creative work.</p>
        </div>
        <div className="footer-column">
          <span className="footer-label">Explore</span>
          <Link href="/ventures">Venture universe</Link>
          <Link href="/founder">Founder</Link>
          <Link href="/studio">Studio model</Link>
          <Link href="/technology">Technology</Link>
        </div>
        <div className="footer-column">
          <span className="footer-label">Public work</span>
          <Link href="/creative">Creative</Link>
          <Link href="/writing">Writing</Link>
          <a href={site.github} target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href={site.medium} target="_blank" rel="noreferrer">Medium ↗</a>
        </div>
        <div className="footer-column">
          <span className="footer-label">Connect</span>
          <Link href="/contact">Contact</Link>
          <a href={site.booking} target="_blank" rel="noreferrer">Book a founder call ↗</a>
          <span>{site.location}</span>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Joseph Jilovec Venture Studio</span>
        <span>Concept stages and plans may change. No investment solicitation or financial advice.</span>
      </div>
    </footer>
  );
}
