import { forwardRef, useId, type InputHTMLAttributes } from 'react';
import { cn } from '../../utils/cn';
import './Checkbox.css';

export type CheckboxSize = 'sm' | 'md' | 'lg';

export interface CheckboxProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'type' | 'size'
> {
  label?: string;
  description?: string;
  error?: string;
  size?: CheckboxSize;
  indeterminate?: boolean;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      label,
      description,
      error,
      size = 'md',
      indeterminate = false,
      className,
      id: providedId,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const id = providedId || generatedId;
    const descriptionId = `${id}-description`;
    const errorId = `${id}-error`;

    return (
      <div className={cn('ds-checkbox-wrapper', className)}>
        <div className="ds-checkbox__container">
          <input
            ref={(node) => {
              if (node) {
                node.indeterminate = indeterminate;
              }
              if (typeof ref === 'function') {
                ref(node);
              } else if (ref) {
                ref.current = node;
              }
            }}
            type="checkbox"
            id={id}
            className={cn('ds-checkbox', `ds-checkbox--${size}`, error && 'ds-checkbox--error')}
            aria-invalid={!!error}
            aria-describedby={
              [description && descriptionId, error && errorId].filter(Boolean).join(' ') ||
              undefined
            }
            {...props}
          />
          <svg className="ds-checkbox__icon" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            {indeterminate ? (
              <path d="M4 8h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path
                d="M3.5 8.5L6.5 11.5L12.5 5.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            )}
          </svg>
          {label && (
            <label htmlFor={id} className="ds-checkbox__label">
              {label}
            </label>
          )}
        </div>
        {description && (
          <p id={descriptionId} className="ds-checkbox__description">
            {description}
          </p>
        )}
        {error && (
          <p id={errorId} className="ds-checkbox__error" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';
