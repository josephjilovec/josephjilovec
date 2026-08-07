import Link from "next/link";
import { StudioLoop } from "@/components/interactive/StudioLoop";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Studio Model", "How the Joseph Jilovec Venture Studio identifies, designs, tests, and builds new ventures.", "/studio");

export default function StudioPage() {
  return (
    <>
      <section className="page-hero">
        <div><p className="hero-kicker">Studio model / 01 → 04</p><h1>A good idea is only the <span>starting point.</span></h1></div>
        <p>The studio is a way to turn a promising thesis into something serious people can evaluate. Every project should show the assumptions, the evidence, the risks, and the next measurable step.</p>
      </section>
      <section className="section"><SectionHeading index="01" eyebrow="Operating loop" title="Identify → Design → Test → Build." /><StudioLoop /></section>
      <section className="section decision-section">
        <SectionHeading index="02" eyebrow="Decision discipline" title="What has to be true before the next commitment?" />
        <div className="decision-grid">
          <article><span>Market</span><h3>Is there a real customer and a painful enough problem?</h3><p>Interview evidence, demand signals, willingness to pay, channel access, or a reason to keep investigating.</p></article>
          <article><span>Product</span><h3>Can the core promise actually be demonstrated?</h3><p>A prototype, service pilot, technical benchmark, or creative release that exposes where the idea breaks.</p></article>
          <article><span>Operations</span><h3>Can the workflow survive reality?</h3><p>Clear roles, dependencies, compliance boundaries, unit economics, failure handling, and who owns the hard parts.</p></article>
          <article><span>Capital</span><h3>What does money unlock right now?</h3><p>Capital should fund a defined validation, build, or market-entry milestone—not simply make an idea look more official.</p></article>
        </div>
      </section>
      <section className="cta-band"><div><span>03 / Private materials</span><h2>Need the full thesis, assumptions, and roadmap?</h2></div><div><p>Selected projects can support a more detailed private brief for serious collaborators, operators, or early-stage investors.</p><Link className="button" href="/contact#brief">Request venture materials</Link></div></section>
    </>
  );
}
