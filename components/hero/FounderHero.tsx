import Image from "next/image";
import Link from "next/link";
import { ventureCategories, ventures } from "@/lib/portfolio";

const heroCarousel = [
  "https://images.unsplash.com/photo-1693587384195-b69ebfe9f292?auto=format&fit=crop&fm=jpg&q=72&w=2400",
  "https://images.unsplash.com/photo-1774186184471-32c1339d2d8c?auto=format&fit=crop&fm=jpg&q=72&w=2400",
  "https://images.pexels.com/photos/10973879/pexels-photo-10973879.jpeg?auto=compress&dpr=1&w=2400",
  "https://images.unsplash.com/photo-1774953037913-af0cf688491a?auto=format&fit=crop&fm=jpg&q=72&w=2400",
];

const heroCarouselCss = `
.hero-shell-carousel .hero-copy{padding-top:28px}
.hero-shell-carousel .hero-photo-slide{opacity:0;animation:ventureHeroCycle 32s ease-in-out infinite!important;will-change:opacity,transform}
.hero-shell-carousel .hero-photo-slide img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;filter:saturate(.58) sepia(.13) contrast(1.12) brightness(.46)}
.hero-shell-carousel .hero-photo-slide-1{animation-delay:-2s!important}
.hero-shell-carousel .hero-photo-slide-1 img{object-position:center 52%}
.hero-shell-carousel .hero-photo-slide-2{animation-delay:6s!important}
.hero-shell-carousel .hero-photo-slide-2 img{object-position:center 48%}
.hero-shell-carousel .hero-photo-slide-3{animation-delay:14s!important}
.hero-shell-carousel .hero-photo-slide-3 img{object-position:center 48%}
.hero-shell-carousel .hero-photo-slide-4{animation-delay:22s!important}
.hero-shell-carousel .hero-photo-slide-4 img{object-position:center 50%}
@keyframes ventureHeroCycle{0%{opacity:0;transform:scale(1.075)}6%{opacity:1;transform:scale(1.055)}25%{opacity:1;transform:scale(1.02)}31%,100%{opacity:0;transform:scale(1.005)}}
@media(prefers-reduced-motion:reduce){.hero-shell-carousel .hero-photo-slide{animation:none!important;transform:none!important}.hero-shell-carousel .hero-photo-slide-1{opacity:1}.hero-shell-carousel .hero-photo-slide:not(.hero-photo-slide-1){display:none}}
`;

export function FounderHero() {
  return (
    <>
      <style>{heroCarouselCss}</style>
      <section className="hero-shell hero-shell-carousel">
        <div className="hero-photo-carousel" aria-hidden="true">
          {heroCarousel.map((src, index) => (
            <div className={`hero-photo-slide hero-photo-slide-${index + 1}`} key={src}>
              <img src={src} alt="" loading={index === 0 ? "eager" : "lazy"} />
            </div>
          ))}
          <div className="hero-photo-shade" />
        </div>

        <div className="hero-copy">
          <h1>
            Cross-Disciplinary Vision<br />
            <span>Built for Venture Deployment</span>
          </h1>
          <p className="hero-lede">
            A multi-asset studio portfolio where capital and attention can create leverage.
          </p>
          <div className="hero-actions">
            <Link href="/portfolio" className="button">Explore the Venture Universe</Link>
            <Link href="/founder" className="text-link">Founder & Studio Lead <span>↗</span></Link>
          </div>
          <div className="hero-signals" aria-label="Portfolio overview">
            <div><strong>{ventures.length}</strong><span>public project worlds</span></div>
            <div><strong>{ventureCategories.length - 1}</strong><span>working disciplines</span></div>
            <div><strong>01→04</strong><span>identify · design · test · build</span></div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-orbit orbit-one" aria-hidden="true" />
          <div className="hero-orbit orbit-two" aria-hidden="true" />
          <div className="hero-network-card" aria-hidden="true">
            <Image
              src="/images/studio-network-field.svg"
              alt=""
              fill
              priority
              sizes="(max-width: 900px) 92vw, 42vw"
            />
          </div>
        </div>
      </section>
    </>
  );
}
