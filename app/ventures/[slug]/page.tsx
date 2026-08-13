import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { VentureProofPanel } from "@/components/interactive/VentureProofPanel";
import { getVenture, ventures } from "@/lib/portfolio";
import { pageMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return ventures.map((venture) => ({ slug: venture.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const venture = getVenture(slug);
  if (!venture) return {};
  return pageMetadata(venture.name, venture.summary, `/portfolio/${venture.slug}`);
}

export default async function VenturePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const venture = getVenture(slug);
  if (!venture) notFound();

  return (
    <>
      <section className="project-hero" style={{ "--venture-accent": venture.accent, "--venture-soft": venture.accentSoft } as CSSProperties}>
        <div className="project-hero-copy">
          <Link href="/portfolio" className="back-link">← Portfolio</Link>
          <div className="project-meta"><span>{venture.category}</span><span>{venture.stage}</span></div>
          <p className="hero-kicker">{venture.eyebrow}</p>
          <h1>{venture.name}</h1>
          <p className="project-summary">{venture.summary}</p>
          <div className="hero-actions">
            {venture.externalUrl && <a className="button" href={venture.externalUrl} target="_blank" rel="noreferrer">{venture.externalLabel ?? "Visit project"} ↗</a>}
            <Link href={`/portfolio/${venture.slug}/capital`} className="button button-ghost">View capital file ↗</Link>
            <Link href={`/contact?venture=${encodeURIComponent(venture.name)}`} className="text-link">Discuss this project <span>↗</span></Link>
          </div>
        </div>
        <div className="project-hero-art">
          <Image src={venture.heroArt} alt={`${venture.name} project hero artwork`} fill priority sizes="(max-width: 900px) 100vw, 50vw" />
          <div className="project-art-caption"><span>PROJECT FILE / {venture.slug.toUpperCase()}</span><span>STAGE / {venture.stage.toUpperCase()}</span></div>
        </div>
      </section>

      <VentureProofPanel
        name={venture.name}
        slug={venture.slug}
        category={venture.category}
        stage={venture.stage}
        currentState={venture.currentState}
        nextMilestone={venture.nextMilestone}
        opportunity={venture.opportunity}
        externalUrl={venture.externalUrl}
        externalLabel={venture.externalLabel}
        heroArt={venture.heroArt}
        accent={venture.accent}
        accentSoft={venture.accentSoft}
      />

      <section className="section project-file-section"><div className="project-file-grid"><article><span>01 / Problem or territory</span><h2>What is being examined?</h2><p>{venture.problem}</p></article><article><span>02 / Thesis</span><h2>What might be true?</h2><p>{venture.thesis}</p></article><article><span>03 / What exists now</span><h2>What exists now?</h2><p>{venture.currentState}</p></article><article><span>04 / Founder role</span><h2>What Joseph is doing.</h2><p>{venture.founderRole}</p></article><article><span>05 / Next milestone</span><h2>What has to happen next?</h2><p>{venture.nextMilestone}</p></article><article><span>06 / Opportunity</span><h2>Who could materially help?</h2><p>{venture.opportunity}</p></article></div></section>
      <section className="project-disclaimer" style={{ "--venture-accent": venture.accent } as CSSProperties}><span>Project information</span><p>{venture.stage === "Creative project" ? "This is a creative identity and public catalog, not a venture-traction claim." : venture.stage === "Active brand" ? "This is a public operating brand. Specific product, regulatory, market, financial, or performance claims should still be evaluated on their own evidence and current legal context." : "This page describes the current venture architecture and public operating direction. Future capabilities, economics, product specifications, or market outcomes are not presented as independently verified achievements unless explicitly labeled as evidence."}</p></section>
    </>
  );
}
