"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  { id: "01", name: "Identify", copy: "Find a recurring problem or creative territory worth examining, then define who cares and why.", metric: "Problem clarity", status: "Signal mapped" },
  { id: "02", name: "Design", copy: "Map the offer, workflow, business logic, user experience, operating requirements, and major risks.", metric: "System coherence", status: "Architecture defined" },
  { id: "03", name: "Test", copy: "Challenge the assumptions with interviews, demand tests, technical benchmarks, pilot workflows, or creative releases.", metric: "Evidence strength", status: "Assumptions in review" },
  { id: "04", name: "Build", copy: "Commit resources only after the next step is clear—then recruit the people, capital, and partnerships the work actually needs.", metric: "Deployment readiness", status: "Resources aligning" },
] as const;

function PhaseGraphic({ phase }: { phase: number }) {
  if (phase === 0) {
    return (
      <svg viewBox="0 0 520 420" aria-hidden="true">
        <g className="studio-graphic-grid"><path d="M40 70H480M40 140H480M40 210H480M40 280H480M40 350H480M90 35V385M180 35V385M270 35V385M360 35V385M450 35V385" /></g>
        <g className="identify-links"><path d="M104 112L190 174L282 104L398 166L335 278L218 304L128 250Z" /><path d="M190 174L218 304M282 104L335 278M128 250L335 278" /></g>
        <g className="identify-nodes"><circle cx="104" cy="112" r="9" /><circle cx="190" cy="174" r="13" /><circle cx="282" cy="104" r="8" /><circle cx="398" cy="166" r="11" /><circle cx="335" cy="278" r="15" /><circle cx="218" cy="304" r="8" /><circle cx="128" cy="250" r="10" /></g>
        <circle className="graphic-pulse" cx="190" cy="174" r="34" />
      </svg>
    );
  }

  if (phase === 1) {
    return (
      <svg viewBox="0 0 520 420" aria-hidden="true">
        <g className="studio-graphic-grid"><path d="M40 70H480M40 140H480M40 210H480M40 280H480M40 350H480M90 35V385M180 35V385M270 35V385M360 35V385M450 35V385" /></g>
        <g className="design-wireframe"><path d="M92 306L215 338L430 272L304 246Z" /><path d="M92 306V170L215 196V338M430 272V135L304 112V246M92 170L304 112L430 135L215 196Z" /><path d="M142 182V291L214 309M215 196L215 338M263 155V311M304 112V246M355 125V294" /><path d="M92 219L215 244L430 185M92 263L215 289L430 229" /></g>
        <g className="design-points"><circle cx="92" cy="170" r="5" /><circle cx="304" cy="112" r="5" /><circle cx="430" cy="135" r="5" /><circle cx="215" cy="196" r="7" /></g>
      </svg>
    );
  }

  if (phase === 2) {
    return (
      <svg viewBox="0 0 520 420" aria-hidden="true">
        <g className="studio-graphic-grid"><path d="M45 80H475M45 145H475M45 210H475M45 275H475M45 340H475M105 45V370M195 45V370M285 45V370M375 45V370M465 45V370" /></g>
        <g className="test-axes"><path d="M72 326V86M72 326H456" /><path d="M72 280L128 266L172 284L228 190L277 224L331 139L384 168L456 93" /></g>
        <g className="test-secondary"><path d="M72 296L128 291L172 247L228 262L277 184L331 208L384 121L456 149" /></g>
        <g className="test-markers"><circle cx="228" cy="190" r="7" /><circle cx="331" cy="139" r="7" /><circle cx="456" cy="93" r="7" /><path d="M212 174L244 206M244 174L212 206" /></g>
        <g className="test-bars"><rect x="102" y="110" width="48" height="7" rx="3.5" /><rect x="102" y="126" width="82" height="7" rx="3.5" /><rect x="102" y="142" width="61" height="7" rx="3.5" /></g>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 520 420" aria-hidden="true">
      <g className="studio-graphic-grid"><path d="M40 70H480M40 140H480M40 210H480M40 280H480M40 350H480M90 35V385M180 35V385M270 35V385M360 35V385M450 35V385" /></g>
      <g className="build-connectors"><path d="M145 126H226M294 126H377M112 181V238M260 181V238M410 181V238M145 293H226M294 293H377" /></g>
      <g className="build-modules"><rect x="79" y="82" width="132" height="98" rx="12" /><rect x="226" y="82" width="68" height="98" rx="12" /><rect x="309" y="82" width="132" height="98" rx="12" /><rect x="79" y="238" width="132" height="98" rx="12" /><rect x="226" y="238" width="68" height="98" rx="12" /><rect x="309" y="238" width="132" height="98" rx="12" /></g>
      <g className="build-details"><path d="M100 111H174M100 130H153M100 149H185M330 111H418M330 130H388M330 149H403M100 267H185M100 286H157M100 305H177M330 267H403M330 286H418M330 305H378" /></g>
      <rect className="build-active" x="226" y="82" width="68" height="98" rx="12" />
    </svg>
  );
}

export function StudioLoop() {
  const [active, setActive] = useState(0);
  const [revealed, setRevealed] = useState(() => new Set([0]));
  const stepRefs = useRef<(HTMLElement | null)[]>([]);
  const activeStep = steps[active];

  useEffect(() => {
    const observers = stepRefs.current.map((element, index) => {
      if (!element) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) return;
          setActive(index);
          setRevealed((current) => {
            if (current.has(index)) return current;
            const next = new Set(current);
            next.add(index);
            return next;
          });
        },
        { rootMargin: "-32% 0px -48%", threshold: 0 },
      );

      observer.observe(element);
      return observer;
    });

    return () => observers.forEach((observer) => observer?.disconnect());
  }, []);

  return (
    <div className="studio-loop">
      <div className="studio-visual-panel" id="studio-phase-visual" role="tabpanel" aria-live="polite">
        <div className="studio-visual-topline"><span>Studio OS / Phase {activeStep.id}</span><span>{activeStep.name}</span></div>
        <div className="studio-visual-frame">
          {steps.map((step, index) => (
            <div key={step.id} className={`studio-phase-graphic ${active === index ? "is-active" : ""}`} aria-hidden={active !== index}>
              <PhaseGraphic phase={index} />
            </div>
          ))}
        </div>
        <div className="studio-data-overlay" key={activeStep.id}>
          <div><span>Core metric</span><strong>{activeStep.metric}</strong></div>
          <div><span>Status</span><strong><i aria-hidden="true" />{activeStep.status}</strong></div>
        </div>
      </div>

      <div className="studio-steps-shell">
        <p className="studio-steps-helper">Scroll to follow the operating sequence</p>
        <div className="studio-steps" aria-label="Studio operating phases">
          {steps.map((step, index) => (
            <article
              key={step.id}
              ref={(element) => { stepRefs.current[index] = element; }}
              className={`${active === index ? "is-active" : ""} ${revealed.has(index) ? "is-revealed" : ""}`}
              aria-current={active === index ? "step" : undefined}
            >
              <span>{step.id}</span>
              <div><strong>{step.name}</strong><p>{step.copy}</p></div>
              <i className="studio-step-marker" aria-hidden="true" />
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
