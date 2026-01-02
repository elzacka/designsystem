# Frontend Design Review Report

## Lyttejeger Design System & PWA

**Review Date:** January 2026  
**Reviewer:** Expert Frontend Designer

---

## Executive Summary

This is a well-architected monorepo with a thoughtful design system featuring distinctive retro-paper aesthetics. The codebase demonstrates strong foundations in accessibility, PWA patterns, and modern React practices. However, several areas can be improved across all priority levels.

---

## Critical Priority (P0) - Immediate Attention

### 1. GDPR Violation: External Font Loading

**File:** apps/lyttejeger/index.html:7-12

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400&display=swap"
  rel="stylesheet"
/>
```

**Issue:** The app loads IBM Plex Sans from Google Fonts, which:

- Violates GDPR by sending user IP to Google servers
- Contradicts CLAUDE.md which states "No external fonts, CDNs, or tracking"
- Is redundant - the design system uses only DM Mono (self-hosted)
- The font isn't even used anywhere in the codebase

**Impact:** Legal compliance risk, unnecessary network request, potential privacy violation.

---

### 2. Missing Unit Tests

**File:** Only 1 test file exists: packages/core/src/components/Button/Button.test.tsx

**Issue:** 38 out of 39 components lack unit tests:

- No tests for Input, Modal, Sheet, Select, Tabs, etc.
- No tests for accessibility hooks (useFocusTrap, useEscapeKey)
- No tests for Lyttejeger app components

**Impact:** Regressions can ship undetected, accessibility issues may go unnoticed.

---

### 3. Inconsistent Dark Mode Support

**Files:**

- packages/tokens/src/tokens.css:332-352 - Has dark mode
- packages/core/src/components/Button/Button.css - No dark mode
- packages/core/src/components/Modal/Modal.css:88-97 - Has dark mode
- apps/lyttejeger/src/index.css:222 - Forces light: color-scheme: light

**Issue:** Dark mode is partially implemented:

- Design tokens support prefers-color-scheme: dark
- But many components use hardcoded light colors
- Lyttejeger app explicitly disables dark mode
- Creates inconsistent experience for users with system dark mode

---

## High Priority (P1) - Should Address Soon

### 4. Button Sizes Don't Meet Touch Target Requirements

**File:** packages/core/src/components/Button/Button.css:30-46

```css
.ds-button--sm {
  height: 2rem;
} /* 32px - FAILS 44px minimum */
.ds-button--md {
  height: 2.5rem;
} /* 40px - FAILS 44px minimum */
.ds-button--lg {
  height: 3rem;
} /* 48px - OK */
```

**Issue:** Small and medium buttons fail WCAG 2.2 target size requirements (44x44px minimum for touch devices). Only lg meets the requirement.

---

### 5. Missing aria-labelledby on Modal/Sheet Components

**Files:**

- packages/core/src/components/Modal/Modal.css
- packages/core/src/components/Sheet/Sheet.css

**Issue:** Modal and Sheet components don't enforce aria-labelledby linking to their titles. The CSS exists but the TSX components should require or auto-generate this connection.

---

### 6. Audio Player Accessibility Gaps

**File:** apps/lyttejeger/src/components/AudioPlayer.module.css

**Issues:**

- Progress slider lacks aria-valuemin, aria-valuemax, aria-valuenow, aria-valuetext
- Speed button doesn't announce current speed to screen readers
- Sleep timer lacks accessible time remaining announcements
- No keyboard shortcut documentation for media controls

---

### 7. Legacy Token Duplication

**File:** apps/lyttejeger/src/index.css:67-157

**Issue:** ~90 lines of legacy token aliases duplicate design system tokens:

```css
--bg-primary: var(--color-background);
--text-primary: var(--color-foreground);
--space-3xs: var(--space-0-5);
/* etc. */
```

This adds maintenance burden and potential inconsistency. Components should migrate to canonical token names.

---

### 8. Missing Container Queries

**Files:** All component CSS files

**Issue:** The codebase uses only viewport-based media queries. Modern CSS container queries would enable:

- Components that adapt to their container, not viewport
- Better reusability across different layout contexts
- More predictable responsive behavior

---

## Medium Priority (P2) - Plan to Address

### 9. No View Transitions API Usage

**Issue:** Modern navigation could use the View Transitions API for smoother transitions between views (SearchView ↔ PodcastDetailView, etc.). Currently transitions are basic or absent.

---

### 10. CSS Nesting Not Utilized

**Files:** All CSS files use flat selectors

**Issue:** CSS nesting (now baseline in 2025) could improve maintainability:

```css
/* Current */
.ds-button { ... }
.ds-button:hover { ... }
.ds-button--primary { ... }

