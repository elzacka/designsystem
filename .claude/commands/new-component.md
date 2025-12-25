# Create New Component

Create a new component called `$ARGUMENTS` following these steps:

## 1. Component File Structure

Create the following files in `packages/core/src/components/$ARGUMENTS/`:

### $ARGUMENTS.tsx

```tsx
import { forwardRef, type ComponentPropsWithoutRef, type ReactNode } from 'react';
import { cn } from '../../utils/cn';
import './$ARGUMENTS.css';

export interface $ARGUMENTSProps extends ComponentPropsWithoutRef<'div'> {
  /** Component children */
  children?: ReactNode;
  /** Visual variant */
  variant?: 'default' | 'secondary';
}

export const $ARGUMENTS = forwardRef<HTMLDivElement, $ARGUMENTSProps>(
  ({ children, variant = 'default', className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('ds-$ARGUMENTS_LOWERCASE', `ds-$ARGUMENTS_LOWERCASE--${variant}`, className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

$ARGUMENTS.displayName = '$ARGUMENTS';
```

### $ARGUMENTS.css

```css
.ds-$ARGUMENTS_LOWERCASE {
  /* Layout */
  display: flex;
  align-items: center;

  /* Spacing */
  padding: var(--space-4);
  gap: var(--space-2);

  /* Typography */
  font-family: var(--font-sans);
  font-size: var(--text-base);

  /* Colors */
  color: var(--color-foreground);
  background: var(--color-background);

  /* Border */
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);

  /* Transitions */
  transition: all var(--duration-fast) var(--ease-out);
}

.ds-$ARGUMENTS_LOWERCASE--secondary {
  background: var(--color-muted);
}
```

### index.ts

```ts
export { $ARGUMENTS } from './$ARGUMENTS';
export type { $ARGUMENTSProps } from './$ARGUMENTS';
```

## 2. Export from Core Package

Add to `packages/core/src/index.ts`:

```ts
export * from './components/$ARGUMENTS';
```

## 3. Create Test File

Create `packages/core/src/components/$ARGUMENTS/$ARGUMENTS.test.tsx`:

```tsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { $ARGUMENTS } from './$ARGUMENTS';

expect.extend(toHaveNoViolations);

describe('$ARGUMENTS', () => {
  it('renders children correctly', () => {
    render(<$ARGUMENTS>Content</$ARGUMENTS>);
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('applies default variant', () => {
    const { container } = render(<$ARGUMENTS>Default</$ARGUMENTS>);
    expect(container.firstChild).toHaveClass('ds-$ARGUMENTS_LOWERCASE--default');
  });

  it('applies custom className', () => {
    const { container } = render(<$ARGUMENTS className="custom">Custom</$ARGUMENTS>);
    expect(container.firstChild).toHaveClass('custom');
  });

  it('forwards ref', () => {
    const ref = { current: null };
    render(<$ARGUMENTS ref={ref}>Ref</$ARGUMENTS>);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<$ARGUMENTS>Accessible</$ARGUMENTS>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
```

## 4. Create Storybook Story

Create `apps/docs/src/stories/$ARGUMENTS.stories.tsx`:

```tsx
import type { Meta, StoryObj } from '@storybook/react';
import { $ARGUMENTS } from '@designsystem/core';

const meta = {
  title: 'Components/$ARGUMENTS',
  component: $ARGUMENTS,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary'],
    },
  },
} satisfies Meta<typeof $ARGUMENTS>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '$ARGUMENTS content',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary variant',
    variant: 'secondary',
  },
};
```

## 5. Verification

After creating all files, run:

```bash
pnpm typecheck
pnpm lint
pnpm test:run
pnpm build
```

Replace `$ARGUMENTS_LOWERCASE` with the lowercase version of the component name (e.g., `Button` -> `button`).
