import Image from "next/image";
import Link from "next/link";
import { ventureCategories, ventures } from "@/lib/portfolio";

export function FounderHero() {
  return (
    <section className="hero-shell">
      <div className="hero-grid-lines" aria-hidden="true" />
      <div className="hero-copy">
        <p className="hero-kicker">Studio lead · Venture architect · Strategic advisor · Phoenix, Arizona</p>
        <h1>
          Concepts built to become<br />
          <span>companies.</span>
        </h1>
        <p className="hero-lede">
          Joseph Jilovec directs a multi-asset portfolio by shaping venture theses, product foundations, capital priorities, and partner alignment—then connecting each asset with the people best equipped to operate and scale it.
        </p>
        <div className="hero-actions">
          <Link href="/ventures" className="button">Explore the venture universe</Link>
          <Link href="/founder" className="text-link">Founder & studio lead <span>↗</span></Link>
        </div>
        <div className="hero-signals" aria-label="Portfolio overview">
          <div><strong>{ventures.length}</strong><span>public project worlds</span></div>
          <div><strong>{ventureCategories.length - 1}</strong><span>working disciplines</span></div>
          <div><strong>01→04</strong><span>identify · design · test · build</span></div>
        </div>
      </div>
      <div className="hero-visual">
        <div className="hero-orbit orbit-one" aria-hidden="true" />
        <div className="hero-orbit orbit-two" aria-hidden="true" />
        <div className="hero-portrait-card">
          <Image
            src="/images/joseph-founder.png"
            alt="Joseph Jilovec, founder of Joseph Jilovec Venture Studio"
            fill
            priority
            sizes="(max-width: 900px) 92vw, 42vw"
          />
          <div className="portrait-overlay">
            <span>Founder file / 2026</span>
            <span>JJ · 33.4°N</span>
          </div>
        </div>
        <div className="signal-card signal-a"><small>Current signal</small><strong>Venture systems</strong><span>Architecture → deployment → scale</span></div>
      </div>
    </section>
  );
}
