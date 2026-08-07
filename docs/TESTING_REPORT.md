# Testing Report

## Environment

- Node.js: 22.16.0
- npm: 10.9.2
- Repository target: Next.js 16.2.12 / React 19.2.8
- Test date: 2026-08-07

## Completed checks

### Repository shape — PASS
Verified the root directly contains `package.json` and the requested App Router pages, dynamic venture route, API routes, configuration, public assets, documentation, and deployment files.

### TypeScript / TSX syntax — PASS
Used the locally available TypeScript compiler API to transpile and parse all 32 `.ts` / `.tsx` source files (excluding declarations). No syntax diagnostics were reported.

This is a syntax/transpile check, **not a substitute for a full Next.js typecheck**.

### Internal route / asset consistency — PASS
A local validation script checked:

- required repository files
- seven venture-art paths from `lib/ventures.ts`
- XML parsing of all seven SVG art files
- founder portrait presence (1,518,648 bytes)
- literal internal route references
- skip-link presence
- reduced-motion support
- labeled contact-form structure
- `aria-live` form status
- honeypot field

### Source/content review — PASS
The live Joseph Jilovec site, DJ Hotwax, Vanta Helix, SnarkLogic, GitHub profile, and selected Medium writing were reviewed through the available web research environment before copy was finalized.

## Checks attempted but blocked by the local execution environment

### `npm install` — BLOCKED
The container's configured internal npm proxy returned HTTP 404 for public packages including `@types/node`, `next`, `react`, and `react-dom`. A direct public npm registry attempt timed out from this runtime.

Because dependencies could not be installed locally, the following commands could **not** be honestly reported as successful:

- `npm run typecheck`
- `npm run build`
- `npm start`
- local production route smoke tests

The project is intentionally left with normal public npm package declarations so GitHub/Vercel can install them in a standard networked build environment.

### Automated external link script — BLOCKED BY CONTAINER NETWORK
`scripts/check-links.mjs` was executed, but Node's network access in this container could not reach public hosts. The same major public project URLs were separately reviewed using the browsing environment where available.

### Headless Chromium screenshots — BLOCKED
A headless Chromium visual smoke-test was attempted, but Chromium hung in this container after DBus/session initialization errors and did not produce reliable screenshots. Responsive CSS was therefore reviewed structurally rather than claimed as browser-verified.

## Required first Vercel verification

After the first GitHub/Vercel deploy, run these checks before switching production DNS:

1. Confirm the Vercel build succeeds with no TypeScript errors.
2. Visit every route listed in `README.md` on desktop and mobile.
3. Verify all seven project art assets and founder photography load.
4. Test mobile navigation and keyboard focus.
5. Configure Resend variables, then submit both contact forms and verify Reply-To behavior.
6. Open `/sitemap.xml` and `/robots.txt`.
7. Run `npm run check:links` from a normal networked development machine.
8. Check Vercel runtime logs for API errors.

## Test integrity statement

No production build, browser screenshot suite, or mail-delivery success is claimed in this report because the current sandbox prevented those checks from completing.

## 2026-08-07 Readability / Hero Revision

Changes verified in this revision:

- Restored the homepage positioning line: **“Concepts built to become companies.”**
- Removed the floating **DJ Hotwax / Music without a fixed genre** card from beside the founder portrait while keeping DJ Hotwax in the site’s Creative and venture architecture.
- Added a persistent header readability control with 100%, 112.5%, and 125% text scaling plus a high-contrast mode; preferences are stored in `localStorage`.
- Increased default body-copy sizing and line-height and raised secondary-text contrast.
- Converted key headline/body typography to responsive `clamp()`/`rem` sizing so visitor text preferences scale predictably.
- Updated the Open Graph image copy to match the restored homepage positioning.

Validation performed:

- TypeScript/TSX syntax/transpile check: **PASS — 33 source files**.
- Internal `@/` import target check: **PASS — no missing targets**.
- A production `next build` could not be executed in this environment because the internal npm proxy returned 404 for `@types/node`; a direct npm registry attempt subsequently timed out. This is an environment/package-download limitation, not a successful production-build claim.


## 2026-08-07 Portfolio Correction

Changes verified in this revision:

- Removed the previously included systems venture from the featured portfolio, contact form, homepage copy, technology copy, founder timeline, structured-data topics, and project assets.
- Featured portfolio is now exactly seven projects: My Healthy Aura, Swift Deal Solutions, DJ Hotwax, Vanta Helix, CannaCore Seeds (with JJ Stash as the editorial layer), SnarkLogic, and Alder & Meridian.
- Added GitHub repository links to venture cards and individual venture pages.
- Added original abstract project art for CannaCore Seeds and Alder & Meridian.
- Added a seventh position to the interactive venture constellation.
- Updated the Technology page to reflect the two currently featured technology concepts: Vanta Helix and SnarkLogic.
- Updated Alder & Meridian language to match its repository architecture: live Stripe and supplier ordering remain intentionally disabled pending verification/testing.

Validation performed:

- TypeScript/TSX syntax/transpile check: **PASS — 32 source files**.
- Internal `@/` import target check: **PASS — no missing targets**.
- Project-art XML parsing: **PASS — 7 SVG files**.
- Venture → art path validation: **PASS — 7/7 assets present**.
- Removed-project identifier scan: **PASS — no remaining site-visible references to the removed venture**.
- `npm install` was attempted again and remains **BLOCKED** by the sandbox's internal npm registry returning 404 for `@types/node`; therefore no successful local `next build` is claimed.
