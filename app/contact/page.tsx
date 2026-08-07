import { ContactForm } from "@/components/shared/ContactForm";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata = pageMetadata("Contact", "Contact Joseph Jilovec about venture collaboration, investing, technology, media, business partnerships, or creative work.", "/contact");

export default function ContactPage() {
  return (
    <>
      <section className="page-hero contact-hero"><div><p className="hero-kicker">Contact / opportunity routing</p><h1>Tell me what caught your <span>attention.</span></h1></div><p>Investor conversations, technical collaboration, operating partnerships, media, creative work, music licensing, and focused project questions can all start here.</p></section>
      <section className="section contact-section">
        <div className="contact-layout">
          <aside><span className="section-kicker">01 / Routing</span><h2>Use the lane that matches the opportunity.</h2><div className="contact-lanes"><p><strong>Investor</strong>Defined thesis, validation milestone, or project brief.</p><p><strong>Technical collaborator</strong>Architecture, robotics, AI systems, BCI/HCI, prototype work.</p><p><strong>Business partner</strong>Operating, distribution, transaction, or market-domain collaboration.</p><p><strong>Creative / music</strong>Production, placements, licensing, visual worlds, partnerships.</p></div><a href={site.booking} target="_blank" rel="noreferrer" className="text-link">Prefer a call? Book a founder conversation <span>↗</span></a></aside>
          <ContactForm />
        </div>
      </section>
      <section className="section brief-section" id="brief"><div className="brief-header"><span className="section-kicker">02 / Private venture materials</span><h2>Request a deeper project brief.</h2><p>Materials vary by project and may require a separate nondisclosure agreement. A request does not guarantee access.</p></div><ContactForm mode="brief" /></section>
    </>
  );
}
