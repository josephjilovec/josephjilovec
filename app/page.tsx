import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { FounderHero } from "@/components/hero/FounderHero";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { PortfolioUniverse } from "@/components/ventures/PortfolioUniverse";
import { StudioLoop } from "@/components/interactive/StudioLoop";
import { ventures } from "@/lib/portfolio";
import styles from "./home.module.css";

const selectedWorldSlugs = [
  "swift-deal-solutions",
  "vanta-helix",
  "united-american-future",
  "dj-hotwax",
] as const;

const selectedWorlds = selectedWorldSlugs
  .map((slug) => ventures.find((venture) => venture.slug === slug))
  .filter((venture): venture is (typeof ventures)[number] => Boolean(venture));

export default function Home() {
  return (
    <>
      <FounderHero />

      <section className="section worlds-section">
        <div className="worlds-header">
          <SectionHeading index="01" eyebrow="Featured projects" title="Selected assets from across the studio." />
          <p className="worlds-note">Four active studio assets spanning commerce, intelligent systems, civic infrastructure, and creative media. Open any project file to review its model, operating direction, and current priorities.</p>
        </div>

        <div className={styles.selectedWorldsGrid}>
          {selectedWorlds.map((venture, index) => (
            <Link href={`/ventures/${venture.slug}`} key={venture.slug} className={`${styles.selectedWorld} ${index === 0 || index === 3 ? styles.wide : ""}`} style={{ "--venture-accent": venture.accent } as CSSProperties}>
              <div className={styles.worldImage} aria-hidden="true"><Image src={venture.heroArt ?? venture.art} alt="" fill sizes="(max-width: 640px) 100vw, (max-width: 900px) 50vw, 66vw" /></div>
              <div className={styles.worldShade} aria-hidden="true" />
              <div className={styles.worldContent}>
                <div className={styles.worldMeta}><span>{venture.category}</span><span>{venture.stage}</span></div>
                <div><p>{venture.eyebrow}</p><h3>{venture.name}</h3><div className={styles.worldFooter}><span>{venture.summary}</span><i>Explore project file ↗</i></div></div>
              </div>
            </Link>
          ))}
        </div>

        <div className={styles.worldsCta}><span>Selected work</span><Link href="/ventures" className="text-link">View all 15 ventures <span>↗</span></Link></div>
      </section>

      <section className="section section-dark-edge venture-universe-section">
        <SectionHeading index="02" eyebrow="Venture universe" title="Fifteen assets. One studio engine.">
          <p>The portfolio brings together distinct ventures, brands, platforms, civic initiatives, and creative properties under a shared operating architecture.</p>
        </SectionHeading>
        <PortfolioUniverse />
        <div className="section-action"><Link href="/ventures" className="button button-ghost">View all project files</Link></div>
      </section>

      <section className="section studio-section">
        <SectionHeading index="03" eyebrow="Studio operating system" title="Architecture that moves assets forward.">
          <p>The studio gives each venture a clear commercial model, operating structure, deployment path, and next measurable objective.</p>
        </SectionHeading>
        <StudioLoop />
      </section>

      <section className="section evidence-section">
        <SectionHeading index="04" eyebrow="Operating evidence" title="Credibility comes from specifics.">
          <p>The studio combines operating experience, behavioral training, technical architecture, and a growing portfolio of public assets.</p>
        </SectionHeading>
        <div className="evidence-grid">
          <article><span>01 / Commerce</span><strong>Scaled Commerce</strong><p>Track record of scaling digital commerce platforms, optimizing multi-channel operations, and building durable systems designed for sustained growth and structural revenue stability.</p></article>
          <article><span>02 / Education</span><strong>B.A.</strong><p>Psychology · Northern Illinois University. Used as a behavioral-design lens rather than a substitute for clinical credentials.</p></article>
          <article><span>03 / Practice</span><strong>NGH</strong><p>Certified hypnotist. Applied here to attention, motivation, and behavior-design thinking within appropriate non-clinical boundaries.</p></article>
          <article><span>04 / Portfolio</span><strong>{ventures.length}</strong><p>Featured projects across commerce, civic initiatives, behavioral services, technology concepts, AI advisory, music, genetics, and creative systems.</p></article>
        </div>
      </section>

      <section className="cta-band"><div><span>05 / Next conversation</span><h2>Build, back, test, license, support, or challenge something.</h2></div><div><p>Choose the lane that fits: investor, technical collaborator, civic or nonprofit partner, business partner, media, creative work, or music licensing.</p><Link href="/contact" className="button">Start a conversation</Link></div></section>
    </>
  );
}
