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
  { left: "50%", top: "5%" },
  { left: "15%", top: "18%" },
  { left: "85%", top: "18%" },
  { left: "9%", top: "46%" },
  { left: "91%", top: "46%" },
  { left: "16%", top: "73%" },
  { left: "84%", top: "73%" },
  { left: "32%", top: "88%" },
  { left: "68%", top: "88%" }
] as const;

export function VentureConstellation() {
  const [activeSlug, setActiveSlug] = useState(ventures[0].slug);
  const active = ventures.find((venture) => venture.slug === activeSlug) ?? ventures[0];

  return (
    <div className="constellation-shell" style={{ "--venture-accent": active.accent, "--venture-soft": active.accentSoft } as CSSProperties}>
      <div className="constellation-map" aria-label="Interactive venture constellation">
        <div className="constellation-rings" aria-hidden="true" />
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
              className={`constellation-node ${activeSlug === venture.slug ? "is-active" : ""}`}
              style={{
                "--node-accent": venture.accent,
                left: position.left,
                top: position.top,
                translate: "-50% -50%"
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
    </div>
  );
}
