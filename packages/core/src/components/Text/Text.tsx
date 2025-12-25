import { forwardRef, type ElementType, type ReactNode } from 'react';
import type { PolymorphicComponentPropWithRef, PolymorphicRef } from '../../utils/polymorphic';
import { cn } from '../../utils/cn';
import './Text.css';

export type TextVariant =
  | 'display-lg'
  | 'display-md'
  | 'display-sm'
  | 'heading-xl'
  | 'heading-lg'
  | 'heading-md'
  | 'heading-sm'
  | 'heading-xs'
  | 'body-lg'
  | 'body-md'
  | 'body-sm'
  | 'label-lg'
  | 'label-md'
  | 'label-sm'
  | 'caption';

export type TextWeight = 'regular' | 'medium' | 'semibold' | 'bold';
export type TextAlign = 'left' | 'center' | 'right';

type TextProps<C extends ElementType> = PolymorphicComponentPropWithRef<
  C,
  {
    variant?: TextVariant;
    weight?: TextWeight;
    align?: TextAlign;
    truncate?: boolean;
    children: ReactNode;
  }
>;

type TextComponent = <C extends ElementType = 'p'>(
  props: TextProps<C>
) => ReactNode;

export const Text: TextComponent = forwardRef(
  <C extends ElementType = 'p'>(
    {
      as,
      variant = 'body-md',
      weight,
      align,
      truncate = false,
      className,
      children,
      ...props
    }: TextProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const Component = as || getDefaultElement(variant);

    return (
      <Component
        ref={ref}
        className={cn(
          'ds-text',
          `ds-text--${variant}`,
          weight && `ds-text--${weight}`,
          align && `ds-text--${align}`,
          truncate && 'ds-text--truncate',
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

function getDefaultElement(variant: TextVariant): ElementType {
  if (variant.startsWith('display')) return 'h1';
  if (variant === 'heading-xl') return 'h1';
  if (variant === 'heading-lg') return 'h2';
  if (variant === 'heading-md') return 'h3';
  if (variant === 'heading-sm') return 'h4';
  if (variant === 'heading-xs') return 'h5';
  if (variant.startsWith('label')) return 'span';
  if (variant === 'caption') return 'span';
  return 'p';
}

(Text as { displayName?: string }).displayName = 'Text';

// Convenience components
export const Heading = forwardRef<
  HTMLHeadingElement,
  Omit<TextProps<'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'>, 'variant'> & {
    level?: 1 | 2 | 3 | 4 | 5 | 6;
    size?: 'xl' | 'lg' | 'md' | 'sm' | 'xs';
  }
>(({ level = 2, size, ...props }, ref) => {
  const Component = `h${level}` as const;
  const variant = size ? `heading-${size}` : getHeadingVariant(level);
  return <Text ref={ref} as={Component} variant={variant as TextVariant} {...props} />;
});

Heading.displayName = 'Heading';

function getHeadingVariant(level: number): TextVariant {
  const map: Record<number, TextVariant> = {
    1: 'heading-xl',
    2: 'heading-lg',
    3: 'heading-md',
    4: 'heading-sm',
    5: 'heading-xs',
    6: 'heading-xs',
  };
  return map[level] || 'heading-md';
}

export const Paragraph = forwardRef<HTMLParagraphElement, Omit<TextProps<'p'>, 'variant'> & { size?: 'lg' | 'md' | 'sm' }>(
  ({ size = 'md', ...props }, ref) => (
    <Text ref={ref} as="p" variant={`body-${size}` as TextVariant} {...props} />
  )
);

Paragraph.displayName = 'Paragraph';

export const Label = forwardRef<HTMLLabelElement, Omit<TextProps<'label'>, 'variant'> & { size?: 'lg' | 'md' | 'sm' }>(
  ({ size = 'md', ...props }, ref) => (
    <Text ref={ref} as="label" variant={`label-${size}` as TextVariant} {...props} />
  )
);

Label.displayName = 'Label';
