import Image from "next/image";
import Link from "next/link";
import { ventures } from "@/lib/ventures";

export function FounderHero() {
  return (
    <section className="hero-shell">
      <div className="hero-grid-lines" aria-hidden="true" />
      <div className="hero-copy">
        <p className="hero-kicker">Founder · Venture builder · Creative operator · Phoenix, Arizona</p>
        <h1>
          One studio.<br />
          <span>Several worlds.</span>
        </h1>
        <p className="hero-lede">
          Joseph Jilovec develops venture concepts, technical systems, behavioral formats, and creative projects—then makes the current stage, evidence, and next step visible.
        </p>
        <div className="hero-actions">
          <Link href="/ventures" className="button">Explore the venture universe</Link>
          <Link href="/founder" className="text-link">Founder blueprint <span>↗</span></Link>
        </div>
        <div className="hero-signals" aria-label="Portfolio overview">
          <div><strong>{ventures.length}</strong><span>public project worlds</span></div>
          <div><strong>4</strong><span>working disciplines</span></div>
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
        <div className="signal-card signal-a"><small>Current signal</small><strong>Venture systems</strong><span>Thesis → prototype → proof</span></div>
        <div className="signal-card signal-b"><small>Creative channel</small><strong>DJ Hotwax</strong><span>Music without a fixed genre</span></div>
      </div>
    </section>
  );
}
