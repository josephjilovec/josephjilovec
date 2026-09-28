"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { CSSProperties } from "react";
import { ventures, ventureCategories, ventureTiers } from "@/lib/portfolio";
import type { VentureTier } from "@/lib/ventureSchema";
import { getVentureImage } from "@/lib/ventureImagery";

export function VentureGrid() {
  const [tier, setTier] = useState<(typeof ventureTiers)[number]>("All Assets");
  const [category, setCategory] = useState<(typeof ventureCategories)[number]>("All");

  const visible = useMemo(() => ventures.filter((venture) => {
    const tierMatch = tier === "All Assets" || venture.tier === tier;
    const categoryMatch = category === "All" || venture.category === category;
    return tierMatch && categoryMatch;
  }), [tier, category]);

  const grouped = useMemo(() => {
    const order: VentureTier[] = ["Flagship Assets", "Active Validations", "Incubation Concepts"];
    return order.map((group) => ({
      group,
      items: visible.filter((venture) => venture.tier === group)
    })).filter((group) => group.items.length > 0);
  }, [visible]);

  return (
    <div>
      <div className="portfolio-filter-stack">
        <div className="filter-bar" aria-label="Filter ventures by maturity">
          {ventureTiers.map((item) => (
            <button
              key={item}
              onClick={() => setTier(item)}
              className={tier === item ? "active" : ""}
              aria-pressed={tier === item}
            >
              {item}
            </button>
          ))}
        </div>

        <label className="portfolio-sector-filter">
          Sector
          <select value={category} onChange={(event) => setCategory(event.target.value as typeof category)}>
            {ventureCategories.map((item) => <option key={item} value={item}>{item}</option>)}
          </select>
        </label>
      </div>

      <div className="venture-tier-groups">
        {grouped.map(({ group, items }) => (
          <section className="venture-tier-group" key={group} aria-labelledby={"tier-" + group.replaceAll(" ", "-")}>
            <div className="venture-tier-heading">
              <span>{group}</span>
              <small>{items.length} {items.length === 1 ? "asset" : "assets"}</small>
            </div>

            <div className="venture-grid">
              {items.map((venture, index) => {
                const image = getVentureImage(venture.slug);

                return (
                  <article
                    className="venture-card"
                    key={venture.slug}
                    style={{
                      "--venture-accent": venture.accent,
                      "--venture-soft": venture.accentSoft
                    } as CSSProperties}
                  >
                    <Link
                      href={"/portfolio/" + venture.slug}
                      className="venture-card-art"
                      aria-label={"Open " + venture.name + " Project File"}
                    >
                      <Image
                        src={image?.src ?? venture.heroArt ?? venture.art}
                        alt={image?.alt ?? ""}
                        fill
                        sizes="(max-width: 800px) 100vw, 45vw"
                        style={{
                          objectFit: "cover",
                          objectPosition: image?.position ?? "center",
                          filter: "saturate(.68) contrast(1.07) brightness(.74)"
                        }}
                      />
                      <span
                        aria-hidden="true"
                        style={{
                          position: "absolute",
                          inset: 0,
                          background: "linear-gradient(180deg,rgba(5,6,7,.04),rgba(5,6,7,.28) 48%,rgba(5,6,7,.82)),linear-gradient(135deg,var(--venture-soft),transparent 58%)"
                        }}
                      />
                      <span className="venture-card-number">{String(index + 1).padStart(2, "0")}</span>
                    </Link>

                    <div className="venture-card-copy">
                      <div className="card-meta">
                        <span>{venture.tier}</span>
                        <span>{venture.lifecycle}</span>
                        <span>{venture.category}</span>
                      </div>

                      <h3><Link href={"/portfolio/" + venture.slug}>{venture.name}</Link></h3>
                      <p>{venture.summary}</p>

                      <div className="card-links">
                        <Link href={"/portfolio/" + venture.slug} className="button button-small">
                          Project File
                        </Link>
                        {venture.externalUrl && (
                          <a
                            className="button button-small button-ghost"
                            href={venture.externalUrl}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={"Visit " + venture.name + " website"}
                          >
                            Visit Site ↗
                          </a>
                        )}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
