"use client";

import { useState } from "react";

const steps = [
  { id: "01", name: "Identify", copy: "Find a recurring problem or creative territory worth examining, then define who cares and why." },
  { id: "02", name: "Design", copy: "Map the offer, workflow, business logic, user experience, operating requirements, and major risks." },
  { id: "03", name: "Test", copy: "Challenge the assumptions with interviews, demand tests, technical benchmarks, pilot workflows, or creative releases." },
  { id: "04", name: "Build", copy: "Commit resources only after the next step is clear—then recruit the people, capital, and partnerships the work actually needs." },
];

export function StudioLoop() {
  const [active, setActive] = useState(0);
  return (
    <div className="studio-loop">
      <div className="studio-dial" aria-hidden="true">
        <div className="dial-center"><span>Studio OS</span><strong>{steps[active].id}</strong></div>
        <div className={`dial-indicator dial-step-${active + 1}`} />
      </div>
      <div className="studio-steps">
        {steps.map((step, index) => (
          <button key={step.id} onClick={() => setActive(index)} className={active === index ? "is-active" : ""} aria-pressed={active === index}>
            <span>{step.id}</span>
            <div><strong>{step.name}</strong><p>{step.copy}</p></div>
          </button>
        ))}
      </div>
    </div>
  );
}
