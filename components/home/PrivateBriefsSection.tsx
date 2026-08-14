import Link from "next/link";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function PrivateBriefsSection(){
  return <section id="investor-access" className="section home-anchor private-briefs-section">
    <div className="home-photo-intro home-photo-intro-reverse">
      <figure className="home-photo-panel private-briefs-photo">
        <img src="https://images.pexels.com/photos/34823908/pexels-photo-34823908.jpeg?cs=srgb&dl=pexels-ranamatloob567-34823908.jpg&fm=jpg" alt="Modern executive conference room" loading="lazy" />
        <figcaption>Private materials / diligence environment</figcaption>
      </figure>
      <SectionHeading index="05" eyebrow="Private venture materials" title="Go beyond the public overview.">
        <p>Prospective investors and venture partners can request a private brief for selected projects.</p>
      </SectionHeading>
    </div>
    <div className="contact-lanes">
      <p><strong>One-page venture overview</strong>Concise project context and current direction.</p>
      <p><strong>Customer and problem definition</strong>The market need and audience being addressed.</p>
      <p><strong>Proposed revenue model</strong>How the venture may create and capture value.</p>
      <p><strong>Research and validation</strong>Work completed to date and current signals.</p>
      <p><strong>Key assumptions</strong>What still matters most to validate.</p>
      <p><strong>Development roadmap</strong>Near-term priorities and milestones.</p>
    </div>
    <div className="section-action"><Link className="button" href="/#contact">Request a Venture Brief</Link></div>
  </section>
}
