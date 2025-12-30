import type { Meta, StoryObj } from '@storybook/react';
import { Avatar, HStack } from '@designsystem/core';

const meta = {
  title: 'Komponenter/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Størrelse',
    },
    name: {
      control: 'text',
      description: 'Navn (brukes for initialer)',
    },
    src: {
      control: 'text',
      description: 'Bilde-URL',
    },
  },
  args: {
    size: 'md',
    name: 'Ola Nordmann',
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'Ola Nordmann',
    size: 'md',
  },
};

export const ExtraSmall: Story = {
  args: {
    name: 'Ola Nordmann',
    size: 'xs',
  },
};

export const Small: Story = {
  args: {
    name: 'Kari Hansen',
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    name: 'Per Olsen',
    size: 'lg',
  },
};

export const ExtraLarge: Story = {
  args: {
    name: 'Lisa Berg',
    size: 'xl',
  },
};

export const AllSizes: Story = {
  render: () => (
    <HStack gap={3}>
      <Avatar size="xs" name="Ola Nordmann" />
      <Avatar size="sm" name="Kari Hansen" />
      <Avatar size="md" name="Per Olsen" />
      <Avatar size="lg" name="Lisa Berg" />
      <Avatar size="xl" name="Erik Dahl" />
    </HStack>
  ),
};
