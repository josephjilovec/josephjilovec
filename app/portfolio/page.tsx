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
          <h1>{ventures.length} public project worlds.<br /><span>One studio engine.</span></h1>
        </div>
        <p>Inspect the full portfolio of commercial brands, AI systems, behavioral platforms, civic initiatives, and creative properties. Each signal opens a project file with its model, operating direction, current priorities, and path to scale.</p>
      </section>

      <section className="section section-dark-edge portfolio-command-section">
        <SectionHeading index="01" eyebrow="Portfolio signal map" title="Every project, visible at once.">
          <p>Select any project world to inspect its stage and direction, open its complete project file, visit the public site, or start a conversation.</p>
        </SectionHeading>
        <PortfolioUniverse />
      </section>
    </>
  );
}
