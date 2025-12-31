# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Development
pnpm dev                    # Start Storybook on localhost:6006
pnpm build                  # Build all packages (tokens → core → docs)

# Validation (run before commit)
pnpm format:check           # Check Prettier formatting
pnpm typecheck              # TypeScript validation
pnpm lint                   # ESLint
pnpm test:unit              # Unit tests only
pnpm validate               # All checks + build

# Testing
pnpm test:unit              # Unit tests (jsdom)
pnpm test:storybook         # Storybook tests (Playwright browser)
pnpm test -- --filter=Button  # Run specific test file
```

Pre-push hook runs: `format:check && typecheck && test:unit`

## Architecture

**Monorepo structure (pnpm workspaces):**

```
packages/
  tokens/     # CSS custom properties, themes, typography
  core/       # React 19 components with CSS modules
apps/
  docs/       # Storybook 10 documentation
```

**Package dependencies:** `tokens` → `core` → `docs`

**Build order matters:** tokens must build before core (core imports tokens CSS).

## Key Patterns

**Component structure:**

- Each component: `ComponentName.tsx` + `ComponentName.css` + `index.ts`
- CSS uses BEM-style classes with `ds-` prefix (e.g., `ds-button`, `ds-button--primary`)
- Components use `cn()` utility for conditional class merging

**Theming:**

- Base theme in `tokens/src/themes/base.css`
- App-specific accent colors: `teal.css`, `forest.css`, `earth.css`
- Single font: DM Mono (no Inter, no external fonts)

**Icons:**

- All icons self-hosted as React SVG components (GDPR-compliant)
- Located in `core/src/components/Icons/`
- App-specific icons in subdirectories (e.g., `Icons/trakke/`)
- Source: Lucide (MIT), paths copied inline - no npm dependency

## Constraints

- **GDPR compliance:** No external fonts, CDNs, or tracking. All assets self-hosted.
- **Norwegian localization:** UI text in Norwegian (bokmål). Use æ, ø, å in comments/docs but ASCII in code paths.
- **WCAG 2.2 AA:** All components must be accessible (44x44px touch targets, keyboard nav, ARIA).
- **React 19.2.3:** Use latest patterns (no legacy APIs).

## Storybook

Stories in `apps/docs/src/stories/`. Foundation stories (Typography, Colors, Icons) document design system basics.

Deploy: GitHub Pages at `/{repo-name}/` (uses `STORYBOOK_BASE` env var).
