import { useEffect, type RefObject } from 'react';

/**
 * Hook that detects clicks outside the referenced element.
 * @param ref - Reference to the element to detect clicks outside of
 * @param handler - Callback function to run when a click outside is detected
 * @param enabled - Whether the hook is active (default: true)
 */
export function useClickOutside<T extends HTMLElement>(
  ref: RefObject<T | null>,
  handler: () => void,
  enabled = true
): void {
  useEffect(() => {
    if (!enabled) return;

    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handler();
      }
    };

    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [ref, handler, enabled]);
}
