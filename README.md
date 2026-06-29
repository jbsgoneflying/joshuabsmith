# joshuabsmith.io

A static single-page personal site for Joshua b. Smith — founder, operator, systems builder.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- Static export (`output: "export"`) — no CMS, database, login, or analytics
- Fonts: Instrument Serif (headings) + Inter (body), self-hosted via `next/font`

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build

```bash
npm run build    # outputs a static site to ./out
```

Deploy the `out/` directory to any static host (Vercel, Netlify, Cloudflare Pages, S3, etc.).

## Editing content

All copy and links live in one file: [`src/content/site.ts`](src/content/site.ts). Update text, stats, work cards, and contact links there — no component changes needed.

Placeholder links (`#`) for Upwork, GitHub, X, LinkedIn, and NRGX Labs are ready to be filled in once final URLs are available. Versefold points to `https://versefold.app`.

## Structure

```txt
src/
  app/            layout (metadata/fonts), page (section composition), globals.css, icon.svg
  components/     Navigation, Hero, Section, Card, StatGrid, ProofCard, Footer, Reveal
    visuals/      Monogram, OperatingStack, HatMark (custom SVG, no stock imagery)
  content/        site.ts (all copy)
public/           mark.svg, og-image.jpg
```
