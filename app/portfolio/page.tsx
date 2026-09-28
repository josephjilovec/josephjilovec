import { VentureGrid } from "@/components/ventures/VentureGrid";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { pageMetadata } from "@/lib/metadata";
import { ventures } from "@/lib/portfolio";

export const metadata = pageMetadata(
  "Portfolio",
  "Explore the Joseph Jilovec Venture Studio operating portfolio across commerce, technology, behavioral design, civic initiatives, and creative media.",
  "/portfolio",
);

export default function PortfolioPage() {
  const flagshipCount = ventures.filter((venture) => venture.tier === "Flagship Assets").length;
  const activeCount = ventures.filter((venture) => venture.tier === "Active Validations").length;
  const conceptCount = ventures.filter((venture) => venture.tier === "Incubation Concepts").length;

  return (
    <>
      <section className="page-hero compact-hero portfolio-page-hero">
        <div>
          <p className="hero-kicker">Portfolio / Company Index</p>
          <h1>Multi-Asset Studio<br /><span>Portfolio</span></h1>
          <div className="hero-signals portfolio-hero-signals" aria-label="Portfolio summary">
            <div><strong>{ventures.length}</strong><span>Total ventures</span></div>
            <div><strong>{flagshipCount}</strong><span>Flagship assets</span></div>
            <div><strong>{activeCount + conceptCount}</strong><span>Validation + concept work</span></div>
          </div>
        </div>
        <p>
          A direct index of the studio's current venture set. Browse by maturity or sector, open any Project File for the operating context, or jump directly to the venture's public website when one is available.
        </p>
      </section>

      <section className="section section-dark-edge portfolio-command-section">
        <SectionHeading index="01" eyebrow="Operating portfolio" title="The Company Index">
          <p>
            Every venture is visible in the directory. The portfolio separates Flagship Assets, Active Validations, and Incubation Concepts, while the sector filter narrows the set without hiding individual company access.
          </p>
        </SectionHeading>
        <VentureGrid />
      </section>
    </>
  );
}
