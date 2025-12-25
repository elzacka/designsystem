import { forwardRef, type HTMLAttributes, type LiHTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../utils/cn';
import './List.css';

export type ListVariant = 'unordered' | 'ordered' | 'none';
export type ListSize = 'sm' | 'md' | 'lg';
export type ListSpacing = 'compact' | 'normal' | 'loose';

export interface ListProps extends HTMLAttributes<HTMLUListElement | HTMLOListElement> {
  variant?: ListVariant;
  size?: ListSize;
  spacing?: ListSpacing;
  children: ReactNode;
}

export const List = forwardRef<HTMLUListElement | HTMLOListElement, ListProps>(
  (
    { variant = 'unordered', size = 'md', spacing = 'normal', className, children, ...props },
    ref
  ) => {
    const Component = variant === 'ordered' ? 'ol' : 'ul';

    return (
      <Component
        ref={ref as React.RefObject<HTMLUListElement & HTMLOListElement>}
        className={cn(
          'ds-list',
          `ds-list--${variant}`,
          `ds-list--${size}`,
          `ds-list--${spacing}`,
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

List.displayName = 'List';

export interface ListItemProps extends LiHTMLAttributes<HTMLLIElement> {
  icon?: ReactNode;
  children: ReactNode;
}

export const ListItem = forwardRef<HTMLLIElement, ListItemProps>(
  ({ icon, className, children, ...props }, ref) => (
    <li
      ref={ref}
      className={cn('ds-list__item', icon ? 'ds-list__item--has-icon' : '', className)}
      {...props}
    >
      {icon && <span className="ds-list__icon">{icon}</span>}
      <span className="ds-list__content">{children}</span>
    </li>
  )
);

ListItem.displayName = 'ListItem';

export interface DescriptionListProps extends HTMLAttributes<HTMLDListElement> {
  horizontal?: boolean;
  children: ReactNode;
}

export const DescriptionList = forwardRef<HTMLDListElement, DescriptionListProps>(
  ({ horizontal = false, className, children, ...props }, ref) => (
    <dl
      ref={ref}
      className={cn(
        'ds-description-list',
        horizontal && 'ds-description-list--horizontal',
        className
      )}
      {...props}
    >
      {children}
    </dl>
  )
);

DescriptionList.displayName = 'DescriptionList';

export interface DescriptionTermProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

export const DescriptionTerm = forwardRef<HTMLElement, DescriptionTermProps>(
  ({ className, children, ...props }, ref) => (
    <dt ref={ref} className={cn('ds-description-list__term', className)} {...props}>
      {children}
    </dt>
  )
);

DescriptionTerm.displayName = 'DescriptionTerm';

export interface DescriptionDetailsProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

export const DescriptionDetails = forwardRef<HTMLElement, DescriptionDetailsProps>(
  ({ className, children, ...props }, ref) => (
    <dd ref={ref} className={cn('ds-description-list__details', className)} {...props}>
      {children}
    </dd>
  )
);

DescriptionDetails.displayName = 'DescriptionDetails';
