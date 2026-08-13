"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { CSSProperties, PointerEvent } from "react";
import { VentureConstellation as LegacyUniverseStyles } from "@/components/ventures/VentureConstellation";
import { ventures } from "@/lib/portfolio";
import { venturePreviewArt, ventureSignalArt } from "@/lib/ventureVisuals";

const HOVER_INTENT_MS = 180;

export function PortfolioUniverse() {
  const [activeSlug, setActiveSlug] = useState(ventures[0]?.slug ?? "");
  const intentTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const activeIndex = Math.max(0, ventures.findIndex((venture) => venture.slug === activeSlug));
  const active = ventures[activeIndex] ?? ventures[0];

  const clearIntent = () => {
    if (intentTimerRef.current) {
      clearTimeout(intentTimerRef.current);
      intentTimerRef.current = null;
    }
  };

  useEffect(() => () => {
    if (intentTimerRef.current) clearTimeout(intentTimerRef.current);
  }, []);

  if (!active) return null;

  const activateAfterDelay = (slug: string) => {
    clearIntent();
    intentTimerRef.current = setTimeout(() => {
      setActiveSlug(slug);
      intentTimerRef.current = null;
    }, HOVER_INTENT_MS);
  };

  const activateOnPointer = (event: PointerEvent<HTMLButtonElement>, slug: string) => {
    if (event.pointerType === "mouse" || event.pointerType === "pen") {
      activateAfterDelay(slug);
    }
  };

  const selectImmediately = (slug: string) => {
    clearIntent();
    setActiveSlug(slug);
  };

  const moveSelection = (direction: -1 | 1) => {
    clearIntent();
    const nextIndex = (activeIndex + direction + ventures.length) % ventures.length;
    setActiveSlug(ventures[nextIndex].slug);
  };

  return (
    <>
      <div className="legacy-universe-styles" aria-hidden="true"><LegacyUniverseStyles /></div>
      <div
        className="venture-universe-v3 portfolio-universe"
        style={{ "--active-accent": active.accent, "--active-soft": active.accentSoft } as CSSProperties}
      >
        <section className="venture-selector-panel" aria-label="Portfolio project selector">
          <div className="venture-selector-head">
            <div>
              <span className="venture-selector-eyebrow">Portfolio signal map</span>
              <h3>Choose a project world.</h3>
            </div>
            <div className="venture-selector-count" aria-label={`${activeIndex + 1} of ${ventures.length} projects`}>
              <strong>{String(activeIndex + 1).padStart(2, "0")}</strong>
              <span>/ {String(ventures.length).padStart(2, "0")}</span>
            </div>
          </div>

          <p className="venture-selector-intro">
            All {ventures.length} public project worlds, organized in one interactive command center. Pause on a signal to inspect its stage, focus, and current direction.
          </p>

          <div className="venture-node-grid" role="group" aria-label="All portfolio project worlds" onPointerLeave={clearIntent}>
            {ventures.map((venture, index) => {
              const isActive = venture.slug === active.slug;

              return (
                <button
                  key={venture.slug}
                  type="button"
                  className={`venture-node-card ${isActive ? "is-active" : ""}`}
                  style={{ "--node-accent": venture.accent, "--node-soft": venture.accentSoft } as CSSProperties}
                  aria-pressed={isActive}
                  aria-label={`Inspect ${venture.name}`}
                  onClick={() => selectImmediately(venture.slug)}
                  onPointerEnter={(event) => activateOnPointer(event, venture.slug)}
                  onPointerLeave={clearIntent}
                  onFocus={() => activateAfterDelay(venture.slug)}
                  onBlur={clearIntent}
                >
                  <span className="venture-node-topline">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <i aria-hidden="true" />
                    <em>{venture.category}</em>
                  </span>
                  <span className="venture-node-body-v3">
                    <span className="venture-node-icon" aria-hidden="true">
                      <Image src={ventureSignalArt[venture.slug] ?? venture.art} alt="" fill sizes="48px" />
                    </span>
                    <span className="venture-node-copy-v3">
                      <strong>{venture.name}</strong>
                      <small>{venture.stage}</small>
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          <div className="venture-selector-footer">
            <span className="venture-selector-hint">Pause briefly to preview · click or tap to select · swipe the project rail on smaller screens</span>
            <div className="venture-selector-nav" aria-label="Cycle portfolio selection">
              <button type="button" onClick={() => moveSelection(-1)} aria-label="Previous project">←</button>
              <button type="button" onClick={() => moveSelection(1)} aria-label="Next project">→</button>
            </div>
          </div>
        </section>

        <aside className="venture-preview-card" aria-live="polite" aria-atomic="true" onPointerEnter={clearIntent}>
          <div className="venture-preview-swap" key={active.slug}>
            <div className="venture-preview-art" aria-hidden="true">
              <Image
                src={venturePreviewArt[active.slug] ?? active.heroArt ?? active.art}
                alt=""
                fill
                sizes="(max-width: 900px) 100vw, 36vw"
              />
              <div className="venture-preview-grid" />
              <div className="venture-preview-signal"><span>ACTIVE SIGNAL</span><i /><strong>{String(activeIndex + 1).padStart(2, "0")}</strong></div>
            </div>
            <div className="venture-preview-content">
              <div className="venture-preview-meta"><span>{active.category}</span><span>{active.stage}</span></div>
              <h3>{active.name}</h3>
              <p>{active.summary}</p>
              <div className="venture-preview-tags" aria-label="Project themes">
                {active.tags.slice(0, 3).map((tag) => <span key={tag}>{tag}</span>)}
              </div>
              <div className="venture-preview-actions">
                <Link className="button" href={`/portfolio/${active.slug}`}>Open Project File</Link>
                <a className="button button-ghost" href={active.externalUrl} target="_blank" rel="noreferrer">Visit Site ↗</a>
                <Link className="button button-ghost" href="/contact">Contact / Start Conversation</Link>
              </div>
            </div>
          </div>
        </aside>

        <style>{`
          .legacy-universe-styles { display: none; }

          .portfolio-universe {
            grid-template-columns: minmax(0, 1.35fr) minmax(390px, .65fr);
            gap: 26px;
          }

          .portfolio-universe .venture-selector-panel { padding: 30px; }

          .portfolio-universe .venture-node-grid {
            grid-template-columns: repeat(auto-fit, minmax(168px, 1fr));
            gap: 11px;
          }

          .portfolio-universe .venture-node-card {
            min-height: 138px;
            padding: 14px;
          }

          .portfolio-universe .venture-node-icon,
          .portfolio-universe .venture-preview-art { position: relative; }

          .portfolio-universe .venture-node-icon img,
          .portfolio-universe .venture-preview-art > img { object-fit: cover; }

          .portfolio-universe .venture-preview-card {
            align-self: start;
            position: sticky;
            top: 102px;
          }

          .portfolio-universe .venture-preview-actions {
            display: grid;
            grid-template-columns: 1fr;
            gap: 10px;
          }

          .portfolio-universe .venture-preview-actions .button {
            width: 100%;
            min-height: 46px;
            text-align: center;
          }

          @media (max-width: 1180px) {
            .portfolio-universe {
              grid-template-columns: minmax(0, 1fr) minmax(360px, .72fr);
            }

            .portfolio-universe .venture-node-grid {
              grid-template-columns: repeat(auto-fit, minmax(155px, 1fr));
            }
          }

          @media (max-width: 900px) {
            .portfolio-universe { grid-template-columns: 1fr; }
            .portfolio-universe .venture-preview-card { position: relative; top: auto; }
            .portfolio-universe .venture-node-grid { display: flex; }
          }

          @media (max-width: 640px) {
            .portfolio-universe .venture-selector-panel { padding: 18px; }
          }
        `}</style>
      </div>
    </>
  );
}
