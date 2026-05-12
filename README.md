# vstdy-web

Marketing site for [vstdy.com](https://vstdy.com) — VStdy is an AI-powered math
learning platform built around the Panic Squad and seven specialized AI agents.


## Getting started

```bash
npm install
npm run dev
```

Visit http://localhost:3000.

## Project layout

```
src/
  app/
    layout.tsx       Root layout, fonts, metadata
    page.tsx         Single-page marketing site
    globals.css      Brand tokens (gradient, hero bg, dark card)
  components/        One component per landing-page section
  lib/nav.ts         Shared nav items
public/
  figma/             Design assets exported from the VStdy Figma file
```

Built with **Next.js 16 (App Router)**, **TypeScript**, and **Tailwind CSS 4**.
## Design source

The Figma export lives in `design/figma-export/` (gitignored). The assets the
site renders live in `public/figma/` and are committed. When the design
changes, drop new exports into `public/figma/` keeping the same file names, or
update the `src` paths in the section components.

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Local dev server (Turbopack) |
| `npm run build` | Production build |
| `npm run start` | Run the production build |
| `npm run lint` | ESLint |
