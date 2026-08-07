import Link from "next/link";
import type { CSSProperties } from "react";
import Image from "next/image";
import { ventures } from "@/lib/ventures";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata = pageMetadata("Technology", "Robotics, AI systems, adaptive-interface concepts, and technical experiments by Joseph Jilovec.", "/technology");

export default function TechnologyPage() {
  const tech = ventures.filter((venture) => venture.category === "Technology");
  return (
    <>
      <section className="page-hero tech-hero"><div><p className="hero-kicker">Technology / systems & prototypes</p><h1>Architecture before <span>automation theater.</span></h1></div><p>Joseph's technical work focuses on orchestration, decision systems, adaptive interfaces, and experiments that make assumptions visible. The parent site labels prototypes as prototypes.</p></section>
      <section className="section"><SectionHeading index="01" eyebrow="Current systems" title="Three public technology directions." />
        <div className="tech-projects">
          {tech.map((venture) => <article key={venture.slug} style={{ "--venture-accent": venture.accent } as CSSProperties}><div className="tech-art"><Image src={venture.art} alt="" fill sizes="(max-width: 800px) 100vw, 33vw" /></div><span>{venture.stage}</span><h3>{venture.name}</h3><p>{venture.summary}</p><Link href={`/ventures/${venture.slug}`} className="text-link">Open technical file <span>↗</span></Link></article>)}
        </div>
      </section>
      <section className="section systems-principles"><SectionHeading index="02" eyebrow="Systems principles" title="The architecture should make tradeoffs explicit." />
        <div className="principle-list"><div><span>01</span><strong>Capability-aware delegation</strong><p>Assign work based on what an agent or robot can actually do, not a generic “AI” label.</p></div><div><span>02</span><strong>Observable decisions</strong><p>Important assumptions, handoffs, dissent, and failure states should remain inspectable.</p></div><div><span>03</span><strong>Human override</strong><p>Automation is more credible when escalation and stop conditions are designed in from the beginning.</p></div><div><span>04</span><strong>Private by architecture</strong><p>For sensitive systems, local processing and data minimization should be product decisions—not marketing copy added later.</p></div></div>
      </section>
      <section className="link-band"><div><span>Public build log</span><h2>See the repositories behind the systems work.</h2></div><a className="button" href={site.github} target="_blank" rel="noreferrer">Open GitHub ↗</a></section>
    </>
  );
}
