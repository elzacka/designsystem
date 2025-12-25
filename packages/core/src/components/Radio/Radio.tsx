import { forwardRef, useId, type InputHTMLAttributes } from 'react';
import { cn } from '../../utils/cn';
import './Radio.css';

export type RadioSize = 'sm' | 'md' | 'lg';

export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  label?: string;
  description?: string;
  error?: string;
  size?: RadioSize;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ label, description, error, size = 'md', className, id: providedId, ...props }, ref) => {
    const generatedId = useId();
    const id = providedId || generatedId;
    const descriptionId = `${id}-description`;
    const errorId = `${id}-error`;

    return (
      <div className={cn('ds-radio-wrapper', className)}>
        <div className="ds-radio__container">
          <input
            ref={ref}
            type="radio"
            id={id}
            className={cn('ds-radio', `ds-radio--${size}`, error && 'ds-radio--error')}
            aria-describedby={
              [description && descriptionId, error && errorId].filter(Boolean).join(' ') ||
              undefined
            }
            {...props}
          />
          <span className="ds-radio__indicator" aria-hidden="true" />
          {label && (
            <label htmlFor={id} className="ds-radio__label">
              {label}
            </label>
          )}
        </div>
        {description && (
          <p id={descriptionId} className="ds-radio__description">
            {description}
          </p>
        )}
        {error && (
          <p id={errorId} className="ds-radio__error" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Radio.displayName = 'Radio';
