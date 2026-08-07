import { VentureGrid } from "@/components/ventures/VentureGrid";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Ventures", "Explore Joseph Jilovec's venture concepts, prototypes, operating projects, and creative work.", "/ventures");

export default function VenturesPage() {
  return (
    <>
      <section className="page-hero compact-hero">
        <div>
          <p className="hero-kicker">Venture universe / current public portfolio</p>
          <h1>Six project worlds.<br /><span>Different proof requirements.</span></h1>
        </div>
        <p>Every project file states the current stage, the core thesis, what exists now, and the next milestone. The goal is clarity—not making every idea sound further along than it is.</p>
      </section>
      <section className="section ventures-index-section">
        <SectionHeading index="01" eyebrow="Portfolio explorer" title="Filter by working discipline." />
        <VentureGrid />
      </section>
      <section className="disclosure-band">
        <strong>Stage language matters.</strong>
        <p>“Thesis defined” means the problem and assumptions are documented. “Concept designed” means the offer/workflow is mapped. “Prototype” means an interactive or software demonstration exists. None of those labels automatically imply verified traction, revenue, product-market fit, regulatory approval, or production readiness.</p>
      </section>
    </>
  );
}
