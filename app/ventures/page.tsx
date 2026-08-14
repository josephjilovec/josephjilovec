import { VentureGrid } from "@/components/ventures/VentureGrid";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { pageMetadata } from "@/lib/metadata";
import { ventures } from "@/lib/portfolio";

export const metadata = pageMetadata("Portfolio", "Explore all 15 active studio assets across commerce, AI systems, behavioral wellness, civic infrastructure, and creative media.", "/portfolio");

export default function VenturesPage() {
  return (
    <>
      <style>{`@media (min-width: 721px){.venture-tab-scale{zoom:1.25;width:80%;margin:0 auto}}`}</style>
      <div className="venture-tab-scale">
        <section className="page-hero compact-hero">
          <div>
            <p className="hero-kicker">Master asset directory / current portfolio</p>
            <h1>{ventures.length} active studio assets.<br /><span>Built across five markets.</span></h1>
          </div>
          <p>Explore the studio&apos;s complete portfolio of commercial brands, AI systems, behavioral platforms, civic initiatives, and creative properties. Each project file presents the value proposition, operating model, current priorities, and path to scale.</p>
        </section>
        <section className="section ventures-index-section">
          <SectionHeading index="01" eyebrow="Portfolio directory" title="Explore every venture by market." />
          <VentureGrid />
        </section>
      </div>
    </>
  );
}
