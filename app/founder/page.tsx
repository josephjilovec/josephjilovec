import Image from "next/image";
import Link from "next/link";
import { FounderTimeline } from "@/components/founder/FounderTimeline";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata = pageMetadata("Founder", "Joseph Jilovec's founder background, operating experience, behavioral-design lens, and systems work.", "/founder");

export default function FounderPage() {
  return (
    <>
      <section className="founder-page-hero">
        <div className="founder-page-image"><Image src="/images/joseph-founder.png" alt="Joseph Jilovec" fill priority sizes="(max-width: 900px) 100vw, 44vw" /></div>
        <div className="founder-page-copy">
          <p className="hero-kicker">Founder blueprint / Joseph Jilovec</p>
          <h1>Operator, behavioral thinker, systems builder, creative.</h1>
          <p>I build ventures using experience from running businesses, studying human behavior, working with technical systems, and making creative work. The value is in connecting those disciplines without pretending they are interchangeable.</p>
          <div className="hero-actions"><a className="button" href={site.github} target="_blank" rel="noreferrer">View GitHub ↗</a><Link href="/contact" className="text-link">Work together <span>↗</span></Link></div>
        </div>
      </section>
      <section className="section">
        <SectionHeading index="01" eyebrow="Working history" title="A founder story built from transitions, not mythology.">
          <p>The timeline emphasizes what each chapter contributes to the studio today.</p>
        </SectionHeading>
        <FounderTimeline />
      </section>
      <section className="section disciplines-section">
        <SectionHeading index="02" eyebrow="Four working disciplines" title="Different lenses. One operating model." />
        <div className="discipline-grid">
          <article><span>01</span><h3>Commercial operations</h3><p>Customer acquisition, pricing, fulfillment, reputation, supply-chain adaptation, and practical business constraints learned through operating work.</p></article>
          <article><span>02</span><h3>Behavioral design</h3><p>Attention, motivation, decision architecture, habit formation, focus conditioning, and ethical persuasion informed by psychology and hypnosis training.</p></article>
          <article><span>03</span><h3>Product & systems logic</h3><p>Turning a commercial or human problem into workflows, requirements, technical choices, experiments, and language that builders can act on.</p></article>
          <article><span>04</span><h3>Creative direction</h3><p>Music, identity systems, visual worlds, narrative framing, and the instinct to make a project memorable without confusing aesthetics with evidence.</p></article>
        </div>
      </section>
      <section className="founder-quote-band"><blockquote>“I do not need to pretend to be the final expert in every discipline. My role is to find the opportunity, connect the business and product logic, identify what still needs to be proven, and bring the right people into the venture.”</blockquote><span>Founder principle / current studio site</span></section>
    </>
  );
}
