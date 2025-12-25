import { forwardRef, type ElementType, type ReactNode } from 'react';
import type { PolymorphicComponentPropWithRef, PolymorphicRef } from '../../utils/polymorphic';
import { cn } from '../../utils/cn';
import './Stack.css';

export type StackGap = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12;
export type StackAlign = 'start' | 'center' | 'end' | 'stretch' | 'baseline';
export type StackJustify = 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';

type BaseStackProps = {
  gap?: StackGap;
  align?: StackAlign;
  justify?: StackJustify;
  wrap?: boolean;
  children?: ReactNode;
};

type HStackProps<C extends ElementType> = PolymorphicComponentPropWithRef<C, BaseStackProps>;
type VStackProps<C extends ElementType> = PolymorphicComponentPropWithRef<C, BaseStackProps>;

type StackComponent = <C extends ElementType = 'div'>(props: HStackProps<C>) => ReactNode;

export const HStack: StackComponent = forwardRef(
  <C extends ElementType = 'div'>(
    {
      as,
      gap = 4,
      align = 'center',
      justify = 'start',
      wrap = false,
      className,
      style,
      children,
      ...props
    }: HStackProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const Component = as || 'div';

    return (
      <Component
        ref={ref}
        className={cn(
          'ds-stack ds-stack--h',
          `ds-stack--align-${align}`,
          `ds-stack--justify-${justify}`,
          wrap && 'ds-stack--wrap',
          className
        )}
        style={{ '--stack-gap': `var(--space-${gap})`, ...style } as React.CSSProperties}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

(HStack as { displayName?: string }).displayName = 'HStack';

export const VStack: StackComponent = forwardRef(
  <C extends ElementType = 'div'>(
    {
      as,
      gap = 4,
      align = 'stretch',
      justify = 'start',
      wrap = false,
      className,
      style,
      children,
      ...props
    }: VStackProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const Component = as || 'div';

    return (
      <Component
        ref={ref}
        className={cn(
          'ds-stack ds-stack--v',
          `ds-stack--align-${align}`,
          `ds-stack--justify-${justify}`,
          wrap && 'ds-stack--wrap',
          className
        )}
        style={{ '--stack-gap': `var(--space-${gap})`, ...style } as React.CSSProperties}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

(VStack as { displayName?: string }).displayName = 'VStack';
