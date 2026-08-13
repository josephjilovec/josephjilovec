"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { CSSProperties } from "react";
import { ventures } from "@/lib/portfolio";
import { ventureSignalArt } from "@/lib/ventureVisuals";

const filters = ["All", "Commerce & Brands", "AI & Systems", "Behavioral Wellness", "Civic & Creative"] as const;
type PortfolioFilter = (typeof filters)[number];

const matchesFilter = (category: (typeof ventures)[number]["category"], filter: PortfolioFilter) => {
  if (filter === "All") return true;
  if (filter === "Commerce & Brands") return category === "Commerce";
  if (filter === "AI & Systems") return category === "Technology";
  if (filter === "Behavioral Wellness") return category === "Behavioral";
  return category === "Civic" || category === "Creative";
};

export function VentureGrid() {
  const [filter, setFilter] = useState<PortfolioFilter>("All");
  const visible = useMemo(() => ventures.filter((venture) => matchesFilter(venture.category, filter)), [filter]);

  return (
    <div>
      <div className="filter-bar" aria-label="Filter ventures">
        {filters.map((category) => (
          <button key={category} onClick={() => setFilter(category)} className={filter === category ? "active" : ""} aria-pressed={filter === category}>
            {category}
          </button>
        ))}
      </div>
      <div className="venture-grid">
        {visible.map((venture, index) => (
          <article className="venture-card" key={venture.slug} style={{ "--venture-accent": venture.accent, "--venture-soft": venture.accentSoft } as CSSProperties}>
            <Link href={`/portfolio/${venture.slug}`} className="venture-card-art" aria-label={`Open ${venture.name}`}>
              <Image src={ventureSignalArt[venture.slug] ?? venture.art} alt="" fill sizes="(max-width: 800px) 100vw, 45vw" />
              <span className="venture-card-number">{String(index + 1).padStart(2, "0")}</span>
            </Link>
            <div className="venture-card-copy">
              <div className="card-meta"><span>{venture.category}</span><span>{venture.eyebrow}</span></div>
              <h3><Link href={`/portfolio/${venture.slug}`}>{venture.name}</Link></h3>
              <p>{venture.summary}</p>
              <div className="card-links">
                <Link href={`/portfolio/${venture.slug}`} className="button button-small">Explore Project File</Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
