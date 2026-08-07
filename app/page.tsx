import Link from "next/link";
import type { CSSProperties } from "react";
import { FounderHero } from "@/components/hero/FounderHero";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { VentureConstellation } from "@/components/ventures/VentureConstellation";
import { StudioLoop } from "@/components/interactive/StudioLoop";
import { ventures } from "@/lib/ventures";

export default function Home() {
  return (
    <>
      <FounderHero />

      <section className="section section-dark-edge">
        <SectionHeading index="01" eyebrow="Venture universe" title="A portfolio with explicit stages.">
          <p>Different ideas need different evidence. The parent brand makes it clear what is operating, what is designed, what is prototyped, and what is purely creative.</p>
        </SectionHeading>
        <VentureConstellation />
        <div className="section-action"><Link href="/ventures" className="button button-ghost">View all project files</Link></div>
      </section>

      <section className="section studio-section">
        <SectionHeading index="02" eyebrow="Studio operating system" title="Proof before promises.">
          <p>The studio is less interested in collecting ideas than in moving each one toward the next falsifiable step.</p>
        </SectionHeading>
        <StudioLoop />
      </section>

      <section className="section evidence-section">
        <SectionHeading index="03" eyebrow="Operating evidence" title="Credibility comes from specifics.">
          <p>The portfolio is intentionally careful about the difference between past operating experience, current experiments, and future possibilities.</p>
        </SectionHeading>
        <div className="evidence-grid">
          <article><span>01 / Commerce</span><strong>≈ $20K</strong><p>Peak monthly gross revenue at Jentlemens, based on founder records. Approximate, unaudited gross revenue—not profit, valuation, or current revenue.</p></article>
          <article><span>02 / Education</span><strong>B.A.</strong><p>Psychology · Northern Illinois University. Used as a behavioral-design lens rather than a substitute for clinical credentials.</p></article>
          <article><span>03 / Practice</span><strong>NGH</strong><p>Certified hypnotist. Applied here to attention, motivation, and behavior-design thinking within appropriate non-clinical boundaries.</p></article>
          <article><span>04 / Public build log</span><strong>28</strong><p>Public GitHub repositories currently visible on Joseph's profile, spanning systems experiments and software work.</p></article>
        </div>
      </section>

      <section className="section worlds-section">
        <div className="worlds-header">
          <SectionHeading index="04" eyebrow="Selected worlds" title="The projects are allowed to look different." />
          <p className="worlds-note">A parent brand should create coherence without forcing a music identity, a robotics system, and a transaction concept into the same costume.</p>
        </div>
        <div className="world-strip">
          {ventures.slice(3).map((venture) => (
            <Link href={`/ventures/${venture.slug}`} key={venture.slug} className="world-panel" style={{ "--venture-accent": venture.accent } as CSSProperties}>
              <span>{venture.eyebrow}</span>
              <h3>{venture.name}</h3>
              <p>{venture.summary}</p>
              <i>Open world ↗</i>
            </Link>
          ))}
        </div>
      </section>

      <section className="cta-band">
        <div><span>05 / Next conversation</span><h2>Build, back, test, license, or challenge something.</h2></div>
        <div><p>Choose the lane that fits: investor, technical collaborator, business partner, media, creative work, or music licensing.</p><Link href="/contact" className="button">Start a conversation</Link></div>
      </section>
    </>
  );
}
