import { forwardRef, type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../utils/cn';
import './Tag.css';

export type TagVariant = 'default' | 'primary' | 'success' | 'warning' | 'error' | 'info';
export type TagSize = 'sm' | 'md' | 'lg';

export interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: TagVariant;
  size?: TagSize;
  removable?: boolean;
  onRemove?: () => void;
  children: ReactNode;
}

export const Tag = forwardRef<HTMLSpanElement, TagProps>(
  (
    { variant = 'default', size = 'md', removable = false, onRemove, className, children, ...props },
    ref
  ) => {
    return (
      <span
        ref={ref}
        className={cn('ds-tag', `ds-tag--${variant}`, `ds-tag--${size}`, className)}
        {...props}
      >
        {children}
        {removable && (
          <button
            type="button"
            className="ds-tag__remove"
            onClick={onRemove}
            aria-label="Fjern"
          >
            <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </button>
        )}
      </span>
    );
  }
);

Tag.displayName = 'Tag';
