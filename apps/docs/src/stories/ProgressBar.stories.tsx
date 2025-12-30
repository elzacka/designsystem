import type { Meta, StoryObj } from '@storybook/react';
import { ProgressBar, VStack } from '@designsystem/core';

const meta = {
  title: 'Komponenter/ProgressBar',
  component: ProgressBar,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100 },
      description: 'Fremdriftsverdi (0-100)',
    },
    variant: {
      control: 'select',
      options: ['default', 'success', 'warning', 'error'],
      description: 'Visuell variant',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Størrelse',
    },
    label: {
      control: 'text',
      description: 'Ledetekst',
    },
    showValue: {
      control: 'boolean',
      description: 'Vis prosentverdi',
    },
    indeterminate: {
      control: 'boolean',
      description: 'Ubestemt fremdrift',
    },
  },
  args: {
    value: 50,
    variant: 'default',
    size: 'md',
    showValue: false,
    indeterminate: false,
  },
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 50,
    label: 'Fremdrift',
  },
};

export const WithValue: Story = {
  args: {
    value: 75,
    label: 'Last ned',
    showValue: true,
  },
};

export const Success: Story = {
  args: {
    value: 100,
    variant: 'success',
  },
};

export const Warning: Story = {
  args: {
    value: 75,
    variant: 'warning',
  },
};

export const Error: Story = {
  args: {
    value: 25,
    variant: 'error',
  },
};

export const Small: Story = {
  args: {
    value: 50,
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    value: 50,
    size: 'lg',
  },
};

export const Indeterminate: Story = {
  args: {
    indeterminate: true,
    label: 'Laster...',
  },
};

export const AllVariants: Story = {
  render: () => (
    <VStack gap={4} style={{ maxWidth: '400px' }}>
      <ProgressBar value={25} label="Default" showValue />
      <ProgressBar value={50} variant="success" showValue />
      <ProgressBar value={75} variant="warning" showValue />
      <ProgressBar value={90} variant="error" showValue />
      <ProgressBar indeterminate label="Laster..." />
    </VStack>
  ),
};
