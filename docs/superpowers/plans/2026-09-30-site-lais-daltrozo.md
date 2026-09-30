# Site Laís Daltrozo Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ship a Next.js site with a bilingual (PT/EN) Home landing page, a `/servicos` redirect, and a `/linktree` links page, deployed to Vercel under `laisdaltrozo.com`.

**Architecture:** Single Next.js App Router project, no CMS/DB. Home content lives in two plain TS content files (`content/home.pt.ts`, `content/home.en.ts`) imported by `/` and `/en` pages that share one `<HomePage>` layout component built from small section components. `/servicos` is a `next.config.ts` redirect. `/linktree` is a standalone page reading its own content array.

**Tech Stack:** Next.js (App Router, latest via `create-next-app`), TypeScript, Tailwind CSS, deployed on Vercel.

**Spec:** `docs/superpowers/specs/2026-09-30-site-lais-daltrozo-design.md`

## Global Constraints

- Mobile-first responsive design (spec: "responsivo para mobile como prioridade").
- No CMS, no database, no backend — all content is static files in the repo.
- No i18n library — PT/EN handled via two parallel routes and two content files.
- Hero video section must render a placeholder when no video URL is configured (video doesn't exist yet and must not block launch).
- `/servicos` must be a stable, permanent address regardless of where the Estate Planning section moves inside the Home page.
- Repo: `https://github.com/euvictorferro/LaisWebsite.git`. Deploy target: Vercel project (to be created) under domain `laisdaltrozo.com`.
- No automated UI test framework required (spec explicitly scopes this out) — verification is via `npm run build` + manual preview check.

## Review Focus

- **Missing/incomplete env values (Calendly URL, WhatsApp number) at build time** — a reasonable person expects the site to still build and render a sensible fallback link/text rather than crash or render `undefined` in an href.
- **Direct navigation to `/en/servicos` or other unplanned nested paths** — spec only defines `/`, `/en`, `/servicos`, `/linktree`; unplanned paths should 404 cleanly, not crash.
- **`/servicos` redirect target drifting from the actual anchor id** — if the Estate Planning section's `id` changes, the redirect must still resolve to a valid anchor, not a dead `#servicos` after someone renames the section.
- **Language selector linking to a broken pair** — PT page must link to `/en`, EN page must link to `/`, not to itself or a 404.
- **Video placeholder shown as broken player instead of graceful placeholder** — when `videoUrl` is unset/empty string, the Hero must render the placeholder branch, not attempt to mount a player with an empty src.

---

## File Structure

```
Website_LaisDaltrozo/
├── app/
│   ├── layout.tsx                 # root layout, fonts, metadata
│   ├── globals.css                # Tailwind entry
│   ├── page.tsx                   # "/" — renders <HomePage lang="pt">
│   ├── en/
│   │   └── page.tsx               # "/en" — renders <HomePage lang="en">
│   ├── linktree/
│   │   └── page.tsx               # "/linktree"
│   └── servicos/                  # not needed — redirect lives in next.config.ts
├── components/
│   ├── home/
│   │   ├── HomePage.tsx           # composes Header + sections + Footer
│   │   ├── Header.tsx             # logo + language switch
│   │   ├── Hero.tsx               # video/placeholder + primary CTA
│   │   ├── Method.tsx             # id="metodo"
│   │   ├── EstatePlanning.tsx     # id="servicos" (redirect target)
│   │   ├── FinalCta.tsx
│   │   └── Footer.tsx
│   └── linktree/
│       ├── LinktreePage.tsx
│       └── LinkButton.tsx
├── content/
│   ├── home.pt.ts                 # HomeContent object, Portuguese
│   ├── home.en.ts                 # HomeContent object, English
│   ├── homeContent.types.ts       # shared HomeContent type
│   └── linktreeLinks.ts           # LinktreeLink[] array
├── next.config.ts                 # redirects() for /servicos
├── package.json
├── tsconfig.json
└── tailwind config (via Next.js defaults, Tailwind v4 CSS-based config)
```

**Interfaces summary (cross-task contracts):**
- `HomeContent` type (Task 2) is consumed by `content/home.pt.ts`, `content/home.en.ts` (Task 2), and every section component (Tasks 3–5).
- `HomePage` component (Task 6) is consumed by `app/page.tsx` and `app/en/page.tsx` (Task 7).
- `LinktreeLink` type and `linktreeLinks` array (Task 8) are consumed by `LinktreePage`/`LinkButton` (Task 8) and `app/linktree/page.tsx` (Task 8).

---

## Task 1: Project Scaffold

**Files:**
- Create: entire Next.js project at repo root (`app/`, `package.json`, `tsconfig.json`, `next.config.ts`, `globals.css`, `.gitignore`, etc. via `create-next-app`)

**Interfaces:**
- Produces: a runnable Next.js + TypeScript + Tailwind project (`npm run dev`, `npm run build` both work) that later tasks add files into.

- [ ] **Step 1: Scaffold the project**

Run from the repo root (`/Users/victorferro/Projetos/Projetos Clientes/Website_LaisDaltrozo`):

```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir=false --import-alias "@/*" --use-npm --yes
```

If prompted about a non-empty directory (the `docs/` folder already exists), confirm/continue — it will scaffold alongside `docs/`.

- [ ] **Step 2: Verify the scaffold builds and runs**

Run: `npm run build`
Expected: build completes successfully, printing a route summary that includes `/`.

- [ ] **Step 3: Remove default boilerplate content**

Open `app/page.tsx` and replace its contents with a minimal placeholder so Task 7 starts from a clean file:

```tsx
export default function Home() {
  return <main>Placeholder</main>;
}
```

Delete unused default assets if `create-next-app` added an `app/favicon.ico` replacement step is not needed — leave default favicon as-is.

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "chore: scaffold Next.js project with TypeScript and Tailwind"
```

---

## Task 2: Home Content Types and Data (PT + EN)

**Files:**
- Create: `content/homeContent.types.ts`
- Create: `content/home.pt.ts`
- Create: `content/home.en.ts`
- Test: `content/homeContent.test.ts`

**Interfaces:**
- Consumes: nothing (leaf data module).
- Produces:
  - `type HomeContent` with fields: `lang: 'pt' | 'en'`, `hero: { title: string; subtitle: string; videoUrl: string; ctaLabel: string; calendlyUrl: string }`, `method: { heading: string; body: string; points: string[] }`, `estatePlanning: { heading: string; body: string }`, `finalCta: { heading: string; calendlyLabel: string; calendlyUrl: string; whatsappLabel: string; whatsappUrl: string }`, `nav: { switchLabel: string; switchHref: string }`.
  - `homeContentPt: HomeContent` (default export from `content/home.pt.ts`)
  - `homeContentEn: HomeContent` (default export from `content/home.en.ts`)
  - Both objects set `hero.videoUrl = ''` (video doesn't exist yet — Global Constraint: placeholder must render).

- [ ] **Step 1: Write the failing test**

Create `content/homeContent.test.ts`:

```ts
import { describe, it, expect } from 'vitest';
import homeContentPt from './home.pt';
import homeContentEn from './home.en';
import type { HomeContent } from './homeContent.types';

function assertShape(content: HomeContent, lang: 'pt' | 'en') {
  expect(content.lang).toBe(lang);
  expect(content.hero.title.length).toBeGreaterThan(0);
  expect(content.hero.videoUrl).toBe('');
  expect(content.hero.calendlyUrl).toMatch(/^https:\/\/calendly\.com\//);
  expect(content.method.points.length).toBeGreaterThan(0);
  expect(content.estatePlanning.body.length).toBeGreaterThan(0);
  expect(content.finalCta.whatsappUrl).toMatch(/^https:\/\/wa\.me\//);
}

describe('home content', () => {
  it('pt content has the required shape', () => {
    assertShape(homeContentPt, 'pt');
  });

  it('en content has the required shape', () => {
    assertShape(homeContentEn, 'en');
  });

  it('nav switch hrefs point at each other', () => {
    expect(homeContentPt.nav.switchHref).toBe('/en');
    expect(homeContentEn.nav.switchHref).toBe('/');
  });
});
```

- [ ] **Step 2: Install a test runner and run the test to verify it fails**

```bash
npm install -D vitest
```

Add to `package.json` scripts: `"test": "vitest run"`.

Run: `npm run test`
Expected: FAIL — `content/home.pt.ts` and `content/home.en.ts` don't exist yet.

- [ ] **Step 3: Write `content/homeContent.types.ts`**

```ts
export interface HomeContent {
  lang: 'pt' | 'en';
  nav: {
    switchLabel: string;
    switchHref: string;
  };
  hero: {
    title: string;
    subtitle: string;
    videoUrl: string;
    ctaLabel: string;
    calendlyUrl: string;
  };
  method: {
    heading: string;
    body: string;
    points: string[];
  };
  estatePlanning: {
    heading: string;
    body: string;
  };
  finalCta: {
    heading: string;
    calendlyLabel: string;
    calendlyUrl: string;
    whatsappLabel: string;
    whatsappUrl: string;
  };
}
```

- [ ] **Step 4: Write `content/home.pt.ts`**

```ts
import type { HomeContent } from './homeContent.types';

const homeContentPt: HomeContent = {
  lang: 'pt',
  nav: {
    switchLabel: 'EN',
    switchHref: '/en',
  },
  hero: {
    title: 'Proteja quem você ama, viva com tranquilidade',
    subtitle:
      'Consultoria em Life Insurance e Estate Planning para famílias que querem segurança financeira e um plano claro para o futuro.',
    videoUrl: '',
    ctaLabel: 'Agendar Consultoria',
    calendlyUrl: 'https://calendly.com/laisdaltrozo/30min',
  },
  method: {
    heading: 'Como funciona o Life Insurance',
    body:
      'Existem diferentes tipos de apólice — IUL (Indexed Universal Life), Whole Life e Term Life — cada uma com um propósito diferente. Além da proteção para sua família, algumas modalidades oferecem benefícios em vida, permitindo acesso a parte do valor acumulado ainda em vida, para emergências ou oportunidades.',
    points: [
      'IUL (Indexed Universal Life): proteção vitalícia com potencial de crescimento atrelado a índices de mercado',
      'Whole Life: proteção vitalícia com valor em dinheiro garantido',
      'Term Life: proteção por um período determinado, com o menor custo inicial',
      'Benefícios em vida: acesso antecipado a parte do valor em casos de doença grave ou necessidade',
    ],
  },
  estatePlanning: {
    heading: 'Estate Planning: o complemento para proteger seu patrimônio',
    body:
      'Além do seguro de vida, ajudamos você a planejar como seus bens serão protegidos e transferidos, evitando complicações legais e garantindo que sua vontade seja respeitada.',
  },
  finalCta: {
    heading: 'Vamos conversar sobre o seu plano?',
    calendlyLabel: 'Agendar Consultoria',
    calendlyUrl: 'https://calendly.com/laisdaltrozo/30min',
    whatsappLabel: 'Falar no WhatsApp',
    whatsappUrl: 'https://wa.me/13127097886',
  },
};

export default homeContentPt;
```

- [ ] **Step 5: Write `content/home.en.ts`**

```ts
import type { HomeContent } from './homeContent.types';

const homeContentEn: HomeContent = {
  lang: 'en',
  nav: {
    switchLabel: 'PT',
    switchHref: '/',
  },
  hero: {
    title: 'Protect who you love, live with peace of mind',
    subtitle:
      'Life Insurance and Estate Planning consulting for families who want financial security and a clear plan for the future.',
    videoUrl: '',
    ctaLabel: 'Book a Consultation',
    calendlyUrl: 'https://calendly.com/laisdaltrozo/30min',
  },
  method: {
    heading: 'How Life Insurance works',
    body:
      'There are different types of policies — IUL (Indexed Universal Life), Whole Life, and Term Life — each serving a different purpose. Beyond protecting your family, some policies offer living benefits, letting you access part of the accumulated value while you are still alive, for emergencies or opportunities.',
    points: [
      'IUL (Indexed Universal Life): lifetime protection with growth potential tied to market indexes',
      'Whole Life: lifetime protection with guaranteed cash value',
      'Term Life: protection for a set period, at the lowest initial cost',
      'Living benefits: early access to part of the value in cases of critical illness or need',
    ],
  },
  estatePlanning: {
    heading: 'Estate Planning: protecting what you built',
    body:
      'Beyond life insurance, we help you plan how your assets will be protected and transferred, avoiding legal complications and making sure your wishes are honored.',
  },
  finalCta: {
    heading: "Let's talk about your plan",
    calendlyLabel: 'Book a Consultation',
    calendlyUrl: 'https://calendly.com/laisdaltrozo/30min',
    whatsappLabel: 'Chat on WhatsApp',
    whatsappUrl: 'https://wa.me/13127097886',
  },
};

export default homeContentEn;
```

- [ ] **Step 6: Run the test to verify it passes**

Run: `npm run test`
Expected: PASS (3 tests).

- [ ] **Step 7: Commit**

```bash
git add content package.json package-lock.json
git commit -m "feat: add bilingual home content data"
```

---

## Task 3: Hero Section (with video placeholder handling)

**Files:**
- Create: `components/home/Hero.tsx`
- Test: `components/home/Hero.test.tsx`

**Interfaces:**
- Consumes: `HomeContent['hero']` shape from Task 2 (`title`, `subtitle`, `videoUrl`, `ctaLabel`, `calendlyUrl`).
- Produces: `Hero` component, `export function Hero(props: { hero: HomeContent['hero'] })`, consumed by `HomePage` in Task 6.

- [ ] **Step 1: Install React Testing Library**

```bash
npm install -D @testing-library/react @testing-library/jest-dom jsdom
```

Add a `vitest.config.ts`:

```ts
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
  },
});
```

```bash
npm install -D @vitejs/plugin-react
```

Create `vitest.setup.ts`:

```ts
import '@testing-library/jest-dom/vitest';
```

- [ ] **Step 2: Write the failing test**

Create `components/home/Hero.test.tsx`:

```tsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Hero } from './Hero';
import type { HomeContent } from '@/content/homeContent.types';

