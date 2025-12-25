import { forwardRef, type SVGAttributes } from 'react';
import { cn } from '../../utils/cn';
import './Icon.css';

export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  name: string;
  size?: IconSize;
  label?: string;
}

export const Icon = forwardRef<SVGSVGElement, IconProps>(
  ({ name, size = 'md', label, className, ...props }, ref) => {
    const isDecorative = !label;

    return (
      <svg
        ref={ref}
        className={cn('ds-icon', `ds-icon--${size}`, className)}
        aria-hidden={isDecorative}
        aria-label={label}
        role={isDecorative ? 'presentation' : 'img'}
        focusable="false"
        {...props}
      >
        <use href={`#icon-${name}`} />
      </svg>
    );
  }
);

Icon.displayName = 'Icon';
