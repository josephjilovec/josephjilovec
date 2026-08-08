"use client";

import Link from "next/link";
import { useState } from "react";
import type { CSSProperties } from "react";
import { ventures } from "@/lib/ventures";

const constellationArt: Record<string, string> = {
  "my-healthy-aura": "/constellation-art/aura-map.svg",
  "swift-deal-solutions": "/constellation-art/swift-map.svg",
  "dj-hotwax": "/constellation-art/hotwax-map.svg",
  "vanta-helix": "/constellation-art/vanta-map.svg",
  "cannacore-seeds": "/constellation-art/cannacore-map.svg",
  "snarklogic": "/constellation-art/snark-map.svg",
  "alder-and-meridian": "/constellation-art/alder-map.svg"
};

const constellationPreview: Record<string, string> = {
  "my-healthy-aura": "/constellation-preview/aura-preview.svg",
  "swift-deal-solutions": "/constellation-preview/swift-preview.svg",
  "dj-hotwax": "/constellation-preview/hotwax-preview.svg",
  "vanta-helix": "/constellation-preview/vanta-preview.svg",
  "cannacore-seeds": "/constellation-preview/cannacore-preview.svg",
  "snarklogic": "/constellation-preview/snark-preview.svg",
  "alder-and-meridian": "/constellation-preview/alder-preview.svg"
};

const nodePositions = [
  { x: 50, y: 9 },
  { x: 73, y: 16 },
  { x: 88, y: 35 },
  { x: 88, y: 61 },
  { x: 70, y: 82 },
  { x: 50, y: 91 },
  { x: 30, y: 82 },
  { x: 12, y: 61 },
  { x: 12, y: 35 }
] as const;

