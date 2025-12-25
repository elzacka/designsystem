import { forwardRef, Children, type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../utils/cn';
import './Breadcrumbs.css';

export interface BreadcrumbsProps extends HTMLAttributes<HTMLElement> {
  separator?: ReactNode;
  children: ReactNode;
}

export const Breadcrumbs = forwardRef<HTMLElement, BreadcrumbsProps>(
  ({ separator = '/', className, children, ...props }, ref) => {
    const items = Children.toArray(children);

    return (
      <nav ref={ref} aria-label="Brødsmuler" className={cn('ds-breadcrumbs', className)} {...props}>
        <ol className="ds-breadcrumbs__list">
          {items.map((child, index) => (
            <li key={index} className="ds-breadcrumbs__item">
              {child}
              {index < items.length - 1 && (
                <span className="ds-breadcrumbs__separator" aria-hidden="true">
                  {separator}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    );
  }
);

Breadcrumbs.displayName = 'Breadcrumbs';

export interface BreadcrumbItemProps extends HTMLAttributes<HTMLAnchorElement> {
  href?: string;
  current?: boolean;
  children: ReactNode;
}

export const BreadcrumbItem = forwardRef<HTMLAnchorElement, BreadcrumbItemProps>(
  ({ href, current = false, className, children, ...props }, ref) => {
    if (current || !href) {
      return (
        <span
          className={cn('ds-breadcrumbs__link', 'ds-breadcrumbs__link--current', className)}
          aria-current={current ? 'page' : undefined}
        >
          {children}
        </span>
      );
    }

    return (
      <a
        ref={ref}
        href={href}
        className={cn('ds-breadcrumbs__link', className)}
        {...props}
      >
        {children}
      </a>
    );
  }
);

BreadcrumbItem.displayName = 'BreadcrumbItem';
