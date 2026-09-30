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
        /* Portfolio presentation is intentionally lighter than the studio's dark editorial surfaces. */
        html:has(.portfolio-light-page) {
          background: #f3f7fa;
        }

        body:has(.portfolio-light-page) {
          background: #f3f7fa !important;
          color: #17364d !important;
        }

        body:has(.portfolio-light-page) .site-header {
          background: rgba(255,255,255,.94) !important;
          border-bottom-color: rgba(23,54,77,.12) !important;
          box-shadow: 0 8px 28px rgba(23,54,77,.05);
        }

        body:has(.portfolio-light-page) .brand-copy strong,
        body:has(.portfolio-light-page) .desktop-nav a,
        body:has(.portfolio-light-page) .desktop-nav .header-venture-button {
          color: #17364d !important;
        }

        body:has(.portfolio-light-page) .desktop-nav a:hover,
        body:has(.portfolio-light-page) .desktop-nav .header-venture-button:hover {
          color: #2f80ed !important;
        }

        body:has(.portfolio-light-page) .brand-monogram {
          color: #2f80ed !important;
          border-color: rgba(47,128,237,.25) !important;
          background: #f7fbff !important;
        }

        body:has(.portfolio-light-page) .nav-actions .button-small {
          background: #2f80ed !important;
          border-color: #2f80ed !important;
          color: #fff !important;
        }

        .portfolio-light-page {
          min-height: calc(100vh - 76px);
          background:
            radial-gradient(circle at 84% 2%, rgba(47,128,237,.10), transparent 25rem),
            radial-gradient(circle at 12% 40%, rgba(32,181,159,.07), transparent 24rem),
            #f3f7fa;
          color: #17364d;
          overflow: hidden;
        }

        .portfolio-light-page .page-hero {
          max-width: 1500px;
          margin: 0 auto;
          background: linear-gradient(180deg,#ffffff 0%,#f7fbfd 100%);
          border-bottom: 1px solid #d9e5ec;
        }

        .portfolio-light-page .page-hero h1,
        .portfolio-light-page .section-heading h2,
        .portfolio-light-page .venture-tier-heading span {
          color: #17364d;
        }

        .portfolio-light-page .page-hero h1 span {
          color: #2f80ed;
        }

        .portfolio-light-page .page-hero p:not(.hero-kicker),
        .portfolio-light-page .section-heading p {
          color: #637b8c;
        }

        .portfolio-light-page .section {
          max-width: 1500px;
          margin: 0 auto;
        }

        .portfolio-light-page .ventures-index-section {
          background: transparent;
        }

        .portfolio-light-page .portfolio-filter-stack {
          border-bottom-color: #d9e5ec !important;
        }

        .portfolio-light-page .filter-bar button {
          color: #5e7688 !important;
          background: rgba(255,255,255,.82) !important;
          border-color: #d4e1e8 !important;
        }

        .portfolio-light-page .filter-bar button.active {
          color: #fff !important;
          background: #2f80ed !important;
          border-color: #2f80ed !important;
          box-shadow: 0 8px 20px rgba(47,128,237,.18);
        }

        .portfolio-light-page .portfolio-sector-filter {
          color: #637b8c !important;
        }

        .portfolio-light-page .portfolio-sector-filter select {
          background: #fff !important;
          color: #17364d !important;
          border-color: #d4e1e8 !important;
        }

        .portfolio-light-page .venture-tier-heading small {
          color: #7890a0 !important;
        }

        .portfolio-light-page .venture-card {
          background: #fff !important;
          border-color: #d9e5ec !important;
          box-shadow: 0 16px 42px rgba(23,54,77,.07);
        }

        .portfolio-light-page .venture-card:hover {
          box-shadow: 0 24px 60px rgba(23,54,77,.12);
        }

        .portfolio-light-page .venture-card-art img {
          filter: saturate(.82) contrast(1.02) brightness(.96) !important;
        }

        .portfolio-light-page .venture-card-art > span[style] {
          background:
            linear-gradient(180deg,rgba(10,28,43,.02),rgba(10,28,43,.34) 65%,rgba(10,28,43,.70)) !important;
        }

        .portfolio-light-page .venture-card-number {
          background: rgba(255,255,255,.86) !important;
          border-color: rgba(255,255,255,.72) !important;
          color: var(--venture-accent) !important;
          backdrop-filter: blur(12px);
        }

        .portfolio-light-page .venture-card-copy {
          background: #fff;
        }

        .portfolio-light-page .card-meta {
          color: #718798 !important;
        }

        .portfolio-light-page .venture-card h3,
        .portfolio-light-page .venture-card h3 a {
          color: #17364d !important;
        }

        .portfolio-light-page .venture-card p {
          color: #657d8e !important;
        }

        .portfolio-light-page .button-small {
          background: #2f80ed !important;
          border-color: #2f80ed !important;
          color: #fff !important;
        }

        .portfolio-light-page .button-ghost {
          background: #fff !important;
          color: #17364d !important;
          border-color: #cbdbe4 !important;
        }

        .portfolio-light-page .button-ghost:hover {
          background: #17364d !important;
          border-color: #17364d !important;
          color: #fff !important;
        }

        body:has(.portfolio-light-page) .site-footer {
          background: #0a0f13;
        }

        @media (min-width: 721px) {
          .portfolio-light-page .venture-tab-scale {
            zoom: 1.25;
            width: 80%;
            margin: 0 auto;
          }
        }

        @media (max-width: 720px) {
          .portfolio-light-page {
            min-height: calc(100vh - 68px);
          }
        }
      `}</style>

      <div className="portfolio-light-page">
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
