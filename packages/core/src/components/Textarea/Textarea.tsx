import { forwardRef, useId, type TextareaHTMLAttributes } from 'react';
import { cn } from '../../utils/cn';
import './Textarea.css';

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  description?: string;
  error?: string;
  resize?: 'none' | 'vertical' | 'horizontal' | 'both';
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      label,
      description,
      error,
      resize = 'vertical',
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

    const describedBy = [
      ariaDescribedBy,
      description && descriptionId,
      error && errorId,
    ]
      .filter(Boolean)
      .join(' ') || undefined;

    return (
      <div className={cn('ds-textarea-wrapper', className)}>
        {label && (
          <label htmlFor={id} className="ds-textarea__label">
            {label}
          </label>
        )}
        {description && (
          <p id={descriptionId} className="ds-textarea__description">
            {description}
          </p>
        )}
        <textarea
          ref={ref}
          id={id}
          className={cn(
            'ds-textarea',
            `ds-textarea--resize-${resize}`,
            error && 'ds-textarea--error',
            props.disabled && 'ds-textarea--disabled'
          )}
          aria-invalid={!!error}
          aria-describedby={describedBy}
          {...props}
        />
        {error && (
          <p id={errorId} className="ds-textarea__error" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';
