import type { Meta, StoryObj } from '@storybook/react';
import { Tag, HStack } from '@designsystem/core';

const meta = {
  title: 'Komponenter/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'success', 'warning', 'error'],
      description: 'Visuell variant',
    },
    removable: {
      control: 'boolean',
      description: 'Kan fjernes',
    },
    children: {
      control: 'text',
      description: 'Innhold',
    },
  },
  args: {
    variant: 'default',
    removable: false,
    children: 'Tag',
  },
} satisfies Meta<typeof Tag>;

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

export const Removable: Story = {
  args: {
    children: 'Removable',
    removable: true,
  },
};

export const AllVariants: Story = {
  render: () => (
    <HStack gap={2}>
      <Tag>Default</Tag>
      <Tag variant="primary">Primary</Tag>
      <Tag variant="success">Success</Tag>
      <Tag variant="warning">Warning</Tag>
      <Tag variant="error">Error</Tag>
    </HStack>
  ),
};

export const RemovableTags: Story = {
  render: () => (
    <HStack gap={2}>
      <Tag removable onRemove={() => {}}>
        React
      </Tag>
      <Tag variant="primary" removable onRemove={() => {}}>
        TypeScript
      </Tag>
      <Tag variant="success" removable onRemove={() => {}}>
        Node.js
      </Tag>
    </HStack>
  ),
};
