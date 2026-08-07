# Vercel Deployment

## 1. Push repository

`package.json` is directly at the repository root. Push the root folder to GitHub.

## 2. Import into Vercel

Use Vercel's standard Next.js detection.

- Framework Preset: Next.js
- Root Directory: `./`
- Install Command: default
- Build Command: default
- Output Directory: default

## 3. Mail environment

Add to Production, Preview, and Development as appropriate:

- `RESEND_API_KEY`
- `CONTACT_TO_EMAIL`
- `CONTACT_FROM_EMAIL`

Verify the sender domain with Resend before expecting production delivery.

## 4. Domain

Add `josephjilovec.com` in Vercel → Domains. Follow Vercel's current DNS instructions for the existing registrar.

## 5. Smoke test after deployment

Check:

- `/`
- `/ventures`
- all seven project files
- `/founder`
- `/studio`
- `/technology`
- `/creative`
- `/writing`
- `/contact`
- `sitemap.xml`
- `robots.txt`

Submit a contact test only after Resend environment variables are configured.
