"use client";

import { useState } from "react";

const moments = [
  { year: "Vision", title: "Set the direction before adding complexity", copy: "Define what the venture is, who it serves, why it should exist, where it can win, and what must remain true as other people take responsibility for building and operating it." },
  { year: "Architecture", title: "Create a foundation other leaders can execute", copy: "Shape the commercial model, behavioral logic, brand position, product requirements, operating structure, and decision boundaries clearly enough for a cross-functional team to move with purpose." },
  { year: "Allocation", title: "Direct resources toward the highest-leverage constraint", copy: "Evaluate where capital, founder attention, technical capacity, distribution, or specialist knowledge can most materially change the trajectory of each studio asset." },
  { year: "Partners", title: "Put capable people into consequential roles", copy: "Identify aligned operators, technical leaders, functional specialists, advisers, and capital partners who can own their discipline while Joseph remains engaged at the portfolio and strategic level." },
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
