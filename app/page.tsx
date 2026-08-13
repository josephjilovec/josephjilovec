import Link from "next/link";
import { FounderHero } from "@/components/hero/FounderHero";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { FeaturedProjects } from "@/components/ventures/FeaturedProjects";
import { StudioLoop } from "@/components/interactive/StudioLoop";
import { ventures } from "@/lib/portfolio";

export default function Home() {
  return (
    <>
      <FounderHero />

      <section className="section worlds-section">
        <div className="worlds-header">
          <SectionHeading index="01" eyebrow="Featured projects" title="Featured assets from across the studio." />
          <p className="worlds-note">Portfolio assets spanning commerce, intelligent systems, civic infrastructure, and creative media. Open any project file to review its model, operating direction, and current priorities.</p>
        </div>

        <FeaturedProjects />
      </section>

      <section className="section studio-section">
        <SectionHeading index="02" eyebrow="Studio operating system" title="Direction at the center. Ownership at the venture level.">
          <p>The studio defines the commercial model, foundational architecture, capital priorities, and decision boundaries—then aligns the venture with operators and partners who can lead execution.</p>
        </SectionHeading>
        <StudioLoop />
      </section>

      <section className="section evidence-section">
        <SectionHeading index="03" eyebrow="Operating evidence" title="Credibility comes from specifics.">
          <p>Operating experience, behavioral training, technical architecture, and a growing portfolio of public assets.</p>
        </SectionHeading>
        <div className="evidence-grid">
          <article><span>01 / Commerce</span><strong>Scaled Commerce</strong><p>Track record of scaling digital commerce platforms, optimizing multi-channel operations, and building durable systems designed for sustained growth and structural revenue stability.</p></article>
          <article><span>02 / Education</span><strong>B.A.</strong><p>Psychology · Northern Illinois University. Used as a behavioral-design lens rather than a substitute for clinical credentials.</p></article>
          <article><span>03 / Practice</span><strong>NGH</strong><p>Certified hypnotist. Applied here to attention, motivation, and behavior-design thinking within appropriate non-clinical boundaries.</p></article>
          <article><span>04 / Portfolio</span><strong>{ventures.length}</strong><p>Featured projects across commerce, civic initiatives, behavioral services, technology concepts, AI advisory, music, genetics, and creative systems.</p></article>
        </div>
      </section>

      <section className="cta-band"><div><span>04 / Next conversation</span><h2>Lead, back, build, distribute, or advise the right venture.</h2></div><div><p>Choose the role that fits: operating leader, investor, technical collaborator, distribution partner, civic or nonprofit partner, adviser, media, or creative collaborator.</p><Link href="/contact" className="button">Start a conversation</Link></div></section>
    </>
  );
}
