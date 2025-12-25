import {
  forwardRef,
  useState,
  useCallback,
  type ButtonHTMLAttributes,
  type ReactNode,
} from 'react';
import { cn } from '../../utils/cn';
import './CopyButton.css';

export type CopyButtonSize = 'sm' | 'md' | 'lg';
export type CopyButtonVariant = 'primary' | 'secondary' | 'ghost';

export interface CopyButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  text: string;
  size?: CopyButtonSize;
  variant?: CopyButtonVariant;
  copiedLabel?: string;
  copyLabel?: string;
  copiedDuration?: number;
  onCopy?: () => void;
  onCopyError?: (error: Error) => void;
  children?: ReactNode;
}

export const CopyButton = forwardRef<HTMLButtonElement, CopyButtonProps>(
  (
    {
      text,
      size = 'md',
      variant = 'secondary',
      copiedLabel = 'Kopiert!',
      copyLabel = 'Kopier',
      copiedDuration = 2000,
      onCopy,
      onCopyError,
      children,
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = useCallback(async () => {
      if (disabled) return;

      try {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        onCopy?.();

        setTimeout(() => {
          setCopied(false);
        }, copiedDuration);
      } catch (err) {
        onCopyError?.(err instanceof Error ? err : new Error('Failed to copy'));
      }
    }, [text, disabled, onCopy, onCopyError, copiedDuration]);

    return (
      <button
        ref={ref}
        type="button"
        className={cn(
          'ds-copy-button',
          `ds-copy-button--${size}`,
          `ds-copy-button--${variant}`,
          copied && 'ds-copy-button--copied',
          className
        )}
        onClick={handleCopy}
        disabled={disabled}
        aria-label={copied ? copiedLabel : copyLabel}
        {...props}
      >
        {children || (
          <>
            <span className="ds-copy-button__icon" aria-hidden="true">
              {copied ? (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              ) : (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
              )}
            </span>
            <span className="ds-copy-button__label">{copied ? copiedLabel : copyLabel}</span>
          </>
        )}
      </button>
    );
  }
);

CopyButton.displayName = 'CopyButton';
