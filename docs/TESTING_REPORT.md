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
- six venture-art paths from `lib/ventures.ts`
- XML parsing of all six SVG art files
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
3. Verify all six project art assets and founder photography load.
4. Test mobile navigation and keyboard focus.
5. Configure Resend variables, then submit both contact forms and verify Reply-To behavior.
6. Open `/sitemap.xml` and `/robots.txt`.
7. Run `npm run check:links` from a normal networked development machine.
8. Check Vercel runtime logs for API errors.

## Test integrity statement

No production build, browser screenshot suite, or mail-delivery success is claimed in this report because the current sandbox prevented those checks from completing.
