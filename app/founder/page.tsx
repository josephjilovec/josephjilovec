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
          <p className="hero-kicker">Founder & studio leadership / Joseph Jilovec</p>
          <h1>Cross-disciplinary leadership built for venture deployment.</h1>
          <p>Joseph Jilovec combines behavioral science, custom AI workflow automation, brand strategy, product architecture, and commercial execution to build and direct a portfolio of 15 studio assets.</p>
          <div className="hero-actions"><Link href="/contact#brief" className="button">Request a founder briefing</Link><a className="text-link" href={site.linkedin} target="_blank" rel="noreferrer">View LinkedIn <span>↗</span></a></div>
        </div>
      </section>
      <section className="section">
        <SectionHeading index="01" eyebrow="Background" title="Business, behavior, technology, and brand direction.">
          <p>Joseph&apos;s leadership model comes from connecting disciplines that are often separated: understanding how people make decisions, how businesses operate, how technical systems are structured, and how brands earn attention and trust.</p>
        </SectionHeading>
        <FounderTimeline />
      </section>
      <section className="section disciplines-section">
        <SectionHeading index="02" eyebrow="Core capabilities" title="Four capabilities that move assets from architecture to execution." />
        <div className="discipline-grid">
          <article><span>01</span><h3>AI systems integration</h3><p>Custom AI workflows, agent coordination, automation planning, data and governance requirements, and practical integration into real operating processes.</p></article>
          <article><span>02</span><h3>Behavioral engineering</h3><p>Attention, motivation, decision architecture, focus conditioning, adoption, and ethical persuasion informed by psychology and hypnosis training.</p></article>
          <article><span>03</span><h3>Product architecture</h3><p>Turning commercial and human problems into clear offers, workflows, technical requirements, interfaces, controls, and build sequences.</p></article>
          <article><span>04</span><h3>Commercial execution</h3><p>Brand strategy, customer acquisition, pricing, digital commerce, fulfillment, reputation, market entry, and operational decision-making.</p></article>
        </div>
      </section>
      <section className="founder-partner-cta">
        <div><span>03 / Investor & operator access</span><h2>Discuss a venture directly with the founder.</h2></div>
        <div><p>Accredited investors and operational partners can request a focused conversation about a selected asset, its commercial model, execution priorities, and partnership requirements.</p><Link className="button" href="/contact#brief">Request a founder briefing</Link></div>
      </section>
    </>
  );
}
