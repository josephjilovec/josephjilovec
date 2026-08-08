"use client";

import Link from "next/link";
import { useState } from "react";
import type { CSSProperties, PointerEvent } from "react";
import { VentureConstellation as LegacyUniverseStyles } from "@/components/ventures/VentureConstellation";
import { ventures } from "@/lib/portfolio";

const nodeArt: Record<string, string> = {
  "my-healthy-aura": "/constellation-art/aura-map.svg",
  "swift-deal-solutions": "/constellation-art/swift-map.svg",
  "dj-hotwax": "/constellation-art/hotwax-map.svg",
  "vanta-helix": "/constellation-art/vanta-map.svg",
  "cannacore-seeds": "/constellation-art/cannacore-map.svg",
  "snarklogic": "/constellation-art/snark-map.svg",
  "alder-and-meridian": "/constellation-art/alder-map.svg",
};

const previewArt: Record<string, string> = {
  "my-healthy-aura": "/constellation-preview/aura-preview.svg",
  "swift-deal-solutions": "/constellation-preview/swift-preview.svg",
  "dj-hotwax": "/constellation-preview/hotwax-preview.svg",
  "vanta-helix": "/constellation-preview/vanta-preview.svg",
  "cannacore-seeds": "/constellation-preview/cannacore-preview.svg",
  "snarklogic": "/constellation-preview/snark-preview.svg",
  "alder-and-meridian": "/constellation-preview/alder-preview.svg",
};

export function PortfolioUniverse() {
  const [activeSlug, setActiveSlug] = useState(ventures[0]?.slug ?? "");
  const activeIndex = Math.max(0, ventures.findIndex((venture) => venture.slug === activeSlug));
  const active = ventures[activeIndex] ?? ventures[0];

  if (!active) return null;

  const activateOnPointer = (event: PointerEvent<HTMLButtonElement>, slug: string) => {
    if (event.pointerType === "mouse" || event.pointerType === "pen") setActiveSlug(slug);
  };

  const moveSelection = (direction: -1 | 1) => {
    const next = (activeIndex + direction + ventures.length) % ventures.length;
    setActiveSlug(ventures[next].slug);
  };

  return (
    <>
      <div style={{ display: "none" }} aria-hidden="true"><LegacyUniverseStyles /></div>
      <div
        className="venture-universe-v3"
        style={{ "--active-accent": active.accent, "--active-soft": active.accentSoft } as CSSProperties}
      >
        <section className="venture-selector-panel" aria-label="Venture selector">
          <div className="venture-selector-head">
            <div><span className="venture-selector-eyebrow">Portfolio signal map</span><h3>Choose a project world.</h3></div>
            <div className="venture-selector-count" aria-label={`${ventures.length} projects`}><strong>{String(activeIndex + 1).padStart(2, "0")}</strong><span>/ {String(ventures.length).padStart(2, "0")}</span></div>
          </div>
          <p className="venture-selector-intro">Ten projects, one operating system. Select a signal to inspect its stage, thesis, and current public state.</p>
          <div className="venture-node-grid" role="group" aria-label="Project worlds">
            {ventures.map((venture, index) => {
              const isActive = venture.slug === active.slug;
              return (
                <button
                  key={venture.slug}
                  type="button"
                  className={`venture-node-card ${isActive ? "is-active" : ""}`}
                  style={{ "--node-accent": venture.accent, "--node-soft": venture.accentSoft } as CSSProperties}
                  aria-pressed={isActive}
                  aria-label={`Select ${venture.name}`}
                  onClick={() => setActiveSlug(venture.slug)}
                  onPointerEnter={(event) => activateOnPointer(event, venture.slug)}
                  onFocus={() => setActiveSlug(venture.slug)}
                >
                  <span className="venture-node-topline"><span>{String(index + 1).padStart(2, "0")}</span><i aria-hidden="true" /><em>{venture.category}</em></span>
                  <span className="venture-node-body-v3">
                    <span className="venture-node-icon" aria-hidden="true"><img src={nodeArt[venture.slug] ?? venture.art} alt="" /></span>
                    <span className="venture-node-copy-v3"><strong>{venture.name}</strong><small>{venture.stage}</small></span>
                  </span>
                </button>
              );
            })}
          </div>
          <div className="venture-selector-footer">
            <span className="venture-selector-hint">Hover, focus, or tap to inspect · swipe cards on smaller screens</span>
            <div className="venture-selector-nav" aria-label="Cycle project selection"><button type="button" onClick={() => moveSelection(-1)} aria-label="Previous project">←</button><button type="button" onClick={() => moveSelection(1)} aria-label="Next project">→</button></div>
          </div>
        </section>
        <aside className="venture-preview-card" aria-live="polite" aria-atomic="true">
          <div className="venture-preview-swap" key={active.slug}>
            <div className="venture-preview-art" aria-hidden="true">
              <img src={previewArt[active.slug] ?? active.heroArt ?? active.art} alt="" />
              <div className="venture-preview-grid" />
              <div className="venture-preview-signal"><span>ACTIVE SIGNAL</span><i /><strong>{String(activeIndex + 1).padStart(2, "0")}</strong></div>
            </div>
            <div className="venture-preview-content">
              <div className="venture-preview-meta"><span>{active.category}</span><span>{active.stage}</span></div>
              <h3>{active.name}</h3>
              <p>{active.summary}</p>
              <div className="venture-preview-status"><span><i /> Current state</span><strong>{active.status}</strong></div>
              <div className="venture-preview-tags" aria-label="Project themes">{active.tags.slice(0, 3).map((tag) => <span key={tag}>{tag}</span>)}</div>
              <div className="venture-preview-actions">
                <Link className="button" href={`/ventures/${active.slug}`}>Open project file</Link>
                {active.externalUrl ? <a className="text-link" href={active.externalUrl} target="_blank" rel="noreferrer">Visit project <span>↗</span></a> : null}
              </div>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
