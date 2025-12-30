import type { Meta, StoryObj } from '@storybook/react';
import { Box, HStack, VStack, Text } from '@designsystem/core';

const meta: Meta<typeof VStack> = {
  title: 'Komponenter/Stack',
  component: VStack,
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <VStack gap={6}>
      <div>
        <Text variant="label-md">HStack (horizontal)</Text>
        <HStack gap={3} style={{ marginTop: '0.5rem' }}>
          <Box padding={3} background="subtle" radius="md">
            <Text>1</Text>
          </Box>
          <Box padding={3} background="subtle" radius="md">
            <Text>2</Text>
          </Box>
          <Box padding={3} background="subtle" radius="md">
            <Text>3</Text>
          </Box>
        </HStack>
      </div>
      <div>
        <Text variant="label-md">VStack (vertical)</Text>
        <VStack gap={2} align="start" style={{ marginTop: '0.5rem' }}>
          <Box padding={3} background="subtle" radius="md">
            <Text>Item 1</Text>
          </Box>
          <Box padding={3} background="subtle" radius="md">
            <Text>Item 2</Text>
          </Box>
          <Box padding={3} background="subtle" radius="md">
            <Text>Item 3</Text>
          </Box>
        </VStack>
      </div>
      <div>
        <Text variant="label-md">HStack with justify=&quot;between&quot;</Text>
        <HStack gap={3} justify="between" style={{ marginTop: '0.5rem' }}>
          <Box padding={3} background="subtle" radius="md">
            <Text>Left</Text>
          </Box>
          <Box padding={3} background="subtle" radius="md">
            <Text>Right</Text>
          </Box>
        </HStack>
      </div>
    </VStack>
  ),
};
