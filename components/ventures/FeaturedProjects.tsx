"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { CSSProperties } from "react";
import { ventures } from "@/lib/portfolio";
import styles from "@/app/home.module.css";

const FEATURED_COUNT = 4;

function pickFeaturedProjects() {
  const pool = [...ventures];

  for (let index = pool.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [pool[index], pool[swapIndex]] = [pool[swapIndex], pool[index]];
  }

  return pool.slice(0, Math.min(FEATURED_COUNT, pool.length));
}

export function FeaturedProjects() {
  const [featured, setFeatured] = useState<typeof ventures>([]);

  useEffect(() => {
    setFeatured(pickFeaturedProjects());
  }, []);

  return (
    <>
      <div className={styles.selectedWorldsGrid} aria-live="polite">
        {featured.length === 0
          ? Array.from({ length: FEATURED_COUNT }, (_, index) => (
              <div
                key={index}
                className={`${styles.selectedWorld} ${styles.loadingWorld} ${index === 0 || index === 3 ? styles.wide : ""}`}
                aria-hidden="true"
              />
            ))
          : featured.map((venture, index) => (
              <Link
                href={`/portfolio/${venture.slug}`}
                key={venture.slug}
                className={`${styles.selectedWorld} ${index === 0 || index === 3 ? styles.wide : ""}`}
                style={{ "--venture-accent": venture.accent } as CSSProperties}
              >
                <div className={styles.worldImage} aria-hidden="true">
                  <Image
                    src={venture.heroArt ?? venture.art}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 900px) 50vw, 66vw"
                  />
                </div>
                <div className={styles.worldShade} aria-hidden="true" />
                <div className={styles.worldContent}>
                  <div className={styles.worldMeta}><span>{venture.category}</span><span>{venture.stage}</span></div>
                  <div>
                    <p>{venture.eyebrow}</p>
                    <h3>{venture.name}</h3>
                    <div className={styles.worldFooter}><span>{venture.summary}</span><i>Explore project file ↗</i></div>
                  </div>
                </div>
              </Link>
            ))}
      </div>

      <div className={styles.worldsCta}>
        <span>15 project worlds</span>
        <Link href="/portfolio" className="button">Explore all 15 project worlds on the Portfolio tab ↗</Link>
      </div>
    </>
  );
}
