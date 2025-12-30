import type { Meta, StoryObj } from '@storybook/react';
import { Badge, HStack } from '@designsystem/core';

const meta = {
  title: 'Komponenter/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'success', 'warning', 'error', 'info'],
      description: 'Visuell variant',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Størrelse',
    },
    dot: {
      control: 'boolean',
      description: 'Vis statusindikator',
    },
    children: {
      control: 'text',
      description: 'Innhold',
    },
  },
  args: {
    variant: 'default',
    size: 'md',
    dot: false,
    children: 'Badge',
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Default',
  },
};

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    children: 'Success',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    children: 'Warning',
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    children: 'Error',
  },
};

export const Info: Story = {
  args: {
    variant: 'info',
    children: 'Info',
  },
};

export const WithDot: Story = {
  args: {
    variant: 'success',
    dot: true,
    children: 'Online',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Small',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Large',
  },
};

export const AllVariants: Story = {
  render: () => (
    <HStack gap={2}>
      <Badge>Default</Badge>
      <Badge variant="primary">Primary</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="error">Error</Badge>
      <Badge variant="info">Info</Badge>
    </HStack>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <HStack gap={2}>
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Large</Badge>
    </HStack>
  ),
};
