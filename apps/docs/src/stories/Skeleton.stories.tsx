import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton, VStack, HStack } from '@designsystem/core';

const meta = {
  title: 'Komponenter/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['text', 'circular', 'rectangular'],
      description: 'Form på skeleton',
    },
    width: {
      control: 'text',
      description: 'Bredde (px eller %)',
    },
    height: {
      control: 'text',
      description: 'Høyde (px)',
    },
  },
  args: {
    variant: 'text',
    width: '100%',
  },
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'text',
    width: '200px',
  },
};

export const Text: Story = {
  args: {
    variant: 'text',
    width: '100%',
  },
};

export const Circular: Story = {
  args: {
    variant: 'circular',
    width: 48,
    height: 48,
  },
};

export const Rectangular: Story = {
  args: {
    variant: 'rectangular',
    width: '100%',
    height: 120,
  },
};

export const CardSkeleton: Story = {
  render: () => (
    <VStack gap={4} style={{ maxWidth: '400px' }}>
      <Skeleton variant="text" width="100%" />
      <Skeleton variant="text" width="80%" />
      <Skeleton variant="text" width="60%" />
      <HStack gap={3}>
        <Skeleton variant="circular" width={48} height={48} />
        <VStack gap={2} style={{ flex: 1 }}>
          <Skeleton variant="text" width="60%" />
          <Skeleton variant="text" width="40%" />
        </VStack>
      </HStack>
      <Skeleton variant="rectangular" width="100%" height={120} />
    </VStack>
  ),
};
