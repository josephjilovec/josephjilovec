# Joseph Jilovec — Next.js Venture Studio

A production-oriented rebuild of **josephjilovec.com** as a multi-page personal brand and venture studio built for **GitHub → Vercel** deployment.

## Stack

- Next.js 16.2.12 (Active LTS at build time)
- React 19.2
- TypeScript
- App Router + Server Components by default
- Focused client components for navigation and interactive portfolio systems
- Native Next.js route handlers for contact requests
- Resend REST API for server-side email delivery
- No client-side secrets

## Pages

- `/` — founder-led digital headquarters
- `/ventures` — filterable venture universe
- `/ventures/[slug]` — individual project files with stage disclosure
- `/founder` — founder blueprint and interactive timeline
- `/studio` — studio operating model
- `/technology` — systems, AI advisory, and prototype portfolio
- `/creative` — DJ Hotwax and creative identity
- `/writing` — selected Medium writing
- `/contact` — single opportunity-routing contact hub

## Featured portfolio — 10 project worlds

- My Healthy Aura
- Swift Deal Solutions
- DJ Hotwax
- Vanta Helix
- CannaCore Seeds, with JJ Stash as its editorial/publication layer
- Snark Logic
- Alder & Meridian
- United American Future
- World Forward Foundation
- Givewise Insights

The portfolio spans five working disciplines: Technology, Commerce, Civic, Behavioral, and Creative.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production checks

```bash
npm run typecheck
npm run build
npm run check:links
npm start
```

## Environment variables

Copy `.env.example` to `.env.local` for local mail testing. Configure the same values in Vercel Project Settings → Environment Variables.

```env
RESEND_API_KEY=re_xxxxxxxxx
CONTACT_TO_EMAIL=you@example.com
CONTACT_FROM_EMAIL=Joseph Jilovec Venture Studio <website@your-verified-domain.com>
```

`CONTACT_FROM_EMAIL` must use a sender/domain verified with Resend. The submitter's email is sent as `Reply-To`, not as an unverified From address.

If these values are absent, the website still builds and all pages work; contact forms return a clear “mail delivery is not configured” message instead of pretending delivery succeeded.

## Deploy to GitHub + Vercel

The repository root is this folder; `package.json` is directly at root.

```bash
git init
git branch -M main
git remote add origin <YOUR_REPOSITORY_URL>
git add .
git commit -m "Launch Joseph Jilovec venture studio"
git push -u origin main
```

In Vercel:

- Import the GitHub repository
- Framework: Next.js
- Root Directory: `./`
- Build command: default (`next build`)
- Output: default
- Add the environment variables above
- Deploy
- Connect `josephjilovec.com` in Vercel Domains

## Content integrity

The parent site intentionally distinguishes:

- operating history
- active brand
- concept designed
- prototype / concept experience
- civic initiative
- creative project

Future product specifications, organizational claims, consulting outcomes, or illustrative performance models on standalone project sites are not repeated here as independently verified achievements unless explicitly supported.

## Asset replacement

The included project art is original SVG placeholder/brand artwork generated for this repository. Replace it with approved screenshots, product renders, album artwork, or new project photography as final assets become available. See `docs/PROJECT_ASSET_MAP.md`.

## Documentation

- `docs/BRAND_SYSTEM.md`
- `docs/WEBSITE_ARCHITECTURE.md`
- `docs/CONTENT_MODEL.md`
- `docs/DEPLOYMENT.md`
- `docs/PROJECT_ASSET_MAP.md`
- `docs/TESTING_REPORT.md`
