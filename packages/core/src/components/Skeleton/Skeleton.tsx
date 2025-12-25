import { forwardRef, type HTMLAttributes } from 'react';
import { cn } from '../../utils/cn';
import './Skeleton.css';

export type SkeletonVariant = 'text' | 'circular' | 'rectangular';

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  variant?: SkeletonVariant;
  width?: string | number;
  height?: string | number;
  animation?: 'pulse' | 'wave' | 'none';
}

export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
  ({ variant = 'text', width, height, animation = 'pulse', className, style, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'ds-skeleton',
          `ds-skeleton--${variant}`,
          animation !== 'none' && `ds-skeleton--${animation}`,
          className
        )}
        style={{
          width: typeof width === 'number' ? `${width}px` : width,
          height: typeof height === 'number' ? `${height}px` : height,
          ...style,
        }}
        aria-hidden="true"
        {...props}
      />
    );
  }
);

Skeleton.displayName = 'Skeleton';