const baseHero: HomeContent['hero'] = {
  title: 'Test title',
  subtitle: 'Test subtitle',
  videoUrl: '',
  ctaLabel: 'Book now',
  calendlyUrl: 'https://calendly.com/example/30min',
};

describe('Hero', () => {
  it('renders the placeholder when videoUrl is empty', () => {
    render(<Hero hero={baseHero} />);
    expect(screen.getByText(/vídeo em breve|video coming soon/i)).toBeInTheDocument();
    expect(screen.queryByTestId('hero-video')).not.toBeInTheDocument();
  });

  it('renders the video when videoUrl is set', () => {
    render(<Hero hero={{ ...baseHero, videoUrl: 'https://example.com/video.mp4' }} />);
    expect(screen.getByTestId('hero-video')).toBeInTheDocument();
  });

  it('links the CTA to the calendly url', () => {
    render(<Hero hero={baseHero} />);
    const link = screen.getByRole('link', { name: 'Book now' });
    expect(link).toHaveAttribute('href', 'https://calendly.com/example/30min');
  });
});
```

- [ ] **Step 3: Run test to verify it fails**

Run: `npm run test`
Expected: FAIL — `./Hero` module not found.

- [ ] **Step 4: Write the implementation**

Create `components/home/Hero.tsx`:

```tsx
import type { HomeContent } from '@/content/homeContent.types';

