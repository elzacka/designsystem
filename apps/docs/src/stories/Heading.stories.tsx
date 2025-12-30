import type { Meta, StoryObj } from '@storybook/react';
import { Heading, VStack } from '@designsystem/core';

const meta = {
  title: 'Komponenter/Heading',
  component: Heading,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    level: {
      control: 'select',
      options: [1, 2, 3, 4, 5],
      description: 'Overskriftsnivå (h1-h5)',
    },
    children: {
      control: 'text',
      description: 'Overskriftstekst',
    },
  },
  args: {
    level: 1,
    children: 'Overskrift',
  },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    level: 1,
    children: 'Heading 1',
  },
};

export const H1: Story = {
  args: {
    level: 1,
    children: 'Heading 1',
  },
};

export const H2: Story = {
  args: {
    level: 2,
    children: 'Heading 2',
  },
};

export const H3: Story = {
  args: {
    level: 3,
    children: 'Heading 3',
  },
};

export const H4: Story = {
  args: {
    level: 4,
    children: 'Heading 4',
  },
};

export const H5: Story = {
  args: {
    level: 5,
    children: 'Heading 5',
  },
};

export const AllLevels: Story = {
  render: () => (
    <VStack gap={3} align="start">
      <Heading level={1}>Heading 1</Heading>
      <Heading level={2}>Heading 2</Heading>
      <Heading level={3}>Heading 3</Heading>
      <Heading level={4}>Heading 4</Heading>
      <Heading level={5}>Heading 5</Heading>
    </VStack>
  ),
};
