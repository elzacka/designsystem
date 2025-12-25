import { forwardRef, type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../utils/cn';
import './Grid.css';

export type GridGap = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12;
export type GridColumns = 1 | 2 | 3 | 4 | 5 | 6 | 12 | 'auto';

export interface GridProps extends HTMLAttributes<HTMLDivElement> {
  columns?: GridColumns;
  gap?: GridGap;
  gapX?: GridGap;
  gapY?: GridGap;
  children?: ReactNode;
}

export const Grid = forwardRef<HTMLDivElement, GridProps>(
  ({ columns = 'auto', gap, gapX, gapY, className, style, children, ...props }, ref) => {
    const customStyle = {
      ...style,
      '--grid-cols': columns === 'auto' ? 'auto' : columns,
      '--grid-gap': gap !== undefined ? `var(--space-${gap})` : undefined,
      '--grid-gap-x': gapX !== undefined ? `var(--space-${gapX})` : undefined,
      '--grid-gap-y': gapY !== undefined ? `var(--space-${gapY})` : undefined,
    } as React.CSSProperties;

    return (
      <div
        ref={ref}
        className={cn('ds-grid', columns !== 'auto' && 'ds-grid--fixed', className)}
        style={customStyle}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Grid.displayName = 'Grid';

export interface GridItemProps extends HTMLAttributes<HTMLDivElement> {
  span?: 1 | 2 | 3 | 4 | 5 | 6 | 12 | 'full';
  children?: ReactNode;
}

export const GridItem = forwardRef<HTMLDivElement, GridItemProps>(
  ({ span, className, style, children, ...props }, ref) => {
    const customStyle = {
      ...style,
      '--grid-span': span === 'full' ? '1 / -1' : span ? `span ${span}` : undefined,
    } as React.CSSProperties;

    return (
      <div
        ref={ref}
        className={cn('ds-grid-item', span && 'ds-grid-item--span', className)}
        style={customStyle}
        {...props}
      >
        {children}
      </div>
    );
  }
);

GridItem.displayName = 'GridItem';
