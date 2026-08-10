"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { CSSProperties } from "react";
import { ventureCategories, ventures } from "@/lib/portfolio";
import { ventureSignalArt } from "@/lib/ventureVisuals";

export function VentureGrid() {
  const [filter, setFilter] = useState<(typeof ventureCategories)[number]>("All");
  const visible = useMemo(() => filter === "All" ? ventures : ventures.filter((venture) => venture.category === filter), [filter]);

  return (
    <div>
      <div className="filter-bar" aria-label="Filter ventures">
        {ventureCategories.map((category) => (
          <button key={category} onClick={() => setFilter(category)} className={filter === category ? "active" : ""} aria-pressed={filter === category}>
            {category}
          </button>
        ))}
      </div>
      <div className="venture-grid">
        {visible.map((venture, index) => (
          <article className="venture-card" key={venture.slug} style={{ "--venture-accent": venture.accent, "--venture-soft": venture.accentSoft } as CSSProperties}>
            <Link href={`/ventures/${venture.slug}`} className="venture-card-art" aria-label={`Open ${venture.name}`}>
              <Image src={ventureSignalArt[venture.slug] ?? venture.art} alt="" fill sizes="(max-width: 800px) 100vw, 45vw" />
              <span className="venture-card-number">{String(index + 1).padStart(2, "0")}</span>
              <span className="venture-card-stage">{venture.stage}</span>
            </Link>
            <div className="venture-card-copy">
              <div className="card-meta"><span>{venture.category}</span></div>
              <h3><Link href={`/ventures/${venture.slug}`}>{venture.name}</Link></h3>
              <p>{venture.summary}</p>
              <div className="card-links">
                <Link href={`/ventures/${venture.slug}`} className="text-link">Project file <span>↗</span></Link>
                <Link href={`/ventures/${venture.slug}/capital`} className="text-link">Capital file <span>↗</span></Link>
                {venture.externalUrl && <a href={venture.externalUrl} target="_blank" rel="noreferrer" className="text-link muted">Website <span>↗</span></a>}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
