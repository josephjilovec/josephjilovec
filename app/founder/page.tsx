import Image from "next/image";
import Link from "next/link";
import { FounderTimeline } from "@/components/founder/FounderTimeline";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata = pageMetadata("Founder", "Joseph Jilovec leads a multi-asset venture studio through venture design, portfolio strategy, capital alignment, product architecture, and operator partnerships.", "/founder");

export default function FounderPage() {
  return (
    <>
      <section className="founder-page-hero">
        <div className="founder-page-image"><Image src="/images/joseph-founder.png" alt="Joseph Jilovec" fill priority sizes="(max-width: 900px) 100vw, 44vw" /></div>
        <div className="founder-page-copy">
          <p className="hero-kicker">Studio lead & strategic advisor / Joseph Jilovec</p>
          <h1>Cross-disciplinary vision built for venture deployment.</h1>
          <p>Joseph Jilovec directs a multi-asset studio portfolio by pairing commercial strategy with behavioral insight and foundational product architecture. He designs ventures, sets strategic directions, determines where capital and attention can create leverage, and brings the right operators and cross-functional partners into each asset.</p>
          <div className="hero-actions"><Link href="/contact#brief" className="button">Request a founder briefing</Link><a className="text-link" href={site.linkedin} target="_blank" rel="noreferrer">View LinkedIn <span>↗</span></a></div>
        </div>
      </section>
      <section className="section">
        <SectionHeading index="01" eyebrow="Studio lead model" title="Set the direction. Align the resources. Empower the operator.">
          <p>Joseph remains accountable for the venture thesis, strategic direction, portfolio priorities, and partner alignment. Venture-level leaders own implementation and daily performance within clear decision boundaries.</p>
        </SectionHeading>
        <FounderTimeline />
      </section>
      <section className="section disciplines-section">
        <SectionHeading index="02" eyebrow="Foundational lenses" title="The perspective behind every venture decision." />
        <div className="discipline-grid">
          <article><span>01</span><h3>Commercial strategy</h3><p>Define the market opening, customer, offer, revenue logic, competitive position, and path through which an asset can become a durable standalone company.</p></article>
          <article><span>02</span><h3>Behavioral insight</h3><p>Apply psychology-informed thinking about attention, motivation, decisions, adoption, and trust to product design and market strategy.</p></article>
          <article><span>03</span><h3>Product architecture</h3><p>Translate the venture thesis into foundational workflows, interfaces, technical requirements, controls, and build priorities that a cross-functional team can execute.</p></article>
          <article><span>04</span><h3>Portfolio judgment</h3><p>Determine where founder attention, capital, operating capacity, and strategic relationships can create the greatest leverage across the portfolio.</p></article>
        </div>
      </section>
      <section className="founder-partner-cta">
        <div><span>03 / Operator & capital alignment</span><h2>The right people should lead the right parts of each company.</h2></div>
        <div><p>Joseph acts as studio lead and strategic advisor, collaborating with aligned operators, technical leaders, functional specialists, advisers, and capital partners who can take real ownership within a selected venture. The objective is a sustainable company with capable leadership—not a portfolio bottlenecked by one founder.</p><Link className="button" href="/contact#brief">Discuss an asset with Joseph</Link></div>
      </section>
    </>
  );
}
