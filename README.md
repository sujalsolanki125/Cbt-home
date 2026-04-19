

# Proctera — Coming Soon


A Next.js 15 coming soon page built with [coss UI](https://coss.com/ui) components, Tailwind CSS v4, and IBM Plex Mono.

## Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **coss UI** — copy-paste components (Button, Badge, Card, Separator, Switch)
- **Lucide React** — icons
- **Umami** — analytics

## Getting Started

### 1. Install dependencies

```bash
pnpm install
# or
npm install
```

### 2. (Optional) Pull more coss UI components via CLI

```bash
# Initialize with full coss style preset (recommended for new projects)
pnpm dlx shadcn@latest init @coss/style

# Or add individual components
pnpm dlx shadcn@latest add @coss/button
pnpm dlx shadcn@latest add @coss/card
pnpm dlx shadcn@latest add @coss/badge
```

> **Note:** The components in `src/components/ui/` are already included in this project.
> The CLI would let you pull in additional coss UI components as needed.

### 3. Run dev server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/
│   ├── globals.css         # Tailwind v4 + brand tokens + coss CSS vars
│   ├── layout.tsx          # Fonts (IBM Plex Mono + Inter) + Umami analytics
│   └── page.tsx            # Main coming soon page
├── components/
│   ├── ui/
│   │   ├── button.tsx      # coss UI Button
│   │   ├── badge.tsx       # coss UI Badge
│   │   ├── card.tsx        # coss UI Card
│   │   ├── separator.tsx   # coss UI Separator
│   │   └── switch.tsx      # coss UI Switch
│   ├── ThemeToggle.tsx     # Light/dark toggle (persisted to localStorage)
│   ├── Countdown.tsx       # Live countdown timer
│   └── QWatermark.tsx      # Cycling question number watermark
└── lib/
    └── utils.ts            # cn() helper (clsx + tailwind-merge)
```

## Brand Colors

| Token | Value | Usage |
|-------|-------|-------|
| `--brand-yellow` | `#e4b600` | Primary accent, buttons, badges |
| `--brand-yellow-dark` | `#c9a200` | Hover states, text accents |
| `--brand-black` | `#0d0d0d` | Primary ink |
| `--brand-bg` | `#edf5f6` | Page background (light) |
| `--brand-bg2` | `#ecebd2` | Card / input backgrounds |

## Customising the Launch Date

In `src/components/Countdown.tsx`, update:

```ts
const LAUNCH_DATE = new Date(Date.now() + 90 * 86400000); // 90 days from build
```

Replace with a fixed ISO date string for a stable countdown:

```ts
const LAUNCH_DATE = new Date("2025-09-01T00:00:00Z");
```

## Analytics

Umami is wired via `next/script` in `layout.tsx`:

```tsx
<Script
  defer
  src="https://cloud.umami.is/script.js"
  data-website-id="03096162-5309-4ee7-b642-06e9fe274618"
/>
```

## Deployment

Deploy to Vercel in one command:

```bash
pnpm dlx vercel
```

Or push to GitHub and connect the repo on [vercel.com](https://vercel.com).

## License

MIT
