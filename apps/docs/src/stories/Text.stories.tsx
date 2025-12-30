import type { Meta, StoryObj } from '@storybook/react';
import { Text, VStack } from '@designsystem/core';

const meta = {
  title: 'Komponenter/Text',
  component: Text,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'display-lg',
        'display-md',
        'heading-xl',
        'heading-lg',
        'heading-md',
        'heading-sm',
        'body-lg',
        'body-md',
        'body-sm',
        'label-md',
        'caption',
      ],
      description: 'Tekstvariant',
    },
    children: {
      control: 'text',
      description: 'Tekstinnhold',
    },
  },
  args: {
    variant: 'body-md',
    children: 'Lorem ipsum dolor sit amet',
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'body-md',
    children: 'Dette er body medium tekst.',
  },
};

export const DisplayLarge: Story = {
  args: {
    variant: 'display-lg',
    children: 'Display Large',
  },
};

export const DisplayMedium: Story = {
  args: {
    variant: 'display-md',
    children: 'Display Medium',
  },
};

export const HeadingXL: Story = {
  args: {
    variant: 'heading-xl',
    children: 'Heading XL',
  },
};

export const HeadingLarge: Story = {
  args: {
    variant: 'heading-lg',
    children: 'Heading Large',
  },
};

export const HeadingMedium: Story = {
  args: {
    variant: 'heading-md',
    children: 'Heading Medium',
  },
};

export const HeadingSmall: Story = {
  args: {
    variant: 'heading-sm',
    children: 'Heading Small',
  },
};

export const BodyLarge: Story = {
  args: {
    variant: 'body-lg',
    children: 'Body Large - Lorem ipsum dolor sit amet',
  },
};

export const BodySmall: Story = {
  args: {
    variant: 'body-sm',
    children: 'Body Small - Lorem ipsum dolor sit amet',
  },
};

export const Label: Story = {
  args: {
    variant: 'label-md',
    children: 'Label Medium',
  },
};

export const Caption: Story = {
  args: {
    variant: 'caption',
    children: 'Caption text',
  },
};

export const AllVariants: Story = {
  render: () => (
    <VStack gap={4} align="start">
      <Text variant="display-lg">Display Large</Text>
      <Text variant="display-md">Display Medium</Text>
      <Text variant="heading-xl">Heading XL</Text>
      <Text variant="heading-lg">Heading Large</Text>
      <Text variant="heading-md">Heading Medium</Text>
      <Text variant="heading-sm">Heading Small</Text>
      <Text variant="body-lg">Body Large</Text>
      <Text variant="body-md">Body Medium</Text>
      <Text variant="body-sm">Body Small</Text>
      <Text variant="label-md">Label Medium</Text>
      <Text variant="caption">Caption</Text>
    </VStack>
  ),
};
