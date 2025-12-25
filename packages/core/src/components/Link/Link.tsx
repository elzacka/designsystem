import { forwardRef, type AnchorHTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../utils/cn';
import './Link.css';

export type LinkVariant = 'default' | 'subtle' | 'neutral';

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: LinkVariant;
  external?: boolean;
  children: ReactNode;
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ variant = 'default', external = false, className, children, ...props }, ref) => {
    const externalProps = external
      ? {
          target: '_blank',
          rel: 'noopener noreferrer',
        }
      : {};

    return (
      <a
        ref={ref}
        className={cn('ds-link', `ds-link--${variant}`, className)}
        {...externalProps}
        {...props}
      >
        {children}
        {external && (
          <svg
            className="ds-link__external-icon"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M10.5 1.5L1.5 10.5M10.5 1.5H4.5M10.5 1.5V7.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </a>
    );
  }
);

Link.displayName = 'Link';
