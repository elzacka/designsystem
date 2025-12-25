/**
 * Design System Tokens - TypeScript Exports
 *
 * These exports provide type-safe access to CSS custom properties.
 * All values reference CSS variables for runtime theming support.
 *
 * @package @designsystem/tokens
 */

// ========================================
// COLORS
// ========================================

export const colors = {
  white: 'var(--color-white)',
  black: 'var(--color-black)',
  gray: {
    50: 'var(--color-gray-50)',
    100: 'var(--color-gray-100)',
    200: 'var(--color-gray-200)',
    300: 'var(--color-gray-300)',
    400: 'var(--color-gray-400)',
    500: 'var(--color-gray-500)',
    600: 'var(--color-gray-600)',
    700: 'var(--color-gray-700)',
    800: 'var(--color-gray-800)',
    900: 'var(--color-gray-900)',
    950: 'var(--color-gray-950)',
  },
  primary: {
    50: 'var(--color-primary-50)',
    100: 'var(--color-primary-100)',
    200: 'var(--color-primary-200)',
    300: 'var(--color-primary-300)',
    400: 'var(--color-primary-400)',
    500: 'var(--color-primary-500)',
    600: 'var(--color-primary-600)',
    700: 'var(--color-primary-700)',
    800: 'var(--color-primary-800)',
    900: 'var(--color-primary-900)',
    950: 'var(--color-primary-950)',
  },
  success: {
    50: 'var(--color-success-50)',
    100: 'var(--color-success-100)',
    200: 'var(--color-success-200)',
    300: 'var(--color-success-300)',
    400: 'var(--color-success-400)',
    500: 'var(--color-success-500)',
    600: 'var(--color-success-600)',
    700: 'var(--color-success-700)',
    800: 'var(--color-success-800)',
    900: 'var(--color-success-900)',
    950: 'var(--color-success-950)',
  },
  warning: {
    50: 'var(--color-warning-50)',
    100: 'var(--color-warning-100)',
    200: 'var(--color-warning-200)',
    300: 'var(--color-warning-300)',
    400: 'var(--color-warning-400)',
    500: 'var(--color-warning-500)',
    600: 'var(--color-warning-600)',
    700: 'var(--color-warning-700)',
    800: 'var(--color-warning-800)',
    900: 'var(--color-warning-900)',
    950: 'var(--color-warning-950)',
  },
  error: {
    50: 'var(--color-error-50)',
    100: 'var(--color-error-100)',
    200: 'var(--color-error-200)',
    300: 'var(--color-error-300)',
    400: 'var(--color-error-400)',
    500: 'var(--color-error-500)',
    600: 'var(--color-error-600)',
    700: 'var(--color-error-700)',
    800: 'var(--color-error-800)',
    900: 'var(--color-error-900)',
    950: 'var(--color-error-950)',
  },
  info: {
    50: 'var(--color-info-50)',
    100: 'var(--color-info-100)',
    200: 'var(--color-info-200)',
    300: 'var(--color-info-300)',
    400: 'var(--color-info-400)',
    500: 'var(--color-info-500)',
    600: 'var(--color-info-600)',
    700: 'var(--color-info-700)',
    800: 'var(--color-info-800)',
    900: 'var(--color-info-900)',
    950: 'var(--color-info-950)',
  },
} as const;

// Semantic colors (theme-aware)
export const semanticColors = {
  background: 'var(--color-background)',
  foreground: 'var(--color-foreground)',
  muted: 'var(--color-muted)',
  mutedForeground: 'var(--color-muted-foreground)',
  accent: 'var(--color-accent)',
  accentForeground: 'var(--color-accent-foreground)',
  border: 'var(--color-border)',
  ring: 'var(--color-ring)',
  overlay: 'var(--color-overlay)',
  hover: 'var(--color-hover)',
  active: 'var(--color-active)',
  focus: 'var(--color-focus)',
  disabled: 'var(--color-disabled)',
  disabledForeground: 'var(--color-disabled-foreground)',
} as const;

// ========================================
// TYPOGRAPHY
// ========================================

export const typography = {
  fontFamily: {
    sans: 'var(--font-sans)',
    mono: 'var(--font-mono)',
  },
  fontSize: {
    xs: 'var(--text-xs)',
    sm: 'var(--text-sm)',
    base: 'var(--text-base)',
    lg: 'var(--text-lg)',
    xl: 'var(--text-xl)',
    '2xl': 'var(--text-2xl)',
    '3xl': 'var(--text-3xl)',
    '4xl': 'var(--text-4xl)',
    '5xl': 'var(--text-5xl)',
    '6xl': 'var(--text-6xl)',
  },
  lineHeight: {
    none: 'var(--leading-none)',
    tight: 'var(--leading-tight)',
    snug: 'var(--leading-snug)',
    normal: 'var(--leading-normal)',
    relaxed: 'var(--leading-relaxed)',
    loose: 'var(--leading-loose)',
  },
  fontWeight: {
    thin: 'var(--font-thin)',
    light: 'var(--font-light)',
    normal: 'var(--font-normal)',
    medium: 'var(--font-medium)',
    semibold: 'var(--font-semibold)',
    bold: 'var(--font-bold)',
    extrabold: 'var(--font-extrabold)',
  },
  letterSpacing: {
    tighter: 'var(--tracking-tighter)',
    tight: 'var(--tracking-tight)',
    normal: 'var(--tracking-normal)',
    wide: 'var(--tracking-wide)',
    wider: 'var(--tracking-wider)',
    widest: 'var(--tracking-widest)',
  },
} as const;

