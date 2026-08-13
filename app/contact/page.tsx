import { ContactForm } from "@/components/shared/ContactForm";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata = pageMetadata("Contact", "Contact Joseph Jilovec about venture leadership, capital partnerships, technical collaboration, distribution, civic initiatives, media, or creative work.", "/contact");

export default function ContactPage() {
  return (
    <>
      <section className="page-hero contact-hero"><div><p className="hero-kicker">Contact / opportunity routing</p><h1>Tell me what got your <span>attention!</span></h1></div><p>Operating leadership, capital partnerships, technical collaboration, distribution, civic and nonprofit relationships, media, creative work, and focused project questions can all start here.</p></section>
      <section className="section contact-section">
        <div className="contact-layout">
          <aside><span className="section-kicker">01 / Contact</span><h2>One place to start the conversation.</h2><div className="contact-lanes"><p><strong>Operating leader</strong>Venture ownership, company-building experience, or functional leadership.</p><p><strong>Investor / capital partner</strong>Selected asset thesis, milestone, capital objective, or project brief.</p><p><strong>Technical collaborator</strong>Architecture, AI systems, BCI/HCI, product builds, and technical leadership.</p><p><strong>Distribution / domain partner</strong>Market access, customer relationships, transactions, manufacturing, licensing, or sector expertise.</p><p><strong>Civic / nonprofit</strong>Community partnerships, program ideas, research, or public-interest collaboration.</p><p><strong>Creative / media</strong>Production, placements, licensing, visual worlds, and partnerships.</p></div><a href={site.booking} target="_blank" rel="noreferrer" className="text-link">Prefer a call? Book a founder conversation <span>↗</span></a></aside>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
