# Eagle Wings Services Ltd.

Modern Next.js rebuild of [e-wingss.com](https://e-wingss.com), reverse-engineered from the WordPress / Hostinger backup.

## Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- React Hook Form patterns via Server Actions + Zod
- Framer Motion-ready component structure
- Resend for contact / newsletter delivery

## Getting started

```bash
cd website
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — local development
- `npm run build` — production build
- `npm run start` — serve production build
- `npm run lint` — ESLint

## Content

Site content lives in typed modules under `content/`:

- `services.ts`
- `blog.ts`
- `team.ts`
- `faq.ts`
- `testimonials.ts`
- `portfolio.ts`

Brand and navigation settings live in `config/site.ts`.

## Deployment

See `MIGRATION.md` for the full audit, SEO plan, security plan, and Vercel deployment checklist.

Required production env vars:

- `RESEND_API_KEY`
- `CONTACT_FROM_EMAIL`
- `CONTACT_TO_EMAIL`
- `NEXT_PUBLIC_URL`
