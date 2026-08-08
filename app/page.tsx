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
          <article><span>01 / Commerce</span><strong>Scaled Commerce</strong><p>Track record of scaling digital commerce platforms, optimizing multi-channel operations, and building durable systems designed for sustained growth and structural revenue stability.</p></article>
          <article><span>02 / Education</span><strong>B.A.</strong><p>Psychology · Northern Illinois University. Used as a behavioral-design lens rather than a substitute for clinical credentials.</p></article>
          <article><span>03 / Practice</span><strong>NGH</strong><p>Certified hypnotist. Applied here to attention, motivation, and behavior-design thinking within appropriate non-clinical boundaries.</p></article>
          <article><span>04 / Portfolio</span><strong>7</strong><p>Featured projects across commerce, behavioral services, technology concepts, music, genetics, and creative systems.</p></article>
        </div>
      </section>

      <section className="section worlds-section">
        <div className="worlds-header">
          <SectionHeading index="04" eyebrow="Selected worlds" title="The projects are allowed to look different." />
          <p className="worlds-note">A parent brand should create coherence without forcing a music identity, an adaptive technology concept, a seed brand, and a transaction venture into the same costume.</p>
        </div>
        <div className="world-strip">
          {ventures.slice(2).map((venture) => (
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