/* With nesting */
.ds-button {
  ...
  &:hover { ... }
  &--primary { ... }
}
```

---

### 11. Missing Scroll-Driven Animations

**Files:** Various component CSS

**Issue:** Opportunities for scroll-driven animations exist but aren't utilized:

- FilterSheet could use scroll-linked progress indicator
- EpisodeList could animate items as they scroll into view
- Header could shrink/appear based on scroll position

---

### 12. Inconsistent Animation Approach

**Files:**

- CSS: @keyframes (FilterSheet, AudioPlayer)
- Motion library: (Sheet, Modal in TSX)
- CSS transitions: (Button, TopNav)

**Issue:** Three different animation systems create inconsistency:

1. Native CSS @keyframes
2. Motion library (via TSX)
3. CSS transitions

Should standardize on one primary approach.

---

### 13. No CSS Layers

**File:** All CSS files

**Issue:** CSS Cascade Layers (@layer) would:

- Control specificity more predictably
- Make token overrides cleaner
- Enable easier third-party integration

---

### 14. Missing Skeleton States in Components

**Files:** Only packages/core/src/components/Skeleton/ exists

**Issue:** Individual components don't have built-in loading skeleton variants. Cards, buttons, inputs should support loading prop with skeleton display.

---

### 15. Form Components Missing Autocomplete Attributes

**File:** packages/core/src/components/Input/Input.tsx

**Issue:** The Input component doesn't expose or document autocomplete attribute patterns for common fields (email, name, address, etc.), which affects:

- Password manager compatibility
- Form autofill UX
- WCAG 2.2 3.3.7 compliance

---

## Low Priority (P3) - Nice to Have

### 16. No CSS Custom Property Validation

**File:** packages/tokens/src/tokens.css

**Issue:** CSS Properties API (@property) isn't used to:

- Type-check custom properties
- Enable animated gradients/complex values
- Provide fallback behavior

---

### 17. Missing Subgrid Usage

**Files:** Grid layouts in various CSS

**Issue:** Subgrid (now baseline) could improve alignment in nested layouts like:

- Card grids with aligned content
- Form layouts with aligned labels/inputs
- Navigation items with aligned icons/text

---

### 18. Icon System Could Use Sprites

**File:** packages/core/src/components/Icons/

**Issue:** 74 individual icon components add to bundle size. Consider:

- SVG sprite sheet for common icons
- Dynamic import for rarely-used icons
- Icon font alternative (though less accessible)

---

### 19. No Logical Properties in Legacy Code

**Files:** Various CSS files

**Issue:** Some CSS uses physical properties (left, right, padding-left) instead of logical properties (inset-inline-start, padding-inline-start). This affects RTL support.

Example in TopNav.module.css:171:

```css
left: var(--space-md); /* Should be inset-inline-start */
```

---

### 20. Missing :has() Selector Usage

**Issue:** The :has() selector (now baseline) could simplify many patterns:

- Form validation states
- Container styling based on children
- Sibling relationships

---

### 21. Storybook Stories Inconsistent Structure

**File:** apps/docs/src/stories/

**Issue:** Stories have varying structures:

- Some use component-level meta, others story-level
- Inconsistent use of args vs inline props
- Some lack accessibility addon configuration

---

### 22. No Haptic Feedback Patterns

**Issue:** Touch interactions on iOS/Android could benefit from:

- Vibration API usage on destructive actions
- Haptic feedback on drag completion (queue reorder)
- Tactile feedback on long-press actions

---

### 23. PWA Icon Set Incomplete

**File:** apps/lyttejeger/vite.config.ts:33-55

**Issue:** Icon set could be expanded:

- Missing 180x180 Apple touch icon
- No monochrome icon for notification badges
- Missing screenshot previews in manifest
- No shortcuts for manifest (quick actions)

---

### 24. No Content-Visibility Optimization

**Files:** Long list CSS

**Issue:** content-visibility: auto could improve rendering performance for:

- Episode lists
- Podcast search results
- Queue items

---

### 25. Typography Scale Gap

**File:** packages/tokens/src/tokens.css:145-155

**Issue:** Large jump between display sizes:

```css
--text-4xl: 2.25rem; /* 36px */
--text-5xl: 3rem; /* 48px - 12px jump */
```

Could add intermediate size (42px) for smoother hierarchy.

---

### 26. Missing Print Styles

**Issue:** No @media print styles for:

- Episode details
- Podcast information
- Queue list

Users might want to print episode notes or podcast details.

---

### 27. No Preference Queries Beyond Basics

**Issue:** Only prefers-reduced-motion and prefers-color-scheme are used. Could add:

- prefers-contrast: more - beyond current high contrast
- prefers-reduced-transparency - for glass effects
- prefers-reduced-data - for image loading

---

### 28. Component Prop Documentation

**Files:** All component TSX files

**Issue:** Props lack JSDoc comments for better DX:

```tsx
// Current
export interface ButtonProps {
  variant?: ButtonVariant;
}

// Better
export interface ButtonProps {
  /** Visual style variant. Defaults to 'primary' */
  variant?: ButtonVariant;
}
```

---

### 29. Missing Error Boundary Patterns

**File:** apps/lyttejeger/src/components/ErrorBoundary.tsx

**Issue:** ErrorBoundary wraps AudioPlayer but not other critical sections. Should consider:

- View-level error boundaries
- API failure boundaries
- Graceful degradation UI

---

### 30. No Focus-Within Patterns for Complex Components

**Issue:** Components like FilterSheet, SearchBar could leverage :focus-within for enhanced visual feedback when any child has focus.

---

## Summary Table

| Priority    | Count  | Category                         |
| ----------- | ------ | -------------------------------- |
| P0 Critical | 3      | GDPR, Testing, Dark Mode         |
| P1 High     | 5      | Touch Targets, A11y, Legacy Code |
| P2 Medium   | 7      | Modern CSS, Animation, Forms     |
| P3 Low      | 15     | Polish, DX, Edge Cases           |
| **Total**   | **30** |                                  |

---

## Recommended Action Order

1. **Immediate:** Remove Google Fonts from index.html
2. **This Sprint:** Add unit tests for critical components (Modal, Sheet, Input)
3. **Next Sprint:** Fix button touch targets, add aria-labelledby to overlays
4. **Backlog:** Migrate to CSS nesting, container queries, View Transitions
5. **Continuous:** Document props, add stories, standardize animations