// ========================================
// SPACING
// ========================================

export const spacing = {
  0: 'var(--space-0)',
  px: 'var(--space-px)',
  0.5: 'var(--space-0-5)',
  1: 'var(--space-1)',
  1.5: 'var(--space-1-5)',
  2: 'var(--space-2)',
  2.5: 'var(--space-2-5)',
  3: 'var(--space-3)',
  3.5: 'var(--space-3-5)',
  4: 'var(--space-4)',
  5: 'var(--space-5)',
  6: 'var(--space-6)',
  7: 'var(--space-7)',
  8: 'var(--space-8)',
  9: 'var(--space-9)',
  10: 'var(--space-10)',
  11: 'var(--space-11)',
  12: 'var(--space-12)',
  14: 'var(--space-14)',
  16: 'var(--space-16)',
  20: 'var(--space-20)',
  24: 'var(--space-24)',
  28: 'var(--space-28)',
  32: 'var(--space-32)',
} as const;

// ========================================
// SIZING
// ========================================

export const sizing = {
  0: 'var(--size-0)',
  full: 'var(--size-full)',
  screen: 'var(--size-screen)',
  min: 'var(--size-min)',
  max: 'var(--size-max)',
  fit: 'var(--size-fit)',
} as const;

export const containers = {
  sm: 'var(--container-sm)',
  md: 'var(--container-md)',
  lg: 'var(--container-lg)',
  xl: 'var(--container-xl)',
  '2xl': 'var(--container-2xl)',
} as const;

// ========================================
// BORDER RADIUS
// ========================================

export const radius = {
  none: 'var(--radius-none)',
  sm: 'var(--radius-sm)',
  md: 'var(--radius-md)',
  lg: 'var(--radius-lg)',
  xl: 'var(--radius-xl)',
  '2xl': 'var(--radius-2xl)',
  '3xl': 'var(--radius-3xl)',
  full: 'var(--radius-full)',
} as const;

// ========================================
// SHADOWS
// ========================================

export const shadows = {
  none: 'var(--shadow-none)',
  sm: 'var(--shadow-sm)',
  md: 'var(--shadow-md)',
  lg: 'var(--shadow-lg)',
  xl: 'var(--shadow-xl)',
  '2xl': 'var(--shadow-2xl)',
  inner: 'var(--shadow-inner)',
} as const;

// ========================================
// MOTION / TRANSITIONS
// ========================================

export const transitions = {
  duration: {
    0: 'var(--duration-0)',
    75: 'var(--duration-75)',
    100: 'var(--duration-100)',
    150: 'var(--duration-150)',
    200: 'var(--duration-200)',
    300: 'var(--duration-300)',
    500: 'var(--duration-500)',
    700: 'var(--duration-700)',
    1000: 'var(--duration-1000)',
    instant: 'var(--duration-instant)',
    fast: 'var(--duration-fast)',
    normal: 'var(--duration-normal)',
    slow: 'var(--duration-slow)',
  },
  easing: {
    linear: 'var(--ease-linear)',
    in: 'var(--ease-in)',
    out: 'var(--ease-out)',
    inOut: 'var(--ease-in-out)',
    spring: 'var(--ease-spring)',
    bounce: 'var(--ease-bounce)',
    default: 'var(--ease-default)',
  },
} as const;

// ========================================
// Z-INDEX
// ========================================

export const zIndex = {
  hide: 'var(--z-hide)',
  base: 'var(--z-base)',
  dropdown: 'var(--z-dropdown)',
  sticky: 'var(--z-sticky)',
  fixed: 'var(--z-fixed)',
  modalBackdrop: 'var(--z-modal-backdrop)',
  modal: 'var(--z-modal)',
  popover: 'var(--z-popover)',
  tooltip: 'var(--z-tooltip)',
  toast: 'var(--z-toast)',
  sheet: 'var(--z-sheet)',
  max: 'var(--z-max)',
} as const;

// ========================================
// BREAKPOINTS
// ========================================

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

// ========================================
// FOCUS RING
// ========================================

export const focusRing = {
  width: 'var(--ring-width)',
  offset: 'var(--ring-offset)',
  color: 'var(--ring-color)',
} as const;

// ========================================
// TYPE EXPORTS
// ========================================

export type ColorToken = typeof colors;
export type SemanticColorToken = typeof semanticColors;
export type TypographyToken = typeof typography;
export type SpacingToken = typeof spacing;
export type SizingToken = typeof sizing;
export type ContainerToken = typeof containers;
export type RadiusToken = typeof radius;
export type ShadowToken = typeof shadows;
export type TransitionToken = typeof transitions;
export type ZIndexToken = typeof zIndex;
export type BreakpointToken = typeof breakpoints;
export type FocusRingToken = typeof focusRing;

// Color scale type for consistent color objects
export type ColorScale = {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  950: string;
};
