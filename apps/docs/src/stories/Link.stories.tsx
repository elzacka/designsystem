import type { Meta, StoryObj } from '@storybook/react';
import { Link, VStack } from '@designsystem/core';

const meta = {
  title: 'Komponenter/Link',
  component: Link,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'subtle', 'neutral'],
      description: 'Visuell variant',
    },
    external: {
      control: 'boolean',
      description: 'Ekstern lenke (åpnes i ny fane)',
    },
    href: {
      control: 'text',
      description: 'URL',
    },
    children: {
      control: 'text',
      description: 'Lenketekst',
    },
  },
  args: {
    variant: 'default',
    external: false,
    href: '#',
    children: 'Lenke',
  },
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Default Link',
    href: '#',
  },
};

export const Subtle: Story = {
  args: {
    children: 'Subtle Link',
    variant: 'subtle',
    href: '#',
  },
};

export const Neutral: Story = {
  args: {
    children: 'Neutral Link',
    variant: 'neutral',
    href: '#',
  },
};

export const External: Story = {
  args: {
    children: 'External Link',
    href: 'https://example.com',
    external: true,
  },
};

export const AllVariants: Story = {
  render: () => (
    <VStack gap={3} align="start">
      <Link href="#">Default Link</Link>
      <Link href="#" variant="subtle">
        Subtle Link
      </Link>
      <Link href="#" variant="neutral">
        Neutral Link
      </Link>
      <Link href="https://example.com" external>
        External Link
      </Link>
    </VStack>
  ),
};
