import { forwardRef, type AnchorHTMLAttributes } from 'react';
import { cn } from '../../utils/cn';
import './SkipLink.css';

export interface SkipLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children?: string;
}

export const SkipLink = forwardRef<HTMLAnchorElement, SkipLinkProps>(
  ({ href = '#main', children = 'Hopp til hovedinnhold', className, ...props }, ref) => {
    return (
      <a ref={ref} href={href} className={cn('ds-skip-link', className)} {...props}>
        {children}
      </a>
    );
  }
);

SkipLink.displayName = 'SkipLink';
