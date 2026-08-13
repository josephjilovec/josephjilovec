import Link from "next/link";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Studio Model", "How the Joseph Jilovec Venture Studio connects ventures across commerce, technology, civic infrastructure, behavioral design, and creative work.", "/studio");

export default function StudioPage() {
  return (
    <>
      <section className="page-hero">
        <div><p className="hero-kicker">Studio operating engine</p><h1>Build centrally.<br /><span>Scale deliberately.</span></h1></div>
        <p>Joseph Jilovec Venture Studio develops distinct companies and public-facing assets through one central operating system for architecture, execution, deployment, and growth.</p>
      </section>

      <section className="section studio-operating-section">
        <SectionHeading index="01" eyebrow="Operating model" title="One command layer across multiple ventures." />
        <div className="studio-operating-grid">
          <article className="studio-operating-lead">
            <p>The studio maintains central responsibility for venture architecture, brand direction, digital product design, operating priorities, and deployment sequencing. That structure gives every asset a defined owner, market position, commercial path, and next execution target.</p>
          </article>
          <div className="studio-operating-points">
            <article><span>01</span><h3>Architect</h3><p>Define the customer, value proposition, business model, product system, operating requirements, and defensible market position.</p></article>
            <article><span>02</span><h3>Deploy</h3><p>Turn the architecture into a public brand, digital product, commercial workflow, partnership channel, or operating platform.</p></article>
            <article><span>03</span><h3>Scale</h3><p>Direct capital, talent, distribution, automation, and strategic relationships toward the constraints that most affect growth.</p></article>
          </div>
        </div>
      </section>

      <section className="section studio-infrastructure-section">
        <SectionHeading index="02" eyebrow="Shared infrastructure" title="Build once. Apply across the portfolio." />
        <p className="studio-section-lede">The 15 ventures remain distinct companies and brands, but they benefit from a common infrastructure layer that reduces repeated work and increases operating leverage.</p>
        <div className="studio-infrastructure-grid">
          <article><span>AI automation</span><h3>Connected workflows</h3><p>Reusable AI-assisted research, content, analysis, routing, and operational systems support faster execution across multiple asset categories.</p></article>
          <article><span>Brand frameworks</span><h3>Distinct identities, shared discipline</h3><p>Each venture receives its own market language and visual world while drawing from a common standard for positioning, trust, and conversion.</p></article>
          <article><span>Operational pipelines</span><h3>Repeatable deployment</h3><p>Product planning, web delivery, documentation, measurement, partner outreach, and iteration follow a reusable studio workflow.</p></article>
          <article><span>Portfolio intelligence</span><h3>Learning compounds</h3><p>Commercial, technical, behavioral, and market lessons from one asset improve decisions across the rest of the portfolio.</p></article>
        </div>
      </section>

      <section className="section studio-capital-section">
        <SectionHeading index="03" eyebrow="Capital & scale strategy" title="Capital follows a defined operating objective." />
        <div className="studio-capital-grid">
          <article><strong>Strategic capital</strong><p>Direct investment can fund specific product, distribution, hiring, infrastructure, or market-entry objectives within a selected company.</p></article>
          <article><strong>Operating leadership</strong><p>Experienced partners can take responsibility for day-to-day execution and turn a studio-built asset into a focused standalone operation.</p></article>
          <article><strong>Distribution partnerships</strong><p>Channel access, customer relationships, manufacturing, licensing, and institutional partnerships can accelerate market reach without rebuilding the core asset.</p></article>
        </div>
      </section>

      <section className="cta-band"><div><span>04 / Private materials</span><h2>Review the architecture behind a selected venture.</h2></div><div><p>Accredited investors, operating partners, and strategic collaborators can request a focused briefing on the asset, commercial model, priorities, and capital strategy.</p><Link className="button" href="/contact#brief">Request venture materials</Link></div></section>
    </>
  );
}
