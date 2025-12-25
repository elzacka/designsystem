import React, { forwardRef, type ElementType, type ReactNode } from 'react';
import type { PolymorphicComponentPropWithRef } from '../../utils/polymorphic';
import { cn } from '../../utils/cn';
import './Box.css';

export type BoxPadding = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12;
export type BoxRadius = 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
export type BoxShadow = 'none' | 'sm' | 'md' | 'lg' | 'xl';
export type BoxBackground = 'default' | 'subtle' | 'surface' | 'raised';

type BoxProps<C extends ElementType> = PolymorphicComponentPropWithRef<
  C,
  {
    padding?: BoxPadding;
    paddingX?: BoxPadding;
    paddingY?: BoxPadding;
    paddingTop?: BoxPadding;
    paddingRight?: BoxPadding;
    paddingBottom?: BoxPadding;
    paddingLeft?: BoxPadding;
    radius?: BoxRadius;
    shadow?: BoxShadow;
    background?: BoxBackground;
    border?: boolean;
    children?: ReactNode;
  }
>;

type BoxComponent = <C extends ElementType = 'div'>(props: BoxProps<C>) => ReactNode;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Box: BoxComponent = forwardRef<any, any>(
  <C extends ElementType = 'div'>(
    {
      as,
      padding,
      paddingX,
      paddingY,
      paddingTop,
      paddingRight,
      paddingBottom,
      paddingLeft,
      radius,
      shadow,
      background,
      border = false,
      className,
      style,
      children,
      ...props
    }: BoxProps<C>,
    ref: React.Ref<Element>
  ) => {
    const Component = as || 'div';

    const customStyle = {
      ...style,
      '--box-p': padding !== undefined ? `var(--space-${padding})` : undefined,
      '--box-px': paddingX !== undefined ? `var(--space-${paddingX})` : undefined,
      '--box-py': paddingY !== undefined ? `var(--space-${paddingY})` : undefined,
      '--box-pt': paddingTop !== undefined ? `var(--space-${paddingTop})` : undefined,
      '--box-pr': paddingRight !== undefined ? `var(--space-${paddingRight})` : undefined,
      '--box-pb': paddingBottom !== undefined ? `var(--space-${paddingBottom})` : undefined,
      '--box-pl': paddingLeft !== undefined ? `var(--space-${paddingLeft})` : undefined,
    } as React.CSSProperties;

    return (
      <Component
        ref={ref}
        className={cn(
          'ds-box',
          radius && `ds-box--radius-${radius}`,
          shadow && shadow !== 'none' && `ds-box--shadow-${shadow}`,
          background && `ds-box--bg-${background}`,
          border && 'ds-box--border',
          className
        )}
        style={customStyle}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

(Box as { displayName?: string }).displayName = 'Box';
