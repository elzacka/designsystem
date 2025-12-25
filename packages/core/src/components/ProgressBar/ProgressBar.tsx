import { forwardRef, type HTMLAttributes } from 'react';
import { cn } from '../../utils/cn';
import './ProgressBar.css';

export type ProgressBarSize = 'sm' | 'md' | 'lg';
export type ProgressBarVariant = 'default' | 'success' | 'warning' | 'error';

export interface ProgressBarProps extends HTMLAttributes<HTMLDivElement> {
  value?: number;
  max?: number;
  size?: ProgressBarSize;
  variant?: ProgressBarVariant;
  indeterminate?: boolean;
  label?: string;
  showValue?: boolean;
}

export const ProgressBar = forwardRef<HTMLDivElement, ProgressBarProps>(
  (
    {
      value = 0,
      max = 100,
      size = 'md',
      variant = 'default',
      indeterminate = false,
      label,
      showValue = false,
      className,
      ...props
    },
    ref
  ) => {
    const percentage = Math.min(100, Math.max(0, (value / max) * 100));

    return (
      <div ref={ref} className={cn('ds-progress', className)} {...props}>
        {(label || showValue) && (
          <div className="ds-progress__header">
            {label && <span className="ds-progress__label">{label}</span>}
            {showValue && !indeterminate && (
              <span className="ds-progress__value">{Math.round(percentage)}%</span>
            )}
          </div>
        )}
        <div
          className={cn('ds-progress__track', `ds-progress__track--${size}`)}
          role="progressbar"
          aria-valuenow={indeterminate ? undefined : value}
          aria-valuemin={0}
          aria-valuemax={max}
          aria-label={label}
        >
          <div
            className={cn(
              'ds-progress__bar',
              `ds-progress__bar--${variant}`,
              indeterminate && 'ds-progress__bar--indeterminate'
            )}
            style={indeterminate ? undefined : { width: `${percentage}%` }}
          />
        </div>
      </div>
    );
  }
);

ProgressBar.displayName = 'ProgressBar';
