# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start dev server (localhost:8080)
npm run build        # Production build
npm run build:dev    # Development build
npm run lint         # ESLint
npm run test         # Run tests once (vitest)
npm run test:watch   # Run tests in watch mode
```

## Architecture

This is a **family law firm marketing website** (Borshchak Law Group) built with React 18 + TypeScript + Vite. Originally scaffolded with [Lovable](https://lovable.dev).

### Routing & Pages

All routes are defined in `src/App.tsx` using React Router v6. Pages live in `src/pages/` — each service area (divorce, custody, assets, etc.) and attorney has its own page component. Blog posts use dynamic routing via `/blog/:slug` with data looked up from `src/data/blog/`.

**Important:** New routes must be added above the `"*"` catch-all route in App.tsx.

### Component Organization

- `src/components/ui/` — shadcn/ui primitives (51 components built on Radix UI). Configured via `components.json`.
- `src/components/home/` — Homepage section components (hero, services grid, testimonials, etc.)
- `src/components/Header.tsx` / `Footer.tsx` — Shared layout components used by every page
- `src/components/ConsultationModal.tsx` — Contact form modal, triggered globally via ConsultationContext

### State Management

- **ConsultationContext** (`src/contexts/ConsultationContext.tsx`) — Global context controlling the consultation modal open/close state. Wraps the entire app inside BrowserRouter.
- **React Query** — QueryClient is set up in App.tsx but currently used minimally (no backend API).
- Page-level state is managed with `useState` and `react-hook-form` + `zod` for forms.

### Styling

- **Tailwind CSS** with a custom design system defined in `tailwind.config.ts`
- HSL CSS custom properties in `src/index.css` define the color palette (navy/cream/green brand)
- Custom utility classes: `.btn-cta`, `.section-padding`, `.heading-hero`, `.heading-section`, `.text-body`
- Fonts: **Playfair Display** (headings), **Lora** (body) — loaded via Google Fonts in `index.html`
- Dark mode is supported via CSS variables (class strategy)

### Animations

- `useScrollAnimation` hook (`src/hooks/use-scroll-animation.tsx`) — Intersection Observer for scroll-triggered fade-in animations. Used extensively across pages.
- **Framer Motion** — Used for Header dropdown menus and modal transitions.
- Custom Tailwind keyframe animations defined in `tailwind.config.ts`: `fade-in-up`, `fade-in-left`, `slide-up`, `scale-fade-in`.

### Data

- `src/data/blogPosts.ts` — Blog post index with slugs and metadata
- `src/data/blog/` — Individual blog post content files (static TypeScript)
- `src/data/reviews.ts` — Client testimonials

### Path Aliases

`@/*` resolves to `./src/*` (configured in both `tsconfig.json` and `vite.config.ts`).

### Testing

Vitest with jsdom environment and React Testing Library. Test files go in `src/` alongside source, matching `*.{test,spec}.{ts,tsx}`. Setup file: `src/test/setup.ts`.
