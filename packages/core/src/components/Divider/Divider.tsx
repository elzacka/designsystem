import { forwardRef, type HTMLAttributes } from 'react';
import { cn } from '../../utils/cn';
import './Divider.css';

export type DividerOrientation = 'horizontal' | 'vertical';
export type DividerVariant = 'default' | 'subtle' | 'strong';

export interface DividerProps extends HTMLAttributes<HTMLHRElement> {
  orientation?: DividerOrientation;
  variant?: DividerVariant;
  decorative?: boolean;
}

export const Divider = forwardRef<HTMLHRElement, DividerProps>(
  (
    { orientation = 'horizontal', variant = 'default', decorative = true, className, ...props },
    ref
  ) => {
    return (
      <hr
        ref={ref}
        className={cn(
          'ds-divider',
          `ds-divider--${orientation}`,
          `ds-divider--${variant}`,
          className
        )}
        {...(!decorative && { 'aria-orientation': orientation })}
        role={decorative ? 'presentation' : 'separator'}
        {...props}
      />
    );
  }
);

Divider.displayName = 'Divider';
