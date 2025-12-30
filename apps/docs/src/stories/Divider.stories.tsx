import type { Meta, StoryObj } from '@storybook/react';
import { Divider, Paragraph, VStack, HStack } from '@designsystem/core';

const meta = {
  title: 'Komponenter/Divider',
  component: Divider,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'radio',
      options: ['horizontal', 'vertical'],
      description: 'Orientering',
    },
  },
  args: {
    orientation: 'horizontal',
  },
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    orientation: 'horizontal',
  },
};

export const Horizontal: Story = {
  render: () => (
    <VStack gap={4}>
      <Paragraph>Innhold over skillelinje</Paragraph>
      <Divider />
      <Paragraph>Innhold under skillelinje</Paragraph>
    </VStack>
  ),
};

export const Vertical: Story = {
  render: () => (
    <HStack gap={4} style={{ height: '100px' }}>
      <span>Venstre</span>
      <Divider orientation="vertical" />
      <span>Høyre</span>
    </HStack>
  ),
};

export const AllOrientations: Story = {
  render: () => (
    <VStack gap={4}>
      <Paragraph>Innhold over skillelinje</Paragraph>
      <Divider />
      <Paragraph>Innhold under skillelinje</Paragraph>
      <HStack gap={4} style={{ height: '100px' }}>
        <span>Venstre</span>
        <Divider orientation="vertical" />
        <span>Høyre</span>
      </HStack>
    </VStack>
  ),
};
