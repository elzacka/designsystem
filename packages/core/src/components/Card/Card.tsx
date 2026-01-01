import { forwardRef, type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../utils/cn';
import './Card.css';

export type CardVariant = 'elevated' | 'outlined' | 'filled';
export type CardPadding = 'none' | 'sm' | 'md' | 'lg';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /** Visual style variant */
  variant?: CardVariant;
  /** Internal padding */
  padding?: CardPadding;
  /** Makes card interactive (hover/focus states) */
  interactive?: boolean;
  /** Selected state for selectable cards */
  selected?: boolean;
  children: ReactNode;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      variant = 'outlined',
      padding = 'md',
      interactive = false,
      selected = false,
      className,
      children,
      onClick,
      onKeyDown,
      ...props
    },
    ref
  ) => {
    const isClickable = interactive || !!onClick;

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (isClickable && (e.key === 'Enter' || e.key === ' ')) {
        e.preventDefault();
        onClick?.(e as unknown as React.MouseEvent<HTMLDivElement>);
      }
      onKeyDown?.(e);
    };

    return (
      <div
        ref={ref}
        className={cn(
          'ds-card',
          `ds-card--${variant}`,
          `ds-card--padding-${padding}`,
          isClickable && 'ds-card--interactive',
          selected && 'ds-card--selected',
          className
        )}
        onClick={onClick}
        onKeyDown={handleKeyDown}
        tabIndex={isClickable ? 0 : undefined}
        role={isClickable ? 'button' : undefined}
        aria-pressed={isClickable ? selected : undefined}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';
