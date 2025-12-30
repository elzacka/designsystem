import { useEffect, useRef, type RefObject } from 'react';

const FOCUSABLE_ELEMENTS =
  'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

/**
 * Hook that traps focus within the referenced element.
 * @param ref - Reference to the element to trap focus within
 * @param enabled - Whether the hook is active (default: true)
 */
export function useFocusTrap<T extends HTMLElement>(
  ref: RefObject<T | null>,
  enabled = true
): void {
  const previousActiveElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!enabled) return;

    previousActiveElement.current = document.activeElement as HTMLElement;
    ref.current?.focus();

    return () => {
      previousActiveElement.current?.focus();
    };
  }, [ref, enabled]);

  useEffect(() => {
    if (!enabled) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      const element = ref.current;
      if (!element) return;

      const focusableElements = element.querySelectorAll<HTMLElement>(FOCUSABLE_ELEMENTS);
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement?.focus();
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement?.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [ref, enabled]);
}
