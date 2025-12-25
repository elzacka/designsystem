import { forwardRef, useId, type InputHTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../utils/cn';
import './Input.css';

export type InputSize = 'sm' | 'md' | 'lg';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix'> {
  label?: string;
  description?: string;
  error?: string;
  size?: InputSize;
  prefix?: ReactNode;
  suffix?: ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      description,
      error,
      size = 'md',
      prefix,
      suffix,
      className,
      id: providedId,
      'aria-describedby': ariaDescribedBy,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const id = providedId || generatedId;
    const descriptionId = `${id}-description`;
    const errorId = `${id}-error`;

    const describedBy =
      [ariaDescribedBy, description && descriptionId, error && errorId].filter(Boolean).join(' ') ||
      undefined;

    return (
      <div className={cn('ds-input-wrapper', className)}>
        {label && (
          <label htmlFor={id} className="ds-input__label">
            {label}
          </label>
        )}
        {description && (
          <p id={descriptionId} className="ds-input__description">
            {description}
          </p>
        )}
        <div
          className={cn(
            'ds-input',
            `ds-input--${size}`,
            error ? 'ds-input--error' : '',
            props.disabled ? 'ds-input--disabled' : '',
            prefix || suffix ? 'ds-input--has-addon' : ''
          )}
        >
          {prefix && <span className="ds-input__prefix">{prefix}</span>}
          <input
            ref={ref}
            id={id}
            className="ds-input__field"
            aria-invalid={!!error}
            aria-describedby={describedBy}
            {...props}
          />
          {suffix && <span className="ds-input__suffix">{suffix}</span>}
        </div>
        {error && (
          <p id={errorId} className="ds-input__error" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