export function Hero({ hero }: { hero: HomeContent['hero'] }) {
  const hasVideo = hero.videoUrl.trim().length > 0;

  return (
    <section className="flex flex-col items-center gap-6 px-6 py-16 text-center sm:py-24">
      <h1 className="text-3xl font-bold sm:text-5xl">{hero.title}</h1>
      <p className="max-w-xl text-base text-gray-600 sm:text-lg">{hero.subtitle}</p>

      <div className="aspect-video w-full max-w-2xl overflow-hidden rounded-lg bg-gray-100">
        {hasVideo ? (
          <video data-testid="hero-video" src={hero.videoUrl} controls className="h-full w-full" />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-gray-400">
            Vídeo em breve / Video coming soon
          </div>
        )}
      </div>

      <a
        href={hero.calendlyUrl}
        className="rounded-full bg-black px-8 py-3 font-medium text-white"
      >
        {hero.ctaLabel}
      </a>
    </section>
  );
}
```

- [ ] **Step 5: Run test to verify it passes**

Run: `npm run test`
Expected: PASS.

- [ ] **Step 6: Commit**

```bash
git add components/home/Hero.tsx components/home/Hero.test.tsx vitest.config.ts vitest.setup.ts package.json package-lock.json
git commit -m "feat: add Hero section with video placeholder handling"
```

---

## Task 4: Method and EstatePlanning Sections

**Files:**
- Create: `components/home/Method.tsx`
- Create: `components/home/EstatePlanning.tsx`
- Test: `components/home/Method.test.tsx`
- Test: `components/home/EstatePlanning.test.tsx`

**Interfaces:**
- Consumes: `HomeContent['method']` and `HomeContent['estatePlanning']` from Task 2.
- Produces: `Method` component (`export function Method(props: { method: HomeContent['method'] })`) and `EstatePlanning` component (`export function EstatePlanning(props: { estatePlanning: HomeContent['estatePlanning'] })`), both rendering a `<section id="...">` with a fixed anchor id (`id="metodo"` and `id="servicos"` respectively — `servicos` is the Global Constraint's redirect target, must not be renamed without updating Task 9's redirect).

- [ ] **Step 1: Write the failing tests**

Create `components/home/Method.test.tsx`:

```tsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Method } from './Method';
import type { HomeContent } from '@/content/homeContent.types';

