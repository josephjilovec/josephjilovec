"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { CSSProperties } from "react";
import { ventures } from "@/lib/portfolio";
import { getVentureImage } from "@/lib/ventureImagery";

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
        {visible.map((venture, index) => {
          const image = getVentureImage(venture.slug);
          return (
            <article className="venture-card" key={venture.slug} style={{ "--venture-accent": venture.accent, "--venture-soft": venture.accentSoft } as CSSProperties}>
              <Link href={`/portfolio/${venture.slug}`} className="venture-card-art" aria-label={`Open ${venture.name}`}>
                <Image
                  src={image?.src ?? venture.heroArt ?? venture.art}
                  alt={image?.alt ?? ""}
                  fill
                  sizes="(max-width: 800px) 100vw, 45vw"
                  style={{ objectFit: "cover", objectPosition: image?.position ?? "center", filter: "saturate(.68) contrast(1.07) brightness(.74)" }}
                />
                <span
                  aria-hidden="true"
                  style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg,rgba(5,6,7,.04),rgba(5,6,7,.28) 48%,rgba(5,6,7,.82)),linear-gradient(135deg,var(--venture-soft),transparent 58%)" }}
                />
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
          );
        })}
      </div>
    </div>
  );
}
