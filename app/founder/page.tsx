import Image from "next/image";
import Link from "next/link";
import { FounderScrollController } from "@/components/founder/FounderScrollController";
import { FounderTimeline } from "@/components/founder/FounderTimeline";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata = pageMetadata("Founder", "Joseph Jilovec leads a multi-asset venture studio through venture design, portfolio strategy, capital alignment, product architecture, and operator partnerships.", "/founder");

export default function FounderPage() {
  return (
    <div className="founder-story" id="founder-story">
      <FounderScrollController rootId="founder-story" />

      <section className="founder-story-phase founder-intro-phase" data-founder-phase="intro">
        <div className="founder-story-stage founder-intro-stage">
          <div className="founder-story-index"><span>00</span>Introduction &amp; narrative</div>
          <div className="founder-intro-layout">
            <div className="founder-intro-portrait">
              <Image src="/images/joseph-founder.png" alt="Joseph Jilovec" fill priority sizes="(max-width: 900px) 100vw, 42vw" />
              <div className="founder-portrait-caption"><span>Founder file</span><span>Joseph Jilovec</span></div>
            </div>
            <div className="founder-intro-copy">
              <p className="hero-kicker">Strategic advisor / Joseph Jilovec</p>
              <h1>Cross-disciplinary vision built for venture <span>deployment.</span></h1>
              <p className="founder-intro-overview" data-founder-intro-reveal>Joseph Jilovec leads a multi-asset studio portfolio by pairing commercial strategy with behavioral insight and foundational product architecture. He designs ventures, collaborates on strategic directions, helps identify where capital and attention can create leverage, and brings the right operators and cross-functional partners into each asset.</p>
              <div className="hero-actions" data-founder-intro-reveal><Link href="/contact#brief" className="button">Request a founder briefing</Link><a className="text-link" href={site.linkedin} target="_blank" rel="noreferrer">View LinkedIn <span>↗</span></a></div>
            </div>
          </div>
        </div>
      </section>

      <section className="founder-story-phase founder-model-phase" data-founder-phase="model">
        <div className="founder-story-stage founder-model-stage">
          <div className="founder-story-index"><span>01</span>Studio lead model</div>
          <div className="founder-model-layout">
            <div className="founder-phase-copy">
              <h2>Set the direction. Align the resources. <span>Empower the people.</span></h2>
              <p>Joseph serves as a strategic consultant, advising on venture direction, portfolio strategy, and partner alignment. Venture-level leaders drive daily performance and implementation, backed by regular strategic reviews and collaborative problem-solving to keep execution aligned with the core vision.</p>
            </div>
            <FounderTimeline />
          </div>
        </div>
      </section>

      <section className="founder-story-phase founder-lenses-phase" data-founder-phase="lenses">
        <div className="founder-story-stage founder-lenses-stage">
          <div className="founder-story-index"><span>02</span>Foundational lenses</div>
          <div className="founder-lenses-heading"><h2>The perspective behind every <span>venture decision.</span></h2><p>Four lenses guide how opportunities are framed, resources are directed, and venture foundations are built.</p></div>
          <div className="founder-lens-grid">
            <article className="founder-lens-card" data-founder-lens><span>01 / Commercial</span><h3>Commercial strategy</h3><p>Define the market opening, customer, offer, revenue logic, competitive position, and path through which an asset can become a durable standalone company.</p></article>
            <article className="founder-lens-card" data-founder-lens><span>02 / Behavioral</span><h3>Behavioral insight</h3><p>Apply psychology-informed thinking about attention, motivation, decisions, adoption, and trust to product design and market strategy.</p></article>
            <article className="founder-lens-card" data-founder-lens><span>03 / Product</span><h3>Product architecture</h3><p>Translate the venture into foundational workflows, interfaces, technical requirements, controls, and build priorities that a cross-functional team can execute.</p></article>
            <article className="founder-lens-card" data-founder-lens><span>04 / Portfolio</span><h3>Portfolio judgment</h3><p>Determine where founder attention, capital, operating capacity, and strategic relationships can create the greatest leverage across the portfolio.</p></article>
          </div>
        </div>
      </section>

      <section className="founder-story-phase founder-alignment-phase" data-founder-phase="alignment">
        <div className="founder-story-stage founder-alignment-stage">
          <div className="founder-story-index"><span>03</span>Operator &amp; capital alignment</div>
          <div className="founder-alignment-panel">
            <div data-founder-alignment-reveal><h2>The right people should lead the right parts of <span>each company.</span></h2></div>
            <div data-founder-alignment-reveal><p>Joseph is actively building and shaping this studio model, looking to collaborate with aligned operators, technical leaders, and domain experts who want to take real ownership within a growing venture. The goal is to build sustainable companies with autonomous leadership—not a portfolio bottlenecked by a single founder.</p><Link className="button" href="/contact#brief">Discuss an asset with Joseph</Link></div>
          </div>
        </div>
      </section>
    </div>
  );
}
