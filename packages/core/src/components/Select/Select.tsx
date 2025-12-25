import { forwardRef, useId, type SelectHTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../utils/cn';
import './Select.css';

export type SelectSize = 'sm' | 'md' | 'lg';

export interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  label?: string;
  description?: string;
  error?: string;
  size?: SelectSize;
  placeholder?: string;
  children: ReactNode;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      label,
      description,
      error,
      size = 'md',
      placeholder,
      children,
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

    const describedBy = [
      description && descriptionId,
      error && errorId,
    ]
      .filter(Boolean)
      .join(' ') || undefined;

    return (
      <div className={cn('ds-select-wrapper', className)}>
        {label && (
          <label htmlFor={id} className="ds-select__label">
            {label}
          </label>
        )}
        {description && (
          <p id={descriptionId} className="ds-select__description">
            {description}
          </p>
        )}
        <div
          className={cn(
            'ds-select',
            `ds-select--${size}`,
            error && 'ds-select--error',
            props.disabled && 'ds-select--disabled'
          )}
        >
          <select
            ref={ref}
            id={id}
            className="ds-select__field"
            aria-invalid={!!error}
            aria-describedby={describedBy}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {children}
          </select>
          <svg
            className="ds-select__icon"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M4 6L8 10L12 6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        {error && (
          <p id={errorId} className="ds-select__error" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';
