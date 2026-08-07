"use client";

import { useState } from "react";

const moments = [
  { year: "Commerce", title: "Operating before theorizing", copy: "Built and operated Jentlemens, learning customer acquisition, pricing, fulfillment, reputation, and supply-chain pressure through a real independent e-commerce business." },
  { year: "Behavior", title: "Psychology as a design lens", copy: "A B.A. in Psychology and hypnosis training shape how Joseph thinks about attention, motivation, choice, behavior change, and ethical persuasion." },
  { year: "Systems", title: "Technical work becomes a second language", copy: "Open-source projects, data work, AI workflows, product prototypes, and architecture studies became tools for translating ideas into buildable requirements." },
  { year: "Studio", title: "A portfolio with explicit stages", copy: "The current studio model separates thesis, concept, prototype, active operation, and creative work so visitors can see what exists now and what still needs proof." },
];

export function FounderTimeline() {
  const [active, setActive] = useState(0);
  return (
    <div className="timeline-shell">
      <div className="timeline-rail">
        {moments.map((moment, index) => (
          <button key={moment.year} className={active === index ? "active" : ""} onClick={() => setActive(index)}>
            <span>{String(index + 1).padStart(2, "0")}</span>{moment.year}
          </button>
        ))}
      </div>
      <div className="timeline-panel">
        <span className="timeline-label">{moments[active].year}</span>
        <h3>{moments[active].title}</h3>
        <p>{moments[active].copy}</p>
      </div>
    </div>
  );
}
