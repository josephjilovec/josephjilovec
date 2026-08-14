import { PortfolioUniverse } from "@/components/ventures/PortfolioUniverse";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Portfolio",
  "Explore the Joseph Jilovec Venture Studio operating portfolio across commerce, technology, behavioral design, civic initiatives, and creative media.",
  "/portfolio",
);

export default function PortfolioPage() {
  return (
    <>
      <style>{`@media (min-width: 721px){.venture-tab-scale{zoom:1.25;width:80%;margin:0 auto}}`}</style>
      <div className="venture-tab-scale">
        <section className="page-hero compact-hero portfolio-page-hero">
          <div>
            <p className="hero-kicker">Portfolio / Company Index</p>
            <h1>Multi-Asset Studio<br /><span>Portfolio</span></h1>
          </div>
          <p>Review the current portfolio across commercial brands, technology platforms, behavioral concepts, civic initiatives, and creative properties. Each project file presents its operating context, current direction, and public materials.</p>
        </section>

        <section className="section section-dark-edge portfolio-command-section">
          <SectionHeading index="01" eyebrow="Operating portfolio" title="The Company Index">
            <p>Browse the ventures and projects currently represented within the studio portfolio.</p>
          </SectionHeading>
          <PortfolioUniverse />
        </section>
      </div>
    </>
  );
}
