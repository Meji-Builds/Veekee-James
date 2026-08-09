# Veekee James Fashion Academy

Marketing site for the Veekee James Fashion Academy: a Next.js app covering programs, the
Luxury Fashion Masterclass, the house story, a lookbook and an admissions form that hands
enquiries off to WhatsApp.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4, design tokens in `app/globals.css`
- `next/font` for Bodoni Moda (display) and Jost (body)
- Lenis for smooth scroll, an IntersectionObserver hook for scroll reveals

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Configuration

Copy `env.example` to `.env.local` and set the Academy's real WhatsApp number:

```bash
NEXT_PUBLIC_ACADEMY_WHATSAPP=234XXXXXXXXXX
```

The admissions form builds a `wa.me` link from this number, in E.164 format without the
leading `+`.

## Content

Programs, lookbook entries, nav links and other copy live in `lib/content.ts`. Editing that
file is the only change needed to update copy across the site.

## Deploying

Push to GitHub and import the repo into Vercel; it auto-detects Next.js. Set
`NEXT_PUBLIC_ACADEMY_WHATSAPP` as an environment variable in the Vercel project settings
before the first deploy.
