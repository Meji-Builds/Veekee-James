# Veekee James Fashion Academy

Marketing site for the Veekee James Fashion Academy: a Next.js app covering programs, the
Luxury Fashion Masterclass, the house story, a lookbook and an admissions form that hands
enquiries off to WhatsApp. A password-protected `/dashboard` lets the Academy update the
handful of details that change over time (WhatsApp number, stats, program durations, the
testimonial, social links) without touching code.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4, design tokens in `app/globals.css`
- `next/font` for Bodoni Moda (display) and Jost (body)
- Lenis for smooth scroll, an IntersectionObserver hook for scroll reveals
- Upstash Redis for dashboard-editable settings, read fresh on every request

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Configuration

Copy `env.example` to `.env.local`:

```bash
DASHBOARD_PASSWORD=change-me
UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=
```

- `DASHBOARD_PASSWORD` is the sign-in password for `/dashboard`. Without it, the dashboard
  refuses to authenticate anyone.
- `UPSTASH_REDIS_REST_URL` / `UPSTASH_REDIS_REST_TOKEN` come from a Redis database (Vercel's
  project dashboard: Storage > Marketplace Database Providers > Upstash Redis, or directly at
  upstash.com). Free tier is plenty for this. Without these, the site runs fine on its
  built-in defaults but dashboard edits won't save.

## The dashboard

Visit `/dashboard`, sign in with `DASHBOARD_PASSWORD`, and edit:

- WhatsApp number, contact email, Instagram and TikTok links
- Established year and the students-trained stat
- Each program's level and duration
- The homepage testimonial

Saving writes straight to Redis. The homepage reads settings fresh on every request, so
changes go live immediately, no redeploy needed.

## Content

Everything else (program names, descriptions, lookbook entries, nav links, section copy)
lives in `lib/content.ts` and is edited in code, not the dashboard.

## Deploying

Push to GitHub and import the repo into Vercel; it auto-detects Next.js. Add the three
environment variables above in the Vercel project settings before the first deploy, then
visit `/dashboard` on the live site to fill in the real numbers.
