import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip, Button, HStack } from '@designsystem/core';

const meta = {
  title: 'Komponenter/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    content: {
      control: 'text',
      description: 'Tooltip-innhold',
    },
    position: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
      description: 'Posisjon',
    },
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Tooltip content="Dette er en tooltip" position="top">
      <Button>Hover meg</Button>
    </Tooltip>
  ),
};

export const Top: Story = {
  render: () => (
    <Tooltip content="Tooltip over" position="top">
      <Button>Topp</Button>
    </Tooltip>
  ),
};

export const Bottom: Story = {
  render: () => (
    <Tooltip content="Tooltip under" position="bottom">
      <Button>Bunn</Button>
    </Tooltip>
  ),
};

export const Left: Story = {
  render: () => (
    <Tooltip content="Tooltip til venstre" position="left">
      <Button>Venstre</Button>
    </Tooltip>
  ),
};

export const Right: Story = {
  render: () => (
    <Tooltip content="Tooltip til høyre" position="right">
      <Button>Høyre</Button>
    </Tooltip>
  ),
};

export const AllPositions: Story = {
  render: () => (
    <HStack gap={8} style={{ padding: '3rem' }}>
      <Tooltip content="Tooltip over" position="top">
        <Button>Topp</Button>
      </Tooltip>
      <Tooltip content="Tooltip under" position="bottom">
        <Button>Bunn</Button>
      </Tooltip>
      <Tooltip content="Tooltip til venstre" position="left">
        <Button>Venstre</Button>
      </Tooltip>
      <Tooltip content="Tooltip til høyre" position="right">
        <Button>Høyre</Button>
      </Tooltip>
    </HStack>
  ),
};
