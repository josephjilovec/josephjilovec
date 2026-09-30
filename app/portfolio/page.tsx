import { VentureGrid } from "@/components/ventures/VentureGrid";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { pageMetadata } from "@/lib/metadata";
import { ventures } from "@/lib/portfolio";

export const metadata = pageMetadata(
  "Portfolio",
  "Explore the Joseph Jilovec Venture Studio portfolio through Flagship Assets, Active Validations, and Incubation Concepts.",
  "/portfolio"
);

export default function VenturesPage() {
  return (
    <>
      <style>{`
        html:has(.portfolio-page-dark),
        body:has(.portfolio-page-dark),
        main:has(.portfolio-page-dark) {
          background: #07090b !important;
          color: #f4f1e9 !important;
        }

        body:has(.portfolio-page-dark) .site-header {
          background: rgba(7,9,11,.78) !important;
          border-bottom-color: rgba(255,255,255,.10) !important;
          box-shadow: none !important;
        }

        .portfolio-page-dark {
          min-height: calc(100vh - 76px);
          background:
            radial-gradient(circle at 80% -10%, rgba(85,217,255,.08), transparent 26rem),
            #07090b;
          color: #f4f1e9;
        }

        .portfolio-page-dark .page-hero,
        .portfolio-page-dark .section,
        .portfolio-page-dark .ventures-index-section {
          background: transparent !important;
          color: #f4f1e9;
        }

        .portfolio-page-dark .page-hero > p,
        .portfolio-page-dark .section-heading p,
        .portfolio-page-dark .venture-tier-heading small,
        .portfolio-page-dark .portfolio-sector-filter {
          color: #9ca8b2 !important;
        }

        .portfolio-page-dark .page-hero h1,
        .portfolio-page-dark .section-heading h2,
        .portfolio-page-dark .venture-tier-heading span,
        .portfolio-page-dark .venture-card h3,
        .portfolio-page-dark .venture-card h3 a {
          color: #f4f1e9 !important;
        }

        .portfolio-page-dark .page-hero h1 span,
        .portfolio-page-dark .section-heading .section-kicker {
          color: #B08D57 !important;
        }

        .portfolio-page-dark .filter-bar button {
          background: transparent !important;
          color: #909da6 !important;
          border-color: rgba(255,255,255,.10) !important;
        }

        .portfolio-page-dark .filter-bar button.active {
          background: #f4f1e9 !important;
          border-color: #f4f1e9 !important;
          color: #07090b !important;
        }

        .portfolio-page-dark .portfolio-sector-filter select {
          background: #0d1115 !important;
          color: #f4f1e9 !important;
          border-color: rgba(255,255,255,.18) !important;
        }

        .portfolio-page-dark .venture-card {
          background: #090d10 !important;
          border-color: rgba(255,255,255,.10) !important;
        }

        .portfolio-page-dark .venture-card-copy {
          background: #090d10 !important;
        }

        .portfolio-page-dark .venture-card p {
          color: #9ca8b2 !important;
        }
      `}</style>
      <div className="portfolio-page-dark">
        <div className="venture-tab-scale">
          <section className="page-hero compact-hero">
            <div>
              <p className="hero-kicker">Master asset directory / current portfolio</p>
              <h1>{ventures.length} studio assets.<br /><span>Organized by maturity.</span></h1>
            </div>
            <p>
              Explore the studio&apos;s complete portfolio without flattening very different stages
              of development into one list. Maturity, lifecycle, operating context, and next proof
              points are shown directly on each project file.
            </p>
          </section>

          <section className="section ventures-index-section">
            <SectionHeading
              index="01"
              eyebrow="Portfolio directory"
              title="Explore every venture by market."
            />
            <VentureGrid />
          </section>
        </div>
      </div>
    </>
  );
}
