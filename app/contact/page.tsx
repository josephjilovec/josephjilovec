import { ContactForm } from "@/components/shared/ContactForm";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata = pageMetadata("Contact", "Contact Joseph Jilovec about venture collaboration, civic initiatives, investing, technology, media, business partnerships, or creative work.", "/contact");

export default function ContactPage() {
  return (
    <>
      <section className="page-hero contact-hero"><div><p className="hero-kicker">Contact / opportunity routing</p><h1>Tell me what caught your <span>attention.</span></h1></div><p>Investor conversations, technical collaboration, civic and nonprofit partnerships, operating relationships, media, creative work, music licensing, and focused project questions can all start here.</p></section>
      <section className="section contact-section">
        <div className="contact-layout">
          <aside><span className="section-kicker">01 / Contact</span><h2>One place to start the conversation.</h2><div className="contact-lanes"><p><strong>Investor</strong>Defined thesis, validation milestone, or project brief.</p><p><strong>Technical collaborator</strong>Architecture, AI systems, BCI/HCI, product builds, and technical development.</p><p><strong>Business partner</strong>Operating, distribution, transaction, or market-domain collaboration.</p><p><strong>Civic / nonprofit</strong>Community partnerships, program ideas, mission-aligned support, research, or public-interest collaboration.</p><p><strong>Creative / music</strong>Production, placements, licensing, visual worlds, partnerships.</p></div><a href={site.booking} target="_blank" rel="noreferrer" className="text-link">Prefer a call? Book a founder conversation <span>↗</span></a></aside>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
