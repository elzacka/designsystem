import { useEffect } from 'react';

/**
 * Hook that listens for the Escape key press.
 * @param handler - Callback function to run when Escape is pressed
 * @param enabled - Whether the hook is active (default: true)
 */
export function useEscapeKey(handler: () => void, enabled = true): void {
  useEffect(() => {
    if (!enabled) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handler();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [handler, enabled]);
}
