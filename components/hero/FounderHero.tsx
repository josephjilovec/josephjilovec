import Image from "next/image";
import Link from "next/link";
import { ventureCategories, ventures } from "@/lib/portfolio";

export function FounderHero() {
  return (
    <section className="hero-shell">
      <div className="hero-grid-lines" aria-hidden="true" />
      <div className="hero-copy">
        <p className="hero-kicker">Venture Architect · Strategic Advisor · Phoenix, Arizona</p>
        <h1>
          Cross-Disciplinary Vision<br />
          <span>Built for Venture Deployment</span>
        </h1>
        <p className="hero-lede">
          A multi-asset studio portfolio where capital and attention can create leverage.
        </p>
        <div className="hero-actions">
          <Link href="/portfolio" className="button">Explore the Venture Universe</Link>
          <Link href="/founder" className="text-link">Founder & Studio Lead <span>↗</span></Link>
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
        <div className="hero-network-card" aria-hidden="true">
          <Image
            src="/images/studio-network-field.svg"
            alt=""
            fill
            priority
            sizes="(max-width: 900px) 92vw, 42vw"
          />
        </div>
      </div>
    </section>
  );
}
