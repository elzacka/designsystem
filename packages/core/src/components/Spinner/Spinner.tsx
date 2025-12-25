import { forwardRef, type HTMLAttributes } from 'react';
import { cn } from '../../utils/cn';
import './Spinner.css';

export type SpinnerSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type SpinnerVariant = 'primary' | 'secondary' | 'inverted';

export interface SpinnerProps extends HTMLAttributes<HTMLDivElement> {
  size?: SpinnerSize;
  variant?: SpinnerVariant;
  label?: string;
}

export const Spinner = forwardRef<HTMLDivElement, SpinnerProps>(
  ({ size = 'md', variant = 'primary', label = 'Laster...', className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="status"
        aria-label={label}
        className={cn('ds-spinner', `ds-spinner--${size}`, `ds-spinner--${variant}`, className)}
        {...props}
      >
        <svg className="ds-spinner__svg" viewBox="0 0 24 24" fill="none">
          <circle
            className="ds-spinner__track"
            cx="12"
            cy="12"
            r="10"
            strokeWidth="3"
          />
          <circle
            className="ds-spinner__indicator"
            cx="12"
            cy="12"
            r="10"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
        <span className="ds-spinner__label">{label}</span>
      </div>
    );
  }
);

Spinner.displayName = 'Spinner';
