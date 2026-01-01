# Designsystem

React 19 designsystem med DM Mono typografi. GDPR-kompatibelt - ingen eksterne avhengigheter.

## Kom i gang

```bash
pnpm install
pnpm dev           # Storybook på localhost:6006
pnpm build         # Bygg alle pakker
pnpm validate      # Typecheck, lint, test, build
```

## Struktur

```
packages/
  tokens/     # CSS custom properties, temaer
  core/       # React-komponenter
apps/
  docs/       # Storybook dokumentasjon
  lyttejeger/ # Podcast PWA
```

## Apper

### Lyttejeger

Podcast-app som bruker designsystemet. Utvikles i monorepoet, synkroniseres automatisk til standalone-repo for deploy.

```bash
pnpm dev --filter lyttejeger   # Start dev server
```

**Deploy-flyt:**

1. Push til `main` → GitHub Action synkroniserer til `elzacka/lyttejeger`
2. Standalone-repoet deployer til GitHub Pages med API-hemmeligheter

## Bruk

```tsx
import { Button, Text, MountainIcon } from '@designsystem/core';
import '@designsystem/tokens/css';
import '@designsystem/core/css';

<Button variant="primary">
  <MountainIcon size={16} />
  Start tur
</Button>

<Text variant="heading-lg">Overskrift</Text>
```

## Temaer

Basis-tema med app-spesifikke aksentfarger:

```tsx
// Velg aksentfarge
import '@designsystem/tokens/themes/accents/teal.css'; // eller forest, earth
```

## Dokumentasjon

Se Storybook for fullstendig komponent- og designdokumentasjon.

## Tilgjengelighet

- WCAG 2.2 Level AA
- Semantisk HTML
- Tastaturnavigasjon
- ARIA-attributter der nødvendig
- Minimum touch target 44x44px

## Lisens

Privat