const method: HomeContent['method'] = {
  heading: 'How it works',
  body: 'Some body text',
  points: ['Point A', 'Point B'],
};

describe('Method', () => {
  it('renders with anchor id "metodo"', () => {
    const { container } = render(<Method method={method} />);
    expect(container.querySelector('section#metodo')).not.toBeNull();
  });

  it('renders all points as a list', () => {
    render(<Method method={method} />);
    expect(screen.getByText('Point A')).toBeInTheDocument();
    expect(screen.getByText('Point B')).toBeInTheDocument();
  });
});
```

Create `components/home/EstatePlanning.test.tsx`:

```tsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { EstatePlanning } from './EstatePlanning';
import type { HomeContent } from '@/content/homeContent.types';

const estatePlanning: HomeContent['estatePlanning'] = {
  heading: 'Estate Planning heading',
  body: 'Estate Planning body',
};

describe('EstatePlanning', () => {
  it('renders with anchor id "servicos" so /servicos redirects here', () => {
    const { container } = render(<EstatePlanning estatePlanning={estatePlanning} />);
    expect(container.querySelector('section#servicos')).not.toBeNull();
  });

  it('renders heading and body', () => {
    render(<EstatePlanning estatePlanning={estatePlanning} />);
    expect(screen.getByText('Estate Planning heading')).toBeInTheDocument();
    expect(screen.getByText('Estate Planning body')).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `npm run test`
Expected: FAIL — modules not found.

- [ ] **Step 3: Write `components/home/Method.tsx`**

```tsx
import type { HomeContent } from '@/content/homeContent.types';

export function Method({ method }: { method: HomeContent['method'] }) {
  return (
    <section id="metodo" className="mx-auto max-w-3xl px-6 py-16">
      <h2 className="text-2xl font-bold sm:text-3xl">{method.heading}</h2>
      <p className="mt-4 text-gray-600">{method.body}</p>
      <ul className="mt-6 list-disc space-y-2 pl-5 text-gray-700">
        {method.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </section>
  );
}
```

- [ ] **Step 4: Write `components/home/EstatePlanning.tsx`**

```tsx
import type { HomeContent } from '@/content/homeContent.types';

export function EstatePlanning({
  estatePlanning,
}: {
  estatePlanning: HomeContent['estatePlanning'];
}) {
  return (
    <section id="servicos" className="mx-auto max-w-3xl px-6 py-16">
      <h2 className="text-2xl font-bold sm:text-3xl">{estatePlanning.heading}</h2>
      <p className="mt-4 text-gray-600">{estatePlanning.body}</p>
    </section>
  );
}
```

- [ ] **Step 5: Run tests to verify they pass**

Run: `npm run test`
Expected: PASS.

- [ ] **Step 6: Commit**

```bash
git add components/home/Method.tsx components/home/Method.test.tsx components/home/EstatePlanning.tsx components/home/EstatePlanning.test.tsx
git commit -m "feat: add Method and EstatePlanning sections"
```

---

## Task 5: Header, FinalCta, and Footer

**Files:**
- Create: `components/home/Header.tsx`
- Create: `components/home/FinalCta.tsx`
- Create: `components/home/Footer.tsx`
- Test: `components/home/Header.test.tsx`
- Test: `components/home/FinalCta.test.tsx`

**Interfaces:**
- Consumes: `HomeContent['nav']` and `HomeContent['finalCta']` from Task 2.
- Produces: `Header` (`export function Header(props: { nav: HomeContent['nav'] })`), `FinalCta` (`export function FinalCta(props: { finalCta: HomeContent['finalCta'] })`), `Footer` (`export function Footer()`) — all consumed by `HomePage` in Task 6.

- [ ] **Step 1: Write the failing tests**

Create `components/home/Header.test.tsx`:

```tsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Header } from './Header';

describe('Header', () => {
  it('links to the other language using nav.switchHref', () => {
    render(<Header nav={{ switchLabel: 'EN', switchHref: '/en' }} />);
    const link = screen.getByRole('link', { name: 'EN' });
    expect(link).toHaveAttribute('href', '/en');
  });
});
```

Create `components/home/FinalCta.test.tsx`:

```tsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { FinalCta } from './FinalCta';
import type { HomeContent } from '@/content/homeContent.types';

const finalCta: HomeContent['finalCta'] = {
  heading: 'Talk to us',
  calendlyLabel: 'Book now',
  calendlyUrl: 'https://calendly.com/example/30min',
  whatsappLabel: 'WhatsApp us',
  whatsappUrl: 'https://wa.me/1234567890',
};

describe('FinalCta', () => {
  it('renders both CTA links with correct hrefs', () => {
    render(<FinalCta finalCta={finalCta} />);
    expect(screen.getByRole('link', { name: 'Book now' })).toHaveAttribute(
      'href',
      'https://calendly.com/example/30min'
    );
    expect(screen.getByRole('link', { name: 'WhatsApp us' })).toHaveAttribute(
      'href',
      'https://wa.me/1234567890'
    );
  });
});
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `npm run test`
Expected: FAIL — modules not found.

- [ ] **Step 3: Write `components/home/Header.tsx`**

```tsx
import type { HomeContent } from '@/content/homeContent.types';

export function Header({ nav }: { nav: HomeContent['nav'] }) {
  return (
    <header className="flex items-center justify-between px-6 py-4">
      <span className="font-semibold">Laís Daltrozo</span>
      <a href={nav.switchHref} className="text-sm underline">
        {nav.switchLabel}
      </a>
    </header>
  );
}
```

- [ ] **Step 4: Write `components/home/FinalCta.tsx`**

```tsx
import type { HomeContent } from '@/content/homeContent.types';

export function FinalCta({ finalCta }: { finalCta: HomeContent['finalCta'] }) {
  return (
    <section className="flex flex-col items-center gap-4 px-6 py-16 text-center">
      <h2 className="text-2xl font-bold sm:text-3xl">{finalCta.heading}</h2>
      <div className="flex flex-col gap-3 sm:flex-row">
        <a
          href={finalCta.calendlyUrl}
          className="rounded-full bg-black px-8 py-3 font-medium text-white"
        >
          {finalCta.calendlyLabel}
        </a>
        <a
          href={finalCta.whatsappUrl}
          className="rounded-full border border-black px-8 py-3 font-medium"
        >
          {finalCta.whatsappLabel}
        </a>
      </div>
    </section>
  );
}
```

- [ ] **Step 5: Write `components/home/Footer.tsx`**

```tsx
export function Footer() {
  return (
    <footer className="px-6 py-8 text-center text-sm text-gray-400">
      NPN 21436256 · © {new Date().getFullYear()} Laís Daltrozo
    </footer>
  );
}
```

- [ ] **Step 6: Run tests to verify they pass**

Run: `npm run test`
Expected: PASS.

- [ ] **Step 7: Commit**

```bash
git add components/home/Header.tsx components/home/Header.test.tsx components/home/FinalCta.tsx components/home/FinalCta.test.tsx components/home/Footer.tsx
git commit -m "feat: add Header, FinalCta, and Footer components"
```

---

## Task 6: HomePage Composition

**Files:**
- Create: `components/home/HomePage.tsx`
- Test: `components/home/HomePage.test.tsx`

**Interfaces:**
- Consumes: `Header` (Task 5), `Hero` (Task 3), `Method`, `EstatePlanning` (Task 4), `FinalCta`, `Footer` (Task 5), and `HomeContent` type (Task 2).
- Produces: `HomePage` component, `export function HomePage(props: { content: HomeContent })`, consumed by `app/page.tsx` and `app/en/page.tsx` in Task 7.

- [ ] **Step 1: Write the failing test**

Create `components/home/HomePage.test.tsx`:

```tsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { HomePage } from './HomePage';
import homeContentPt from '@/content/home.pt';

describe('HomePage', () => {
  it('renders all sections from the given content', () => {
    render(<HomePage content={homeContentPt} />);
    expect(screen.getByText(homeContentPt.hero.title)).toBeInTheDocument();
    expect(screen.getByText(homeContentPt.method.heading)).toBeInTheDocument();
    expect(screen.getByText(homeContentPt.estatePlanning.heading)).toBeInTheDocument();
    expect(screen.getByText(homeContentPt.finalCta.heading)).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm run test`
Expected: FAIL — `./HomePage` not found.

- [ ] **Step 3: Write `components/home/HomePage.tsx`**

```tsx
import type { HomeContent } from '@/content/homeContent.types';
import { Header } from './Header';
import { Hero } from './Hero';
import { Method } from './Method';
import { EstatePlanning } from './EstatePlanning';
import { FinalCta } from './FinalCta';
import { Footer } from './Footer';

export function HomePage({ content }: { content: HomeContent }) {
  return (
    <main>
      <Header nav={content.nav} />
      <Hero hero={content.hero} />
      <Method method={content.method} />
      <EstatePlanning estatePlanning={content.estatePlanning} />
      <FinalCta finalCta={content.finalCta} />
      <Footer />
    </main>
  );
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npm run test`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add components/home/HomePage.tsx components/home/HomePage.test.tsx
git commit -m "feat: compose HomePage from section components"
```

---

## Task 7: Wire Up `/` and `/en` Routes

**Files:**
- Modify: `app/page.tsx`
- Create: `app/en/page.tsx`

**Interfaces:**
- Consumes: `HomePage` (Task 6), `homeContentPt`, `homeContentEn` (Task 2).
- Produces: working `/` and `/en` routes.

- [ ] **Step 1: Update `app/page.tsx`**

```tsx
import { HomePage } from '@/components/home/HomePage';
import homeContentPt from '@/content/home.pt';

export default function Home() {
  return <HomePage content={homeContentPt} />;
}
```

- [ ] **Step 2: Create `app/en/page.tsx`**

```tsx
import { HomePage } from '@/components/home/HomePage';
import homeContentEn from '@/content/home.en';

export default function EnglishHome() {
  return <HomePage content={homeContentEn} />;
}
```

- [ ] **Step 3: Verify manually**

Run: `npm run dev`

Visit `http://localhost:3000/` — confirm Portuguese content renders, hero shows "Vídeo em breve" placeholder, and the `EN` link in the header navigates to `/en`.

Visit `http://localhost:3000/en` — confirm English content renders and the `PT` link navigates back to `/`.

Stop the dev server (Ctrl+C) once confirmed.

- [ ] **Step 4: Run full test suite**

Run: `npm run test`
Expected: PASS (all prior tests still green).

- [ ] **Step 5: Commit**

```bash
git add app/page.tsx app/en/page.tsx
git commit -m "feat: wire up / and /en routes to HomePage"
```

---

## Task 8: Linktree Page

**Files:**
- Create: `content/linktreeLinks.ts`
- Create: `components/linktree/LinkButton.tsx`
- Create: `components/linktree/LinktreePage.tsx`
- Create: `app/linktree/page.tsx`
- Test: `content/linktreeLinks.test.ts`
- Test: `components/linktree/LinktreePage.test.tsx`

**Interfaces:**
- Consumes: nothing external — self-contained content module.
- Produces: `interface LinktreeLink { label: string; url: string }`, `linktreeLinks: LinktreeLink[]`, `LinkButton` component (`export function LinkButton(props: LinktreeLink)`), `LinktreePage` component (`export function LinktreePage()`), consumed by `app/linktree/page.tsx`.

- [ ] **Step 1: Write the failing tests**

Create `content/linktreeLinks.test.ts`:

```ts
import { describe, it, expect } from 'vitest';
import { linktreeLinks } from './linktreeLinks';

describe('linktreeLinks', () => {
  it('includes the Calendly, WhatsApp, and checklist links', () => {
    const urls = linktreeLinks.map((link) => link.url);
    expect(urls).toContain('https://calendly.com/laisdaltrozo/30min');
    expect(urls).toContain('https://wa.me/13127097886');
    expect(urls.some((url) => url.includes('drive.google.com'))).toBe(true);
  });

  it('every link has a non-empty label and a valid-looking url', () => {
    for (const link of linktreeLinks) {
      expect(link.label.length).toBeGreaterThan(0);
      expect(link.url).toMatch(/^https:\/\//);
    }
  });
});
```

Create `components/linktree/LinktreePage.test.tsx`:

```tsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { LinktreePage } from './LinktreePage';
import { linktreeLinks } from '@/content/linktreeLinks';

describe('LinktreePage', () => {
  it('renders a link for every entry in linktreeLinks', () => {
    render(<LinktreePage />);
    for (const link of linktreeLinks) {
      expect(screen.getByRole('link', { name: link.label })).toHaveAttribute('href', link.url);
    }
  });
});
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `npm run test`
Expected: FAIL — modules not found.

- [ ] **Step 3: Write `content/linktreeLinks.ts`**

```ts
export interface LinktreeLink {
  label: string;
  url: string;
}

export const linktreeLinks: LinktreeLink[] = [
  {
    label: 'Agendar Consultoria',
    url: 'https://calendly.com/laisdaltrozo/30min',
  },
  {
    label: 'Entrar em Contato (WhatsApp)',
    url: 'https://wa.me/13127097886',
  },
  {
    label: 'Checklist Patrimonial',
    url: 'https://drive.google.com/file/d/1i76Mx1vXPymIKzbUuR2QuLZ9J8KlHGTc/view?usp=drive_link',
  },
];
```

- [ ] **Step 4: Write `components/linktree/LinkButton.tsx`**

```tsx
import type { LinktreeLink } from '@/content/linktreeLinks';

export function LinkButton({ label, url }: LinktreeLink) {
  return (
    <a
      href={url}
      className="block w-full rounded-full border border-black px-6 py-4 text-center font-medium"
    >
      {label}
    </a>
  );
}
```

- [ ] **Step 5: Write `components/linktree/LinktreePage.tsx`**

```tsx
import { linktreeLinks } from '@/content/linktreeLinks';
import { LinkButton } from './LinkButton';

export function LinktreePage() {
  return (
    <main className="mx-auto flex max-w-md flex-col items-center gap-4 px-6 py-16">
      <h1 className="text-2xl font-bold">Laís Daltrozo</h1>
      <p className="text-gray-500">NPN 21436256</p>
      <div className="mt-4 flex w-full flex-col gap-3">
        {linktreeLinks.map((link) => (
          <LinkButton key={link.url} {...link} />
        ))}
      </div>
    </main>
  );
}
```

- [ ] **Step 6: Write `app/linktree/page.tsx`**

```tsx
import { LinktreePage } from '@/components/linktree/LinktreePage';

export default function Linktree() {
  return <LinktreePage />;
}
```

- [ ] **Step 7: Run tests to verify they pass**

Run: `npm run test`
Expected: PASS.

- [ ] **Step 8: Commit**

```bash
git add content/linktreeLinks.ts content/linktreeLinks.test.ts components/linktree app/linktree
git commit -m "feat: add /linktree page"
```

---

## Task 9: `/servicos` Redirect

**Files:**
- Modify: `next.config.ts`
- Test: `next.config.test.ts`

**Interfaces:**
- Consumes: the `id="servicos"` anchor established on `EstatePlanning` in Task 4 — this redirect's destination path must match that id.
- Produces: a permanent redirect from `/servicos` to `/#servicos`.

- [ ] **Step 1: Write the failing test**

Create `next.config.test.ts`:

```ts
import { describe, it, expect } from 'vitest';
import nextConfig from './next.config';

describe('next.config redirects', () => {
  it('redirects /servicos to the estate planning anchor on the home page', async () => {
    const redirects = await nextConfig.redirects?.();
    expect(redirects).toContainEqual({
      source: '/servicos',
      destination: '/#servicos',
      permanent: true,
    });
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm run test`
Expected: FAIL — `next.config.ts` has no `redirects` matching this entry (or none at all).

- [ ] **Step 3: Update `next.config.ts`**

```ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/servicos',
        destination: '/#servicos',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npm run test`
Expected: PASS.

- [ ] **Step 5: Verify manually**

Run: `npm run dev`, then in another terminal:

```bash
curl -I http://localhost:3000/servicos
```

Expected: `HTTP/1.1 308 Permanent Redirect` with `location: /#servicos`.

Stop the dev server.

- [ ] **Step 6: Commit**

```bash
git add next.config.ts next.config.test.ts
git commit -m "feat: add permanent redirect from /servicos to home estate planning section"
```

---

## Task 10: Root Layout, Metadata, and Full Build Verification

**Files:**
- Modify: `app/layout.tsx`

**Interfaces:**
- Consumes: nothing new — wraps all routes from prior tasks.
- Produces: final shared `<html>`/`<body>` shell with page metadata; no component contract (leaf task).

- [ ] **Step 1: Update `app/layout.tsx`**

```tsx
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Laís Daltrozo | Life Insurance & Estate Planning',
  description:
    'Consultoria em Life Insurance e Estate Planning com Laís Daltrozo. Agende uma consultoria gratuita.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">{children}</body>
    </html>
  );
}
```

- [ ] **Step 2: Run the full test suite**

Run: `npm run test`
Expected: PASS — every test from Tasks 2–9 green.

- [ ] **Step 3: Run a production build**

Run: `npm run build`
Expected: build succeeds, route summary lists `/`, `/en`, `/linktree`, and the `/servicos` redirect.

- [ ] **Step 4: Manual smoke test of all routes**

Run: `npm run start` (after build), then visit and confirm each renders without console errors:
- `http://localhost:3000/`
- `http://localhost:3000/en`
- `http://localhost:3000/linktree`
- `http://localhost:3000/servicos` (should redirect to `/#servicos`)

Check on a narrow viewport (e.g. browser devtools mobile emulation, ~375px width) that no section overflows horizontally — this is the mobile-first constraint from the spec.

Stop the server.

- [ ] **Step 5: Commit**

```bash
git add app/layout.tsx
git commit -m "feat: finalize root layout and metadata"
```

---

## Task 11: Push to GitHub

**Files:**
- None (repo operations only)

**Interfaces:**
- Consumes: the fully committed local repo from Tasks 1–10.
- Produces: pushed `main` branch on `https://github.com/euvictorferro/LaisWebsite.git`.

- [ ] **Step 1: Check current git remotes**

```bash
git remote -v
```

If `origin` is not already set to the target repo, add it:

```bash
git remote add origin https://github.com/euvictorferro/LaisWebsite.git
```

- [ ] **Step 2: Confirm with the user before pushing**

This is a push to a remote the user owns — confirm the branch name and target repo with the user before running `git push`, per the destructive/shared-state action policy. Do not push without that confirmation.

- [ ] **Step 3: Push**

```bash
git push -u origin main
```

- [ ] **Step 4: Verify**

```bash
git status
```

Expected: `Your branch is up to date with 'origin/main'.`

---

## Out of Scope (confirmed by spec, not part of this plan)

- Creating the Vercel project / connecting the domain `laisdaltrozo.com` — requires interactive Vercel account action; hand off separately once code is pushed.
- Final video embed — placeholder ships; swapping `videoUrl` in `content/home.pt.ts`/`content/home.en.ts` is a one-line follow-up once the video exists.
- Final visual identity (logo/colors) — this plan ships with default Tailwind neutrals; swapping in real brand colors/logo is a follow-up styling pass once assets are provided.
