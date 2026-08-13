import { PortfolioUniverse } from "@/components/ventures/PortfolioUniverse";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { pageMetadata } from "@/lib/metadata";
import { ventures } from "@/lib/portfolio";

export const metadata = pageMetadata(
  "Portfolio",
  "Explore all 15 public studio assets through an interactive portfolio command center spanning commerce, AI systems, behavioral wellness, civic infrastructure, and creative media.",
  "/portfolio",
);

export default function PortfolioPage() {
  return (
    <>
      <section className="page-hero compact-hero portfolio-page-hero">
        <div>
          <p className="hero-kicker">Portfolio / interactive command center</p>
          <h1>Multi-Asset Studio<br /><span>Architecture</span></h1>
        </div>
        <p>Check out the current active portfolio. Each company represents an enterprise framework, technology platform, or strategic venture currently mapped with a complete enterprise file, operating model, direction, and path to scale.</p>
      </section>

      <section className="section section-dark-edge portfolio-command-section">
        <SectionHeading index="01" eyebrow="Portfolio signal map" title="The Company Index">
          <p>All brands and entities managed within the network. Review individual models and current market focus.</p>
        </SectionHeading>
        <PortfolioUniverse />
      </section>
    </>
  );
}
