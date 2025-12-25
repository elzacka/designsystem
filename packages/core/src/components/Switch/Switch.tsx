import { forwardRef, useId, type InputHTMLAttributes } from 'react';
import { cn } from '../../utils/cn';
import './Switch.css';

export type SwitchSize = 'sm' | 'md' | 'lg';

export interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  label?: string;
  description?: string;
  size?: SwitchSize;
  labelPosition?: 'left' | 'right';
}

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  (
    {
      label,
      description,
      size = 'md',
      labelPosition = 'right',
      className,
      id: providedId,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const id = providedId || generatedId;
    const descriptionId = description ? `${id}-description` : undefined;

    const labelElement = label && (
      <label htmlFor={id} className="ds-switch__label">
        {label}
      </label>
    );

    return (
      <div className={cn('ds-switch-wrapper', className)}>
        <div className={cn('ds-switch__container', `ds-switch__container--${labelPosition}`)}>
          {labelPosition === 'left' && labelElement}
          <div className={cn('ds-switch', `ds-switch--${size}`)}>
            <input
              ref={ref}
              type="checkbox"
              role="switch"
              id={id}
              className="ds-switch__input"
              aria-describedby={descriptionId}
              {...props}
            />
            <span className="ds-switch__track">
              <span className="ds-switch__thumb" />
            </span>
          </div>
          {labelPosition === 'right' && labelElement}
        </div>
        {description && (
          <p id={descriptionId} className="ds-switch__description">
            {description}
          </p>
        )}
      </div>
    );
  }
);

Switch.displayName = 'Switch';
