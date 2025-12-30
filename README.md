# Designsystem

React-basert designsystem med DM Mono som eneste font.

## Struktur

```
packages/
  core/       # React-komponenter
  tokens/     # Design tokens (CSS custom properties)
apps/
  docs/       # Storybook dokumentasjon
```

## Kom i gang

```bash
pnpm install
pnpm dev           # Start Storybook på localhost:6006
pnpm build         # Bygg alle pakker
pnpm lint          # Kjør linter
pnpm typecheck     # TypeScript validering
```

## Typografi

Systemet bruker kun **DM Mono** for en konsistent, retro-inspirert estetikk.

| Variant    | Størrelse | Vekt   | Bruk                     |
| ---------- | --------- | ------ | ------------------------ |
| display-lg | 72px      | medium | Hero-overskrifter        |
| display-md | 60px      | medium | Store overskrifter       |
| display-sm | 48px      | medium | Mellomstore overskrifter |
| heading-xl | 36px      | medium | H1                       |
| heading-lg | 30px      | medium | H2                       |
| heading-md | 24px      | medium | H3                       |
| heading-sm | 20px      | medium | H4                       |
| heading-xs | 18px      | medium | H5                       |
| body-lg    | 18px      | normal | Stor brødtekst           |
| body-md    | 16px      | normal | Standard brødtekst       |
| body-sm    | 14px      | normal | Liten brødtekst          |
| label-lg   | 17px      | medium | Store labels             |
| label-md   | 15px      | medium | Standard labels          |
| label-sm   | 13px      | medium | Små labels               |
| caption    | 12px      | normal | Hjelpetekst              |
| code       | 0.9em     | normal | Inline kode              |

## Komponenter

### Tekst

```tsx
import { Text, Heading, Paragraph, Label } from '@designsystem/core';

<Text variant="heading-lg">Overskrift</Text>
<Heading level={2} size="lg">Overskrift</Heading>
<Paragraph size="md">Brødtekst</Paragraph>
<Label size="md">Etikett</Label>
```

### Tilgjengelige komponenter

- Accordion
- Alert
- Avatar
- Badge
- Box
- Breadcrumbs
- Button
- Checkbox
- CopyButton
- DescriptionList
- Divider
- Dropdown
- FileUpload
- Grid / Stack
- Heading / Text / Paragraph
- Input / Textarea / Select
- Link
- List
- Modal
- Pagination
- Popover
- ProgressBar
- Radio
- Search
- Sheet
- Skeleton
- SkipLink
- Spinner
- Switch
- Table
- Tabs
- Tag
- Toast
- Tooltip

## Design tokens

Tokens er definert i `packages/tokens/src/tokens.css` og eksportert som CSS custom properties.

```css
/* Font */
--font-mono: 'DM Mono', 'Consolas', 'Monaco', monospace;

/* Vekter (DM Mono støtter 300, 400, 500) */
--font-light: 300;
--font-normal: 400;
--font-medium: 500;

/* Linjehøyder (optimalisert for monospace) */
--leading-tight: 1.3;
--leading-snug: 1.4;
--leading-normal: 1.6;
--leading-relaxed: 1.75;
```

## Tilgjengelighet

- WCAG 2.2 Level AA
- Semantisk HTML
- Tastaturnavigasjon
- ARIA-attributter der nødvendig
- Minimum touch target 44x44px

## Lisens

Privat
