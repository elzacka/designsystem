import type { Meta, StoryObj } from '@storybook/react';
import { Box, VStack, Text } from '@designsystem/core';

const meta: Meta<typeof Box> = {
  title: 'Komponenter/Box',
  component: Box,
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <VStack gap={4}>
      <Box padding={4} background="subtle" radius="md">
        <Text>Subtle background with padding</Text>
      </Box>
      <Box padding={4} background="raised" radius="lg">
        <Text>Raised background (with shadow)</Text>
      </Box>
      <Box padding={4} border radius="md">
        <Text>With border</Text>
      </Box>
      <Box paddingX={6} paddingY={3} background="surface" radius="xl">
        <Text>Custom padding X and Y</Text>
      </Box>
    </VStack>
  ),
};