export function VentureConstellation() {
  const [activeSlug, setActiveSlug] = useState(ventures[0].slug);
  const active = ventures.find((venture) => venture.slug === activeSlug) ?? ventures[0];

  return (
    <div className="constellation-shell constellation-shell-v2" style={{ "--venture-accent": active.accent, "--venture-soft": active.accentSoft } as CSSProperties}>
      <div className="constellation-map constellation-map-v2" aria-label="Interactive venture constellation">
        <div className="constellation-rings" aria-hidden="true" />

        <svg className="constellation-connectors" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          {ventures.map((venture, index) => {
            const position = nodePositions[index] ?? nodePositions[nodePositions.length - 1];
            return (
              <line
                key={venture.slug}
                x1="50"
                y1="50"
                x2={position.x}
                y2={position.y}
                className={activeSlug === venture.slug ? "is-active" : ""}
                vectorEffect="non-scaling-stroke"
              />
            );
          })}
        </svg>

        <div className="constellation-core">
          <span>JJ</span>
          <strong>Venture</strong>
          <small>Studio</small>
        </div>

        {ventures.map((venture, index) => {
          const position = nodePositions[index] ?? nodePositions[nodePositions.length - 1];
          return (
            <button
              key={venture.slug}
              className={`constellation-node constellation-node-v2 ${activeSlug === venture.slug ? "is-active" : ""}`}
              style={{
                "--node-accent": venture.accent,
                "--node-x": `${position.x}%`,
                "--node-y": `${position.y}%`
              } as CSSProperties}
              onClick={() => setActiveSlug(venture.slug)}
              aria-pressed={activeSlug === venture.slug}
            >
              <span className="constellation-node-index">{String(index + 1).padStart(2, "0")}</span>
              <div className="constellation-node-body">
                <div className="constellation-node-art" aria-hidden="true">
                  <img src={constellationArt[venture.slug] ?? venture.art} alt="" />
                </div>
                <div className="constellation-node-copy">
                  <strong>{venture.name}</strong>
                  <small>{venture.category}</small>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <div className="constellation-detail">
        <div className="constellation-detail-preview" aria-hidden="true">
          <img src={constellationPreview[active.slug] ?? active.art} alt="" />
          <div className="constellation-detail-preview-glow" />
        </div>
        <div className="detail-meta">
          <span>{active.category}</span>
          <span>{active.stage}</span>
        </div>
        <h3>{active.name}</h3>
        <p>{active.summary}</p>
        <div className="detail-status"><i /> {active.status}</div>
        <Link className="text-link" href={`/ventures/${active.slug}`}>Open project file <span>↗</span></Link>
      </div>

      <style>{`
        .constellation-shell-v2 {
          grid-template-columns: minmax(0, 1.55fr) minmax(320px, .45fr);
          align-items: stretch;
        }

        .constellation-map-v2 {
          min-height: 800px;
          isolation: isolate;
          overflow: hidden;
        }

        .constellation-map-v2::after {
          z-index: 0;
        }

        .constellation-map-v2 .constellation-rings {
          z-index: 1;
          pointer-events: none;
          width: min(58%, 560px);
          aspect-ratio: 1;
          height: auto;
        }

        .constellation-connectors {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 2;
          pointer-events: none;
        }

        .constellation-connectors line {
          stroke: rgba(255,255,255,.10);
          stroke-width: 1;
          stroke-dasharray: 3 5;
          transition: stroke .2s ease, stroke-width .2s ease, opacity .2s ease;
        }

        .constellation-connectors line.is-active {
          stroke: var(--venture-accent);
          stroke-width: 1.7;
          opacity: .9;
        }

        .constellation-map-v2 .constellation-core {
          z-index: 3;
          width: 138px;
          height: 138px;
          box-shadow: 0 0 0 10px rgba(7,9,11,.58), 0 0 68px var(--venture-soft);
        }

        .constellation-map-v2 .constellation-node-v2 {
          left: var(--node-x);
          top: var(--node-y);
          transform: translate(-50%, -50%);
          z-index: 5;
          width: clamp(144px, 15vw, 178px);
          min-height: 74px;
          padding: 9px 10px;
          border-radius: 15px;
          background: rgba(9,13,16,.97);
          box-shadow: 0 12px 30px rgba(0,0,0,.36);
        }

        .constellation-map-v2 .constellation-node-v2:hover,
        .constellation-map-v2 .constellation-node-v2.is-active {
          transform: translate(-50%, calc(-50% - 3px));
          z-index: 8;
          border-color: var(--node-accent);
          background: rgba(12,17,22,.99);
          box-shadow: 0 18px 44px rgba(0,0,0,.44), 0 0 28px color-mix(in srgb, var(--node-accent) 20%, transparent);
        }

        .constellation-map-v2 .constellation-node-v2 .constellation-node-index {
          margin-bottom: 5px;
          font-size: 8px;
        }

        .constellation-map-v2 .constellation-node-v2 .constellation-node-body {
          grid-template-columns: 40px minmax(0,1fr);
          gap: 9px;
        }

        .constellation-map-v2 .constellation-node-v2 .constellation-node-art {
          width: 40px;
          height: 40px;
          border-radius: 11px;
        }

        .constellation-map-v2 .constellation-node-v2 .constellation-node-copy strong {
          font-size: 11px;
          line-height: 1.14;
        }

        .constellation-map-v2 .constellation-node-v2 .constellation-node-copy small {
          margin-top: 3px;
          font-size: 8px;
          letter-spacing: .07em;
        }

        @media (max-width: 1180px) {
          .constellation-shell-v2 {
            grid-template-columns: 1fr;
          }

          .constellation-map-v2 {
            min-height: 780px;
          }

          .constellation-map-v2 .constellation-node-v2 {
            width: 174px;
          }

          .constellation-shell-v2 .constellation-detail {
            min-height: 420px;
          }
        }

        @media (max-width: 900px) {
          .constellation-map-v2 {
            min-height: 0;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 12px;
            padding: 18px;
            overflow: visible;
          }

          .constellation-map-v2 .constellation-rings,
          .constellation-map-v2 .constellation-connectors {
            display: none;
          }

          .constellation-map-v2 .constellation-core {
            position: relative;
            left: auto;
            top: auto;
            transform: none;
            grid-column: 1 / -1;
            width: 100%;
            height: auto;
            min-height: 82px;
            border-radius: 18px;
            display: flex;
            justify-content: center;
            align-items: baseline;
            gap: 10px;
            padding: 17px;
          }

          .constellation-map-v2 .constellation-core strong {
            font-size: 24px;
          }

          .constellation-map-v2 .constellation-node-v2,
          .constellation-map-v2 .constellation-node-v2:hover,
          .constellation-map-v2 .constellation-node-v2.is-active {
            position: relative;
            left: auto;
            top: auto;
            transform: none;
            width: 100%;
            min-height: 92px;
          }
        }

        @media (max-width: 560px) {
          .constellation-map-v2 {
            grid-template-columns: 1fr;
            padding: 14px;
          }

          .constellation-map-v2 .constellation-core {
            grid-column: auto;
          }

          .constellation-map-v2 .constellation-node-v2 {
            min-height: 84px;
          }
        }
      `}</style>
    </div>
  );
}
