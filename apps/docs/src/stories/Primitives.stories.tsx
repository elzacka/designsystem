import type { Meta, StoryObj } from '@storybook/react';
import {
  Text,
  Heading,
  Paragraph,
  Spinner,
  Link,
  Divider,
  VStack,
  HStack,
} from '@designsystem/core';

export default {
  title: 'Komponenter/Primitiver/Typografi',
} satisfies Meta;

export const TextVariants: StoryObj = {
  render: () => (
    <VStack gap={4} align="start">
      <Text variant="display-lg">Display Large</Text>
      <Text variant="display-md">Display Medium</Text>
      <Text variant="heading-xl">Heading XL</Text>
      <Text variant="heading-lg">Heading Large</Text>
      <Text variant="heading-md">Heading Medium</Text>
      <Text variant="heading-sm">Heading Small</Text>
      <Text variant="body-lg">Body Large - Lorem ipsum dolor sit amet</Text>
      <Text variant="body-md">Body Medium - Lorem ipsum dolor sit amet</Text>
      <Text variant="body-sm">Body Small - Lorem ipsum dolor sit amet</Text>
      <Text variant="label-md">Label Medium</Text>
      <Text variant="caption">Caption text</Text>
    </VStack>
  ),
};

export const HeadingLevels: StoryObj = {
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

export const SpinnerSizes: StoryObj = {
  name: 'Spinner',
  render: () => (
    <HStack gap={4}>
      <Spinner size="xs" />
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
      <Spinner size="xl" />
    </HStack>
  ),
};

export const LinkVariants: StoryObj = {
  name: 'Link',
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

export const DividerExample: StoryObj = {
  name: 'Divider',
  render: () => (
    <VStack gap={4}>
      <Paragraph>Content above divider</Paragraph>
      <Divider />
      <Paragraph>Content below divider</Paragraph>
      <HStack gap={4} style={{ height: '100px' }}>
        <span>Left</span>
        <Divider orientation="vertical" />
        <span>Right</span>
      </HStack>
    </VStack>
  ),
};
