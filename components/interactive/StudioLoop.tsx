"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    id: "01",
    name: "Identify",
    copy: "Find a recurring problem or commercial territory worth examining, then define who cares and why.",
    metric: "Problem clarity",
    status: "Signal mapped",
    image: "https://images.pexels.com/photos/19999185/pexels-photo-19999185.jpeg?cs=srgb&dl=pexels-midlox-19999185.jpg&fm=jpg",
    imageAlt: "Modern business district at sunset",
  },
  {
    id: "02",
    name: "Design",
    copy: "Map the offer, workflow, business logic, user experience, operating requirements, and major risks.",
    metric: "System coherence",
    status: "Architecture defined",
    image: "https://images.pexels.com/photos/36733411/pexels-photo-36733411.jpeg?cs=srgb&dl=pexels-silverkblack-36733411.jpg&fm=jpg",
    imageAlt: "Business team reviewing plans in a modern office",
  },
  {
    id: "03",
    name: "Test",
    copy: "Challenge the assumptions with interviews, demand tests, technical benchmarks, pilot workflows, or market feedback.",
    metric: "Evidence strength",
    status: "Assumptions in review",
    image: "https://images.pexels.com/photos/8297487/pexels-photo-8297487.jpeg?cs=srgb&dl=pexels-mikhail-nilov-8297487.jpg&fm=jpg",
    imageAlt: "Professionals reviewing documents in a high-rise office",
  },
  {
    id: "04",
    name: "Build",
    copy: "Advance the venture with the operating structure, resources, partnerships, and execution priorities appropriate to the next stage.",
    metric: "Deployment readiness",
    status: "Next stage defined",
    image: "https://images.pexels.com/photos/31709064/pexels-photo-31709064.jpeg?cs=srgb&dl=pexels-misbaa-eri-426041722-31709064.jpg&fm=jpg",
    imageAlt: "Professionals working in a modern city office",
  },
] as const;

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
    <div className="studio-loop studio-loop-photographic">
      <div className="studio-visual-panel" id="studio-phase-visual" role="tabpanel" aria-live="polite">
        <div className="studio-visual-topline"><span>Studio Process / Phase {activeStep.id}</span><span>{activeStep.name}</span></div>
        <div className="studio-visual-frame">
          {steps.map((step, index) => (
            <div key={step.id} className={`studio-phase-photo ${active === index ? "is-active" : ""}`} aria-hidden={active !== index}>
              <img src={step.image} alt={active === index ? step.imageAlt : ""} loading={index === 0 ? "eager" : "lazy"} />
              <div className="studio-phase-photo-shade" />
              <div className="studio-phase-caption"><span>{step.id}</span><strong>{step.name}</strong></div>
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
